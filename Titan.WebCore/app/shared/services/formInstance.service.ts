import { Injectable } from '@angular/core';
import {Http, Headers, Response, URLSearchParams} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { FormInstanceApiUrl } from './apiUrlConst/formInstance.ApiUrls';
import {IFormInstance} from "./definitions/IFormInstance";

import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

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

    constructor(private http: Http) {
        /*this.headers.append('Access-Control-Allow-Origin', 'http://localhost:62603');
         this.headers.append('Access-Control-Allow-Methods', 'GE, PUT, POST, OPTIONS');
         this.headers.append('Content-Type', 'application/json');*/
        this.headers.append('Accept', 'application/json');
        this.headers.append("TenantId", "FDC1A91F-75F4-4B2F-BA8A-9C2D731EBE4D");
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
        console.log("-------- Post Customers FilterBody --------", filterBody);
        console.log("Post Schema URL ------------", FormInstanceApiUrl.postCreatedUrl);
        return this.http.post(`${FormInstanceApiUrl.postCreatedUrl}`, filterBody, { headers: this.headers })
            .map(this.getJson)

            //.catch(err => Observable.throw(err))
            //.map(this.getJson);
    }

    postUpdate(filterBody): Observable<any> {
        console.log("-------- Post Customers FilterBody --------", filterBody);
        return this.http.put(`${FormInstanceApiUrl.postUpdateUrl}`, filterBody, { headers: this.headers })
            .map(this.getJson);
            /*.map(this.checkErrors)
            .catch(err => Observable.throw(err))
            .map(this.getJson);*/
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
        console.log("In Data Service response.json() call: ", response.json());
        return response.json();
    }
}
