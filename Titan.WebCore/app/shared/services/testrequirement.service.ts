import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { TestRequirementApiUrl} from './apiUrlConst/TestRequirementApiUrls';
import { BaseService } from './base.service'
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class TestRequirementService extends BaseService {

    constructor(private http: Http) {
        super();
        this.headers.append("TenantId", "FDC1A91F-75F4-4B2F-BA8A-9C2D731EBE4D");
    }

    postGridData(): Observable<any> {
        return this.http.post(`${TestRequirementApiUrl.gridApiUrl}`, this.body, { headers: this.headers })
            .map(this.getJson);
        //this.checkErrors)
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    }
    postGridDataFilter(filterBody): Observable<any> {
        console.log("-------- Post Customers FilterBody --------", filterBody);
        return this.http.post(`${TestRequirementApiUrl.gridApiUrl}`, filterBody, { headers: this.headers })
            .map(this.getJson);
        //this.checkErrors)
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    }

    postAdd(filterBody): Observable<any> {
        console.log("-------- Post Customers FilterBody --------", filterBody);
        return this.http.post(`${TestRequirementApiUrl.postCreatedUrl}`, filterBody, { headers: this.headers })
            .map(this.getJson).catch(err => Observable.throw(err))
            .map(this.getJson);

        //this.checkErrors)
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    }

    postUpdate(filterBody): Observable<any> {
        console.log("-------- Post Customers FilterBody --------", filterBody);
        return this.http.put(`${TestRequirementApiUrl.postUpdateUrl}`, filterBody, { headers: this.headers })
            .map(this.getJson);
    }

    getById(id): Observable<any> {
        return this.http.get(`${TestRequirementApiUrl.getByIdUrl}/${id}`, { headers: this.headers })
            .map(this.getJson)
            ;
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    }

    filterByTestTemplateId(testTemplateId, filterString): Observable<any> {
        return this.http.get(`${TestRequirementApiUrl.filterByTestTemplateIdUrl}` + testTemplateId + '&filterString=' + filterString, { headers: this.headers })
            .map(this.getJson);
    }

    filterByProcedureId(procedureId, filterString): Observable<any> {
        return this.http.get(`${TestRequirementApiUrl.filterByProcedureIdUrl}` + procedureId + '&filterString=' + filterString, { headers: this.headers })
            .map(this.getJson);
    }
}
