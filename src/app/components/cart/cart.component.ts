import { Component, computed, inject } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Starship } from '../../models/starship.model';
import { Vehicle } from '../../models/vehicles.model';
import { CartItem } from '../../models/cart-item.model';
import { CurrencyCreditsPipe } from '../../common/pipes/currency-credits.pipe';
import { CommonModule } from '@angular/common';
import { TuiButtonModule } from '@taiga-ui/core';
import { Router, RouterModule } from '@angular/router';
import { CartItemComponent } from '../ui/cart-item/cart-item.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cart',
  standalone: true,
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
  imports: [
    CurrencyCreditsPipe,
    CommonModule,
    TuiButtonModule,
    RouterModule,
    CartItemComponent,
    FormsModule,
  ],
})
export class CartComponent {
  cartService = inject(CartService);
  cartItems = computed(() => {
    return this.cartService.reduceWithQuantity(this.cartService.cart());
  });
  itemsToAskForQuote = computed(() => {
    return this.cartService.reduceWithQuantity(
      this.cartService.itemsToAskForQuote()
    );
  });

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

  addOne(item: CartItem<Starship> | CartItem<Vehicle>) {
    this.cartService.addOneToCart(item);
  }

  removeOne(item: CartItem<Starship> | CartItem<Vehicle>) {
    this.cartService.removeOneFromCart(item);
  }

  placeOrder() {
    this.cartService.placeOrderCart(this.cartItems());
  }

  askForQuote(form: { name: string; surname: string }) {
    this.cartService.askForQuote(
      this.itemsToAskForQuote(),
      form.name,
      form.surname
    );
  }
}
