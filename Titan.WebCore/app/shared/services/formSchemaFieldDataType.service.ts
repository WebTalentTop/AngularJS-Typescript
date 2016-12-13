import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { FormSchemaFieldDataTypeApiUrl } from './apiUrlConst/formSchemaFieldDataType.ApiUrls';
import { IFormSchemaFieldDataType } from './definitions/IFormSchemaFieldDataType';

import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import {BaseService} from "./base.service";

@Injectable()
export class FormSchemaFieldDataTypeService extends BaseService{
    body = {
        "locale": "en-us",
        "defaultLocale": "en-us",
        "PageNumber": 1,
        "PageSize": 15,
        "IsPaging": true
    };

    constructor(private http: Http) {
        super();
        /*this.headers.append('Access-Control-Allow-Origin', 'http://localhost:62603');
         this.headers.append('Access-Control-Allow-Methods', 'GE, PUT, POST, OPTIONS');
         this.headers.append('Content-Type', 'application/json');*/
        super.Headers().append('Accept', 'application/json');
        super.Headers().append("TenantId", "FDC1A91F-75F4-4B2F-BA8A-9C2D731EBE4D");
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
