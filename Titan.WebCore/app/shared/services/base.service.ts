import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import {IUserProfile} from "./definitions/IUserProfile";

export class BaseService {
    headers: Headers = new Headers({
        'Content-Type': 'application/json'
    });

    body = {
        "locale": "en-us",
        "defaultLocale": "en-us",
        "PageNumber": 1,
        "PageSize": 5,
        "IsPaging": true
    };

    constructor() {}
    currentUser: IUserProfile;

    public Headers():Headers{
        return this.headers;
    }
    
    public getJson(response: Response) {
        //console.log("In Data Service response.json() call: ",response.json());
        let body;

        // check if empty, before call json
        if (response.text()) {
            body = response.json();
        }

        return body || {};
    }

    public checkErrors(response: Response): Response {
        if (response.status >= 200 && response.status <= 300) {
            return response;
        }
        else {
            var error = new Error(response.statusText);
            error['response'] = response;
            console.error(error);
            throw error;
        }
    }
}