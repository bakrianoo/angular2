import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';

import { HomeComponent }  from './home.component';
import { AboutComponent }  from './about.component';
import { BlogComponent }  from './blog.component';

import { RouterModule } from '@angular/router';
import { routing } from './app.routing';

@NgModule({
  imports:      [ BrowserModule, routing ],
  declarations: [ AppComponent, HomeComponent, AboutComponent, BlogComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
