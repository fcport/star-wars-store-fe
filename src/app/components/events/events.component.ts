import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { EventJobCardComponent } from '../ui/event-job-card/event-job-card.component';
import { EventsService } from '../../services/events.service';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [CommonModule, EventJobCardComponent],
  templateUrl: './events.component.html',
  styleUrl: './events.component.scss',
})
export class EventsComponent {
  eventsService = inject(EventsService);

  eventsSkeleton = Array(10).fill(0);

  events = this.eventsService.eventsJob;
}
