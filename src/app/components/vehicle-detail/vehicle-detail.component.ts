import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { TuiButtonModule, TuiModeModule, TuiSvgModule } from '@taiga-ui/core';
import { TuiTabsModule } from '@taiga-ui/kit';
import { computedAsync } from 'ngxtension/computed-async';
import { injectParams } from 'ngxtension/inject-params';
import { CurrencyCreditsPipe } from '../../common/pipes/currency-credits.pipe';
import { VehiclesService } from '../../services/vehicles.service';

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
  ],
})
export class VehicleDetailComponent {
  onClick(arg0: string) {
    throw new Error('Method not implemented.');
  }
  idParam = injectParams('id');
  vehicleService = inject(VehiclesService);

  vehicle = computedAsync(() => {
    return this.vehicleService.getVehicleById(this.idParam() ?? '');
  });
}
