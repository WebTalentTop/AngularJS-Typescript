/**
 * Created by ZeroInfinity on 12/16/2016.
 */

import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { EntityIdentifierApiUrl} from './apiUrlConst/entityIdentifier.ApiUrls';
import { LoggerService } from './logger/logger.service';

import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import {UserProfileService} from "./userProfile.service";
import {IUserProfile} from "./definitions/IUserProfile";

@Injectable()
export class EntityIdentifierService {
    headers: Headers = new Headers({
        'Content-Type': 'application/json'
        // 'Access-Control-Allow-Origin': '*'
    });
    private currentUser: IUserProfile;

    constructor(
        private ls: LoggerService,
        private http: Http, private userProfileService: UserProfileService) {
            this.ls.setShow(false);
            this.currentUser = this.userProfileService.getCurrentUserProfile();
            this.headers.append("TenantId", this.currentUser.defaultTenantId);
            this.headers.append("UserId", this.currentUser.id);
    }

    getById(id): Observable<any> {
        return this.http.get(`${EntityIdentifierApiUrl.getByIdUrl}/${id}`, { headers: this.headers })
            .map(this.getJson);
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    }
    getByName(name): Observable<any> {
        return this.http.get(`${EntityIdentifierApiUrl.getByNameUrl}/${name}`, { headers: this.headers })
            .map(this.getJson);
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    }

    getByNameForForms(name): Observable<any> {
        return this.http.get(`${EntityIdentifierApiUrl.getByNameForFormsUrl}/${name}`, { headers: this.headers })
            .map(this.getJson);
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    }

    private getJson(response: Response) {
        //this.ls.logConsole("In Data Service response.json() call: ", response.json());
        return response.json();
    }
}
