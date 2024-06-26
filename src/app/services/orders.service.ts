import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import {
  injectMutation,
  injectQuery,
} from '@tanstack/angular-query-experimental';
import { lastValueFrom } from 'rxjs';
import { CartItem } from '../models/cart-item.model';
import { Order } from '../models/order.model';
import { Starship } from '../models/starship.model';
import { Vehicle } from '../models/vehicles.model';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  baseUrl = 'http://localhost:3000/orders';
  baseUrlQuotes = 'http://localhost:3000/quotesAsked';
  httpClient = inject(HttpClient);

  pastOrders = toSignal(this.getOrders());

  queryPastOrders = injectQuery(() => ({
    queryKey: ['orders', 'list'],
    queryFn: () => lastValueFrom(this.getOrders()),
  }));

  mutatePastOrders = injectMutation((client) => ({
    mutationFn: (order: CartItem<Starship | Vehicle>[]) =>
      lastValueFrom(this.createOrder(order)),
    // Invalidate and refetch by using the client directly
    onSuccess: () => {
      // refetch data
      client.invalidateQueries({
        queryKey: ['orders', 'list'],
      });
    },
  }));

  constructor() {}

  createOrder(cart: CartItem<Starship | Vehicle>[]) {
    return this.httpClient.post<Order>(this.baseUrl, {
      items: cart,
      date: new Date(),
      total: cart.reduce(
        (acc, curr) => acc + curr.qty * curr.costInCredits!,
        0
      ),
    });
  }

  placeOrder(cart: CartItem<Starship | Vehicle>[]) {
    this.mutatePastOrders.mutate(cart);
  }

  getOrders() {
    return this.httpClient.get<Order[]>(this.baseUrl);
  }

  askForQuote(
    items: (CartItem<Starship> | CartItem<Vehicle>)[],
    name: string,
    surname: string
  ) {
    throw new Error('Method not implemented.');
  }
}
