import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { TaskApiUrl } from './apiUrlConst/TaskApiUrls';


import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class TaskService {
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

    gettasksbyuserid(): Observable<any> {
        return this.http.get(`${TaskApiUrl.gettasksbyuseridUrl}`, { headers: this.headers })
            .map(this.getJson)
            //.map(data => {
            //    console.log("Notification data --------", data);
            //    return data.$values
            //});
            ;
    }
    onDeletetask(id)
    {
        return this.http.post(`${TaskApiUrl.deleteTaskUrl}/${id}`, { headers: this.headers })

            //     .toPromise()
            //  .then(res => <ITestFacilityRole[]> res.json().data)
            // .then(data => { return data; });
            .map(this.getJson)
            //.map(data => {
            //    console.log('---------getbyusing testdata---------', data);
            //    return data.$values
            //});
            ;
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
