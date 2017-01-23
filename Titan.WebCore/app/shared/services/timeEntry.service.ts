import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { TimeEntryApiUrl } from './apiUrlConst/TimeEntryApiUrls';


import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import {UserProfileService} from "./userProfile.service";
import {IUserProfile} from "./definitions/IUserProfile";

@Injectable()
export class TimeEntryService {
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
    private currentUser: IUserProfile;

    constructor(private http: Http, private userProfileService: UserProfileService) {
        this.currentUser = this.userProfileService.getCurrentUserProfile();
        this.headers.append("TenantId", this.currentUser.defaultTenantId);
        this.headers.append("UserId", this.currentUser.id);
    }

    //postGridData(): Observable<any> {
    //    return this.http.post(`${TestRequestApiUrl.gridApiUrl}`, this.body, { headers: this.headers })
    //        .map(this.getJson);
    //    //this.checkErrors)
    //    //.catch(err => Observable.throw(err))
    //    //.map(this.getJson);
    //}
    //postGridDataFilter(filterBody): Observable<any> {
    //    console.log("-------- Post Customers FilterBody --------", filterBody);
    //    return this.http.post(`${TestRequestApiUrl.gridApiUrl}`, filterBody, { headers: this.headers })
    //        .map(this.getJson);
    //    //this.checkErrors)
    //    //.catch(err => Observable.throw(err))
    //    //.map(this.getJson);
    //}

    postUpdate(filterBody): Observable<any> {
        console.log("-------- Post Customers FilterBody --------", filterBody);
        return this.http.post(`${TimeEntryApiUrl.postUpdateUrl}`, filterBody, { headers: this.headers })
            .map(this.getJson).catch(err => Observable.throw(err))
            .map(this.getJson);

        //this.checkErrors)
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    }

    postAdd(filterBody): Observable<any> {
        console.log("-------- Post Customers FilterBody --------", filterBody);
        return this.http.post(`${TimeEntryApiUrl.postCreatedUrl}`, filterBody, { headers: this.headers })
            //.map(this.getJson)
            //.map(this.checkErrors)
            //.catch(err => Observable.throw(err))
            .map(this.getJson);
    }
    getTestStages(): Observable<any> {
        return this.http.get(`${TimeEntryApiUrl.getTestStages}`, { headers: this.headers })
            .map(this.getJson)
            .map(data => {
                console.log("Notification data --------", data);
                return data.$values
            });
    }
    getHourEntryByEntityIdentifierId(id): Observable<any> {
        return this.http.get(`${TimeEntryApiUrl.getHourEntryByEntityIdentifierId}/${id}`, { headers: this.headers })
            .map(this.getJson)
            .map(data => {
                console.log("Notification data --------", data);
                return data.$values
            });
    }
    getById(id): Observable<any> {
        return this.http.get(`${TimeEntryApiUrl.getByIdUrl}/${id}`, { headers: this.headers })
            .map(this.getJson)
            ;
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    }
    GetProjectId(id): Observable<any> {
        return this.http.get(`${TimeEntryApiUrl.GetProjectId}/${id}`, { headers: this.headers })
            .map(this.getJson)
            ;
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    }
    GetTrackingListByEntityId(id): Observable<any> {
        return this.http.get(`${TimeEntryApiUrl.GetTrackingListByEntityId}/${id}`, { headers: this.headers })
            .map(this.getJson)
            ;
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    }
    GetAllDownTimeReasons(): Observable<any> {
        return this.http.get(`${TimeEntryApiUrl.GetAllDownTimeReasons}`, { headers: this.headers })
            .map(this.getJson)
            ;
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    }
  
  /*  getEquipmentsByIdusing(id): Observable<any> {
        return this.http.get(`${TestRequestApiUrl.getEquipmentDetailsByIdUrl}/${id}`, { headers: this.headers })

            //     .toPromise()
            //  .then(res => <ITestFacilityRole[]> res.json().data)
            // .then(data => { return data; });
            .map(this.getJson)
            .map(data => {
                console.log('---------getbyusing testdata---------', data);
                return data.$values
            });
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    }
    getRoles(): Observable<any> {
        return this.http.get(`${TestRequestApiUrl.getRoles}`, { headers: this.headers })
            .map(this.getJson)
            .map(data => {
                console.log("Notification data --------", data);
                return data.$values
            });
    }
    getNotifications(id): Observable<any> {
        return this.http.get(`${TestRequestApiUrl.getNotifications}/${id}`, { headers: this.headers })
            .map(this.getJson)
            .map(data => {
                console.log("Notification data --------", data);
                return data.$values
            });
    }
    filterByUserNames(filterString): Observable<any> {
        return this.http.get(`${TestRequestApiUrl.filterUserNames}/${filterString}`, { headers: this.headers })
            .map(this.getJson);
    }
    postAddUserNames(filterBody, testFacilityId, testFacilityRoleId): Observable<any> {
        return this.http.post(`${TestRequestApiUrl.PostAddUserRolesUrl}/${testFacilityId}/${testFacilityRoleId}`, filterBody, { headers: this.headers })
            .map(this.getJson);
    }*/
    private getJson(response: Response) {

        return response.json();
    }

    private checkErrors(response: Response): Response {
        if (response.status >= 200 && response.status <= 300) {
            return response;
        }
        else {
            var error = new Error(response.statusText);
            error['response'] = response;
            console.error(error);
            throw error;
        }
    }
}
