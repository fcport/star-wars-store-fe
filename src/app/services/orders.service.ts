import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  baseUrl = 'http://localhost:3000/orders';

  constructor() {}
}
