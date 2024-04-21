import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { CurrencyCreditsPipe } from '../../common/pipes/currency-credits.pipe';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-past-orders',
  standalone: true,
  templateUrl: './past-orders.component.html',
  styleUrl: './past-orders.component.scss',
  imports: [CommonModule, CurrencyCreditsPipe],
})
export class PastOrdersComponent {
  orderService = inject(OrdersService);
  queryPastOrders = this.orderService.queryPastOrders;
}
