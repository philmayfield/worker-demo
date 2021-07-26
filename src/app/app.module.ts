import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FooSummaryModule} from "./fooSummary/foo-summary.module";
import {BarSummaryModule} from "./barSummary/bar-summary.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FooSummaryModule,
    BarSummaryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
