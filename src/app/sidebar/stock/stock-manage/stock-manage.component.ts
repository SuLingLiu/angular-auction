import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {StockService, Stock} from "../../../stock/stock.service";
import { FormControl } from '@angular/forms';
import 'rxjs/Rx';
import {Observable} from "rxjs";

@Component({
  selector: 'app-stock-manage',
  templateUrl: './stock-manage.component.html',
  styleUrls: ['./stock-manage.component.css']
})
export class StockManageComponent implements OnInit {

	// private stocks: Array<Stock>;
	private stocks: Observable<Stock[]>;
	private nameFilter: FormControl = new FormControl();
	private keyword: string;

  constructor(public router: Router, private stockService: StockService) { }

  ngOnInit() {
	 /* this.stocks = [
		  new Stock(1, '第一只股票', 1.99, 1.5, '这是第一支股票，是我在学习angular', ['IT','互联网']),
		  new Stock(2, '第二只股票', 2.99, 2.5, '这是第二支股票，是我在学习angular', ['IT','科技']),
		  new Stock(3, '第三只股票', 3.99, 3.5, '这是第三支股票，是我在学习angular', ['IT','股票']),
		  new Stock(4, '第四只股票', 4.99, 4.2, '这是第四支股票，是我在学习angular', ['网红','互联网']),
		  new Stock(5, '第五只股票', 5.99, 4.7, '这是第五支股票，是我在学习angular', ['IT','科学']),
		  new Stock(6, '第六只股票', 6.99, 3.3, '这是第六支股票，是我在学习angular', ['道德','互联网']),
		  new Stock(7, '第柒只股票', 7.99, 2.1, '这是第柒支股票，是我在学习angular', ['IT','新福'])
	  ];*/
  	 this.stocks = this.stockService.getStocks();
     this.nameFilter.valueChanges
      .debounceTime(500)
      .subscribe(value => this.keyword = value);
  }

  create() {
    this.router.navigateByUrl('/stock/0');
  }

  update(stock: Stock) {
    this.router.navigateByUrl('/stock/' + stock.id);
  }

}

/*
export class Stock {
	constructor(
		public id: number,
		public name: string,
		public price: number,
		public rating: number,
		public desc: string,
		public categories: Array<string>
	) {

	}
}*/
