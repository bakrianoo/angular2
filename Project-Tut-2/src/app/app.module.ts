import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http'; 

import { AppComponent }  from './app.component';

import { HomeComponent }  from './home.component';
import { AboutComponent }  from './about.component';
import { BlogComponent }  from './blog.component';

import { RouterModule } from '@angular/router';
import { routing } from './app.routing';

@NgModule({
  imports:      [ BrowserModule, routing, HttpModule ],
  declarations: [ AppComponent, HomeComponent, AboutComponent, BlogComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
