import { createReducer, on } from '@ngrx/store';
import { setLoader } from '../actions/loader.actions';
 
export const initialState = false;
 
const _loaderReducer = createReducer(initialState,
  on(setLoader, (state, {payload}) => {
    return payload;
  }),
);
 
export function loaderReducer(state, action) {
  return _loaderReducer(state, action);
}