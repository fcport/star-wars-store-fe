import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TuiSidebarModule } from '@taiga-ui/addon-mobile';
import { TuiSvgModule } from '@taiga-ui/core';
import { TuiBadgeModule } from '@taiga-ui/kit';
import { CartService } from '../../services/cart.service';
import { TuiActiveZoneModule } from '@taiga-ui/cdk';

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [
    RouterModule,
    TuiSvgModule,
    TuiBadgeModule,
    TuiSidebarModule,
    TuiActiveZoneModule,
  ],
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

  openSidebar = false;

  toggleSidebar() {
    this.openSidebar = !this.openSidebar;
  }
}
