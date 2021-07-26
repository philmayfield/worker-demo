import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {FooSummaryComponent} from "./summary.component";

@NgModule({
  declarations: [
    FooSummaryComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FooSummaryComponent
  ]
})
export class FooSummaryModule { }
