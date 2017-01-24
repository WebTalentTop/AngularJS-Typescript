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
import {UserProfileService} from "../../userProfile.service";
import {IUserProfile} from "../../definitions/IUserProfile";

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

    currentUser: IUserProfile;

    constructor(private http: Http, private userProfileService: UserProfileService) {
        super();
        this.currentUser = this.userProfileService.getCurrentUserProfile();
        this.headers.append("TenantId", this.currentUser.defaultTenantId);
        this.headers.append("UserId", this.currentUser.id);
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