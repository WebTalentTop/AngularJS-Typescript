import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { TestFacilityAttachmentApiUrl} from './apiUrlConst/TestFacilityAttachmentApiUrls';
import {ITestFacilityAttachment} from './definitions/ITestFacilityAttachment';
import {DataGridModule} from 'primeng/primeng';
import 'rxjs/add/operator/toPromise';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TestFacilityAttachmentService {
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

    getByIdusing(id): Observable<ITestFacilityAttachment[]> {
        return this.http.get(`${TestFacilityAttachmentApiUrl.getByIdUrl}/${id}`, { headers: this.headers })
            
      //     .toPromise()
        //  .then(res => <ITestFacilityRole[]> res.json().data)
         // .then(data => { return data; });
         .map(this.getJson)
         .map(data=> {
             console.log('---------getbyusing testdata---------',data); 
             return data.$values
            });
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
