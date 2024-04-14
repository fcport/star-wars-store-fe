import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { TuiCarouselModule } from '@taiga-ui/kit';
import { ProductCardComponent } from '../product-card/product-card.component';
import { VehiclesService } from '../../services/vehicles.service';
import { HostListener } from '@angular/core';
import { StarshipsService } from '../../services/starships.service';
import { TuiHintModule, TuiSvgModule } from '@taiga-ui/core';
import {
  TuiCardModule,
  TuiIconModule,
  TuiSkeletonModule,
} from '@taiga-ui/experimental';
import { CurrencyCreditsPipe } from '../../common/pipes/currency-credits.pipe';
import { BannerComponent } from '../ui/banner/banner.component';
import { EventsService } from '../../services/events.service';
import { EventJobCardComponent } from '../ui/event-job-card/event-job-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  imports: [
    CommonModule,
    TuiCarouselModule,
    ProductCardComponent,
    TuiSvgModule,
    TuiIconModule,
    TuiHintModule,
    CurrencyCreditsPipe,
    BannerComponent,
    EventJobCardComponent,
    TuiSkeletonModule,
    TuiCardModule,
  ],
})
export class HomeComponent {
  carouselVehicleCurrentIndex: number = 0;
  carouselStarshipCurrentIndex: number = 0;
  vehicleService = inject(VehiclesService);
  vehiclesCarousel = this.vehicleService.vehiclesHome;
  eventsService = inject(EventsService);

  starshipService = inject(StarshipsService);
  starshipCarousel = this.starshipService.starshipHome;

  eventsHome = this.eventsService.eventsJob;
  skeleton = Array(4).fill(0);

  screenWidth = signal<number>(0);

  itemsToShow = computed(() => {
    if (this.screenWidth() >= 1980) {
      return 5;
    }
    if (this.screenWidth() < 1980 && this.screenWidth() >= 1400) {
      return 4;
    }
    if (this.screenWidth() < 1400 && this.screenWidth() >= 1000) {
      return 3;
    }
    if (this.screenWidth() < 1000 && this.screenWidth() >= 600) {
      return 3;
    }
    if (this.screenWidth() < 600 && this.screenWidth() >= 400) {
      return 2;
    }
    return 1;
  });

  @HostListener('window:resize', ['$event'])
  onResize(event?: any) {
    this.screenWidth.set(window.innerWidth);
  }

  constructor() {
    this.onResize();
  }

  ngOnInit() {}
}
