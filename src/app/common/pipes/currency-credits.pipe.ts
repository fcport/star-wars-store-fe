import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyCredits',
  standalone: true,
})
export class CurrencyCreditsPipe implements PipeTransform {
  transform(value: number): string {
    return Number.parseFloat(value.toString()).toFixed(2) + ' ᖬ';
  }
}
