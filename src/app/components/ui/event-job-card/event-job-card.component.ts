import { CommonModule } from '@angular/common';
import { Component, computed, inject, input, signal } from '@angular/core';
import {
  TuiButtonModule,
  TuiDialogContext,
  TuiDialogModule,
  TuiDialogService,
} from '@taiga-ui/core';
import { EventJob } from '../../../models/event-job.model';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TuiInputModule } from '@taiga-ui/kit';
import { EventsService } from '../../../services/events.service';

@Component({
  selector: 'app-event-job-card',
  standalone: true,
  imports: [
    CommonModule,
    TuiButtonModule,
    TuiDialogModule,
    FormsModule,
    ReactiveFormsModule,
    TuiInputModule,
  ],
  templateUrl: './event-job-card.component.html',
  styleUrl: './event-job-card.component.scss',
})
export class EventJobCardComponent {
  job = input.required<EventJob>();
  eventsService = inject(EventsService);
  taken = computed(
    () =>
      this.eventsService
        .acceptedJobs()
        .findIndex((j) => j.brief === this.job().brief) !== -1
  );

  dialogService = inject(TuiDialogService);

  open = false;

  setAsTakenByUser(ev: any) {
    this.eventsService.acceptJob(this.job());

    this.open = false;
  }

  forfaitJob() {
    this.eventsService.forfaitJob(this.job());
  }

  showDialog(): void {
    this.open = true;
  }
}
