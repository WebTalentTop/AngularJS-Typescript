import { Injectable } from '@angular/core';
import { Http, Headers, Response, URLSearchParams} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { FormSchemaApiUrl } from './apiUrlConst/formSchema.ApiUrls';
import { IFormSchema } from "./definitions/IFormSchema";
import { LoggerService } from './logger/logger.service';

import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import {UserProfileService} from "./userProfile.service";
import {IUserProfile} from "./definitions/IUserProfile";

@Injectable()
export class FormSchemaService {
    headers: Headers = new Headers({
        'Content-Type': 'application/json'
        // 'Access-Control-Allow-Origin': '*'
    });

    pageNumber:number = 0;
    pageSize:number = 15;

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

    postGridData(): Observable<any> {
        return this.http.post(`${FormSchemaApiUrl.gridApiUrl}`, this.body, { headers: this.headers })
            .map(this.getJson);
    }
    postGridDataFilter(filterBody): Observable<any> {
        this.ls.logConsole("-------- Post Customers FilterBody --------", filterBody);
        return this.http.post(`${FormSchemaApiUrl.gridApiUrl}`, filterBody, { headers: this.headers })
            .map(this.getJson);
    }

    postAdd(filterBody): Observable<any> {
        this.ls.logConsole("-------- Post Customers FilterBody --------", filterBody);
        this.ls.logConsole("Post Schema URL ------------", FormSchemaApiUrl.postCreatedUrl);
        return this.http.post(`${FormSchemaApiUrl.postCreatedUrl}`, filterBody, { headers: this.headers })
            .map(this.getJson)

            //.catch(err => Observable.throw(err))
            //.map(this.getJson);
    }

    postUpdate(filterBody): Observable<any> {
        this.ls.logConsole("-------- Post Customers FilterBody --------", filterBody);
        return this.http.put(`${FormSchemaApiUrl.postUpdateUrl}`, filterBody, { headers: this.headers })
            .map(this.getJson);
            /*.map(this.checkErrors)
            .catch(err => Observable.throw(err))
            .map(this.getJson);*/
    }

    getById(id): Observable<any> {
        return this.http.get(`${FormSchemaApiUrl.getByIdUrl}/${id}`, { headers: this.headers })
            .map(this.getJson);
    }

    getByFormSchemaCategoryId(id):Observable<any> {
        return this.http.get(`${FormSchemaApiUrl.getByFormSchemaCategoryId}/${id}`, { headers: this.headers})
            .map(this.getJson);
    }

    getByFormSchemaCategoryIdCol(ids):Observable<any> {
        return this.http.get(`${FormSchemaApiUrl.getByFormSchemaCategoryIdCol}/${ids}`, { headers: this.headers})
            .map(this.getJson);
    }

    getFormSchemaGrid(formSchemaCategoryId): Observable<any> {
        return this.http.get(`${FormSchemaApiUrl.getFormSchemaGridUrl}/${formSchemaCategoryId}/${this.pageNumber}/${this.pageSize}`, {headers: this.headers})
            .map(this.getJson);
    }

    getAllFormsByFormSchemaCategoryId(formSchemaCategoryId): Observable<any> {
        return this.http.get(`${FormSchemaApiUrl.getAllFormsByFormSchemaCategoryIdUrl}/${formSchemaCategoryId}`, {headers: this.headers})
            .map(this.getJson);
    }

    getFormSchemaGridByEntityIdentifierId(entityIdentifierId): Observable<any> {
        return this.http.get(`${FormSchemaApiUrl.getFormSchemaGridByEntityIdentifierIdUrl}/${entityIdentifierId}/${this.pageNumber}/${this.pageSize}`, {headers: this.headers})
            .map(this.getJson);
    }

    /* getNotifications(id): Observable<any> {
     return this.http.get(`${FormSchemaFieldDataTypeApiUrl.getNotifications}/${id}`, {headers: this.headers})
     .map(this.getJson)
     .map(data => {
     this.ls.logConsole("Notification data --------", data);
     return data.$values
     });
     }*/

    private getJson(response: Response) {
        //this.ls.logConsole("In Data Service response.json() call: ", response.json());
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
