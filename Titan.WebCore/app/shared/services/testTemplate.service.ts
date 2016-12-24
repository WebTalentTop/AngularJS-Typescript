import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { TestTemplateApiUrl} from './apiUrlConst/TestTemplateApiUrls';
import { BaseService } from './base.service'
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class TestTemplateService extends BaseService {
    constructor(private http: Http) {
        super();
        this.headers.append("TenantId", "FDC1A91F-75F4-4B2F-BA8A-9C2D731EBE4D");
    }

    postGridData(): Observable<any> {
        return this.http.post(`${TestTemplateApiUrl.gridApiUrl}`, this.body, { headers: this.headers })
            .map(this.getJson);
        //this.checkErrors)
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    }
    getTestTemplates(): Observable<any> {
        return this.http.get(`${TestTemplateApiUrl.getAllUrl}`, { headers: this.headers })
            .map(this.getJson)
            //.map(data => {
            //    console.log("Notification data --------", data);
            //    return data.$values
            //});
            ;
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    }
    postGridDataFilter(filterBody): Observable<any> {
        console.log("-------- Post Customers FilterBody --------", filterBody);
        return this.http.post(`${TestTemplateApiUrl.gridApiUrl}`, filterBody, { headers: this.headers })
            .map(this.getJson);
        //this.checkErrors)
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    }

    postAdd(filterBody): Observable<any> {
        console.log("-------- Post Customers FilterBody --------", filterBody);
        return this.http.post(`${TestTemplateApiUrl.postCreatedUrl}`, filterBody, { headers: this.headers })
            .map(this.getJson);

        //this.checkErrors)
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    }

    postUpdate(filterBody): Observable<any> {
        console.log("-------- Post Customers FilterBody --------", filterBody);
        return this.http.put(`${TestTemplateApiUrl.postUpdateUrl}`, filterBody, { headers: this.headers })
            .map(this.getJson);
    }

    getById(id): Observable<any> {
        return this.http.get(`${TestTemplateApiUrl.getByIdUrl}/${id}`, { headers: this.headers })
            .map(this.getJson)
            ;
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    }

    postAddProcedures(filterBody, testTemplateId): Observable<any> {
        return this.http.post(`${TestTemplateApiUrl.postAddTestTemplateProcedureUrl}` + testTemplateId, filterBody, { headers: this.headers })
            .map(this.getJson);
    }

    getTestTemplateProcedures(testTemplateId): Observable<any> {
        return this.http.get(`${TestTemplateApiUrl.getTestTemplateProcedureUrl}` + testTemplateId, { headers: this.headers })
            .map(this.getJson);
    }

    postDeleteTestTemplateProcedure(testTemplateId, procedureId): Observable<any> {
        return this.http.put(`${TestTemplateApiUrl.postDeleteTestTemplateProcedureUrl}` + testTemplateId + '&procedureId=' + procedureId, null, { headers: this.headers })
            .map(this.getJson);
    }
}
