import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {TorqueSheetApiUrl} from './apiUrlConst/torqueSheetApiUrls';
import {BaseService} from './base.service'
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import {UserProfileService} from "./userProfile.service";
import {IUserProfile} from "./definitions/IUserProfile";

@Injectable()
export class TorquesheetService extends BaseService{
    headers: Headers = new Headers({
        'Content-Type': 'application/json'
    });

    currentUser: IUserProfile;

    constructor(private http: Http, private userProfileService: UserProfileService) {
        super();
        this.currentUser = this.userProfileService.getCurrentUserProfile();
        this.headers.append("TenantId", this.currentUser.defaultTenantId);
        this.headers.append("UserId", this.currentUser.id);
    }
    
    getTorqueSheet(id: string, getCurrentVersionOrLatestVersion: string): Observable<any> {
        return this.http.get(`${TorqueSheetApiUrl.getTorqueSheetUrl}` + id + '&getCurrentVersionOrLatestVersion=' + getCurrentVersionOrLatestVersion )
            .map(super.getJson);
        //this.checkErrors)
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    }

    postTorqueSheet(torqueSheetBody, submitForApproval:boolean): Observable<any> {
        return this.http.post(`${TorqueSheetApiUrl.postTorqueSheetUrl}` + submitForApproval.toString(), torqueSheetBody)
            .map(super.getJson)
        //.chec
        // .catch(err => Observable.throw(err))
        // .map(this.getJson);
    }

    getTorqueBooksTorqueSheetNames(torqueBookId): Observable<any> {
        return this.http.get(`${TorqueSheetApiUrl.getTorqueBooksTorqueSheetNamesUrl }`+ torqueBookId)
            .map(super.getJson);
        //this.checkErrors)
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    }

    getTorqueSheets(torqueBookId): Observable<any> {
        return this.http.get(`${TorqueSheetApiUrl.getTorqueSheetsByTorqueBookIdUrl }`+ torqueBookId)
            .map(super.getJson);
        //this.checkErrors)
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    }

    getAllTorqueSheetTemplates(): Observable<any> {
        return this.http.get(`${TorqueSheetApiUrl.getAllTorqueSheetTemplatesUrl}`)
            .map(super.getJson);
    }

    postTorqueSheetTemplate(TorqueSheetTemplateBody): Observable<any> {
        return this.http.post(`${TorqueSheetApiUrl.torqueSheetTemplatePostUrl}`, TorqueSheetTemplateBody)
            .map(super.getJson)
    }

    getTorqueSheetTemplate(id): Observable<any> {
        return this.http.get(`${TorqueSheetApiUrl.getTorqueSheetTemplatesUrl}` + id)
            .map(super.getJson);
    }

    putTorqueSheetTemplate(filterBody): Observable<any> {
        return this.http.put(`${TorqueSheetApiUrl.putTorqueSheetTemplateUrl}`, filterBody)
            .map(this.getJson)
    }

    putTorqueSheet(status:string, filterBody): Observable<any> {
        return this.http.put(`${TorqueSheetApiUrl.putTorqueSheetUrl}` + status, filterBody)
            .map(this.getJson)
    }

    createNewTorqueSheetVersion(filterBody): Observable<any> {
        return this.http.post(`${TorqueSheetApiUrl.postNewTorqueSheetVersionUrl}`, filterBody)
            .map(this.getJson)
    }
}