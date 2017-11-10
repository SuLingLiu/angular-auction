import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import 'rxjs/add/operator/filter';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
	public pageTitle: string = '';
	public pageDesc: string = '';
  constructor(public router: Router) { 
  	router.events
  	.filter(event => event instanceof NavigationEnd)//导航结束事件
  	.subscribe((event:NavigationEnd) => {//订阅导航结束事件
  		if(event.url == '/dashboard') {
  			this.pageTitle = "这里是首页";
  			this.pageDesc = "首页描述";
  		}else if(event.url.startsWith('/stock') ) {
  			this.pageTitle = "股票信息管理";
  			this.pageDesc = "进行股票信息基本增删改查";
  		}
  	});
  }

  ngOnInit() {
  }

}
