import { Component, computed, inject, signal } from '@angular/core';
import { computedAsync } from 'ngxtension/computed-async';
import { startWith } from 'rxjs';
import { VehiclesService } from '../../services/vehicles.service';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../product-card/product-card.component';
import { TuiPaginationModule } from '@taiga-ui/kit';
import { TuiModeModule } from '@taiga-ui/core';

@Component({
  selector: 'app-vehicles',
  standalone: true,
  imports: [
    CommonModule,
    ProductCardComponent,
    TuiPaginationModule,
    TuiModeModule,
  ],
  templateUrl: './vehicles.component.html',
  styleUrl: './vehicles.component.scss',
})
export class VehiclesComponent {
  vehiclesService = inject(VehiclesService);

  elementsPerPage = 10;
  total = computed(() =>
    Math.ceil(this.vehiclesService.totalVehicles ?? 36 / this.elementsPerPage)
  );

  skeletonStaships = Array(this.elementsPerPage).fill(0);

  page = signal(0);

  vehicles = computedAsync(
    () => {
      const skip = this.page() * this.elementsPerPage;
      const limit = this.elementsPerPage;
      return this.vehiclesService.getVehicles(skip, limit).pipe(startWith([]));
    },
    { requireSync: true }
  );

  goToPage(page: number) {
    this.page.set(page);

    // throw new Error('Method not implemented.');
  }
}
