import { createAction } from '@ngrx/store';

export const dispatchBlog = createAction('[BlogData Component] Dispatch Blog',
  (data) => {
    return { payload: data };
  }
);

export const dispatchBlogNavs = createAction('[BlogData Component] Dispatch Blog Navs', (data) => {
  return { payload: data };
});

export const dispatchBlogIdForEdit = createAction('[Blog Component] Dispatch Blog Id', (data) => {
  return { payload: data };
});

export const dispatchBlogIdForDelete = createAction('[Blog Component] Dispatch Blog Id For Delete', (data) => {
  return { payload: data };
});

export const dispatchQueryParamHome = createAction('[BlogData Component] Dispatch Query Param Home', (data) => {
  return { payload: data };
});
