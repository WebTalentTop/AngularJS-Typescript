"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
var ProjectApiUrls_1 = require('./apiUrlConst/ProjectApiUrls');
var base_service_1 = require('./base.service');
require('rxjs/Rx');
require('rxjs/add/operator/map');
require('rxjs/add/observable/throw');
var ProjectService = (function (_super) {
    __extends(ProjectService, _super);
    function ProjectService(http) {
        _super.call(this);
        this.http = http;
        this.headers = new http_1.Headers({
            'Content-Type': 'application/json'
        });
        this.body = {
            "locale": "en-us",
            "defaultLocale": "en-us",
            "PageNumber": 1,
            "PageSize": 15,
            "IsPaging": true
        };
        this.headers.append("TenantId", "FDC1A91F-75F4-4B2F-BA8A-9C2D731EBE4D");
    }
    ProjectService.prototype.getProjectDetails = function (id) {
        return this.http.get(("" + ProjectApiUrls_1.ProjectApiUrl.getProjectDetailsUrl) + id)
            .map(_super.prototype.getJson);
        //this.checkErrors)
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    };
    ProjectService.prototype.putProjectDetails = function (filterBody) {
        return this.http.put("" + ProjectApiUrls_1.ProjectApiUrl.putProjectDetailsUrl, filterBody)
            .map(_super.prototype.getJson);
        //.chec
        // .catch(err => Observable.throw(err)) 
        // .map(this.getJson);
    };
    ProjectService.prototype.getBuildLevels = function (projectId) {
        return this.http.get(("" + ProjectApiUrls_1.ProjectApiUrl.getBuildLevelsUrl) + projectId)
            .map(_super.prototype.getJson);
        //this.checkErrors)
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    };
    ProjectService.prototype.getTorqueBooks = function (projectId, buildLevelId) {
        return this.http.get(("" + ProjectApiUrls_1.ProjectApiUrl.getTorqueBooksByBuildLevelIdUrl) + projectId + "&buildLevelId=" + buildLevelId)
            .map(_super.prototype.getJson);
        //this.checkErrors)
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    };
    ProjectService.prototype.postTorqueBook = function (torqueBookBody) {
        return this.http.post("" + ProjectApiUrls_1.ProjectApiUrl.postTorqueBookUrl, torqueBookBody)
            .map(_super.prototype.getJson);
        //.chec
        // .catch(err => Observable.throw(err))
        // .map(this.getJson);
    };
    ProjectService.prototype.postGridData = function () {
        return this.http.post("" + ProjectApiUrls_1.ProjectApiUrl.gridApiUrl, this.body, { headers: this.headers })
            .map(this.getJson);
        //this.checkErrors)
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    };
    ProjectService.prototype.postGridDataFilter = function (filterBody) {
        console.log("-------- Post Customers FilterBody --------", filterBody);
        return this.http.post("" + ProjectApiUrls_1.ProjectApiUrl.gridApiUrl, filterBody, { headers: this.headers })
            .map(this.getJson);
        //this.checkErrors)
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    };
    ProjectService.prototype.postAdd = function (filterBody) {
        console.log("-------- Post Customers FilterBody --------", filterBody);
        return this.http.post("" + ProjectApiUrls_1.ProjectApiUrl.postCreatedUrl, filterBody, { headers: this.headers })
            .map(this.getJson).catch(function (err) { return Observable_1.Observable.throw(err); })
            .map(this.getJson);
        //this.checkErrors)
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    };
    ProjectService.prototype.postUpdate = function (filterBody) {
        console.log("-------- Post Customers FilterBody --------", filterBody);
        return this.http.put("" + ProjectApiUrls_1.ProjectApiUrl.postUpdateUrl, filterBody, { headers: this.headers })
            .map(this.getJson)
            .map(this.checkErrors)
            .catch(function (err) { return Observable_1.Observable.throw(err); })
            .map(this.getJson);
    };
    ProjectService.prototype.getById = function (id) {
        return this.http.get(ProjectApiUrls_1.ProjectApiUrl.getByIdUrl + "/" + id, { headers: this.headers })
            .map(this.getJson);
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    };
    ProjectService.prototype.getProjectCodes = function () {
        return this.http.get("" + ProjectApiUrls_1.ProjectApiUrl.getAllUrl, { headers: this.headers })
            .map(this.getJson);
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    };
    ProjectService = __decorate([
        core_1.Injectable()
    ], ProjectService);
    return ProjectService;
}(base_service_1.BaseService));
exports.ProjectService = ProjectService;
