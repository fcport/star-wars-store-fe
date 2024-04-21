import { Component, input, output } from '@angular/core';
import { CartItem } from '../../../models/cart-item.model';
import { Starship } from '../../../models/starship.model';
import { Vehicle } from '../../../models/vehicles.model';
import { CurrencyCreditsPipe } from '../../../common/pipes/currency-credits.pipe';
import { RouterModule } from '@angular/router';
import { TuiTagModule } from '@taiga-ui/kit';
import { TuiModeModule } from '@taiga-ui/core';

@Component({
  selector: 'app-cart-item',
  standalone: true,
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.scss',
  imports: [CurrencyCreditsPipe, RouterModule, TuiTagModule, TuiModeModule],
})
export class CartItemComponent {
  cartItem = input.required<CartItem<Starship | Vehicle>>();
  addOne = output<CartItem<Starship | Vehicle>>();
  removeOne = output<CartItem<Starship | Vehicle>>();
  removeAll = output<CartItem<Starship | Vehicle>>();
  goToItem = output<CartItem<Starship | Vehicle>>();

  goToItemFn(item: CartItem<Starship | Vehicle>) {
    this.goToItem.emit(item);
  }

  onRemoveOne() {
    this.removeOne.emit(this.cartItem());
  }
  onAddOne() {
    this.addOne.emit(this.cartItem());
  }
}
