/**
 * Created by ZeroInfinity on 12/8/2016.
 */
import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { EntityEventApiUrl } from './apiUrlConst/entityEvent.ApiUrls';

import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import {UserProfileService} from "./userProfile.service";
import {IUserProfile} from "./definitions/IUserProfile";

@Injectable()
export class EntityEventService {
    headers: Headers = new Headers({
        'Content-Type': 'application/json'
        // 'Access-Control-Allow-Origin': '*'
    });

    body = {
        "locale": "en-us",
        "defaultLocale": "en-us",
        "PageNumber": 1,
        "PageSize": 15,
        "IsPaging": true
    };
    private currentUser: IUserProfile;

    constructor(private http: Http, private userProfileService: UserProfileService) {
        this.currentUser = this.userProfileService.getCurrentUserProfile();
        this.headers.append("TenantId", this.currentUser.defaultTenantId);
        this.headers.append("UserId", this.currentUser.id);
    }

    /*postGridData(): Observable<any> {
     return this.http.post(`${FormSchemaCategoryApiUrl.gridApiUrl}`, this.body, { headers: this.headers })
     .map(this.getJson);
     }
     postGridDataFilter(filterBody): Observable<any> {
     console.log("-------- Post Customers FilterBody --------", filterBody);
     return this.http.post(`${FormSchemaCategoryApiUrl.gridApiUrl}`, filterBody, { headers: this.headers })
     .map(this.getJson);
     }*/

    postAdd(filterBody): Observable<any> {
        console.log("-------- Post FilterBody --------", filterBody);
        console.log("Post Schema URL ------------", EntityEventApiUrl.postCreatedUrl);
        return this.http.post(`${EntityEventApiUrl.postCreatedUrl}`, filterBody, { headers: this.headers })
            .map(this.getJson)

        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    }

    postUpdate(filterBody): Observable<any> {
        console.log("-------- Post FilterBody --------", filterBody);
        return this.http.put(`${EntityEventApiUrl.postUpdateUrl}`, filterBody, { headers: this.headers })
            .map(this.getJson);
        /*.map(this.checkErrors)
         .catch(err => Observable.throw(err))
         .map(this.getJson);*/
    }

    getById(id): Observable<any> {
        return this.http.get(`${EntityEventApiUrl.getByIdUrl}/${id}`, { headers: this.headers })
            .map(this.getJson);
    }
    getAll():Observable<any> {
        return this.http.get(`${EntityEventApiUrl.getAllUrl}`, {headers: this.headers})
            .map(this.getJson);
    }

    getFindByEntityIdentifierId(id):Observable<any> {
        return this.http.get(`${EntityEventApiUrl.getFindByEntityIdentifierId}/${id}`, {headers: this.headers})
            .map(this.getJson);
    }

    private getJson(response: Response) {

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
