import { Component, computed, input, signal } from '@angular/core';
import { Vehicle } from '../../models/vehicles.model';
import { Starship } from '../../models/starship.model';
import { TuiTagModule } from '@taiga-ui/kit';
import { StockStatusPipe } from '../../common/pipes/stock-status.pipe';
import { StockStatusAppearancePipe } from '../../common/pipes/stock-status-appearance.pipe';
import { TuiChipModule } from '@taiga-ui/experimental';
import { CurrencyCreditsPipe } from '../../common/pipes/currency-credits.pipe';
import { TuiButtonModule, TuiHintModule, TuiSvgModule } from '@taiga-ui/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-card',
  standalone: true,
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
  imports: [
    CommonModule,
    TuiTagModule,
    StockStatusPipe,
    StockStatusAppearancePipe,
    TuiChipModule,
    CurrencyCreditsPipe,
    TuiButtonModule,
    TuiSvgModule,
    TuiHintModule,
  ],
})
export class ProductCardComponent {
  product = input.required<Vehicle | Starship>();

  randomStockStatus = signal<number>(Math.floor(Math.random() * 3) + 1);
  category = input<'vehicle' | 'starship'>('vehicle');

  productImage = computed(() =>
    this.category() === 'vehicle'
      ? '/assets/vehicles/' + this.product().objectId + '.jpg'
      : '/assets/starships/' + this.product().objectId + '.jpg'
  );
}
