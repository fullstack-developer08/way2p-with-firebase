import { NgModule, ViewChild } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CodeCoverageWithJacocoAndSonarComponent } from './custom/code-coverage-with-jacoco-and-sonar/code-coverage-with-jacoco-and-sonar.component';
import { JavaReactiveProgrammingComponent } from './custom/java-reactive-programming/java-reactive-programming.component';
import { ViewChild1Component } from './examples/view-child/view-child.component';
import { MicroservicesWithSpringCloudComponent } from './custom/microservices-with-spring-cloud/microservices-with-spring-cloud.component';
import { SpringBootCurdWithMysqlComponent } from './custom/spring-boot-curd-with-mysql/spring-boot-curd-with-mysql.component';
import { SpringBootRestfulWebserviceComponent } from './custom/spring-boot-restful-webservice/spring-boot-restful-webservice.component';
import { NgcontentComponent } from './examples/ngcontent/ngcontent.component';
import { LombokComponent } from './custom/lombok/lombok.component';
import { AngularLifecycleHookComponent } from './custom/angular-lifecycle-hook/angular-lifecycle-hook.component';
import { TypescriptComponent } from './custom/typescript/typescript.component';
import { Junit5Component } from './custom/junit5/junit5.component';
import { APP_BASE_HREF } from '@angular/common';
import { CurrencyConversionComponent } from './currency-conversion/currency-conversion.component';
import { ApacheWebServerComponent } from './custom/apache-web-server/apache-web-server.component';
import { NgrxEffectsComponent } from './custom/ngrx-effects/ngrx-effects.component';
import { JsInterviewQuesstionComponent } from './custom/js-interview-quesstion/js-interview-quesstion.component';
import { SchematicsInAngularComponent } from './custom/schematics-in-angular/schematics-in-angular.component';
import { SchematicsLikeAngularCliComponent } from './custom/schematics-like-angular-cli/schematics-like-angular-cli.component';
import { AngularPracticesWithExampleComponent } from './custom/angular-practices-with-example/angular-practices-with-example.component';
import { ContactComponent } from './contact/contact.component';
import { RxjsComponent } from './custom/rxjs/rxjs.component';
import { NgrxComponent } from './custom/ngrx/ngrx.component';
import { ES6Component } from './custom/es6/es6.component';


const routes: Routes = [
  { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'modify', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  { path: 'contact', component: ContactComponent },


  // Examples On Angular Learning
  { path: 'example/view-child', component: ViewChild1Component },
  { path: 'example/ng-content', component: NgcontentComponent },

  //Custom Backend Blogs
  { path: 'spring-boot-curd-with-mysql', component: SpringBootCurdWithMysqlComponent },
  { path: 'spring-boot-restful-webservices', component: SpringBootRestfulWebserviceComponent },
  { path: 'microservices-with-spring-clouds', component: MicroservicesWithSpringCloudComponent },
  { path: 'java-reactive-programming', component: JavaReactiveProgrammingComponent },
  { path: 'code-coverage-with-jacoco-and-sonar', component: CodeCoverageWithJacocoAndSonarComponent },
  { path: 'lombok-project', component: LombokComponent },
  { path: 'java/junit5', component: Junit5Component },
  

  //Custom Frontend Blogs
  { path: 'angular/angular-lifecycle-hooks', component: AngularLifecycleHookComponent },
  { path: 'typescript-full-course', component: TypescriptComponent },
  { path: 'currency-conversion', component: CurrencyConversionComponent },
  { path: 'apache-web-server-basics', component: ApacheWebServerComponent },
  { path: 'ngrx-effects', component: NgrxEffectsComponent },
  { path: 'javascript-interview-question', component: JsInterviewQuesstionComponent },
  { path: 'schematics-in-angular', component: SchematicsInAngularComponent },
  { path: 'create-schematics-like-angular-cli', component: SchematicsLikeAngularCliComponent },
  { path: 'angular-practices', component: AngularPracticesWithExampleComponent },
  { path: 'rxjs-learning', component: RxjsComponent },
  { path: 'ngrx-learning', component: NgrxComponent },
  { path: 'es6', component: ES6Component },
  
  { path: 'login', loadChildren: () => import('./admin/login/login.module').then(m => m.LoginModule) },
  { path: 'visitors-details', loadChildren: () => import('./visitors-details/visitors-details.module').then(m => m.VisitorsDetailsModule) },
  { path: '**', loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
  providers: [{ provide: APP_BASE_HREF, useValue: '/app/' }]
})
export class AppRoutingModule { }
