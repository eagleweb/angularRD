import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'cutstr'})

export class CutStringPipe implements PipeTransform {

  transform(value: string): string {
    if (value) {
      const strArray = value.split(' ').slice(0, 15);
      strArray.push('...');
      return strArray.join(' ');
    }
    return value;
  }
}
