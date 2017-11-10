import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';//用命令生成会自动加入
import { MenuComponent } from './menu/menu.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { StockManageComponent } from './sidebar/stock/stock-manage/stock-manage.component';
import { StarsComponent } from './stars/stars.component';
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from './dashboard/dashboard.component';
import { StockFormComponent } from './sidebar/stock/stock-form/stock-form.component';
import {StockService} from "./stock/stock.service";
import { StockFilterPipe } from './stock/stock-filter.pipe';
import {WebSocketService} from "./header/web-socket.service";

const routeCofig: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'stock', component: StockManageComponent },
  { path: 'stock/:id', component: StockFormComponent }
];

@NgModule({
  declarations: [//声明模块里有什么东西，只能, HeaderComponent有组件、指令、管道
    AppComponent,
    HeaderComponent,
    ContentComponent,
    StockManageComponent,
    StarsComponent,
    DashboardComponent,
    StockFormComponent,
    StockFilterPipe,
    MenuComponent,
    SidebarComponent,
    FooterComponent
  ],
  imports: [//其他模块和正常运转需要的其他东西
    BrowserModule,//浏览器模块
    FormsModule, //处理表单的模块
    HttpModule, //处理请求
    ReactiveFormsModule,
    RouterModule.forRoot(routeCofig)
  ],
  providers: [StockService, WebSocketService],//模块中提供了什么服务，这里只能声明服务
  bootstrap: [AppComponent]//声明了模块的主组件
})
export class AppModule { }
