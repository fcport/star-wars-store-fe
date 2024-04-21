import { Injectable, inject } from '@angular/core';
import { CartItem } from '../models/cart-item.model';
import { Starship } from '../models/starship.model';
import { Vehicle } from '../models/vehicles.model';
import { HttpClient } from '@angular/common/http';
import { Order } from '../models/order.model';
import { toSignal } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  baseUrl = 'http://localhost:3000/orders';
  httpClient = inject(HttpClient);

  pastOrders = toSignal(this.getOrders());

  constructor() {}

  placeOrder(cart: CartItem<Starship | Vehicle>[]) {
    return this.httpClient.post(this.baseUrl, {
      items: cart,
      date: new Date(),
      total: cart.reduce(
        (acc, curr) => acc + curr.qty * curr.costInCredits!,
        0
      ),
    });
  }

  getOrders() {
    return this.httpClient.get<Order[]>(this.baseUrl);
  }
}
