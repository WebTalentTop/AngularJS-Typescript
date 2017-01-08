/**
 * Created by ZeroInfinity on 12/16/2016.
 */

import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { EntityIdentifierApiUrl} from './apiUrlConst/entityIdentifier.ApiUrls';
import { LoggerService } from './logger/logger.service';

import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class EntityIdentifierService {
    headers: Headers = new Headers({
        'Content-Type': 'application/json'
        // 'Access-Control-Allow-Origin': '*'
    });

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

    getById(id): Observable<any> {
        return this.http.get(`${EntityIdentifierApiUrl.getByIdUrl}/${id}`, { headers: this.headers })
            .map(this.getJson)
            ;
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    }
    getByName(name): Observable<any> {
        return this.http.get(`${EntityIdentifierApiUrl.getByName}/${name}`, { headers: this.headers })
            .map(this.getJson)
            ;
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    }

    private getJson(response: Response) {
        //this.ls.logConsole("In Data Service response.json() call: ", response.json());
        return response.json();
    }
}
