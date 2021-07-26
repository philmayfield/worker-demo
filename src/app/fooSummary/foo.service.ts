import { Injectable } from '@angular/core';
import {Observable, of, Subject} from "rxjs";

import {NeatData, NeatMetric} from "./shared";

export interface FooService {
  get(data: NeatData[]): Observable<NeatMetric>;
}

@Injectable({  providedIn: 'root'})
export class FooServiceFactory {
  get(): FooService {
    if (typeof Worker !== 'undefined') {
      return new FooWebWorkerService();
    }
    return new FooWebWorkerService();
  }
}

export class FooWebWorkerService {
  private worker: Worker;
  private calculations$ = new Subject<NeatMetric>()

  constructor() {
    this.worker = new Worker(
      new URL('./foo.worker', import.meta.url),
      { type: 'module', name: 'foo-calculation' }
    );

    this.worker.onmessage = ({ data }) => {
      this.calculations$.next(data);
    };
  }

  get(data: NeatData[]): Observable<NeatMetric> {
    this.worker.postMessage(data);
    return this.calculations$.asObservable();
  }
}

export class FooSynchronousService {
  get(data: NeatData[]): Observable<NeatMetric> {
    return of({ total: 0, foo: 0, bar: 0 });
  }
}
