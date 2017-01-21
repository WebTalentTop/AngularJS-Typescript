import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { FunctionGroupApiUrl } from './apiUrlConst/FunctionGroupApiUrls';


import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class FunctionGroupService {
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

    constructor(private http: Http) {
        /*this.headers.append('Access-Control-Allow-Origin', 'http://localhost:62603');
        this.headers.append('Access-Control-Allow-Methods', 'GE, PUT, POST, OPTIONS');
        this.headers.append('Content-Type', 'application/json');*/
        this.headers.append('Accept', 'application/json');
        this.headers.append("TenantId", "FDC1A91F-75F4-4B2F-BA8A-9C2D731EBE4D");
    }

    getUsersByTenantId(id): Observable<any> {
        return this.http.get(`${FunctionGroupApiUrl.getUsersByTenantId}/${id}`, { headers: this.headers })
            .map(this.getJson)
            //.map(data => {
            //    console.log("Notification data --------", data);
            //    return data.$values
            //});
            ;
    }

    GetUserFunctionGroupsByUser(userId): Observable<any> {
        return this.http.get(`${FunctionGroupApiUrl.GetUserFunctionGroupsByUser}/${userId}`, { headers: this.headers })
            .map(this.getJson)
            //.map(data => {
            //    console.log("Notification data --------", data);
            //    return data.$values
            //});
            ;
    }
    postAdd(filterBody): Observable<any> {
        console.log("-------- Post Customers FilterBody --------", filterBody);
        return this.http.post(`${FunctionGroupApiUrl.postCreatedUrl}`, filterBody, { headers: this.headers })
            //  .map(this.getJson).catch(err => Observable.throw(err))
            .map(this.getJson);

        //this.checkErrors)
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    }
    postAssignUserFunctionGroup(filterBody): Observable<any> {
        console.log("-------- Post Customers FilterBody --------", filterBody);
        return this.http.post(`${FunctionGroupApiUrl.postAssignUserFunctionGroup}`, filterBody, { headers: this.headers })
            //  .map(this.getJson).catch(err => Observable.throw(err))
            .map(this.getJson);

        //this.checkErrors)
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    }
    removeUserFunctionGroup(filterBody): Observable<any> {
        console.log("-------- Post Customers FilterBody --------", filterBody);
        return this.http.post(`${FunctionGroupApiUrl.removeUserFunctionGroup}`, filterBody, { headers: this.headers })
            //  .map(this.getJson).catch(err => Observable.throw(err))
            .map(this.getJson);

        //this.checkErrors)
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    }
    getFunctionGroupDetailsById(id): Observable<any> {
        return this.http.get(`${FunctionGroupApiUrl.getFunctionGroupDetailsById}/${id}`, { headers: this.headers })
            .map(this.getJson)
            //.map(data => {
            //    console.log("Notification data --------", data);
            //    return data.$values
            //});
            ;
    }
    getTenantUserFunctionGroupsById(id): Observable<any> {
        return this.http.get(`${FunctionGroupApiUrl.getTenantUserFunctionGroupsById}/${id}`, { headers: this.headers })
            .map(this.getJson)
            //.map(data => {
            //    console.log("Notification data --------", data);
            //    return data.$values
            //});
            ;
    }
    GetTenantMembershipsByUser(id): Observable<any> {
        return this.http.get(`${FunctionGroupApiUrl.GetTenantMembershipsByUser}/${id}`, { headers: this.headers })
            .map(this.getJson)
            //.map(data => {
            //    console.log("Notification data --------", data);
            //    return data.$values
            //});
            ;
    }
    GetAllUserFunctionGroupMappingByTenant(id): Observable<any> {
        return this.http.get(`${FunctionGroupApiUrl.GetAllUserFunctionGroupMappingByTenant}/${id}`, { headers: this.headers })
            .map(this.getJson)
            //.map(data => {
            //    console.log("Notification data --------", data);
            //    return data.$values
            //});
            ;
    }
    postUpdate(filterBody): Observable<any> {
        console.log("-------- Post Customers FilterBody --------", filterBody);
        return this.http.put(`${FunctionGroupApiUrl.postUpdateUrl}`, filterBody, { headers: this.headers })
            // .map(this.getJson).catch(err => Observable.throw(err))
            .map(this.getJson);

        //this.checkErrors)
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    }
    getAllFunctionGroups(): Observable<any> {
        return this.http.get(`${FunctionGroupApiUrl.getAllFunctionGroups}`, { headers: this.headers })
            .map(this.getJson);
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    }
    getTenants(): Observable<any> {
        return this.http.get(`${FunctionGroupApiUrl.getTenants}`, { headers: this.headers })
            .map(this.getJson);
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    }
    getTimeZones(): Observable<any> {
        return this.http.get(`${FunctionGroupApiUrl.getTimeZones}`, { headers: this.headers })
            .map(this.getJson);
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    }
    getTitanRoles(): Observable<any> {
        return this.http.get(`${FunctionGroupApiUrl.getTitanRoles}`, { headers: this.headers })
            .map(this.getJson);
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    }
    getDepartments(): Observable<any> {
        return this.http.get(`${FunctionGroupApiUrl.getDepartments}`, { headers: this.headers })
            .map(this.getJson);
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    }
    getUsers(): Observable<any> {
        return this.http.get(`${FunctionGroupApiUrl.getUsers}`, { headers: this.headers })
            .map(this.getJson);
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    }

    filterUserByName(filterString: string): Observable<any> {
        return this.http.get(`${FunctionGroupApiUrl.filterUserByName}` + filterString, { headers: this.headers })
            .map(this.getJson);
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    }

    RemoveFunctionGroupUserMap(filterBody): Observable<any> {
        console.log("-------- Post Customers FilterBody --------", filterBody);
        return this.http.post(`${FunctionGroupApiUrl.RemoveFunctionGroupUserMap}`, filterBody, { headers: this.headers })
            // .map(this.getJson).catch(err => Observable.throw(err))
            .map(this.getJson);

        //this.checkErrors)
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    }
    RemoveTenantMapping(filterBody): Observable<any> {
        console.log("-------- Post Customers FilterBody --------", filterBody);
        return this.http.post(`${FunctionGroupApiUrl.RemoveTenantMapping}`, filterBody, { headers: this.headers })
            // .map(this.getJson).catch(err => Observable.throw(err))
            .map(this.getJson);

        //this.checkErrors)
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    }

    postAddFunctionGroupToUser(filterBody): Observable<any> {
        console.log("-------- Post Customers FilterBody --------", filterBody);
        return this.http.post(`${FunctionGroupApiUrl.postAddFunctionGroupToUser}`, filterBody, { headers: this.headers })
            // .map(this.getJson).catch(err => Observable.throw(err))
            .map(this.getJson);

        //this.checkErrors)
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    }
    CreateUserTenantAccess(filterBody): Observable<any> {
        console.log("-------- Post Customers FilterBody --------", filterBody);
        return this.http.post(`${FunctionGroupApiUrl.CreateUserTenantAccess}`, filterBody, { headers: this.headers })
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
