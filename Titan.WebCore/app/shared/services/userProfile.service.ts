/**
 * Created by ZeroInfinity on 1/6/2017.
 */
import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { TitanUserProfileApiUrls } from './apiUrlConst/auth/titanUserProfile.ApiUrls';
import { IUserProfile } from './definitions/IUserProfile';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class UserProfileService {
    headers: Headers = new Headers({
        'Content-Type': 'application/json'
    });

    userProfile: IUserProfile;

    constructor(private http: Http) {
       
    }

    getCurrentUserProfile() {
        this.getById().subscribe(res => {
            this.userProfile = res.result;
            return this.userProfile;
        });
    }
    
    getById(): Observable<any> {
        return this.http.get(`${TitanUserApiUrl.getProfileByIdUrl}`, { headers: this.headers })
            .map(this.getJson)
            ;
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
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
