import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { FormSchemaFieldDataTypeApiUrl } from './apiUrlConst/formSchemaFieldDataType.ApiUrls';
import { IFormSchemaFieldDataType } from './definitions/IFormSchemaFieldDataType';

import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import {BaseService} from "./base.service";
import {UserProfileService} from "./userProfile.service";
import {IUserProfile} from "./definitions/IUserProfile";

@Injectable()
export class FormSchemaFieldDataTypeService extends BaseService{
    body = {
        "locale": "en-us",
        "defaultLocale": "en-us",
        "PageNumber": 1,
        "PageSize": 15,
        "IsPaging": true
    };

    currentUser: IUserProfile;

    constructor(private http: Http, private userProfileService: UserProfileService) {
        super();
        this.currentUser = this.userProfileService.getCurrentUserProfile();
        this.headers.append("TenantId", this.currentUser.defaultTenantId);
        this.headers.append("UserId", this.currentUser.id);
    }

   /* postGridData(): Observable<any> {
        return this.http.post(`${FormSchemaFieldDataTypeApiUrl.gridApiUrl}`, this.body, { headers: this.headers })
            .map(this.getJson);
    }
    postGridDataFilter(filterBody): Observable<any> {
        console.log("-------- Post Customers FilterBody --------", filterBody);
        return this.http.post(`${FormSchemaFieldDataTypeApiUrl.gridApiUrl}`, filterBody, { headers: this.headers })
            .map(this.getJson);
    }

    postAdd(filterBody): Observable<any> {
        console.log("-------- Post Customers FilterBody --------", filterBody);
        return this.http.post(`${FormSchemaFieldDataTypeApiUrl.postCreatedUrl}`, filterBody, { headers: this.headers })
            .map(this.getJson).catch(err => Observable.throw(err))
            .map(this.getJson);
    }

    postUpdate(filterBody): Observable<any> {
        console.log("-------- Post Customers FilterBody --------", filterBody);
        return this.http.put(`${FormSchemaFieldDataTypeApiUrl.postUpdateUrl}`, filterBody, { headers: this.headers })
            .map(this.getJson)
            .map(this.checkErrors)
            .catch(err => Observable.throw(err))
            .map(this.getJson);
    }*/

    getById(id): Observable<any> {
        return this.http.get(`${FormSchemaFieldDataTypeApiUrl.getByIdUrl}/${id}`, { headers: this.headers })
            .map(super.getJson);
    }

    getAll(): Observable<any> {
        return this.http.get(`${FormSchemaFieldDataTypeApiUrl.getAll}`, {headers: this.headers})
            .map(super.getJson);
    }
}
