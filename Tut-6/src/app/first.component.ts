import { Component } from '@angular/core';

@Component( {
    selector: 'first-component',
    template: `
            <h2>{{name}}</h2>
            <button (click)="click_me(nameInput.value)" class="btn">Click Me</button>

            <hr />
            <div class="row">
                <div class="form-group col-md-6">
                    <label>Name: </label>
                    <input type="text" #nameInput class="form-control" />
                </div>
            </div>

            <hr /><h4>Courses</h4>
            <ul>
                <li *ngFor="let c of courses"> {{c}} </li>
            </ul>

            <hr />
            <div class="row">
                <div class="form-group col-md-6">
                    <label>Name: </label>
                    <input type="text" #newCourse class="form-control" /> <br />
                    <button (click)="add_course(newCourse.value)" class="btn">Add New Course</button>
                </div>
            </div>

            <h2>Two-Ways</h2>
            <h4>{{country}}</h4>

            <hr />
            <div class="row">
                <div class="form-group col-md-6">
                    <label>Country: </label>
                    <input type="text" [(ngModel)]="country" class="form-control" />
                </div>
            </div>
    `
} )
export class FirstComponent {
    name: string;
    country: string;
    courses: any[];
    
    constructor() {
        this.name = "Ahmad";
        this.country = "Egypt";
        this.courses = ["Math", "Physics"];
    }

    click_me(value: string) {
        this.name = value;
    }

    add_course(value: string){
        this.courses.push( value );
    }
}