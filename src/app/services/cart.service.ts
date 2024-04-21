import { Injectable, computed, inject, signal } from '@angular/core';
import { Starship } from '../models/starship.model';
import { Vehicle } from '../models/vehicles.model';
import { CartItem } from '../models/cart-item.model';
import { OrdersService } from './orders.service';
import { take } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  ordersService = inject(OrdersService);

  cart = signal<(Starship | Vehicle)[]>(
    localStorage.getItem('cart')
      ? JSON.parse(localStorage.getItem('cart')!)
      : []
  );
  itemsToAskForQuote = signal<(Starship | Vehicle)[]>(
    localStorage.getItem('itemsToAskForQuote')
      ? JSON.parse(localStorage.getItem('itemsToAskForQuote')!)
      : []
  );

  totalItems = computed(
    () => this.cart().length + this.itemsToAskForQuote().length
  );

  constructor() {}

  addItemToCart(item: Starship | Vehicle) {
    if (item.costInCredits) {
      this.cart.update((cart) => [...cart, item]);
      localStorage.setItem('cart', JSON.stringify(this.cart()));
    } else {
      this.itemsToAskForQuote.update((items) => [...items, item]);
      localStorage.setItem(
        'itemsToAskForQuote',
        JSON.stringify(this.itemsToAskForQuote())
      );
    }
  }

  reduceWithQuantity(items: (Starship | Vehicle)[]) {
    return items
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
      )
      .sort((a, b) => {
        return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
      });
  }

  removeOneFromCart(item: CartItem<Starship> | CartItem<Vehicle>) {
    if (item.costInCredits) {
      this.cart.update((cart) => {
        const index = cart.findIndex((i) => i.objectId === item.objectId);
        const newCart = [...cart];
        if (index !== -1) {
          newCart.splice(index, 1);
        }

        return newCart;
      });
      localStorage.setItem('cart', JSON.stringify(this.cart()));
    } else {
      this.itemsToAskForQuote.update((itemsQuote) => {
        const index = itemsQuote.findIndex((i) => i.objectId === item.objectId);
        const newItemsQuote = [...itemsQuote];
        if (index !== -1) {
          newItemsQuote.splice(index, 1);
        }

        return newItemsQuote;
      });
      localStorage.setItem(
        'itemsToAskForQuote',
        JSON.stringify(this.itemsToAskForQuote())
      );
    }
  }
  addOneToCart(item: CartItem<Starship> | CartItem<Vehicle>) {
    if (item.costInCredits) {
      this.cart.update((cart) => {
        return [...cart, item];
      });
      localStorage.setItem('cart', JSON.stringify(this.cart()));
    } else {
      this.itemsToAskForQuote.update((itemsQuote) => {
        return [...itemsQuote, item];
      });
      localStorage.setItem(
        'itemsToAskForQuote',
        JSON.stringify(this.itemsToAskForQuote())
      );
    }
  }

  placeOrderCart(cartItems: CartItem<Starship | Vehicle>[]) {
    this.ordersService.placeOrder(cartItems);

    this.cart.update((cart) => {
      return [...cart];
    });
    localStorage.setItem('cart', JSON.stringify(this.cart()));
  }
}
