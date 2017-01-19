import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ModuleItemOptionApiUrl } from './apiUrlConst/ModuleItemOptionApiUrls';
import { BaseService } from './base.service'

import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class ModuleItemOptionService extends BaseService {
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

    //postGridData(): Observable<any> {
    //    return this.http.post(`${ModuleItemOptionApiUrl.gridApiUrl}`, this.body, { headers: this.headers })
    //        .map(this.getJson);
    //    //this.checkErrors)
    //    //.catch(err => Observable.throw(err))
    //    //.map(this.getJson);
    //}
    //postGridDataFilter(filterBody): Observable<any> {
    //    console.log("-------- Post Customers FilterBody --------", filterBody);
    //    return this.http.post(`${ModuleItemOptionApiUrl.gridApiUrl}`, filterBody, { headers: this.headers })
    //        .map(this.getJson);
    //    //this.checkErrors)
    //    //.catch(err => Observable.throw(err))
    //    //.map(this.getJson);
    //}

    postAdd(filterBody): Observable<any> {
        console.log("-------- Post Customers FilterBody --------", filterBody);
        return this.http.post(`${ModuleItemOptionApiUrl.postCreatedUrl}`, filterBody, { headers: this.headers })
            .map(this.getJson);

        //this.checkErrors)
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    }

    postUpdate(filterBody): Observable<any> {
        console.log("-------- Post Customers FilterBody --------", filterBody);
        return this.http.put(`${ModuleItemOptionApiUrl.postUpdateUrl}`, filterBody, { headers: this.headers })
            .map(this.getJson);
        //.map(this.checkErrors);
    }

    getById(id): Observable<any> {
        return this.http.get(`${ModuleItemOptionApiUrl.getByIdUrl}` + id, { headers: this.headers })
            .map(this.getJson)
            ;
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    }

    postDelete(filterBody): Observable<any> {
        return this.http.put(`${ModuleItemOptionApiUrl.deleteUrl}`, filterBody, { headers: this.headers })
            .map(this.getJson);
        //.map(this.checkErrors);
    }
}
