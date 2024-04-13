import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { TuiCarouselModule } from '@taiga-ui/kit';
import { ProductCardComponent } from '../product-card/product-card.component';
import { VehiclesService } from '../../services/vehicles.service';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  imports: [CommonModule, TuiCarouselModule, ProductCardComponent],
})
export class HomeComponent {
  carouselCurrentIndex: number = 0;
  vehicleService = inject(VehiclesService);
  vehiclesCarousel = this.vehicleService.vehiclesHome;

  screenWidth = signal<number>(0);

  itemsToShow = computed(() => {
    if (this.screenWidth() >= 1980) {
      return 5;
    }
    if (this.screenWidth() < 1980 && this.screenWidth() >= 1600) {
      return 4;
    }
    if (this.screenWidth() < 1600 && this.screenWidth() >= 1200) {
      return 3;
    }
    if (this.screenWidth() < 1200 && this.screenWidth() >= 800) {
      return 3;
    }
    if (this.screenWidth() < 800 && this.screenWidth() >= 600) {
      return 2;
    }
    return 1;
  });

  @HostListener('window:resize', ['$event'])
  onResize(event?: any) {
    this.screenWidth.set(window.innerWidth);
  }

  items = [
    {
      name: 'Test1',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna',
    },
    {
      name: 'Test2',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna',
    },
    {
      name: 'Test3',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna',
    },
    {
      name: 'Test4',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna',
    },
    {
      name: 'Test5',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna',
    },
    {
      name: 'Test6',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna',
    },
    {
      name: 'Test7',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna',
    },
    {
      name: 'Test7',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna',
    },
    {
      name: 'Test7',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna',
    },
    {
      name: 'Test7',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna',
    },
  ];

  constructor() {
    this.onResize();
  }

  ngOnInit() {}
}
