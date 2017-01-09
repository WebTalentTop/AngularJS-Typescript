///<reference path="apiUrlConst/titanUserApiUrls.ts"/>
import {Injectable} from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import { TitanUserProfileApiUrls} from "./apiUrlConst/titanUserProfile.ApiUrls";
import {IUserProfile} from "./definitions/IUserProfile";

@Injectable()
export class TitanUserProfileService {
    headers: Headers = new Headers({
        'Content-Type': 'application/json'
    });

    currentUser:IUserProfile;

    constructor(private http: Http) {

    }

    getCurrentUserProfile():Observable<any> {
        return this.http.get(`${TitanUserProfileApiUrls.getCurrentUserProfileUrl}`, {headers:this.headers})
            .map(this.getJson);
    }

    getById(): Observable<any> {
        return this.http.get(`${TitanUserProfileApiUrls.getCurrentUserProfileUrl}`, {headers: this.headers})
            .map(this.getJson)
            .map(user => {
                this.currentUser = user.result;
                return user;
            });
    }


    private getJson(response: Response) {
        console.log("In Data Service response.json() call: ", response.json());
        return response.json();
    }

    private checkErrors(response: Response): Response {
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
