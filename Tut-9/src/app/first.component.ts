import { Component } from '@angular/core';

@Component( {
    selector: 'first-component',
    template: `
            <div class="row">
                <hr />
                <a [routerLink]='["/"]' class="btn btn-default col-md-4">Home</a>
                <a [routerLink]='["/courses"]' class="btn btn-default col-md-4">Courses</a>
                <a [routerLink]='["/about"]' class="btn btn-default col-md-4">About</a>
            </div>
            <div class="row">
                <router-outlet></router-outlet>
            </div>
    `
} )
export class FirstComponent {
    constructor() { 
    }
}