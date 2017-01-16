/**
 * Created by ZeroInfinity on 1/12/2017.
 */
import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ProjectBuildLevelMapApiUrls} from '../../apiUrlConst/Project/projectBuildLevelMap.ApiUrls';
import {BaseService} from '../../base.service';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class ProjectBuildLevelMapService extends BaseService {
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
        this.headers.append("TenantId", "FDC1A91F-75F4-4B2F-BA8A-9C2D731EBE4D");
    }

    getAll(): Observable<any> {
        return this.http.get(`${ProjectBuildLevelMapApiUrls.getAllUrl}`, {headers: this.headers})
            .map(this.getJson);
    }

    getAllByProjectId(id): Observable<any> {
        return this.http
            .get(`${ProjectBuildLevelMapApiUrls.getAllByProjectIdUrl}/${id}`,
            {headers: this.headers})
            .map(this.getJson);
    }
}