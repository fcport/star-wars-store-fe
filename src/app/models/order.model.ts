import { CartItem } from './cart-item.model';
import { Starship } from './starship.model';
import { Vehicle } from './vehicles.model';

export interface Order {
  items: CartItem<Starship | Vehicle>[];
  date: Date;
  total: number;
}
