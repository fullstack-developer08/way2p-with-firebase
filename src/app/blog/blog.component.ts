import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from '../store';
import { Observable, Subject } from 'rxjs';
import { AppStateService } from '../store/app-state.service';
import { dispatchBlogIdForEdit, dispatchBlogIdForDelete } from '../store/actions/blog.actions';
import { Router } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { DomSanitizer } from '@angular/platform-browser';

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
    this.router.navigate(['/admin'])
  }

  initDeleteBlog(id) {
    this.store.dispatch(dispatchBlogIdForDelete(id));
    this.router.navigate(['/admin'])
  }

  ngOnDestroy() {
    this.ngDestroyed$.next();
  }
}
