import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { TestFacilityAttachmentApiUrl} from '../../apiUrlConst//TestFacilityAttachment/TestFacilityAttachmentApiUrls';
import {ITestFacilityAttachment} from '../../definitions/ITestFacilityAttachment';
import {DataGridModule} from 'primeng/primeng';
import 'rxjs/add/operator/toPromise';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';
import {UserProfileService} from "../../userProfile.service";
import {IUserProfile} from "../../definitions/IUserProfile";

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

    currentUser: IUserProfile;

    constructor(private http: Http, private userProfileService: UserProfileService) {
        this.currentUser = this.userProfileService.getCurrentUserProfile();
        this.headers.append("TenantId", this.currentUser.defaultTenantId);
        this.headers.append("UserId", this.currentUser.id);
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

    getSensorAttachmentsByEntityIdUrl(entityId): Observable<any> {
        return this.http.get(`${TestFacilityAttachmentApiUrl.getByIdUrl}/${entityId}`, { headers: this.headers })

            //     .toPromise()
            //  .then(res => <ITestFacilityRole[]> res.json().data)
            // .then(data => { return data; });
            .map(this.getJson)
            ;
            //.map(data => {
            //    console.log('---------getbyusing testdata---------', data);
            //    return data.$values
           
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    }
    DeleteAttachmentsById(AttachmentId): Observable<any> {
        return this.http.delete(`${TestFacilityAttachmentApiUrl.DeleteAttachmentsByIdUrl}/${AttachmentId}`, { headers: this.headers });

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
