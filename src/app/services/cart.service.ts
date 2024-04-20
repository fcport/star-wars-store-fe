import { Injectable, computed, signal } from '@angular/core';
import { Starship } from '../models/starship.model';
import { Vehicle } from '../models/vehicles.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
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
}
