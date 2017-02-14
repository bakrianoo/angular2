import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { FirstComponent } from './first.component';
import { ChildComponent } from './child.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, FirstComponent, ChildComponent ],
  bootstrap:    [ FirstComponent ]
})
export class AppModule { }
