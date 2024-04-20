import { Component, inject } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { TuiSvgModule } from '@taiga-ui/core';
import { TuiBadgeModule } from '@taiga-ui/kit';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [RouterModule, TuiSvgModule, TuiBadgeModule],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.scss',
})
export class TopBarComponent {
  cartService = inject(CartService);
  numberInCart = this.cartService.totalItems;
  items = [
    {
      title: 'Home',
      url: '/home',
    },
    {
      title: 'Vehicles',
      url: '/vehicles',
    },
    {
      title: 'Starships',
      url: '/starships',
    },
    {
      title: 'Work With Us!',
      url: '/events',
    },
    {
      title: 'Past Orders',
      url: '/past-orders',
    },
  ];
}
