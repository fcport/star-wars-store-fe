import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stockStatus',
  standalone: true,
})
export class StockStatusPipe implements PipeTransform {
  transform(value: number): 'In Stock' | 'Out of Stock' | 'Low Stock' {
    switch (value) {
      case 1:
        return 'In Stock';
      case 2:
        return 'Out of Stock';
      case 3:
        return 'Low Stock';
      default:
        return 'In Stock';
    }
  }
}
