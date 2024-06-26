import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { catchError, forkJoin, map, of, tap } from 'rxjs';
import { EventJob } from '../models/event-job.model';
import { EventResponse } from '../models/response.model';

@Injectable({
  providedIn: 'root',
})
export class EventsService {
  httpClient = inject(HttpClient);

  acceptedJobs = signal<EventJob[]>([]);

  constructor() {}

  eventsJobRaw = toSignal(
    forkJoin(
      Array(10)
        .fill(0)
        .map((_) => this.getJobEvent())
    ).pipe(
      tap((r) => this.eventsJob.set(r)),
      catchError((err) => {
        console.log(err);
        this.eventsJob.set([]);

        return of([]);
      })
    )
  );

  eventsJob = signal<EventJob[]>([]);

  parseEvent(ev: string) {
    const regex = /#### (\w+)\n([\s\S]+?)(?=#### \w+|$)/g;

    const matches: RegExpMatchArray[] = [...ev.matchAll(regex)];

    const result: any = {};

    matches.forEach((match) => {
      const [, key, value] = match;
      result[key.toLowerCase()] = value.trim();
    });

    return result as EventJob;
  }

  getJobEvent() {
    return this.httpClient
      .post<EventResponse>(
        'https://chartopia.d12dev.com/api/charts/9809/roll/',
        {}
      )
      .pipe(map((r) => this.parseEvent(r.results[0])));
  }

  acceptJob(job: EventJob) {
    this.acceptedJobs.update((jobs) => [...jobs, job]);
  }

  forfaitJob(job: EventJob) {
    this.acceptedJobs.update((jobs) =>
      jobs.filter((j) => j.brief !== job.brief)
    );
  }
}
