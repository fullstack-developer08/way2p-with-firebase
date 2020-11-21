import { Component, OnInit, OnDestroy, ViewEncapsulation, Input, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from '../store';
import { Observable, Subject } from 'rxjs';
import { AppStateService } from '../store/app-state.service';
import { dispatchBlogIdForEdit, dispatchBlogIdForDelete } from '../store/actions/blog.actions';
import { Router } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { BlogDataComponent } from './blog-data/blog-data.component';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: [],
  encapsulation: ViewEncapsulation.Emulated
})
export class BlogComponent implements OnInit, OnDestroy {
  blog$: Observable<any>;
  admin$: Observable<any>;
  blog: any;
  isAdmin: boolean;
  public ngDestroyed$ = new Subject();
  innerHtmlBlogData;

  
  constructor(
    private store: Store<AppState>,
    private appStateSrvc: AppStateService,
    private router: Router
  ) { 
    this.blog$ = this.store.pipe(select('blog'));
    this.admin$ = this.store.pipe(select('admin'));
  }


  ngOnInit(): void {
    this.blog$
      .pipe(takeUntil(this.ngDestroyed$))
      .subscribe((data) => {
        this.blog = data;
        this.innerHtmlBlogData = this.blog.activeBlog && this.blog.activeBlog.blogData;
      });

    this.admin$
      .pipe(takeUntil(this.ngDestroyed$))
      .subscribe(data => {
        if(data && data.isAdminLogin) {
          this.isAdmin = true;
        } else {
          this.isAdmin = false;
        }
      });
  }

  initEditBlog(id) {
    this.store.dispatch(dispatchBlogIdForEdit(id));
    this.router.navigateByUrl('/modify')
  }

  initDeleteBlog(id) {
    this.store.dispatch(dispatchBlogIdForDelete(id));
    this.router.navigateByUrl('/modify')
  }

  ngOnDestroy() {
    this.ngDestroyed$.next();
  }
}
