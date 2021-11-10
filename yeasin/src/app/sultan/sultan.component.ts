import { Component, OnInit } from '@angular/core';

@Component({
  //selector: '[app-sultan]',
  //selector:'.app-sultan',
  selector: 'app-sultan',

 
  //template: '<app-server></app-server><app-server></app-server>'   if single line
  //template:`
  //<app-server></app-server>
  // <app-server></app-server>`   if multi line then use back tick 
  templateUrl: './sultan.component.html',
  styleUrls: ['./sultan.component.css']
})
export class SultanComponent implements OnInit {

  //string interpolation
  serverId:number = 10;
  serverStatus:string = 'offline';

  //property & event binding
  allowNewServer = false;
  serverCreationStatus = "No server was Created";
  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.serverCreationStatus = "server created";
  }
}


