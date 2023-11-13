import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'seasonEnum',
  standalone: true
})
export class SeasonEnumPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
