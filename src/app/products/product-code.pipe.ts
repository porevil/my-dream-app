import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productCode'
})
export class ProductCodePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
