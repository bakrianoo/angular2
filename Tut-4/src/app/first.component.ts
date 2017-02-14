import { Component } from '@angular/core';
import  { course, friend } from './interfaces.module';

@Component( {
    selector: 'first-component',
    template: `
             <div class="alert row alert-success"> Name: {{name}} </div>
             <div class="alert row alert-success"> Age: {{age}} </div>
             <div class="alert row alert-success">  {{friend.name}} <br /> {{friend.age}} </div>
             <div class="alert row alert-success">  
                    {{course.course_code}} 
                    <br />
                    {{course.course_GPA}} 
            </div>

    `
} )
export class FirstComponent {
    name: string;
    age: number;
    friends: friend[];
    courses: course[];

    constructor() {
        this.name = "Abu Bakr";
        this.age = 28;
        
        this.friends = [ 
            {
                name: "Ahamd",
                age: 25
            },
            {
                name: "Ali",
                age: 31
            }
         ]

         this.courses = [ 
             {
                 course_code: "CS101",
                 course_GPA: 3.5
             },
             {
                 course_code: "CS505",
                 course_GPA: 3.7
             }
         ]
    }
}