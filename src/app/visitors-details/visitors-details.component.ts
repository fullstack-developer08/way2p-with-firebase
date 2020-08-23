import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from '../store';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Router } from '@angular/router';
import { FirebaseService } from '../common/services/firebase.service';
import { setLoader } from '../store/actions/loader.actions';

@Component({
  selector: 'app-visitors-details',
  templateUrl: './visitors-details.component.html',
  styleUrls: []
})
export class VisitorsDetailsComponent implements OnInit, OnDestroy {
  admin$: Observable<any>;
  isAdmin;
  public ngDestroyed$ = new Subject();
  visitors: any[] = [];
  searchedVisitors: any[] = [];
  countries: string[] = [];
  cities: string[] = [];
  countriesWithCities = [];
  country;
  public facebookVisitors = [];

  constructor(
    private store: Store<AppState>,
    private router: Router,
    private firebaseService: FirebaseService,
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
          this.router.navigate([''])
        }
      });

    this.store.dispatch(setLoader(true));
    this.firebaseService.getVisitorsInfo().subscribe((allData) => {
      this.visitors = [];
      allData.forEach((data) => {
        const obj = {...data.payload.doc.data(), id: data.payload.doc.id}
        if(obj?.res?.country_name && !(this.countries.indexOf(obj.res.country_name) > -1)) {
          this.countries.push(obj.res.country_name);
        }
        this.visitors.push(obj);
      });
      this.store.dispatch(setLoader(false));

    });
  }

  deleteRecord(id) {
    this.store.dispatch(setLoader(true));
    this.firebaseService.deleteVisitorInfo(id).then(() => {
     this.searchedVisitors = this.searchedVisitors.filter(data => data.id !== id)
     this.store.dispatch(setLoader(false));
    });
  }

  onSelectCountry(event) {
    this.country = event.target.value;
    this.store.dispatch(setLoader(true));
    this.firebaseService.getCountryVisitorsInfo(this.country).get().subscribe(allData => {
      this.searchedVisitors = [];
      this.cities = [];
      allData.forEach((data)=> {
        const obj: any = {...data.data(), id: data.id};
        if(obj?.res?.city && !(this.cities.indexOf(obj.res.city) > -1)) {
          this.cities.push(obj.res.city);
        }
        this.searchedVisitors.push(obj);
      });
      this.store.dispatch(setLoader(false));
    });
  }

  onSelectCity(event) {
    this.store.dispatch(setLoader(true));
    this.firebaseService.getCityVisitorsInfo(this.country, event.target.value).get().subscribe(allData => {
      this.searchedVisitors = [];
      allData.forEach((data)=> {
        const obj: any = {...data.data(), id: data.id};
        
        this.searchedVisitors.push(obj);
      });
      this.store.dispatch(setLoader(false));
    });
  }

  getFacebookVisitors() {
    this.store.dispatch(setLoader(true));
    this.firebaseService.getFacebookVisitors().subscribe((allData) => {
      this.facebookVisitors = [];
      allData.forEach((data) => {
        const obj = {...data.payload.doc.data(), id: data.payload.doc.id}
        this.facebookVisitors.push(obj);
      });
      this.store.dispatch(setLoader(false));
    });
  }

  ngOnDestroy() {
    this.ngDestroyed$.next();
  }

}
