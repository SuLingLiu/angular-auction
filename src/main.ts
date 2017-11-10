//import './polyfills.ts';//导入一些必要的库，以便angular能运行在一些老版本的浏览器中

import { enableProdMode } from '@angular/core';//关闭angular的开发这模式
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';//告诉angular使用哪个模块来启动整个应用

import { AppModule } from './app/app.module';//导入主模块
import { environment } from './environments/environment';//导入环境配置

if (environment.production) {//如果是生产环境则关闭angular的开发这模式
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
