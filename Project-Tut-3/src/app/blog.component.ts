import { Component, OnInit } from '@angular/core';
import { Blogservice } from './services/blog.service';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs/Rx';



@Component({
  selector: 'my-blog',
  templateUrl: "template/blog.component.html",
  providers: [Blogservice]
})
export class BlogComponent  {
  id: number = 0;
  photo: string = ""
  title: string = ""
  body: string = ""
  comments: any[];

  single_comment:any = {
      postId: 0,
      id: 0,
      body: "",
      name: "",
      email: ""
  }

   constructor(private actRoute: ActivatedRoute, private _blogServ: Blogservice) {

   }

   
   ngOnInit() {
     this.id = this.actRoute.snapshot.params['id'];
     this.single_comment['postId'] = this.actRoute.snapshot.params['id'];

      Observable.forkJoin(
        this._blogServ.getBlogData(this.id),
        this._blogServ.getBlogPhoto(this.id),
        this._blogServ.getBlogComments(this.id)
      ).subscribe(
        data => {
          this.title = data[0].title;
          this.body= data[0].body;
          this.photo = data[1].url;
          this.comments = data[2]
        }
      );
   }

   setComment(form: any) {
      this._blogServ.sendComment(this.single_comment);
      this.comments.push( this.single_comment );
   }

 }