import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { MeasurementCatalogApiUrl } from './apiUrlConst/MeasurementCatalogApiUrls';


import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import {UserProfileService} from "./userProfile.service";
import {IUserProfile} from "./definitions/IUserProfile";

@Injectable()
export class MeasurementCatalogService {
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

    getAllMeasurementCatalogs(): Observable<any> {
        return this.http.get(`${MeasurementCatalogApiUrl.getAllMeasurementCatalogs}`, { headers: this.headers })
            .map(this.getJson)
            //.map(data => {
            //    console.log("Notification data --------", data);
            //    return data.$values
            //});
            ;
    }
    postAddInputDetailsById(filterBody, catalogId): Observable<any> {
        console.log("-------- Post Customers FilterBody --------", filterBody);
        return this.http.post(`${MeasurementCatalogApiUrl.postAddInputDetailsById}/${catalogId}`, filterBody, { headers: this.headers })
            //  .map(this.getJson).catch(err => Observable.throw(err))
            .map(this.getJson);

        //this.checkErrors)
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    }
    RemoveInputParameterCatalogMap(filterBody,id): Observable<any> {
        console.log("-------- Post Customers FilterBody --------", filterBody);
        return this.http.post(`${MeasurementCatalogApiUrl.RemoveInputParameterCatalogMap}/${id}`, filterBody, { headers: this.headers })
            // .map(this.getJson).catch(err => Observable.throw(err))
            .map(this.getJson);

        //this.checkErrors)
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    }
    getInputDetailsById(userId): Observable<any> {
        return this.http.get(`${MeasurementCatalogApiUrl.getByIdUrl}/${userId}`, { headers: this.headers })
            .map(this.getJson)
            //.map(data => {
            //    console.log("Notification data --------", data);
            //    return data.$values
            //});
            ;
    }
    
  /*  GetUserFunctionGroupsByUser(userId): Observable<any> {
        return this.http.get(`${MeasurementCatalogApiUrl.GetUserFunctionGroupsByUser}/${userId}`, { headers: this.headers })
            .map(this.getJson)
            //.map(data => {
            //    console.log("Notification data --------", data);
            //    return data.$values
            //});
            ;
    }
    postAdd(filterBody): Observable<any> {
        console.log("-------- Post Customers FilterBody --------", filterBody);
        return this.http.post(`${MeasurementCatalogApiUrl.postCreatedUrl}`, filterBody, { headers: this.headers })
            //  .map(this.getJson).catch(err => Observable.throw(err))
            .map(this.getJson);

        //this.checkErrors)
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    }
    postAddFunctionGroup(filterBody): Observable<any> {
        console.log("-------- Post Customers FilterBody --------", filterBody);
        return this.http.post(`${MeasurementCatalogApiUrl.postFunctionGroupCreatedUrl}`, filterBody, { headers: this.headers })
            //  .map(this.getJson).catch(err => Observable.throw(err))
            .map(this.getJson);

        //this.checkErrors)
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    }
    postAssignUserFunctionGroup(filterBody): Observable<any> {
        console.log("-------- Post Customers FilterBody --------", filterBody);
        return this.http.post(`${MeasurementCatalogApiUrl.postAssignUserFunctionGroup}`, filterBody, { headers: this.headers })
            //  .map(this.getJson).catch(err => Observable.throw(err))
            .map(this.getJson);

        //this.checkErrors)
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    }
    removeUserFunctionGroup(filterBody): Observable<any> {
        console.log("-------- Post Customers FilterBody --------", filterBody);
        return this.http.post(`${MeasurementCatalogApiUrl.removeUserFunctionGroup}`, filterBody, { headers: this.headers })
            //  .map(this.getJson).catch(err => Observable.throw(err))
            .map(this.getJson);

        //this.checkErrors)
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    }
    getFunctionGroupDetailsById(id): Observable<any> {
        return this.http.get(`${MeasurementCatalogApiUrl.getFunctionGroupDetailsById}/${id}`, { headers: this.headers })
            .map(this.getJson)
            //.map(data => {
            //    console.log("Notification data --------", data);
            //    return data.$values
            //});
            ;
    }
    getTenantUserFunctionGroupsById(id): Observable<any> {
        return this.http.get(`${MeasurementCatalogApiUrl.getTenantUserFunctionGroupsById}/${id}`, { headers: this.headers })
            .map(this.getJson)
            //.map(data => {
            //    console.log("Notification data --------", data);
            //    return data.$values
            //});
            ;
    }
    GetTenantMembershipsByUser(id): Observable<any> {
        return this.http.get(`${MeasurementCatalogApiUrl.GetTenantMembershipsByUser}/${id}`, { headers: this.headers })
            .map(this.getJson)
            //.map(data => {
            //    console.log("Notification data --------", data);
            //    return data.$values
            //});
            ;
    }
    GetAllUserFunctionGroupMappingByTenant(id): Observable<any> {
        return this.http.get(`${MeasurementCatalogApiUrl.GetAllUserFunctionGroupMappingByTenant}/${id}`, { headers: this.headers })
            .map(this.getJson)
            //.map(data => {
            //    console.log("Notification data --------", data);
            //    return data.$values
            //});
            ;
    }
    postUpdate(filterBody): Observable<any> {
        console.log("-------- Post Customers FilterBody --------", filterBody);
        return this.http.put(`${MeasurementCatalogApiUrl.postUpdateUrl}`, filterBody, { headers: this.headers })
            // .map(this.getJson).catch(err => Observable.throw(err))
            .map(this.getJson);

        //this.checkErrors)
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    }
    getAllFunctionGroups(): Observable<any> {
        return this.http.get(`${MeasurementCatalogApiUrl.getAllFunctionGroups}`, { headers: this.headers })
            .map(this.getJson);
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    }
    getTenants(): Observable<any> {
        return this.http.get(`${MeasurementCatalogApiUrl.getTenants}`, { headers: this.headers })
            .map(this.getJson);
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    }
    getTimeZones(): Observable<any> {
        return this.http.get(`${MeasurementCatalogApiUrl.getTimeZones}`, { headers: this.headers })
            .map(this.getJson);
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    }
    getTitanRoles(): Observable<any> {
        return this.http.get(`${MeasurementCatalogApiUrl.getTitanRoles}`, { headers: this.headers })
            .map(this.getJson);
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    }
    getDepartments(): Observable<any> {
        return this.http.get(`${MeasurementCatalogApiUrl.getDepartments}`, { headers: this.headers })
            .map(this.getJson);
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    }
    getUsers(): Observable<any> {
        return this.http.get(`${MeasurementCatalogApiUrl.getUsers}`, { headers: this.headers })
            .map(this.getJson);
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    }

    filterUserByName(filterString: string): Observable<any> {
        return this.http.get(`${MeasurementCatalogApiUrl.filterUserByName}` + filterString, { headers: this.headers })
            .map(this.getJson);
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    }

    RemoveFunctionGroupUserMap(filterBody): Observable<any> {
        console.log("-------- Post Customers FilterBody --------", filterBody);
        return this.http.post(`${MeasurementCatalogApiUrl.RemoveFunctionGroupUserMap}`, filterBody, { headers: this.headers })
            // .map(this.getJson).catch(err => Observable.throw(err))
            .map(this.getJson);

        //this.checkErrors)
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    }
    RemoveTenantMapping(filterBody): Observable<any> {
        console.log("-------- Post Customers FilterBody --------", filterBody);
        return this.http.post(`${MeasurementCatalogApiUrl.RemoveTenantMapping}`, filterBody, { headers: this.headers })
            // .map(this.getJson).catch(err => Observable.throw(err))
            .map(this.getJson);

        //this.checkErrors)
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    }

    postAddFunctionGroupToUser(filterBody): Observable<any> {
        console.log("-------- Post Customers FilterBody --------", filterBody);
        return this.http.post(`${MeasurementCatalogApiUrl.postAddFunctionGroupToUser}`, filterBody, { headers: this.headers })
            // .map(this.getJson).catch(err => Observable.throw(err))
            .map(this.getJson);

        //this.checkErrors)
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    }
    CreateUserTenantAccess(filterBody): Observable<any> {
        console.log("-------- Post Customers FilterBody --------", filterBody);
        return this.http.post(`${MeasurementCatalogApiUrl.CreateUserTenantAccess}`, filterBody, { headers: this.headers })
            // .map(this.getJson).catch(err => Observable.throw(err))
            .map(this.getJson);

        //this.checkErrors)
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    }*/
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
