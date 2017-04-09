import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countSize'
})
export class CountSizePipe implements PipeTransform {

  transform(value: any, args?: any): any {
      if ( value >= 1000 && value < 1000000){
            return `${(value / 1000).toFixed(2)}K`;
        }else if ( value >= 1000000 && value < 1000000000){
            return `${(value / 1000000).toFixed(2)}M`;
        }
  }

}
