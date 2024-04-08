import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () =>
      import('./components/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'vehicles',
    loadComponent: () =>
      import('./components/vehicles/vehicles.component').then(
        (m) => m.VehiclesComponent
      ),
  },
  {
    path: 'starships',
    loadComponent: () =>
      import('./components/starships/starships.component').then(
        (m) => m.StarshipsComponent
      ),
  },
  {
    path: 'events',
    loadComponent: () =>
      import('./components/events/events.component').then(
        (m) => m.EventsComponent
      ),
  },
  {
    path: 'past-orders',
    loadComponent: () =>
      import('./components/past-orders/past-orders.component').then(
        (m) => m.PastOrdersComponent
      ),
  },
  {
    path: 'cart',
    loadComponent: () =>
      import('./components/cart/cart.component').then((m) => m.CartComponent),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
];
