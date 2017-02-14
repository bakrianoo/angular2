import { Component } from '@angular/core';

@Component( {
    selector: 'first-component',
    templateUrl: 'template/forms.component.html'
} )
export class FirstComponent {
    userData: any;
    constructor() { 
        this.userData = {
            name: "ALI",
            email: "bb@bb.com",
            class_work: 1.7,
            lab_work: 3.5
        };
    }

    setSubmit(value: any) {
        console.log(value);
    }
}