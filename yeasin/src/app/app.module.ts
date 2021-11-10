import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { SultanComponent } from './sultan/sultan.component';
import { FahadComponent } from './fahad/fahad.component';



@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    SultanComponent,
    FahadComponent,
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
