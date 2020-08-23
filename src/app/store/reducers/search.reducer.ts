import { createReducer, on } from '@ngrx/store';
import { dispatchAllBlogsForSearch } from '../actions/search.actions';
 
export const initialState = {
};
 
const _searchReducer = createReducer(initialState,
  on(dispatchAllBlogsForSearch, (state, {payload}) => {
    return {...state, blogs: payload}
  }),
);
 
export function searchReducer(state, action) {
  return _searchReducer(state, action);
}