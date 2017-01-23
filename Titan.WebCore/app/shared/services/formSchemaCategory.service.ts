/**
 * Created by ZeroInfinity on 12/8/2016.
 */
import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { FormSchemaCategoryApiUrl } from './apiUrlConst/formSchemaCategory.ApiUrls';
import { LoggerService } from './logger/logger.service';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import {UserProfileService} from "./userProfile.service";
import {IUserProfile} from "./definitions/IUserProfile";

@Injectable()
export class FormSchemaCategoryService {
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

    constructor(
        private ls: LoggerService,
        private http: Http, private userProfileService: UserProfileService) {
            this.ls.setShow(false);
            this.currentUser = this.userProfileService.getCurrentUserProfile();
            this.headers.append("TenantId", this.currentUser.defaultTenantId);
            this.headers.append("UserId", this.currentUser.id);
    }

    /*postGridData(): Observable<any> {
        return this.http.post(`${FormSchemaCategoryApiUrl.gridApiUrl}`, this.body, { headers: this.headers })
            .map(this.getJson);
    }
    postGridDataFilter(filterBody): Observable<any> {
        this.ls.logConsole("-------- Post Customers FilterBody --------", filterBody);
        return this.http.post(`${FormSchemaCategoryApiUrl.gridApiUrl}`, filterBody, { headers: this.headers })
            .map(this.getJson);
    }*/

    /*postAdd(filterBody): Observable<any> {
        this.ls.logConsole("-------- Post FilterBody --------", filterBody);
        this.ls.logConsole("Post Schema URL ------------", FormSchemaCategoryApiUrl.postCreatedUrl);
        return this.http.post(`${FormSchemaCategoryApiUrl.postCreatedUrl}`, filterBody, { headers: this.headers })
            .map(this.getJson)

        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    }

    postUpdate(filterBody): Observable<any> {
        this.ls.logConsole("-------- Post FilterBody --------", filterBody);
        return this.http.put(`${FormSchemaCategoryApiUrl.postUpdateUrl}`, filterBody, { headers: this.headers })
            .map(this.getJson);
        /!*.map(this.checkErrors)
         .catch(err => Observable.throw(err))
         .map(this.getJson);*!/
    }

    getById(id): Observable<any> {
        return this.http.get(`${FormSchemaCategoryApiUrl.getByIdUrl}/${id}`, { headers: this.headers })
            .map(this.getJson);
    }*/

    getAll(): Observable<any> {
        return this.http.get(`${FormSchemaCategoryApiUrl.getAllUrl}`, {headers: this.headers})
            .map(this.getJson);
    }

    getByEntityIdentifierId(id): Observable<any> {
        return this.http.get(`${FormSchemaCategoryApiUrl.getByEntityIdentifierId}/${id}`, {headers: this.headers})
            .map(this.getJson);
    }

    GetByEntitySubTypeId(id): Observable<any> {
        return this.http.get(`${FormSchemaCategoryApiUrl.getByEntitySubTypeId}${id}`, {headers: this.headers})
            .map(this.getJson);
    }

    private getJson(response: Response) {
        //this.ls.logConsole("In Data Service response.json() call: ", response.json());
        return response.json();
    }
}
