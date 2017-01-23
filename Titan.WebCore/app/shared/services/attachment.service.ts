import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AttachmentApiUrl } from './apiUrlConst/attachmentApiUrls';
import { BaseService } from './base.service'

import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import {UserProfileService} from "./userProfile.service";
import {IUserProfile} from "./definitions/IUserProfile";

@Injectable()
export class AttachmentService extends BaseService {
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
    
    getCategories(): Observable<any> {

        return this.http.get(`${AttachmentApiUrl.getCategories}`, { headers: this.headers })
            .map(this.getJson)
            .map(data => {
                console.log("Notification data --------", data);
                return data.$values
            });
    }

    getDocumentsByEntityIdentifierId(id): Observable<any> {
        return this.http.get(`${AttachmentApiUrl.getDocumentsByEntityIdentifierIdUrl}/${id}`, { headers: this.headers })
            .map(this.getJson)
            .map(data => {
                console.log('---------getbyusing testdata---------', data);
                return data.result
            });
    }

    DeleteDocumentById(AttachmentId): Observable<any> {
        return this.http.delete(`${AttachmentApiUrl.DeleteAttachmentByIdUrl}/${AttachmentId}`, { headers: this.headers }).map(this.getJson)
            .map(data => {
                console.log('---------getbyusing testdata---------', data);
                return data.result
            });
    }
}
