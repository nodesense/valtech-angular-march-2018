import { Pipe, PipeTransform } from '@angular/core';

// {{2 | power:3}}  (2^3) ==> 8
// {{ 8 | power }} (8 ^ 1) ==> 8

@Pipe({
  name: 'power'
})
export class PowerPipe implements PipeTransform {

  constructor() {
    console.log("power pipe created");
  }

  transform(value: number, exponent: number = 1): number {
    console.log('power pipe called ', value, exponent);

    return Math.pow(value, exponent);
  }

}
