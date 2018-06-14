import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'code'
})
export class ProductCodePipe implements PipeTransform {
  
  transform(value: number, args?: any): any {
    var valuestrans;
    if (value<=9999) { 
      valuestrans = ("000"+value).slice(-4); 
    }
  return valuestrans;
  }

}
