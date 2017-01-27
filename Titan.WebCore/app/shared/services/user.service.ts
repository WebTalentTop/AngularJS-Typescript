import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { UserApiUrl } from './apiUrlConst/UserApiUrls';


import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import {UserProfileService} from "./userProfile.service";
import {IUserProfile} from "./definitions/IUserProfile";

@Injectable()
export class UserService {
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

    getUsersByTenantId(id): Observable<any> {
        return this.http.get(`${UserApiUrl.getUsersByTenantId}/${id}`, { headers: this.headers })
            .map(this.getJson)
            //.map(data => {
            //    console.log("Notification data --------", data);
            //    return data.$values
            //});
            ;
    }
    
    GetUserFunctionGroupsByUser(userId): Observable<any> {
        return this.http.get(`${UserApiUrl.GetUserFunctionGroupsByUser}/${userId}`, { headers: this.headers })
            .map(this.getJson)
            //.map(data => {
            //    console.log("Notification data --------", data);
            //    return data.$values
            //});
            ;
    }
    postAdd(filterBody): Observable<any> {
        console.log("-------- Post Customers FilterBody --------", filterBody);
        return this.http.post(`${UserApiUrl.postCreatedUrl}`, filterBody, { headers: this.headers })
            //  .map(this.getJson).catch(err => Observable.throw(err))
            .map(this.getJson);

        //this.checkErrors)
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    }

    getUserDetailsById(id): Observable<any> {
        return this.http.get(`${UserApiUrl.getUserDetailsById}/${id}`, { headers: this.headers })
            .map(this.getJson)
            //.map(data => {
            //    console.log("Notification data --------", data);
            //    return data.$values
            //});
            ;
    }
    GetTenantMembershipsByUser(id): Observable<any> {
        return this.http.get(`${UserApiUrl.GetTenantMembershipsByUser}/${id}`, { headers: this.headers })
            .map(this.getJson)
            //.map(data => {
            //    console.log("Notification data --------", data);
            //    return data.$values
            //});
            ;
    }
    GetAllUserFunctionGroupMappingByTenant(id): Observable<any> {
        return this.http.get(`${UserApiUrl.GetAllUserFunctionGroupMappingByTenant}/${id}`, { headers: this.headers })
            .map(this.getJson)
            //.map(data => {
            //    console.log("Notification data --------", data);
            //    return data.$values
            //});
            ;
    }
    postUpdate(filterBody): Observable<any> {
        console.log("-------- Post Customers FilterBody --------", filterBody);
        return this.http.put(`${UserApiUrl.postUpdateUrl}`, filterBody, { headers: this.headers })
           // .map(this.getJson).catch(err => Observable.throw(err))
            .map(this.getJson);

        //this.checkErrors)
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    }
    getAllFunctionGroups(): Observable<any> {
        return this.http.get(`${UserApiUrl.getAllFunctionGroups}`, { headers: this.headers })
            .map(this.getJson);
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    }
    getTenants(): Observable<any> {
        return this.http.get(`${UserApiUrl.getTenants}`, { headers: this.headers })
            .map(this.getJson);
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    }
    getTimeZones(): Observable<any> {
        return this.http.get(`${UserApiUrl.getTimeZones}/${true}`, { headers: this.headers })
            .map(this.getJson);
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    }
    getTitanRoles(): Observable<any> {
        return this.http.get(`${UserApiUrl.getTitanRoles}`, { headers: this.headers })
            .map(this.getJson);
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    }
    getDepartments(): Observable<any> {
        return this.http.get(`${UserApiUrl.getDepartments}`, { headers: this.headers })
            .map(this.getJson);
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    }
    getUsers(): Observable<any> {
        return this.http.get(`${UserApiUrl.getUsers}`, { headers: this.headers })
            .map(this.getJson);
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    }

    filterUserByName(filterString: string): Observable<any> {
        return this.http.get(`${UserApiUrl.filterUserByName}` + filterString, { headers: this.headers })
            .map(this.getJson);
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    }

    RemoveFunctionGroupUserMap(filterBody): Observable<any> {
        console.log("-------- Post Customers FilterBody --------", filterBody);
        return this.http.post(`${UserApiUrl.RemoveFunctionGroupUserMap}`, filterBody, { headers: this.headers })
            // .map(this.getJson).catch(err => Observable.throw(err))
            .map(this.getJson);

        //this.checkErrors)
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    }
    RemoveTenantMapping(filterBody): Observable<any> {
        console.log("-------- Post Customers FilterBody --------", filterBody);
        return this.http.post(`${UserApiUrl.RemoveTenantMapping}`, filterBody, { headers: this.headers })
            // .map(this.getJson).catch(err => Observable.throw(err))
            .map(this.getJson);

        //this.checkErrors)
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    }

    postAddFunctionGroupToUser(filterBody): Observable<any> {
        console.log("-------- Post Customers FilterBody --------", filterBody);
        return this.http.post(`${UserApiUrl.postAddFunctionGroupToUser}`, filterBody, { headers: this.headers })
           // .map(this.getJson).catch(err => Observable.throw(err))
            .map(this.getJson);

        //this.checkErrors)
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    }
    CreateUserTenantAccess(filterBody): Observable<any> {
        console.log("-------- Post Customers FilterBody --------", filterBody);
        return this.http.post(`${UserApiUrl.CreateUserTenantAccess}`, filterBody, { headers: this.headers })
            // .map(this.getJson).catch(err => Observable.throw(err))
            .map(this.getJson);

        //this.checkErrors)
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    }
    private getJson(response: Response) {
        console.log("In Data Service response.json() call: ", response.json());
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
