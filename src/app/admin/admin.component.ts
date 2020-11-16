import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from '../store';
import { Observable, Subject } from 'rxjs';
import { FirebaseService } from '../common/services/firebase.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { dispatchBlogIdForEdit } from '../store/actions/blog.actions';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: []
})
export class AdminComponent implements OnInit, OnDestroy {
  blog$: Observable<any>;
  admin$: Observable<any>;
  blog;
  editForm: FormGroup;
  deleteBlogId;
  isAdmin;
  public ngDestroyed$ = new Subject();
  public articleType: string = '';
  public sort: string = '';
  public blogTech: string = '';
  contacts;

  constructor(
    private store: Store<AppState>,
    private firebaseSrvc: FirebaseService,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.blog$ = this.store.pipe(select('blog'));
    this.admin$ = this.store.pipe(select('admin'));
    this.editForm = this.createEditBlogForm();
   }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.articleType = params['articleType'];
      
      this.sort = params['sort'];
      this.blogTech = params['blogTech'];
      
      (this.articleType || (this.sort && this.blogTech)) && this.editForm.setValue({
        sort: this.sort ? this.sort : '',
        blogName: '',
        blogTech: this.blogTech ? this.blogTech : '',
        blogHref: '',
        blogData: '',
        visible: '',
        articleType: this.articleType ? this.articleType : ''
      });
    });

    this.blog$
      .pipe(takeUntil(this.ngDestroyed$))
      .subscribe((data) => {
        if(data && data.editBlogId) {
          this.getBlogAndSetBlog(data.editBlogId);
        }
        if(data && data.deleteBlogId) {
          this.deleteBlogId = data.deleteBlogId;
          this.getBlogAndSetBlog(data.deleteBlogId);
        }
      });

    this.admin$
      .pipe(takeUntil(this.ngDestroyed$))
      .subscribe(data => {
        if(data && data.isAdminLogin) {
          this.isAdmin = true;
        } else {
          this.isAdmin = false;
          this.router.navigate([''])
        }
      });

      this.firebaseSrvc.getContactInfo().subscribe((allData) => {
        this.contacts = [];
        allData.forEach((data) => {
          const obj = {...data.payload.doc.data(), id: data.payload.doc.id}
          this.contacts.push(obj);
        });
      });
  }


  createEditBlogForm() {
    return this.formBuilder.group({
      sort: [''],
      blogName: [''],
      blogTech: [''],
      blogHref: [''],
      blogData: [''],
      visible: [''],
      articleType: ['']
    })
  }

  onSubmit() {
    const updatedObj = Object.assign({}, this.blog, this.editForm.value);
    updatedObj.updatedAt = new Date();
    if(updatedObj.blogHref[0] !== '/') {
      updatedObj.blogHref = '/' + updatedObj.blogHref;
    }
    if(updatedObj.id) {
      this.firebaseSrvc.editBlog(updatedObj.id, updatedObj).then(() => {
        this.blog = {};
        this.store.dispatch(dispatchBlogIdForEdit(null))
        this.router.navigate([updatedObj.blogHref]);
      });
    } else {
      this.firebaseSrvc.addBlog(updatedObj).then(() => {
        this.router.navigate([updatedObj.blogHref]);
      });
    }
  }

  deleteBlog() {
    if(this.deleteBlogId) {
      confirm('are you sure, you want to delete the blog') && 
      this.firebaseSrvc.deleteBlog(this.deleteBlogId).then(() => {
        this.deleteBlogId = undefined;
        this.router.navigate(['']);
      });
    }
  }

  getBlogAndSetBlog(blogId) {
    this.firebaseSrvc.getBlog(blogId).subscribe(data => {
      this.blog = data.data();
      this.blog = {...this.blog, id: data.id}
      if(!this.blog.visible) {
        this.blog.visible = true;
      }
      if(this.blog) {
        this.editForm.setValue(
          {
            sort: this.blog.sort,
            blogName: this.blog.blogName,
            blogTech: this.blog.blogTech,
            blogHref: this.blog.blogHref,
            blogData: this.blog.blogData,
            visible: this.blog.visible,
            articleType: this.blog.articleType ? this.blog.articleType : '',
          }
        )
      }
    })
  }

  ngOnDestroy() {
    this.ngDestroyed$.next();
  }
}
