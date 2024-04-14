import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { TuiSvgModule } from '@taiga-ui/core';

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [RouterModule, TuiSvgModule],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.scss',
})
export class TopBarComponent {
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
