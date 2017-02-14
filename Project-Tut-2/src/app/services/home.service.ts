import { Injectable} from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import "rxjs/add/operator/map";

@Injectable()
export class Homeservice {

    constructor( private __http: Http ){

    }

    getLasetBlogs() {
        return this.__http.get("https://jsonplaceholder.typicode.com/photos")
                    .map(res => res.json());
    }
}