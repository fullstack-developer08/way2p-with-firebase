import { createAction } from '@ngrx/store';

export const setLoader = createAction('[All Component] Set Loader Flag', (data) => {
    return { payload: data };
});