import { Component } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component( {
    selector: 'child-component',
    template: `
            <h3>My Name is : {{name}}</h3>

            <div class="row">
                <div class="from-group col-md-6">
                    <label>Country: </label>
                    <input type="text" #countryInput (keyup)="sendToParent(countryInput.value)" class="form-control" />
                </div>
            </div>
    `,
    inputs: ['name'],
    outputs: ['childEvent']
} )
export class ChildComponent {
    name: string;
    childEvent = new EventEmitter<string>();

    constructor() { 
        this.name = "";
    }

    sendToParent(value: string) {
        this.childEvent.emit( value );
    }
}