import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'real',
  standalone: true
})
export class RealPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
