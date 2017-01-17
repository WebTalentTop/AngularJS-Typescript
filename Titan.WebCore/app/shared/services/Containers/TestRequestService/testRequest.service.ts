﻿import {Injectable} from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {TestReqestApiUrl} from '../../apiUrlConst/TestRequest/TestRequestApiUrl';
import {BaseService} from '../../base.service'

import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class TestRequestService extends BaseService {
    headers: Headers = new Headers({
        'Content-Type': 'application/json'
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
        //this.headers.append("TenantId", "FDC1A91F-75F4-4B2F-BA8A-9C2D731EBE4D");
    }


    getTestFacilityScheduleById(id): Observable<any> {

        return this.http.get(`${TestReqestApiUrl.getFacilityScheduleByTestRequestIdUrl}` + id, {headers: this.headers})
            .map(this.getJson);

    }

    getUserScheduleById(id, idType): Observable<any> {

            return this.http.get(`${TestReqestApiUrl.getUserScheduleByIdUrl}${id}/${idType}`, {headers: this.headers})
                .map(this.getJson);

    }

    postDeleteUserScheduleInstance(formBody): Observable<any> {
        console.log("-------- testRequest/DeleteUserScheduleInstance --------", formBody);
        return this.http.post(`${TestReqestApiUrl.postDeleteUserScheduleInstanceUrl}`,
            formBody, {headers: this.headers})
            .map(this.getJson);
    }
    postAssignUser(formBody): Observable<any> {
        console.log("-------- testRequest/DeleteUserScheduleInstance --------", formBody);
        return this.http.post(`${TestReqestApiUrl.postAssignUserUrl}`,
            formBody, {headers: this.headers})
            .map(this.getJson);
    }
    postTestRequestTestTemplateInsert(formBody): Observable<any> {
        console.log("-------- testRequest/DeleteUserScheduleInstance --------", formBody);
        return this.http.post(`${TestReqestApiUrl.postTestRequestTestTemplateInsert}`,
            formBody, { headers: this.headers })
            .map(this.getJson);
    }
    GetAllTestRequestPartsList(partsListId): Observable<any> {
        return this.http.get(`${TestReqestApiUrl.GetAllTestRequestPartsList}${partsListId}`, { headers: this.headers })
            .map(this.getJson);

    }
    getTestTemplateProceduresByTestRequestId(testRequestId): Observable<any> {
        return this.http.get(`${TestReqestApiUrl.getTestTemplateProceduresByTestRequestId}/${testRequestId}`, { headers: this.headers })
            .map(this.getJson);

    }
    postAddPartsList(formBody): Observable<any> {
        console.log("-------- testRequest/DeleteUserScheduleInstance --------", formBody);
        return this.http.post(`${TestReqestApiUrl.postAddPartsList}`,
            formBody, { headers: this.headers })
            .map(this.getJson);
    }
    postMoveTestRequest(formBody) : Observable<any> {
        return this.http.post(`${TestReqestApiUrl.postDeleteUserScheduleInstanceUrl}`,
            formBody, {headers: this.headers})
            .map(this.getJson);
    }
    getProcedures(): Observable<any> {
        return this.http.get(`${TestReqestApiUrl.getProcedures}`, { headers: this.headers })
            .map(this.getJson)
            ;
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    }
    //getById(id): Observable<any> {
    //    return this.http.get(`${StepApiUrl.getByIdUrl}` + id, { headers: this.headers })
    //        .map(this.getJson)
    //        ;
    //    //.catch(err => Observable.throw(err))
    //    //.map(this.getJson);
    //}


    //filterByProcedureId(procedureId, filterString): Observable<any> {
    //    return this.http.get(`${StepApiUrl.filterByProcedureIdUrl}` + procedureId + '&filterString=' + filterString, { headers: this.headers })
    //        .map(this.getJson);
    //}
}