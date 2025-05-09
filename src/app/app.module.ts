import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { AllCodesComponent } from './components/all-codes/all-codes.component';
import { CodeOneComponent } from './components/code-one/code-one.component';
import {FormsModule} from "@angular/forms";
import { CodeTwoComponent } from './components/code-two/code-two.component';
import { CodeThreeComponent } from './components/code-three/code-three.component';
import {HashLocationStrategy, LocationStrategy} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    AllCodesComponent,
    CodeOneComponent,
    CodeTwoComponent,
    CodeThreeComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
  providers: [
      { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
