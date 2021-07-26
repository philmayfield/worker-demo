/// <reference lib="webworker" />

import { getMetrics } from './bar-calculations';

addEventListener('message', ({ data }) => {
  const response = getMetrics(data);
  postMessage(response);
});
