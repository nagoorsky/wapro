import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'waproCurrency',
})
export class CurrencyPipe implements PipeTransform {
  transform(value: number): string {
    const formattedValue = value
      .toFixed(2)
      .replace(/\d(?=(\d{3})+\.)/g, '$& ')
      .replace(',', '.');
    return formattedValue + ' zł';
  }
}
