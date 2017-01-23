import { Injectable } from '@angular/core';
import {Http, Headers, Response, URLSearchParams} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { FormInstanceApiUrl } from './apiUrlConst/formInstance.ApiUrls';
import {IFormInstance} from "./definitions/IFormInstance";

import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import {UserProfileService} from "./userProfile.service";
import {IUserProfile} from "./definitions/IUserProfile";

@Injectable()
export class FormInstanceService {
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
        return this.http.post(`${FormInstanceApiUrl.gridApiUrl}`, this.body, { headers: this.headers })
            .map(this.getJson);
    }
    postGridDataFilter(filterBody): Observable<any> {
        console.log("-------- Post Customers FilterBody --------", filterBody);
        return this.http.post(`${FormInstanceApiUrl.gridApiUrl}`, filterBody, { headers: this.headers })
            .map(this.getJson);
    }*/

    postAdd(filterBody): Observable<any> {
        //console.log("-------- Post Customers FilterBody --------", filterBody);
        //console.log("Post Schema URL ------------", FormInstanceApiUrl.postCreatedUrl);
        return this.http.post(`${FormInstanceApiUrl.postCreatedUrl}`, filterBody, { headers: this.headers })
            .map(this.getJson)

            //.catch(err => Observable.throw(err))
            //.map(this.getJson);
    }

    postUpdate(filterBody): Observable<any> {
        //console.log("-------- Post Customers FilterBody --------", filterBody);
        return this.http.put(`${FormInstanceApiUrl.postUpdateUrl}`, filterBody, { headers: this.headers })
            .map(this.getJson);
            /*.map(this.checkErrors)
            .catch(err => Observable.throw(err))
            .map(this.getJson);*/
    }

    getGridByEntityId(id):Observable<any> {
        return this.http.get(`${FormInstanceApiUrl.getGridByEntityIdUrl}/${id}`, { headers: this.headers})
            .map(this.getJson);
    }

    getById(id): Observable<any> {
        return this.http.get(`${FormInstanceApiUrl.getByIdUrl}/${id}`, { headers: this.headers })
            .map(this.getJson);
    }
/*
    getByFormSchemaCategoryId(id):Observable<any> {
        return this.http.get(`${FormInstanceApiUrl.getByFormSchemaCategoryId}/${id}`, { headers: this.headers})
            .map(this.getJson);
    }

    getByFormSchemaCategoryIdCol(ids):Observable<any> {
        return this.http.get(`${FormInstanceApiUrl.getByFormSchemaCategoryIdCol}/${ids}`, { headers: this.headers})
            .map(this.getJson);
    }*/

    /* getNotifications(id): Observable<any> {
     return this.http.get(`${FormSchemaFieldDataTypeApiUrl.getNotifications}/${id}`, {headers: this.headers})
     .map(this.getJson)
     .map(data => {
     console.log("Notification data --------", data);
     return data.$values
     });
     }*/

    private getJson(response: Response) {

        return response.json();
    }
}
