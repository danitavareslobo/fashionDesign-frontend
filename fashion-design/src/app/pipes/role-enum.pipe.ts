import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'roleEnum',
  standalone: true
})
export class RoleEnumPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
