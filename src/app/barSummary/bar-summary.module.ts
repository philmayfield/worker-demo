import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {BarSummaryComponent} from "./summary.component";

@NgModule({
  declarations: [
    BarSummaryComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BarSummaryComponent
  ]
})
export class BarSummaryModule { }
