import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from './login.component';

const ROUTES: Routes = [{ path: "", component: LoginComponent }];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(ROUTES)],
    declarations: [LoginComponent]
})
export class LoginModule { }