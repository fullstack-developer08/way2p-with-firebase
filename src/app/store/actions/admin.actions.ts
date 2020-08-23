import { createAction } from '@ngrx/store';

export const dispatchAdminLoginFlag = createAction('[Login Component] Admin Login Flag', (data) => {
    return { payload: data };
});