import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { StepApiUrl } from './apiUrlConst/StepApiUrls';
import { BaseService } from './base.service'


import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class StepService extends BaseService{
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
        super();
        this.headers.append("TenantId", "FDC1A91F-75F4-4B2F-BA8A-9C2D731EBE4D");
    }

    postGridData(): Observable<any> {
        return this.http.post(`${StepApiUrl.gridApiUrl}`, this.body, { headers: this.headers })
            .map(this.getJson);
        //this.checkErrors)
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    }
    postGridDataFilter(filterBody): Observable<any> {
        console.log("-------- Post Customers FilterBody --------", filterBody);
        return this.http.post(`${StepApiUrl.gridApiUrl}`, filterBody, { headers: this.headers })
            .map(this.getJson);
        //this.checkErrors)
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    }

    postAdd(filterBody): Observable<any> {
        console.log("-------- Post Customers FilterBody --------", filterBody);
        return this.http.post(`${StepApiUrl.postCreatedUrl}`, filterBody, { headers: this.headers })
            .map(this.getJson).catch(err => Observable.throw(err));

        //this.checkErrors)
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    }

    postUpdate(filterBody): Observable<any> {
        console.log("-------- Post Customers FilterBody --------", filterBody);
        return this.http.put(`${StepApiUrl.postUpdateUrl}`, filterBody, { headers: this.headers })
            .map(this.getJson);
            //.map(this.checkErrors);
    }

    getById(id): Observable<any> {
        return this.http.get(`${StepApiUrl.getByIdUrl}` + id, { headers: this.headers })
            .map(this.getJson)
            ;
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    }

    getStepTypes(): Observable<any> {
        return this.http.get(`${StepApiUrl.getStepTypesUrl}`, { headers: this.headers })
            .map(this.getJson)
            ;
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    }

    getStepTypeDetails(stepTypeId): Observable<any> {
        return this.http.get(`${StepApiUrl.getStepTypeDetailsUrl}` + stepTypeId, { headers: this.headers })
            .map(this.getJson)
            ;
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    }

    getStepFrequencies(): Observable<any> {
        return this.http.get(`${StepApiUrl.getStepFrequenciesUrl}`, { headers: this.headers })
            .map(this.getJson)
            ;
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    }
}
