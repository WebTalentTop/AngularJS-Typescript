import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { TestModeApiUrl} from './apiUrlConst/TestModeApiUrls';
import { BaseService } from './base.service'

import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import {UserProfileService} from "./userProfile.service";
import {IUserProfile} from "./definitions/IUserProfile";

@Injectable()
export class TestModeService extends BaseService {

    currentUser: IUserProfile;

    constructor(private http: Http, private userProfileService: UserProfileService) {
        super();
        this.currentUser = this.userProfileService.getCurrentUserProfile();
        this.headers.append("TenantId", this.currentUser.defaultTenantId);
        this.headers.append("UserId", this.currentUser.id);
    }

    postGridData(): Observable<any> {
        return this.http.post(`${TestModeApiUrl.gridApiUrl}`, this.body, { headers: this.headers })
            .map(this.getJson);
        //this.checkErrors)
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    }
    postGridDataFilter(filterBody): Observable<any> {
        console.log("-------- Post Customers FilterBody --------", filterBody);
        return this.http.post(`${TestModeApiUrl.gridApiUrl}`, filterBody, { headers: this.headers })
            .map(this.getJson);
        //this.checkErrors)
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    }

    postAdd(filterBody): Observable<any> {
        console.log("-------- Post Customers FilterBody --------", filterBody);
        return this.http.post(`${TestModeApiUrl.postCreatedUrl}`, filterBody, { headers: this.headers })
            .catch(err => Observable.throw(err))
            .map(this.getJson);

        //this.checkErrors)
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    }

    postUpdate(filterBody): Observable<any> {
        console.log("-------- Post Customers FilterBody --------", filterBody);
        return this.http.put(`${TestModeApiUrl.postUpdateUrl}`, filterBody, { headers: this.headers })
            .map(this.getJson)
            .map(this.checkErrors)
            .catch(err => Observable.throw(err))
            .map(this.getJson);
    }

    getAllTestTypes(): Observable<any> {
        return this.http.get(`${TestModeApiUrl.getAllTestTypesUrl}`, { headers: this.headers })
            .map(this.getJson);
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    }
    getById(id): Observable<any> {
        return this.http.get(`${TestModeApiUrl.getByIdUrl}/${id}`, { headers: this.headers })
            .map(this.getJson);
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    }

    getAllTestModes(): Observable<any> {
        return this.http.get(`${TestModeApiUrl.getAllTestModes}`, { headers: this.headers })
            .map(this.getJson);
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    }

    getAll(): Observable<any> {
        return this.http.get(`${TestModeApiUrl.getAllUrl}`, { headers: this.headers })
            .map(this.getJson)
            ;
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    }

    getAllByTestTypeId(testTypeId): Observable<any> {
        return this.http.get(`${TestModeApiUrl.getAllByTestTypeIdUrl}` + testTypeId, { headers: this.headers })
            .map(this.getJson)
            ;
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    }
}
