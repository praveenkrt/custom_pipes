import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneNumber'
})
export class PhoneNumberPipe implements PipeTransform {

  transform(value: string): string {
    // Check if the value contains a country code
    const countryCodeRegex = /^\+\d{1,2}/;
    const phoneNumber = value.replace(countryCodeRegex, '');
    return phoneNumber.trim();
  }

}
