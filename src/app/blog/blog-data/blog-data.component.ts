import { Component, OnInit, OnDestroy } from '@angular/core';
import { FirebaseService } from "../../common/services/firebase.service"
import { dispatchBlog, dispatchBlogNavs, dispatchQueryParamHome } from "../../store/actions/blog.actions";
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/store';
import { ActivatedRoute, Router, ActivatedRouteSnapshot } from '@angular/router';
import { SeoService} from "../../common/services/seo.service";
import { setLoader } from 'src/app/store/actions/loader.actions';
import { Subject, Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { HelperService } from 'src/app/common/services/helper.service';

@Component({
  selector: 'blog-data',
  templateUrl: './blog-data.component.html',
  styleUrls: []
})
export class BlogDataComponent implements OnInit, OnDestroy {
  blogNavs$;
  blogNavs = [];
  blogsList = [];
  public ngDestroyed$ = new Subject();
  admin$: Observable<any>;
  isAdmin;

  constructor(
    private firebaseSrvc: FirebaseService,
    private store: Store<AppState>,
    private router: Router,
    private route: ActivatedRoute,
    private seoService: SeoService,
    private helperService: HelperService
  ) { 
    this.admin$ = this.store.pipe(select('admin'));
  }

  ngOnInit(): void {
    // this.route.url
    //   .pipe(takeUntil(this.ngDestroyed$))
    //   .subscribe(urlSegments => {
    //     let path = '';
    //     urlSegments.map(element => {
    //       path += '/' + element.path;
    //     });
    //     this.store.dispatch(setLoader(true));
    //     this.setBlog('/' + path.substring(1));
    //   });
    
      if(this.router.url.indexOf("?") > -1) {
        this.route.queryParams.subscribe(params => {
          if(params['from']) 
            this.store.dispatch(dispatchQueryParamHome(true));
          this.setBlog(this.router.url.split('?')[0], params['from']);
        });
      } else {
        this.store.dispatch(dispatchQueryParamHome(false));
        this.setBlog(this.router.url);
      }
      

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

  setBlog(path, param?): any {
    this.store.dispatch(setLoader(true));
    this.firebaseSrvc.getBlogsUsingURL(path).get()
      .pipe(takeUntil(this.ngDestroyed$))
      .subscribe(querySnapshot => {
        querySnapshot.forEach(queryDoc => {
          let blog = queryDoc.data();
          if (blog) {
            this.setTitle(blog);
            blog = {...blog, id: queryDoc.id}
            this.store.dispatch(dispatchBlog(blog));
            this.store.dispatch(setLoader(false));
            
            !param && this.firebaseSrvc.getBlogNavLinks(blog.blogTech).get()
            .pipe(takeUntil(this.ngDestroyed$))
            .subscribe((querySnapshot) => {
              this.blogNavs = [];
              querySnapshot.forEach(data => {
                let blog = data.data();
                console.log(blog)
                if (this.isAdmin || (!this.isAdmin && !(blog.visible === "false"))) {
                  this.blogNavs.push(
                    {
                      blogHref: blog.blogHref,
                      blogName: blog.blogName,
                      articleType: blog.articleType,
                      sort: blog.sort,
                    });
                }
                //  else if(this.isAdmin) {
                //   this.blogNavs.push(
                //     {
                //       blogHref: blog.blogHref,
                //       blogName: blog.blogName,
                //       articleType: blog.articleType,
                //       sort: blog.sort,
                //     });
                // }
              });
              this.sortNavsAndDispatch();
            });
            this.helperService.copyPreTagContent(blog);
          }
        });
      });
  }

  sortNavsAndDispatch() {
    this.blogNavs.sort(this.compare)
    this.store.dispatch(dispatchBlogNavs(this.blogNavs))
  }

  compare(a, b) {
    const A = a.sort;
    const B = b.sort;
    let comparison = 0;
    if (A > B) {
      comparison = 1;
    } else if (A < B) {
      comparison = -1;
    }
    return comparison;
  }

  setTitle(blog) {
    if (blog.blogTitle == '' || blog.blogTitle == null || blog.blogTitle == undefined) {
      this.seoService.setTitle(blog.blogName);
    } else {
      this.seoService.setTitle(blog.blogTitle);
    }
  }

  ngOnDestroy() {
    this.ngDestroyed$.next();
  }

}
