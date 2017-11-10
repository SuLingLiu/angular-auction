import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stockFilter'
})
export class StockFilterPipe implements PipeTransform {

  transform(list: any[], field: string, keyword:string): any {
  	if(!field || !keyword) {
  		return list;
  	}
    return list.filter(item => {
    	let itemFieldVal = item[field].toLowerCase();//如name属性
    	return itemFieldVal.indexOf(keyword) >= 0;
    })
  }

}
