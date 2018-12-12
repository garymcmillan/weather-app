import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'getHourPipe'})
export class GetHourPipe implements PipeTransform {
  transform(value: any): string {
    const hour = value.split(" ");    
    return hour[1];
  }
}