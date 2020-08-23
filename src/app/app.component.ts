import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { HelperService } from './common/services/helper.service';
import { FirebaseService } from './common/services/firebase.service';
import { AppState } from './store';
import { Store } from '@ngrx/store';
import { dispatchAdminLoginFlag } from './store/actions/admin.actions';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit{

  constructor(
    private store: Store<AppState>,
    private helperService: HelperService,
    private firebaseService: FirebaseService,
    private route: ActivatedRoute
  ) {

    if(helperService.getCookie('adminLoggedIn')) {
      this.store.dispatch(dispatchAdminLoginFlag(true));
    }
    
    this.helperService.postVisitorsInfo({
      blogName: 'Home Page',
      blogHref: '/'
    });
    
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
       params['fbclid'] && this.firebaseService.setFacebookVisitors({
        blogName: 'Home Page / Access from Facebook',
        blogHref: '/',
        facebookId: params['fbclid']
      });
    });
  }

}
