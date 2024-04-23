import { CartItem } from './cart-item.model';
import { Starship } from './starship.model';
import { Vehicle } from './vehicles.model';

export interface Quote {
  id: string;
  name: string;
  surname: string;
  items: CartItem<Starship | Vehicle>[];
  date: Date;
}
