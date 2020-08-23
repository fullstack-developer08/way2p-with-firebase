import { Component, OnInit, OnDestroy } from '@angular/core';
import { FirebaseService } from 'src/app/common/services/firebase.service';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store';
import { dispatchAdminLoginFlag } from '../../store/actions/admin.actions';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { HelperService } from 'src/app/common/services/helper.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: []
})
export class LoginComponent implements OnInit, OnDestroy {
  public ngDestroyed$ = new Subject();
  
  constructor(
    private firebaseService: FirebaseService,
    private store: Store<AppState>,
    private helperService: HelperService
  ) { 
    this.helperService.postVisitorsInfo({
      blogName: 'Admin Login Page',
      blogHref: '/login'
    });
  }

  ngOnInit(): void {
  }

  onLogin(text) {
    this.firebaseService.getAdminUser(text).get()
    .pipe(takeUntil(this.ngDestroyed$))
    .subscribe(user => {
      if(user.docs.length > 0) {
        this.store.dispatch(dispatchAdminLoginFlag(true));
        this.helperService.setCookie('adminLoggedIn', true, 1);
      }
    })
  }

  ngOnDestroy() {
    this.ngDestroyed$.next();
  }

}
