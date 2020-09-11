import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { AppState } from 'src/app/store';
import { Store, select } from '@ngrx/store';
import { Subject, Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'blog-nav',
  templateUrl: './blog-nav.component.html',
  styleUrls: []
})
export class BlogNavComponent implements OnInit, OnDestroy {
  blog$;
  blogNavs;
  activeBlog;
  public ngDestroyed$ = new Subject();
  admin$: Observable<any>;
  isAdmin: boolean;
  @Input() articleType;

  constructor(
    private store: Store<AppState>
  ) { 
    this.blog$ = this.store.pipe(select('blog'));
    this.admin$ = this.store.pipe(select('admin'));
  }

  ngOnInit(): void {
    this.blog$
      .pipe(takeUntil(this.ngDestroyed$))
      .subscribe((data) => {
        if(data && data.blogNavs) {
          console.log(this.articleType)
          this.blogNavs = data.blogNavs.filter((obj) => obj.articleType === this.articleType)
        }
        if(data && data.activeBlog) {
          this.activeBlog = data.activeBlog;
        }
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

  ngOnDestroy() {
    this.ngDestroyed$.next();
  }

}
