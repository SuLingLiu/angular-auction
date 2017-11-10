import { Component } from '@angular/core';//引入装饰器

//组件元数据装饰器，定义了一个组件和组件的元数据
@Component({
  selector: 'app-root',//可以通过这个标签来调用
  templateUrl: './app.component.html',//模板,没有模板就不叫组件
  styleUrls: ['./app.component.css']
})

//typescript类，下面只是一个类，要把它变成一个angular的组件，需要用掉@Component装饰器，这样的一个组合才是angular的组件
//控制器是一个被@Component装饰器装饰的typescript类，与页面相关的属性和方法都在这个类里
export class AppComponent {
  title = 'app';
}
