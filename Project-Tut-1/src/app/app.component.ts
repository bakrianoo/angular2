import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
          <!-- Fixed navbar -->
    <nav class="navbar navbar-default">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">DevDose Blog</a>
        </div>
        <div id="navbar" class="navbar-collapse collapse">
          <ul class="nav navbar-nav">
            <li class="active"><a [routerLink]='["/"]'>Home</a></li>
            <li><a [routerLink]='["/about"]'>About</a></li>

          </ul>
        </div><!--/.nav-collapse -->
      </div>
    </nav>
    
    <div class="container">
  
  <router-outlet></router-outlet>`,
})
export class AppComponent  {  }
