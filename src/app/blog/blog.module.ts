import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { BlogComponent } from './blog.component';
import { BlogDataComponent } from './blog-data/blog-data.component';
import { BlogNavComponent } from './blog-nav/blog-nav.component';
import { SanitizeHtmlPipe } from '../common/pipes/sanitize-html.pipe';

const ROUTES: Routes = [{ path: "", component: BlogComponent }];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(ROUTES)
    ],
    declarations: [
        BlogComponent,
        BlogDataComponent,
        BlogNavComponent,
        SanitizeHtmlPipe
    ]
})
export class BlogModule { }