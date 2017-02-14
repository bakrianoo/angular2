import { Component } from '@angular/core';

@Component( {
    selector: 'first-component',
    template: `
            <h1>First Component</h1>
            <h3>Child Data = {{childData}}</h3>
            <div class="row">
                <div class="from-group col-md-6">
                    <label>Name: </label>
                    <input type="text" #nameInput (keyup)="0" class="form-control" />
                </div>
            </div>

            <hr />
            <div class="col-md-10 alert alert-warning">
                <child-component (childEvent)="childData=$event" [name]="nameInput.value"></child-component>
            </div>
 
    `
} )
export class FirstComponent {
    childData: string = "";
    constructor() { 
    }
}