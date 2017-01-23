import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ProcedureApiUrl} from '../../apiUrlConst/Procedure/ProcedureApiUrls';
import { BaseService } from '../../base.service'
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import {UserProfileService} from "../../userProfile.service";
import {IUserProfile} from "../../definitions/IUserProfile";

@Injectable()
export class ProcedureService extends BaseService {
    currentUser:IUserProfile;

    constructor(private http: Http, private userProfileService: UserProfileService) {
        super();
        this.currentUser = this.userProfileService.getCurrentUserProfile();
        this.headers.append("TenantId", this.currentUser.defaultTenantId);
        this.headers.append("UserId", this.currentUser.id);
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
            .map(this.getJson);

        //this.checkErrors)
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    }

    postUpdate(filterBody): Observable<any> {
        console.log("-------- Post Customers FilterBody --------", filterBody);
        return this.http.put(`${ProcedureApiUrl.postUpdateUrl}`, filterBody, { headers: this.headers })
            .map(this.getJson);
    }

    getById(id): Observable<any> {
        return this.http.get(`${ProcedureApiUrl.getByIdUrl}` + id, { headers: this.headers })
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

    filterByTestTemplateId(testTemplateId, filterString): Observable<any> {
        return this.http.get(`${ProcedureApiUrl.filterByTestTemplateIdUrl}` + testTemplateId + '&filterString=' + filterString, { headers: this.headers })
            .map(this.getJson);
    }
}
