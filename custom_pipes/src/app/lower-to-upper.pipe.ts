import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lowerToUpper'
})
export class LowerToUpperPipe implements PipeTransform {

  transform(value: string): string {
    return value.toLowerCase(); 
  }

}
