import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statusEnum',
  standalone: true
})
export class StatusEnumPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
