import { CommonModule } from '@angular/common';
import { Component, inject, input, signal } from '@angular/core';
import {
  TuiButtonModule,
  TuiDialogContext,
  TuiDialogModule,
  TuiDialogService,
} from '@taiga-ui/core';
import { EventJob } from '../../../models/event-job.model';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TuiInputModule } from '@taiga-ui/kit';

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
  taken = signal(false);

  dialogService = inject(TuiDialogService);

  open = false;

  setAsTakenByUser(ev: any) {
    console.log(ev.value);
    this.taken.set(true);
    this.open = false;
  }

  forfaitJob() {
    this.taken.set(false);
  }

  showDialog(): void {
    this.open = true;
  }
}
