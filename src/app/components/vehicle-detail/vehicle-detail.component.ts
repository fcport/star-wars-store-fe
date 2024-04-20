import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import {
  TuiButtonModule,
  TuiHintModule,
  TuiModeModule,
  TuiSvgModule,
} from '@taiga-ui/core';
import { TuiTabsModule } from '@taiga-ui/kit';
import { computedAsync } from 'ngxtension/computed-async';
import { injectParams } from 'ngxtension/inject-params';
import { CurrencyCreditsPipe } from '../../common/pipes/currency-credits.pipe';
import { VehiclesService } from '../../services/vehicles.service';
import { CartService } from '../../services/cart.service';
import { Vehicle } from '../../models/vehicles.model';

@Component({
  selector: 'app-vehicle-detail',
  standalone: true,
  templateUrl: './vehicle-detail.component.html',
  styleUrl: './vehicle-detail.component.scss',
  imports: [
    CommonModule,
    CurrencyCreditsPipe,
    TuiButtonModule,
    TuiTabsModule,
    TuiSvgModule,
    TuiModeModule,
    TuiHintModule,
  ],
})
export class VehicleDetailComponent {
  idParam = injectParams('id');
  vehicleService = inject(VehiclesService);
  cartService = inject(CartService);

  vehicle = computedAsync(() => {
    return this.vehicleService.getVehicleById(this.idParam() ?? '');
  });

  contentToDisplay = signal<string>('consumables');
  content = computed<string>(() => {
    const cont = Object.entries(this.vehicle()!)
      .filter(([key]) => key === this.contentToDisplay())
      .flat();

    return cont[1] ?? 'No data provided';
  });

  onClick(prop: string) {
    this.contentToDisplay.set(prop);
  }

  addToCart(prod: Vehicle) {
    this.cartService.addItemToCart(prod);
  }
}
