import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';

import {NeatMetric} from "./shared";
import {BarService, BarServiceFactory} from "./bar.service";

@Component({
  selector: 'app-bar-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class BarSummaryComponent implements OnInit {
  bar$: Observable<NeatMetric> | null; // ultimately shown in the template
  private barService: BarService;

  constructor(private fooServiceFactory: BarServiceFactory) {
    this.barService = fooServiceFactory.get();

    this.bar$ = this.barService.get([
      { type: 'foo' },
      { type: 'bar' },
      { type: 'foo' },
      { type: 'foo' },
      { type: 'foo' },
      { type: 'bar' },
      { type: 'foo' },
      { type: 'bar' },
      { type: 'bar' },
    ]);
  }

  ngOnInit(): void {
  }

}
