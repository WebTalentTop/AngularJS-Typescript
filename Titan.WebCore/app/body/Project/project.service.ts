import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import {BaseService} from './../../shared/services/base.service'

@Injectable()
export class ProjectService extends BaseService{
    private getProjectDetailsUrl: string = 'http://localhost:9998/api/project/Get?id=';
    private getTorqueBooksByBuildLevelIdUrl: string = 'http://localhost:9998/api/TorqueBook/GetTorqueBooksByBuildLevel?projectId=';
    private getTorqueSheetsByTorqueBookIdUrl: string = 'http://localhost:9998/api/TorqueSheet/GetTorqueSheetsByTorqueBook?torqueBookId=';
    private putProjectDetailsUrl: string = 'http://localhost:9998/api/project/Put';
    private postTorqueBookUrl: string = 'http://localhost:9998/api/TorqueBook/Post';
    private postTorqueSheetUrl: string = 'http://localhost:9998/api/TorqueSheet/Post';
    private getBuildLevelsUrl: string = 'http://localhost:9998/api/project/GetProjectBuildLevels?projectId=';

    constructor(private http:Http) { super();}

    getProjectDetails(id): Observable<any> {
        return this.http.get(this.getProjectDetailsUrl + id)
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
}

