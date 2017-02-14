import { Component, OnInit } from '@angular/core';
import { Homeservice } from './services/home.service';

@Component({
  selector: 'my-home',
  templateUrl: "template/home.component.html",
  providers: [Homeservice]
})
export class HomeComponent  {
    blogs: any = [];

    constructor(private _lastBlogs: Homeservice) {

    }

    ngOnInit() {

        this._lastBlogs.getLasetBlogs().subscribe(
          data => {
              for(var i=0; i<9; i++) {
                  this.blogs.push(data[i]);
              }
              
          }
        );

    }

 }