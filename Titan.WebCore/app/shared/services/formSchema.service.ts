import { Injectable } from '@angular/core';
import { Http, Headers, Response, URLSearchParams} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { FormSchemaApiUrl } from './apiUrlConst/formSchema.ApiUrls';
import { IFormSchema } from "./definitions/IFormSchema";
import { LoggerService } from './logger/logger.service';

import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

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

    constructor(
        private ls: LoggerService,
        private http: Http) {
        this.ls.setShow(false);
        /*this.headers.append('Access-Control-Allow-Origin', 'http://localhost:62603');
         this.headers.append('Access-Control-Allow-Methods', 'GE, PUT, POST, OPTIONS');
         this.headers.append('Content-Type', 'application/json');*/
        this.headers.append('Accept', 'application/json');
        this.headers.append("TenantId", "FDC1A91F-75F4-4B2F-BA8A-9C2D731EBE4D");
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
