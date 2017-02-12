import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { FirstComponent } from './first.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, FirstComponent ],
  bootstrap:    [ FirstComponent ]
})
export class AppModule { }
