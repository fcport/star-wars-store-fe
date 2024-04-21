import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { CurrencyCreditsPipe } from '../../common/pipes/currency-credits.pipe';
import { OrdersService } from '../../services/orders.service';
import { TuiSvgModule } from '@taiga-ui/core';

@Component({
  selector: 'app-past-orders',
  standalone: true,
  templateUrl: './past-orders.component.html',
  styleUrl: './past-orders.component.scss',
  imports: [CommonModule, CurrencyCreditsPipe, TuiSvgModule],
})
export class PastOrdersComponent {
  orderService = inject(OrdersService);
  queryPastOrders = this.orderService.queryPastOrders;
}
