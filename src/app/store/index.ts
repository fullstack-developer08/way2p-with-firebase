export interface AppState { 
    blog: Object;
    admin: IAdmin;
    loader: boolean;
    search: Object;
 }

 export interface IAdmin {
    isAdminLogin?: boolean;
 }
