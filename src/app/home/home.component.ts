import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { AppState } from '../store';
import { takeUntil } from 'rxjs/operators';
import { FirebaseService } from '../common/services/firebase.service';
import { SeoService } from '../common/services/seo.service';

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
 

  staticFrontEndLinks: any[] = [];
  
  constructor(
    private store: Store<AppState>,
    private firebaseService: FirebaseService,
    private seoService: SeoService,
  ) { 
    this.admin$ = this.store.pipe(select('admin'));
      this.seoService.setTitle('Learn Together - way2programming.com');

      this.staticFrontEndLinks = [
        {
          url: 'schematics-in-angular',
          desc: 'Schematics in Angular'
        },
        {
          url: 'create-schematics-like-angular-cli',
          desc: 'Create Schematics Like Angular CLI'
        },
        {
          url: 'angular-practices',
          desc: 'Angular Practices'
        },
        {
          url: 'ngrx-learning',
          desc: 'Ngrx'
        },
        {
          url: 'rxjs-learning',
          desc: 'Rxjs'
        },
        {
          url: 'javascript-interview-question',
          desc: 'Javascript Interview Question(WIP)'
        },
        {
          url: 'typescript-full-course',
          desc: 'Typescript full course(WIP)'
        },
        {
          url: 'example/view-child',
          desc: 'View Child Example'
        },
        {
          url: 'example/ng-content',
          desc: 'ng-content Example'
        },
        {
          url: 'angular/angular-lifecycle-hooks',
          desc: 'Angular Lifecycle Hooks'
        },
        {
          url: 'apache-web-server-basics',
          desc: 'Apache Http/Web Server basics'
        },
        {
          url: 'ngrx-effects',
          desc: 'NgRx Effects'
        },
        
      ];
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


  // webSocketOpen() {
  //   let ws: WebSocket;

  //   if("WebSocket" in window) {
  //     ws = new WebSocket("ws://localhost:4200/echo/echoes");

  //     ws.onopen = function() {
        
  //     };

  //     ws.onopen()

  //     ws.onclose = function(){
  //       alert("Web socket is disconnected");
  //     };
      
  //   } else {
  //     alert("web socket is not supported by your browser.")
  //   }
  // }

  // webSocketClosed() {

  // }

}
