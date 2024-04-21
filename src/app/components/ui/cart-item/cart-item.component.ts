import { Component, input, output } from '@angular/core';
import { CartItem } from '../../../models/cart-item.model';
import { Starship } from '../../../models/starship.model';
import { Vehicle } from '../../../models/vehicles.model';
import { CurrencyCreditsPipe } from '../../../common/pipes/currency-credits.pipe';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cart-item',
  standalone: true,
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.scss',
  imports: [CurrencyCreditsPipe, RouterModule],
})
export class CartItemComponent {
  cartItem = input.required<CartItem<Starship | Vehicle>>();
  addOne = output();
  removeOne = output();
  removeAll = output();
  goToItem = output<CartItem<Starship | Vehicle>>();

  goToItemFn(item: CartItem<Starship | Vehicle>) {
    this.goToItem.emit(item);
  }
}
