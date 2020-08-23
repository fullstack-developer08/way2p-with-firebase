import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VisitorsDetailsComponent } from './visitors-details.component';

const ROUTES: Routes = [{ path: "", component: VisitorsDetailsComponent }];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(ROUTES),
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [VisitorsDetailsComponent]
})
export class VisitorsDetailsModule { }