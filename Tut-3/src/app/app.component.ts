import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hi All :) {{name}}</h1>`,
})
export class AppComponent  { name = 'Angular'; }
