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
    path: 'vehicles/:id',
    loadComponent: () =>
      import('./components/vehicle-detail/vehicle-detail.component').then(
        (m) => m.VehicleDetailComponent
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
    path: 'starships/:id',
    loadComponent: () =>
      import('./components/starship-detail/starship-detail.component').then(
        (m) => m.StarshipDetailComponent
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
