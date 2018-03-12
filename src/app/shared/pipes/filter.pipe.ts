import { Pipe, PipeTransform } from '@angular/core';

/*
  input - products or any array of objects

  params:

  fieldName
  predicate
  value

*/


@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], fieldName: string, 
            predicate: string, value: any): any[] {

    if (!items || !fieldName || !predicate || !value) {
      return items;
    }

    if (predicate == 'gt') {
      return items.filter (item => item[fieldName] > value);
    }

    if (predicate == 'lt') {
      return items.filter (item => item[fieldName] < value);
    }
    
  }

}
