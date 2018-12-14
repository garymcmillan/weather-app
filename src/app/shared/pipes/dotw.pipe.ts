import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'dotwPipe'})
export class DotwPipe implements PipeTransform {
  transform(value: any): string {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayOfWeek = new Date(value).getDay();
    return isNaN(dayOfWeek) ? null : daysOfWeek[dayOfWeek];
  }
}
