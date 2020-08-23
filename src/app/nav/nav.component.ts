import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from '../store';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { HelperService } from '../common/services/helper.service';
import { dispatchAdminLoginFlag } from '../store/actions/admin.actions';
import { setLoader } from '../store/actions/loader.actions';
import { dispatchAllBlogsForSearch } from '../store/actions/search.actions';
import { FirebaseService } from '../common/services/firebase.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class NavComponent implements OnInit, OnDestroy {
  public selectedTech = '';
  public activeTab = '';
  admin$: Observable<any>;
  isAdmin: boolean;
  public ngDestroyed$ = new Subject();
  search$: Observable<any>;
  blogs = [];
  search;
  searchedMatchedBlogs = [];
  burgerToggle = false;

  constructor(
    private store: Store<AppState>,
    private helperService: HelperService,
    private firebaseService: FirebaseService
  ) { 
    this.admin$ = this.store.pipe(select('admin'));
    this.search$ = this.store.pipe(select('search'));
  }

  ngOnInit(): void {
    this.admin$
      .pipe(takeUntil(this.ngDestroyed$))
      .subscribe(data => {
        if(data && data.isAdminLogin) {
          this.isAdmin = true;
        } else {
          this.isAdmin = false;
        }
      });

    this.search$.subscribe(data => {
      if(data && data.blogs) {
        this.blogs = data.blogs;
      }
    });
  }

  toggle(techName) {
    if(this.selectedTech === techName) {
      this.selectedTech = '';
    } else {
      this.selectedTech = techName;
    }
  }

  adminLogout() {
    this.helperService.deleteCookie('adminLoggedIn');
    this.store.dispatch(dispatchAdminLoginFlag(false));
  }

  onSearch(text) {
    if(text.length < 3) {
      this.searchedMatchedBlogs = [];
    }
    if(this.blogs.length > 0 && text.length > 3) {
      this.searchedMatchedBlogs = [];
      this.searchedMatchedBlogs = this.blogs.filter((b: any) => {
        return (
          b.blogData
            .toUpperCase()
            .indexOf(text.toUpperCase()) > -1
        );
      });
    } 
    if(this.blogs.length === 0) {
      this.store.dispatch(setLoader(true));
      let blogs = [];
      this.firebaseService.getBlogs().subscribe(data => {
        data.forEach(blog => {
          if(blog.payload.doc.data()) blogs.push(blog.payload.doc.data()) ;
        });
        this.store.dispatch(dispatchAllBlogsForSearch(blogs));
        this.store.dispatch(setLoader(false));
      })
    }
  }

  navigate() {
    this.search = '';
    this.searchedMatchedBlogs = [];
  }

  clickBurger() {
    this.burgerToggle = !this.burgerToggle;
  }

  ngOnDestroy() {
    this.ngDestroyed$.next();
  }
}
