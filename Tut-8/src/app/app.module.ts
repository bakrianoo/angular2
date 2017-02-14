import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { FirstComponent } from './first.component';

import { HomeComponent } from './home.component';
import { CoursesComponent } from './courses.component';
import { AboutComponent } from './about.component';

import { routers } from './app.routing';

@NgModule({
  imports:      [ BrowserModule, routers ],
  declarations: [ AppComponent, FirstComponent, HomeComponent, CoursesComponent, AboutComponent ],
  bootstrap:    [ FirstComponent ]
})
export class AppModule { }
