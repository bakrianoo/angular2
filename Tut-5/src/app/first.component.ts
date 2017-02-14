import { Component } from '@angular/core';
import  { course, friend } from './interfaces.module';

@Component( {
    selector: 'first-component',
    template: `
             <div class="alert row alert-success"> Name: {{name}} </div>
             <div class="alert row alert-success"> Age: {{age}} </div>
             
             <h4>Friends</h4>
             <ul>
                <li *ngFor="let f of friends; let i = index">
                    {{i}}: {{f.name}} , {{f.age}}
                </li>
             </ul>

             <div *ngIf="courses.length > 0">
                <h4>Courses</h4>
                <ul>
                    <li *ngFor="let c of courses">
                        {{c.course_code}} , {{c.course_GPA}}
                    </li>
                </ul>
             </div>
    `
} )
export class FirstComponent {
    name: string;
    age: number;
    friends: friend[];
    courses: course[];

    constructor() {

        this.friends = [ 
            { name: "Omar", age: 25 },
            {name: "Salim", age: 31 }
        ]

         this.courses = [ 
             { course_code: "CS101", course_GPA: 3.5 },
             { course_code: "CS505", course_GPA: 3.7 }
         ]
        this.name = "Abu Bakr";
        this.age = 28;
        
        
    }
}