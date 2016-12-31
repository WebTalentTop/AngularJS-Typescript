import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AttachmentApiUrl } from './apiUrlConst/attachmentApiUrls';
import { BaseService } from './base.service'

import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

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

    constructor(private http: Http) {
        super();
        /*this.headers.append('Access-Control-Allow-Origin', 'http://localhost:62603');
        this.headers.append('Access-Control-Allow-Methods', 'GE, PUT, POST, OPTIONS');
        this.headers.append('Content-Type', 'application/json');*/
        this.headers.append('Accept', 'application/json');
        this.headers.append("TenantId", "FDC1A91F-75F4-4B2F-BA8A-9C2D731EBE4D");
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
