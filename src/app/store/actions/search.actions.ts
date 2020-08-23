import { createAction } from '@ngrx/store';

export const dispatchAllBlogsForSearch = createAction('[Search Component] Dispatch All Blogs', (data) => {
    return { payload: data };
});