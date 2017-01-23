import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ModuleItemApiUrl } from './apiUrlConst/ModuleItemApiUrls';
import { BaseService } from './base.service'

import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import {UserProfileService} from "./userProfile.service";
import {IUserProfile} from "./definitions/IUserProfile";

@Injectable()
export class ModuleItemService extends BaseService {
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
    currentUser: IUserProfile;

    constructor(private http: Http, private userProfileService: UserProfileService) {
        super();
        this.currentUser = this.userProfileService.getCurrentUserProfile();
        this.headers.append("TenantId", this.currentUser.defaultTenantId);
        this.headers.append("UserId", this.currentUser.id);
    }


    //postGridData(): Observable<any> {
    //    return this.http.post(`${ModuleItemApiUrl.gridApiUrl}`, this.body, { headers: this.headers })
    //        .map(this.getJson);
    //    //this.checkErrors)
    //    //.catch(err => Observable.throw(err))
    //    //.map(this.getJson);
    //}
    //postGridDataFilter(filterBody): Observable<any> {
    //    console.log("-------- Post Customers FilterBody --------", filterBody);
    //    return this.http.post(`${ModuleItemApiUrl.gridApiUrl}`, filterBody, { headers: this.headers })
    //        .map(this.getJson);
    //    //this.checkErrors)
    //    //.catch(err => Observable.throw(err))
    //    //.map(this.getJson);
    //}

    postAdd(filterBody): Observable<any> {
        console.log("-------- Post Customers FilterBody --------", filterBody);
        return this.http.post(`${ModuleItemApiUrl.postCreatedUrl}`, filterBody, { headers: this.headers })
            .map(this.getJson);

        //this.checkErrors)
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    }

    postUpdate(filterBody): Observable<any> {
        console.log("-------- Post Customers FilterBody --------", filterBody);
        return this.http.put(`${ModuleItemApiUrl.postUpdateUrl}`, filterBody, { headers: this.headers })
            .map(this.getJson);
        //.map(this.checkErrors);
    }

    getById(id): Observable<any> {
        return this.http.get(`${ModuleItemApiUrl.getByIdUrl}` + id, { headers: this.headers })
            .map(this.getJson)
            ;
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    }

    //filterByProcedureId(moduleItemTypeId, filterString): Observable<any> {
    //    return this.http.get(`${ModuleItemApiUrl.filterByModuleItemTypeUrl}` + moduleItemTypeId + '&filterString=' + filterString, { headers: this.headers })
    //        .map(this.getJson);
    //}

    getModuleItemTypes(): Observable<any> {
        return this.http.get(`${ModuleItemApiUrl.getModuleItemTypesUrl}`, { headers: this.headers })
            .map(this.getJson)
            ;
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    }

    getModuleItemsByModuleId(moduleId: string): Observable<any> {
        return this.http.get(`${ModuleItemApiUrl.getModuleItemsByModuleIdUrl}` + moduleId, { headers: this.headers })
            .map(this.getJson)
            ;
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    }

    putModuleModuleItemDisplayOrder(filterBody, moduleId): Observable<any> {
        return this.http.put(`${ModuleItemApiUrl.putModuleModuleItemDisplayOrderUrl}` + moduleId, filterBody, { headers: this.headers })
            .map(this.getJson);
    }
    
}
