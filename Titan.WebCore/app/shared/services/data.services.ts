import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {GridApiUrl} from './apiUrlConst/gridApiUrl';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class DataService {
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
        this.headers.append("TenantId", "FDC1A91F-75F4-4B2F-BA8A-9C2D731EBE4D");
    }
    postDepartmentGridData(): Observable<any> {
        return this.http.post(`${GridApiUrl.departmentGridUrl}`, this.body, { headers: this.headers })
            .map(this.getJson);
        //this.checkErrors)
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    }
    postDepartmentGridDataFilter(filterBody): Observable<any> {
        console.log("-------- Post Customers FilterBody --------", filterBody);
        return this.http.post(`${GridApiUrl.departmentGridUrl}`, filterBody, { headers: this.headers })
            .map(this.getJson);
        //this.checkErrors)
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    }

    postProjectGridData(): Observable<any> {
        console.log("---- postProjectGridData", GridApiUrl.projectGridUrl);
        return this.http.post(`${GridApiUrl.projectGridUrl}`, this.body, { headers: this.headers })
            .map(this.getJson);
        //this.checkErrors)
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    }
    postProjectGridDataFilter(filterBody): Observable<any> {
        console.log("---- postProjectGridDataFilter", GridApiUrl.projectGridUrl);
        console.log("-------- Post Customers FilterBody --------", filterBody);
        return this.http.post(`${GridApiUrl.projectGridUrl}`, filterBody, { headers: this.headers })
            .map(this.getJson);
        //this.checkErrors)
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    }



    postBuildLevelGridData(): Observable<any> {
        console.log("---- postBuildLevelGridData", GridApiUrl.buildlevelGridUrl);
        return this.http.post(`${GridApiUrl.buildlevelGridUrl}`, this.body, { headers: this.headers })
            .map(this.getJson);
         //this.checkErrors)
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    }
    postBuildLevelGridDataFilter(filterBody): Observable<any> {
        console.log("---- postBuildLevelGridDataFilter", GridApiUrl.buildlevelGridUrl);
        console.log("-------- Post Customers FilterBody --------", filterBody);
        return this.http.post(`${GridApiUrl.buildlevelGridUrl}`, filterBody, { headers: this.headers })
            .map(this.getJson);
         //this.checkErrors)
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    }


    postTitanRoleGridData(): Observable<any> {
        console.log("---- postTitanRoleGridData", GridApiUrl.titanroleGridUrl);
        return this.http.post(`${GridApiUrl.titanroleGridUrl}`, this.body, { headers: this.headers })
            .map(this.getJson);
        //this.checkErrors)
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    }
    postTitanRoleGridDataFilter(filterBody): Observable<any> {
        console.log("---- postTitanRoleGridDataFilter", GridApiUrl.titanroleGridUrl);
        console.log("-------- Post Customers FilterBody --------", filterBody);
        return this.http.post(`${GridApiUrl.titanroleGridUrl}`, filterBody, { headers: this.headers })
            .map(this.getJson);
        //this.checkErrors)
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    }


    postTitanUserGridData(): Observable<any> {
        console.log("---- postTitanUserGridData", GridApiUrl.titanuserGridUrl);
        return this.http.post(`${GridApiUrl.titanuserGridUrl}`, this.body, { headers: this.headers })
            .map(this.getJson);
        //this.checkErrors)
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    }
    postTitanUserGridDataFilter(filterBody): Observable<any> {
        console.log("---- postTitanUserGridDataFilter", GridApiUrl.titanuserGridUrl);
        console.log("-------- Post Customers FilterBody --------", filterBody);
        return this.http.post(`${GridApiUrl.titanuserGridUrl}`, filterBody, { headers: this.headers })
            .map(this.getJson);
        //this.checkErrors)
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    }


    postPlatformGridData(): Observable<any> {
        return this.http.post(`${GridApiUrl.platformGridUrl}`, this.body, { headers: this.headers })
            .map(this.getJson);
        //this.checkErrors)
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    }
    postPlatformGridDataFilter(filterBody): Observable<any> {
        console.log("-------- Post Customers FilterBody --------", filterBody);
        return this.http.post(`${GridApiUrl.platformGridUrl}`, filterBody, { headers: this.headers })
            .map(this.getJson);
        //this.checkErrors)
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    }

    postEquipmentGridData(): Observable<any> {
        return this.http.post(`${GridApiUrl.equipmentGridUrl}`, this.body, { headers: this.headers })
            .map(this.getJson);
        //this.checkErrors)
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    }
    postEquipmentGridDataFilter(filterBody): Observable<any> {
        console.log("-------- Post Customers FilterBody --------", filterBody);
        return this.http.post(`${GridApiUrl.equipmentGridUrl}`, filterBody, { headers: this.headers })
            .map(this.getJson);
        //this.checkErrors)
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    }


    postEquipmentTypeGridData(): Observable<any> {
        return this.http.post(`${GridApiUrl.equipmenttypeGridUrl}`, this.body, { headers: this.headers })
            .map(this.getJson);
        //this.checkErrors)
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    }
    postEquipmentTypeGridDataFilter(filterBody): Observable<any> {
        console.log("-------- Post Customers FilterBody --------", filterBody);
        return this.http.post(`${GridApiUrl.equipmenttypeGridUrl}`, filterBody, { headers: this.headers })
            .map(this.getJson);
        //this.checkErrors)
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    }


    postMarketGridData(): Observable<any> {
        console.log("---- postMarketGridData", GridApiUrl.marketGridUrl);
        return this.http.post(`${GridApiUrl.marketGridUrl}`, this.body, { headers: this.headers })
            .map(this.getJson);
        //this.checkErrors)
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    }
    postMarketGridDataFilter(filterBody): Observable<any> {
        console.log("---- postMarketGridDataFilter", GridApiUrl.marketGridUrl);
        console.log("-------- Post Customers FilterBody --------", filterBody);
        return this.http.post(`${GridApiUrl.marketGridUrl}`, filterBody, { headers: this.headers })
            .map(this.getJson);
        //this.checkErrors)
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    }

    postTenantGridData(): Observable<any> {
        console.log("---- postTenantGridData", GridApiUrl.tenantGridUrl);
        return this.http.post(`${GridApiUrl.tenantGridUrl}`, this.body, { headers: this.headers })
            .map(this.getJson);
        //this.checkErrors)
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    }
    postTenantGridDataFilter(filterBody): Observable<any> {
        console.log("---- postTenantGridDataFilter", GridApiUrl.tenantGridUrl);
        console.log("-------- Post Customers FilterBody --------", filterBody);
        return this.http.post(`${GridApiUrl.tenantGridUrl}`, filterBody, { headers: this.headers })
            .map(this.getJson);
        //this.checkErrors)
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    }



    private getJson(response: Response) {
        console.log("In Data Service response.json() call: ",response.json());
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