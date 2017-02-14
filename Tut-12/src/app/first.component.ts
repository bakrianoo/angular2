import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component( {
    selector: 'first-component',
    template: `
            <div class="row">
                <ul>
                    <li *ngFor="let p of posts">
                        ID: {{p.id}} <br />
                        Title: {{p.title}}
                    </li>
                </ul>
            </div>
    `,
    providers: [AppService]
} )
export class FirstComponent {
    
    posts: any;
    constructor(private __appServ: AppService) { 
       
       this.__appServ.getPosts()
                      .subscribe(
                          data => {
                              this.posts = data;
                          }
                      );
        
    }
}