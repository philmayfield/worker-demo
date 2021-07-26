import { isEmpty } from 'lodash';

import {NeatData, NeatMetric} from "./shared";

export function getMetrics(rows: NeatData[]): NeatMetric {
  const metrics: NeatMetric = {
    total: rows.length,
    foo: 0,
    bar: 0
  }

  if (isEmpty(rows)) {
    return metrics;
  }

  return rows.reduce((res, row) => {
    if (row.type === 'foo') {
      res.foo++;
    } else {
      res.bar++;
    }
    return res;
  }, metrics)
}
