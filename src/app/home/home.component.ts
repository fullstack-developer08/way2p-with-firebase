import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { AppState } from '../store';
import { takeUntil } from 'rxjs/operators';
import { FirebaseService } from '../common/services/firebase.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: []
})
export class HomeComponent implements OnInit {
  admin$: Observable<any>;
  isAdmin: boolean;
  public ngDestroyed$ = new Subject();
  latestBlogs = [];
  backendBlogs = [];
  frontendBlogs = [];
  
  constructor(
    private store: Store<AppState>,
    private firebaseService: FirebaseService
  ) { 
    this.admin$ = this.store.pipe(select('admin'));
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

    this.firebaseService.getArticleByType("latest").get()
    .pipe(takeUntil(this.ngDestroyed$))
    .subscribe(blogs => {
      if(blogs.docs.length > 0) {
        this.latestBlogs = [];
        blogs.forEach(data => {
          this.latestBlogs.push(data.data());
        });
      }
    });

    this.firebaseService.getArticleByType("backend").get()
    .pipe(takeUntil(this.ngDestroyed$))
    .subscribe(blogs => {
      if(blogs.docs.length > 0) {
        this.backendBlogs = [];
        blogs.forEach(data => {
          this.backendBlogs.push(data.data());
        });
      }
    });

    this.firebaseService.getArticleByType("frontend").get()
    .pipe(takeUntil(this.ngDestroyed$))
    .subscribe(blogs => {
      if(blogs.docs.length > 0) {
        this.frontendBlogs = [];
        blogs.forEach(data => {
          this.frontendBlogs.push(data.data());
        });
      }
    });

  }

}
