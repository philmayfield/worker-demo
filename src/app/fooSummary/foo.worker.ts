/// <reference lib="webworker" />

import { getMetrics } from './foo-calculations';

addEventListener('message', ({ data }) => {
  const response = getMetrics(data);
  postMessage(response);
});
