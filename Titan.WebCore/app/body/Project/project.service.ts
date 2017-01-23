/// <reference path="../../../typings/globals/core-js/index.d.ts" />
/// <reference path="../../../typings/shim.d.ts" />
import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import {BaseService} from './../../shared/services/base.service'

@Injectable()
export class ProjectService extends BaseService{
  private localUrl = 'http://localhost:9998/api';
  private preprodUrl = 'http://titanapi-preprod.12thwonder.com/api/';
  private urlToUse = this.localUrl;

    private getProjectDetailsUrl: string = this.urlToUse + 'project/Get?id=';
    private getTorqueBooksByBuildLevelIdUrl: string = this.urlToUse + 'TorqueBook/GetTorqueBooksByBuildLevel?projectId=';
    private getTorqueSheetsByTorqueBookIdUrl: string =this.urlToUse + 'TorqueSheet/GetTorqueSheetsByTorqueBook?torqueBookId=';
    private putProjectDetailsUrl: string = this.urlToUse + 'project/Put';
    private putTorqueSheetTemplateUrl: string = this.urlToUse + 'TorqueSheet/PutTorqueSheetTemplate';
    private getTorqueSheetUrl: string = this.urlToUse + 'TorqueSheet/Get?id=';
    private postTorqueBookUrl: string = this.urlToUse + 'TorqueBook/Post';
    private postTorqueSheetUrl: string = this.urlToUse + 'TorqueSheet/Post';
    private getBuildLevelsUrl: string = this.urlToUse + 'project/GetProjectBuildLevels?projectId=';
    private postImportUrl: string = this.urlToUse + 'importexport/importproject';
    private getImportUrl: string = this.urlToUse + 'importexport/downloadTemplate';
    constructor(private http:Http) { super();}






    getProjectDetails(id): Observable<any> {
        return this.http.get(this.getProjectDetailsUrl + id)
            .map(super.getJson);
        //this.checkErrors)
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    }

    getTorqueSheet(id): Observable<any> {
        return this.http.get(this.getTorqueSheetUrl + id)
            .map(super.getJson);
        //this.checkErrors)
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    }

    putProjectDetails(filterBody): Observable<any> {
        return this.http.put(this.putProjectDetailsUrl, filterBody)
            .map(this.getJson)
        //.chec
        // .catch(err => Observable.throw(err))
        // .map(this.getJson);
    }

    putTorqueSheetTemplate(filterBody): Observable<any> {
        return this.http.put(this.putTorqueSheetTemplateUrl, filterBody)
            .map(this.getJson)
    }

    getBuildLevels(projectId): Observable<any> {
        return this.http.get(this.getBuildLevelsUrl + projectId)
            .map(super.getJson);
        //this.checkErrors)
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    }

    postTorqueBook(torqueBookBody): Observable<any> {
        return this.http.post(this.postTorqueBookUrl, torqueBookBody)
            .map(super.getJson)
        //.chec
        // .catch(err => Observable.throw(err))
        // .map(this.getJson);
    }

    postTorqueSheet(torqueSheetBody): Observable<any> {
        return this.http.post(this.postTorqueSheetUrl, torqueSheetBody)
            .map(super.getJson)
        //.chec
        // .catch(err => Observable.throw(err))
        // .map(this.getJson);
    }

    getTorqueBooks(projectId, buildLevelId): Observable<any> {
        return this.http.get(this.getTorqueBooksByBuildLevelIdUrl + projectId + "&buildLevelId=" + buildLevelId)
            .map(super.getJson);
        //this.checkErrors)
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    }

    getTorqueSheets(torqueBookId): Observable<any> {
        return this.http.get(this.getTorqueSheetsByTorqueBookIdUrl + torqueBookId)
            .map(super.getJson);
        //this.checkErrors)
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    }
    postFileUpload(fileToUpload): Observable<any> {
        return this.http.post(this.postImportUrl, fileToUpload)
            .map(super.getJson)
        //.chec
        // .catch(err => Observable.throw(err))
        // .map(this.getJson);
    }
    getFileUpload(): Observable<any> {
        return this.http.get(this.getImportUrl)
            .map(super.getJson)
        //.chec
        // .catch(err => Observable.throw(err))
        // .map(this.getJson);
    }
}
