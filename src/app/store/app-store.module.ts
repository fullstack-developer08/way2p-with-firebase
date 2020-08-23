import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { blogReducer } from './reducers/blog.reducer';
import { adminReducer } from './reducers/admin.reducer';
import { loaderReducer } from './reducers/loader.reducer';
import { searchReducer } from './reducers/search.reducer';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot(
      { 
        blog: blogReducer,
        admin: adminReducer,
        loader: loaderReducer,
        search: searchReducer,
       },
    )
  ],
  providers: []
})
export class AppStoreModule { }