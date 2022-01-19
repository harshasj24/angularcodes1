import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age',
})
export class AgePipe implements PipeTransform {
  transform(value: any): any {
    let cur = new Date().getFullYear();
    let uyr = new Date(value).getFullYear();
    let userAge = cur - uyr;
    if (uyr > cur) {
      return 'INVALID AGE';
    } else {
      return userAge;
    }
  }
}
