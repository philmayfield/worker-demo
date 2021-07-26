import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';

import {NeatMetric} from "./shared";
import {FooService, FooServiceFactory} from "./foo.service";

@Component({
  selector: 'app-foo-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class FooSummaryComponent implements OnInit {
  foo$: Observable<NeatMetric> | null; // ultimately shown in the template
  private fooService: FooService;

  constructor(private fooServiceFactory: FooServiceFactory) {
    this.fooService = fooServiceFactory.get();

    this.foo$ = this.fooService.get([
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
