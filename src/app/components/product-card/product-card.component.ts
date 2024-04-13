import { Component, computed, input, signal } from '@angular/core';
import { Vehicle } from '../../models/vehicles.model';
import { Starship } from '../../models/starship.model';
import { TuiTagModule } from '@taiga-ui/kit';
import { StockStatusPipe } from '../../common/pipes/stock-status.pipe';
import { StockStatusAppearancePipe } from '../../common/pipes/stock-status-appearance.pipe';
import { TuiChipModule } from '@taiga-ui/experimental';
import { CurrencyCreditsPipe } from '../../common/pipes/currency-credits.pipe';
import { TuiButtonModule, TuiHintModule } from '@taiga-ui/core';

@Component({
  selector: 'app-product-card',
  standalone: true,
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
  imports: [
    TuiTagModule,
    StockStatusPipe,
    StockStatusAppearancePipe,
    TuiChipModule,
    CurrencyCreditsPipe,
    TuiButtonModule,
    TuiHintModule,
  ],
})
export class ProductCardComponent {
  product = input.required<Vehicle | Starship>();

  randomStockStatus = signal<number>(Math.floor(Math.random() * 3) + 1);

  productImage = computed(() =>
    this.product().hasOwnProperty('MGLT')
      ? '/assets/starships/' + this.product().objectId + '.jpg'
      : '/assets/vehicles/' + this.product().objectId + '.jpg'
  );
}
