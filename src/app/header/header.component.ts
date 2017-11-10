import { Component, OnInit } from '@angular/core';
import {WebSocketService} from "./web-socket.service";
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  messageCount = 0;
  title:string = environment.appTitle;
  constructor(public wsService: WebSocketService) { }

  ngOnInit() {
    this.wsService.connect('ws://localhost:8085')
      .map(event => JSON.parse(event))  //因为传过来的是字符串对象
      .subscribe(
        event => this.messageCount = event.messageCount
      );

  }
}
