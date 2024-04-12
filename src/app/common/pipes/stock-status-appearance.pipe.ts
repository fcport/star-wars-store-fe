import { Pipe, PipeTransform } from '@angular/core';
import { TuiStatus } from '@taiga-ui/kit';

@Pipe({
  name: 'stockStatusAppearance',
  standalone: true,
})
export class StockStatusAppearancePipe implements PipeTransform {
  transform(value: number): TuiStatus {
    switch (value) {
      case 1:
        return 'success';
      case 2:
        return 'error';
      case 3:
        return 'warning';
      default:
        return 'success';
    }
  }
}
