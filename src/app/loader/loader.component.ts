import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from '../store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {
  public loading: boolean = false;
  loader$: Observable<any>;

  constructor(
    private store: Store<AppState>,
  ) { 
    this.loader$ = this.store.pipe(select('loader'));
  }

  ngOnInit(): void {
    this.loader$.subscribe(flag => {
      this.loading = flag;
    });
  }

}
