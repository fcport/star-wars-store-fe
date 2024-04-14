import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventJobCardComponent } from './event-job-card.component';

describe('EventJobCardComponent', () => {
  let component: EventJobCardComponent;
  let fixture: ComponentFixture<EventJobCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventJobCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EventJobCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
