import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ProcedureApiUrl} from './apiUrlConst/ProcedureApiUrls';
import { BaseService } from './base.service'
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class ProcedureService extends BaseService {
    constructor(private http: Http) {
        super();
        this.headers.append("TenantId", "FDC1A91F-75F4-4B2F-BA8A-9C2D731EBE4D");
    }

    postGridData(): Observable<any> {
        return this.http.post(`${ProcedureApiUrl.gridApiUrl}`, this.body, { headers: this.headers })
            .map(this.getJson);
        //this.checkErrors)
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    }
    postGridDataFilter(filterBody): Observable<any> {
        console.log("-------- Post Customers FilterBody --------", filterBody);
        return this.http.post(`${ProcedureApiUrl.gridApiUrl}`, filterBody, { headers: this.headers })
            .map(this.getJson);
        //this.checkErrors)
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    }

    postAdd(filterBody): Observable<any> {
        console.log("-------- Post Customers FilterBody --------", filterBody);
        return this.http.post(`${ProcedureApiUrl.postCreatedUrl}`, filterBody, { headers: this.headers })
            .map(this.getJson).catch(err => Observable.throw(err));

        //this.checkErrors)
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    }

    postUpdate(filterBody): Observable<any> {
        console.log("-------- Post Customers FilterBody --------", filterBody);
        return this.http.put(`${ProcedureApiUrl.postUpdateUrl}`, filterBody, { headers: this.headers })
            .map(this.getJson)
            .catch(err => Observable.throw(err));
    }

    getById(id): Observable<any> {
        return this.http.get(`${ProcedureApiUrl.getByIdUrl}/${id}`, { headers: this.headers })
            .map(this.getJson);
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    }

    postAddTestRequirements(filterBody, procedureId): Observable<any> {
        return this.http.post(`${ProcedureApiUrl.postAddProcedureRequirementUrl}` + procedureId, filterBody, { headers: this.headers })
            .map(this.getJson);
    }

    postAddSteps(filterBody, procedureId): Observable<any> {
        return this.http.post(`${ProcedureApiUrl.postAddProcedureStepUrl}` + procedureId, filterBody, { headers: this.headers })
            .map(this.getJson);
    }

    putProcedureStepDisplayOrder(filterBody, procedureId): Observable<any> {
        return this.http.put(`${ProcedureApiUrl.putProcedureStepDisplayOrderUrl}` + procedureId, filterBody, { headers: this.headers })
            .map(this.getJson);
    }

    getProcedureRequirements(procedureId): Observable<any> {
        return this.http.get(`${ProcedureApiUrl.getProcedureRequirementUrl}` + procedureId, { headers: this.headers })
            .map(this.getJson);
    }

    getProcedureSteps(procedureId): Observable<any> {
        return this.http.get(`${ProcedureApiUrl.getProcedureStepUrl}` + procedureId, { headers: this.headers })
            .map(this.getJson);
    }

    postDeleteProcedureRequirement(procedureId, testRequirementId): Observable<any> {
        return this.http.put(`${ProcedureApiUrl.postDeleteProcedureRequirementUrl}` + procedureId + '&testRequirementId=' + testRequirementId, null, { headers: this.headers })
            .map(this.getJson);
    }

    postDeleteProcedureStep(procedureId, stepId): Observable<any> {
        return this.http.put(`${ProcedureApiUrl.postDeleteProcedureStepUrl}` + procedureId + '&stepId=' + stepId, null, { headers: this.headers })
            .map(this.getJson);
    }
}
