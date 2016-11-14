import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {TorqueSheetApiUrl} from './apiUrlConst';
import {BaseService} from './base.service'
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class TorquesheetService extends BaseService{
    headers: Headers = new Headers({
        'Content-Type': 'application/json'
    });

    
    constructor(private http: Http) {
        super();
        this.headers.append("TenantId", "FDC1A91F-75F4-4B2F-BA8A-9C2D731EBE4D");
    }
    
    getTorqueSheet(id): Observable<any> {
        return this.http.get(`${TorqueSheetApiUrl.getTorqueSheetUrl}` + id)
            .map(super.getJson);
        //this.checkErrors)
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    }

    postTorqueSheet(torqueSheetBody): Observable<any> {
        return this.http.post(`${TorqueSheetApiUrl.postTorqueSheetUrl}`, torqueSheetBody)
            .map(super.getJson)
        //.chec
        // .catch(err => Observable.throw(err))
        // .map(this.getJson);
    }

    getTorqueSheets(torqueBookId): Observable<any> {
        return this.http.get(`${TorqueSheetApiUrl.getTorqueSheetsByTorqueBookIdUrl }`+ torqueBookId)
            .map(super.getJson);
        //this.checkErrors)
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    }

    getAllTorqueSheetTemplates(): Observable<any> {
        return this.http.get(`${TorqueSheetApiUrl.getAllTorqueSheetTemplatesUrl}`)
            .map(super.getJson);
    }

    postTorqueSheetTemplate(TorqueSheetTemplateBody): Observable<any> {
        return this.http.post(`${TorqueSheetApiUrl.torqueSheetTemplatePostUrl}`, TorqueSheetTemplateBody)
            .map(super.getJson)
    }

    getTorqueSheetTemplate(id): Observable<any> {
        return this.http.get(`${TorqueSheetApiUrl.getTorqueSheetTemplatesUrl}` + id)
            .map(super.getJson);
    }

    putTorqueSheetTemplate(filterBody): Observable<any> {
        return this.http.put(`${TorqueSheetApiUrl.putTorqueSheetTemplateUrl}`, filterBody)
            .map(this.getJson)
    }
}