import { Component, OnInit, OnDestroy, ElementRef, ViewChild, Input } from '@angular/core';
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
  navFetchFlag;
  activeNav;
  innerHtmlData;
  @ViewChild('dbData') dbData:ElementRef;
  @Input("blogData") blogData;

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

  ngOnChanges() {
    if (this.dbData) {
      debugger;
      this.dbData.nativeElement.innerHTML = this.blogData;
    }
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
            blog = {...blog, id: queryDoc.id};

            if(blog && blog.blogTech && this.navFetchFlag === undefined) {
              this.navFetchFlag = true;
            } else if (blog && blog.blogTech && (this.activeNav !== blog.blogTech)) {
              this.navFetchFlag = true;
            } else {
              this.navFetchFlag = false;
            }
             
            this.store.dispatch(dispatchBlog(blog));
            this.store.dispatch(setLoader(false));
            
            if (this.navFetchFlag) {
              !param && this.firebaseSrvc.getBlogNavLinks(blog.blogTech).get()
              .pipe(takeUntil(this.ngDestroyed$))
              .subscribe((querySnapshot) => {
                this.activeNav = blog.blogTech;
                this.blogNavs = [];
                querySnapshot.forEach(data => {
                  let blog = data.data();
                  if (this.isAdmin || (!this.isAdmin && !(blog.visible === "false"))) {
                    this.blogNavs.push(
                      {
                        blogHref: blog.blogHref,
                        blogName: blog.blogName,
                        articleType: (blog.articleType === undefined || blog.articleType === "") ? "" : blog.articleType,
                        sort: +blog.sort,
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
            }

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
