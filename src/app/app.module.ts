import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TabsModule } from 'ngx-bootstrap/tabs';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { LoaderComponent } from './loader/loader.component';
import { AppStoreModule } from './store/app-store.module';
import { AngularFireModule } from '@angular/fire';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Junit5Component } from './custom/junit5/junit5.component';
import { SpringBootCurdWithMysqlComponent } from './custom/spring-boot-curd-with-mysql/spring-boot-curd-with-mysql.component';
import { SpringBootRestfulWebserviceComponent } from './custom/spring-boot-restful-webservice/spring-boot-restful-webservice.component';
import { MicroservicesWithSpringCloudComponent } from './custom/microservices-with-spring-cloud/microservices-with-spring-cloud.component';
import { JavaReactiveProgrammingComponent } from './custom/java-reactive-programming/java-reactive-programming.component';
import { CodeCoverageWithJacocoAndSonarComponent } from './custom/code-coverage-with-jacoco-and-sonar/code-coverage-with-jacoco-and-sonar.component';
import { ViewChild1Component } from './examples/view-child/view-child.component';
import { SecondChildComponent } from './examples/view-child/another-child-component';
import { NgcontentComponent } from './examples/ngcontent/ngcontent.component';
import { ProductCardComponent } from './examples/ngcontent/product-card.component';
import { LombokComponent } from './custom/lombok/lombok.component';
import { AngularLifecycleHookComponent } from './custom/angular-lifecycle-hook/angular-lifecycle-hook.component';
import { TypescriptComponent } from './custom/typescript/typescript.component';
import { CurrencyConversionComponent } from './currency-conversion/currency-conversion.component';
import { ApacheWebServerComponent } from './custom/apache-web-server/apache-web-server.component';
import { FlexboxCourseComponent } from './custom/flexbox-course/flexbox-course.component';
import { NgrxEffectsComponent } from './custom/ngrx-effects/ngrx-effects.component';
import { JsInterviewQuesstionComponent } from './custom/js-interview-quesstion/js-interview-quesstion.component';
import { SchematicsInAngularComponent } from './custom/schematics-in-angular/schematics-in-angular.component';
import { SchematicsLikeAngularCliComponent } from './custom/schematics-like-angular-cli/schematics-like-angular-cli.component';
import { AngularPracticesWithExampleComponent } from './custom/angular-practices-with-example/angular-practices-with-example.component';
import { ContactComponent } from './contact/contact.component';
import { RxjsComponent } from './custom/rxjs/rxjs.component';
import { NgrxComponent } from './custom/ngrx/ngrx.component';
import { ES6Component } from './custom/es6/es6.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    LoaderComponent,
    Junit5Component,
    SpringBootCurdWithMysqlComponent,
    SpringBootRestfulWebserviceComponent,
    MicroservicesWithSpringCloudComponent,
    JavaReactiveProgrammingComponent,
    CodeCoverageWithJacocoAndSonarComponent,
    ViewChild1Component,
    SecondChildComponent,
    NgcontentComponent,
    ProductCardComponent,
    LombokComponent,
    AngularLifecycleHookComponent,
    TypescriptComponent,
    CurrencyConversionComponent,
    ApacheWebServerComponent,
    FlexboxCourseComponent,
    NgrxEffectsComponent,
    JsInterviewQuesstionComponent,
    SchematicsInAngularComponent,
    SchematicsLikeAngularCliComponent,
    AngularPracticesWithExampleComponent,
    ContactComponent,
    RxjsComponent,
    NgrxComponent,
    ES6Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppStoreModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    FormsModule,
    HttpClientModule,
    TabsModule.forRoot(),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
