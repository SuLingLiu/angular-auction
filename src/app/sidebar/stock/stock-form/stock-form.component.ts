import { Component, OnInit } from '@angular/core';
import {Stock, StockService} from "../../../stock/stock.service";
// import { Stock } from '../stock-manage/stock-manage.component';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-stock-form',
  templateUrl: './stock-form.component.html',
  styleUrls: ['./stock-form.component.css']
})
export class StockFormComponent implements OnInit {
	stock: Stock = new Stock(0, "", 0, 0, "", []);

	formModel: FormGroup;
  categories:Array<string> = ['IT', '互联网', '金融'];

  constructor(private routeInfo: ActivatedRoute, private stockService: StockService, private router: Router) {}

  ngOnInit() {
  	//this.stock = new Stock(1, '第一只股票', 1.99, 1.5, '这是第一支股票，是我在学习angular', ['IT','互联网']);

      let stockId = this.routeInfo.snapshot.params['id'];
      // this.stock = this.stockService.getStock(stockId);

      /*let fb = new FormBuilder();
      this.formModel = fb.group({
        name: [this.stock.name, [Validators.required, Validators.minLength(3)]],
        price: [this.stock.price, Validators.required],
        desc: [this.stock.desc],
        categories: fb.array([
          new FormControl(this.stock.categories.indexOf(this.categories[0]) != -1),
          new FormControl(this.stock.categories.indexOf(this.categories[1]) != -1),
          new FormControl(this.stock.categories.indexOf(this.categories[2]) != -1)
        ], this.categoriesSelectValidator)
      })*/

      //======================以上是因为数据取到了

      let fb = new FormBuilder();
      this.formModel = fb.group({
        name: ['', [Validators.required, Validators.minLength(3)]],
        price: ['', Validators.required],
        desc: [''],
        categories: fb.array([
          new FormControl(false),
          new FormControl(false),
          new FormControl(false)
        ], this.categoriesSelectValidator)
      });

      this.stockService.getStock(stockId).subscribe(
        data => {   //这里返回的数据是异步的
          this.stock = data;
          this.formModel.reset({
            name: data.name,
            price: data.price,
            desc: data.desc,
            categories: [
              data.categories.indexOf(this.categories[0]) != -1,
              data.categories.indexOf(this.categories[1]) != -1,
              data.categories.indexOf(this.categories[2]) != -1
            ]
          })
        }
      );




  }

  categoriesSelectValidator(control: FormArray) {
    var valid = false;
    control.controls.forEach(control => {
      if(control.value) {
        valid = true;
      }
    })
    return valid ? null : {categoriesLength: true};
  }

  cancel() {
      this.router.navigateByUrl('/stock')
  }
  save() {


    let name:any = this.formModel.get('name').errors;
    console.log('name的校验信息：'+JSON.stringify(name))

    var chineseCategories = [];
    var index = 0;
    for(var i=0; i<3; i++) {
      if(this.formModel.value.categories[i]) {
        chineseCategories[index++] = this.categories[i];
      }
    }
    this.formModel.value.categories = chineseCategories;
    this.formModel.value.rating = this.stock.rating;//给评级赋值，因为这个没法校验
    console.log(this.formModel.value)
      //this.router.navigateByUrl('/stock')
  }

}
