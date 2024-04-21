import { Component, inject } from '@angular/core';
import { OrdersService } from '../../services/orders.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-past-orders',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './past-orders.component.html',
  styleUrl: './past-orders.component.scss',
})
export class PastOrdersComponent {
  orderService = inject(OrdersService);
  pastOrders = this.orderService.pastOrders;
}
