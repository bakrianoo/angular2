import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component( {
    selector: 'courses-component',
    template: `
            <h2>Courses Component</h2>
            <ul>
                <li *ngFor="let c of courses; let i = index;">
                    <a (click)="goToCourse(i)">{{c}}</a>
                </li>
            </ul>
    `
} )
export class CoursesComponent {
    courses: string[];
    constructor(private _router: Router) { 
        this.courses = ["CS101", "MG505", "IT555"];
    }

    goToCourse(index: number){
        this._router.navigate(['/courses', index+1]);
    }
}