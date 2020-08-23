import { createReducer, on } from '@ngrx/store';
import { dispatchAdminLoginFlag } from '../actions/admin.actions';
 
export const initialState = {
};
 
const _adminReducer = createReducer(initialState,
  on(dispatchAdminLoginFlag, (state, {payload}) => {
    return {...state, isAdminLogin: payload}
  }),
);
 
export function adminReducer(state, action) {
  return _adminReducer(state, action);
}