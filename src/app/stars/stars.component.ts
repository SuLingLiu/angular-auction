import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit, OnChanges {
  ngOnChanges(changes: SimpleChanges): void {
    //为了简化代码，可以把ngOnInit和clickStart代码写到这里
    this.stars = [];
    for(let i=1; i<=5; i++) {
      this.stars.push(i > this.rating);
    }
  }

  //引入Input，是因为父模块要像子模块传数据 <app-stars [rating]="stock.rating"></app-stars>
	@Input()
	rating: number = 0;

	stars:Array<boolean>;

	@Input()
	readonly: boolean = true;

	//输出属性写成ratingChange是有一定的目的，组件调用的时候可以实现双向数据绑定如；<app-stars [(rating)]="stock.rating" [readonly]="false"></app-stars>
	@Output()
  ratingChange: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    /*this.stars = [];
  	for(let i=1; i<=5; i++) {
  		this.stars.push(i > this.rating);
  	}*/
  }

  clickStart(index: number) {
    if(!this.readonly) {
      this.rating = index + 1;
      /*this.stars = [];
      for(let i=1; i<=5; i++) {
        this.stars.push(i > this.rating);
      }*/

      this.ratingChange.emit(this.rating);
    }
  }

}
