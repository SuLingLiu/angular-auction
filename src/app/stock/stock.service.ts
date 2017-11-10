import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs";
import "rxjs/Rx";

@Injectable()
export class StockService {

  constructor(public http: Http) { }
  /*private stocks: Stock[] = [
    new Stock(1, '第一只股票', 1.99, 1.5, '这是第一支股票，是我在学习angular', ['IT','互联网']),
    new Stock(2, '第二只股票', 2.99, 2.5, '这是第二支股票，是我在学习angular', ['IT','科技']),
    new Stock(3, '第三只股票', 3.99, 3.5, '这是第三支股票，是我在学习angular', ['IT','股票']),
    new Stock(4, '第四只股票', 4.99, 4.2, '这是第四支股票，是我在学习angular', ['网红','互联网']),
    new Stock(5, '第五只股票', 5.99, 4.7, '这是第五支股票，是我在学习angular', ['IT','科学']),
    new Stock(6, '第六只股票', 6.99, 3.3, '这是第六支股票，是我在学习angular', ['道德','互联网']),
    new Stock(7, '第柒只股票', 7.99, 2.1, '这是第柒支股票，是我在学习angular', ['IT','新福'])
  ];

  getStocks():Stock[] {
    return this.stocks;
  }

  getStock(id: number): Stock {
    let stock = this.stocks.find(stock => stock.id ==id);
    if(!stock) {
      stock = new Stock(0, '', 0, 0, '', []);
    }
    return stock;
  }  */


  getStocks(): Observable<Stock[]> {
    return this.http.get('/api/stock').map( res => res.json())
  }

  getStock(id:number): Observable<Stock> {
    return this.http.get('/api/stock/' + id).map( res => res.json())
  }
}

export class Stock {
  constructor(
      public id: number,
      public name: string,
      public price: number,
      public rating: number,
      public desc: string,
      public categories: Array<string>
  ) {}
}

