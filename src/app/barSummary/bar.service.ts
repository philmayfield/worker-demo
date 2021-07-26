import { Injectable } from '@angular/core';
import {Observable, of, Subject} from "rxjs";

import {NeatData, NeatMetric} from "./shared";

export interface BarService {
  get(data: NeatData[]): Observable<NeatMetric>;
}

@Injectable({  providedIn: 'root'})
export class BarServiceFactory {
  get(): BarService {
    if (typeof Worker !== 'undefined') {
      return new BarWebWorkerService();
    }
    return new BarWebWorkerService();
  }
}

export class BarWebWorkerService {
  private worker: Worker;
  private calculations$ = new Subject<NeatMetric>()

  constructor() {
    this.worker = new Worker(
      new URL('./bar.worker', import.meta.url),
      { type: 'module', name: 'bar-calculation' }
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

export class BarSynchronousService {
  get(data: NeatData[]): Observable<NeatMetric> {
    return of({ total: 0, foo: 0, bar: 0 });
  }
}
