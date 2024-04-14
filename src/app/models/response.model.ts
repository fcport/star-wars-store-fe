import { EventJob } from './event-job.model';

export interface Result<T> {
  results: T[];
}
export interface EventResponse {
  chartId: string;
  chartName: string;
  chartUrl: string;
  results: string[];
}
