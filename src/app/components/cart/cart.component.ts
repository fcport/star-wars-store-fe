import { Component, computed, inject } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Starship } from '../../models/starship.model';
import { Vehicle } from '../../models/vehicles.model';
import { CartItem } from '../../models/cart-item.model';
import { CurrencyCreditsPipe } from '../../common/pipes/currency-credits.pipe';
import { CommonModule } from '@angular/common';
import { TuiButtonModule } from '@taiga-ui/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
  imports: [CurrencyCreditsPipe, CommonModule, TuiButtonModule, RouterModule],
})
export class CartComponent {
  cartService = inject(CartService);
  cartItems = computed(() => {
    return this.cartService
      .cart()
      .reduce(
        (
          acc: (CartItem<Starship> | CartItem<Vehicle>)[],
          curr: Starship | Vehicle
        ) => {
          const indexFound = acc.findIndex(
            (item) => item.objectId === curr.objectId
          );

          if (indexFound !== -1) {
            acc[indexFound].qty += 1;
          } else {
            acc.push({ ...curr, qty: 1 });
          }
          return acc;
        },
        [] as (CartItem<Starship> | CartItem<Vehicle>)[]
      );
  });
  itemsToAskForQuote = this.cartService.itemsToAskForQuote;

  router = inject(Router);

  totalCart = computed(() => {
    return this.cartItems().reduce(
      (acc, curr) => acc + curr.qty * curr.costInCredits!,
      0
    );
  });

  constructor() {}

  goToItem(item: CartItem<Starship> | CartItem<Vehicle>) {
    this.router.navigate([
      'starshipClass' in item ? '/starships' : 'vehicles',
      item.objectId,
    ]);
  }
}
