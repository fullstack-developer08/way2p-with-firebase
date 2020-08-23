import { createReducer, on } from '@ngrx/store';
import { dispatchBlog, dispatchBlogNavs, dispatchBlogIdForEdit, dispatchBlogIdForDelete, dispatchQueryParamHome } from '../actions/blog.actions';
 
export const initialState = {
};
 
const _blogReducer = createReducer(initialState,
  on(dispatchBlog, (state, {payload}) => {
    return {...state, activeBlog: payload}
  }),
  on(dispatchBlogNavs, (state, {payload}) => {
    return {...state, blogNavs: payload}
  }),
  on(dispatchBlogIdForEdit, (state, {payload}) => {
    return {...state, editBlogId: payload}
  }),
  on(dispatchBlogIdForDelete, (state, {payload}) => {
    return {...state, deleteBlogId: payload}
  }),
  on(dispatchQueryParamHome, (state, {payload}) => {
    return {...state, isHomeQueryParamExists: payload}
  }),
);
 
export function blogReducer(state, action) {
  return _blogReducer(state, action);
}