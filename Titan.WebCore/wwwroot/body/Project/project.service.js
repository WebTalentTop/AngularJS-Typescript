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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/// <reference path="../../../typings/globals/core-js/index.d.ts" />
/// <reference path="../../../typings/shim.d.ts" />
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/Rx');
require('rxjs/add/operator/map');
require('rxjs/add/observable/throw');
var base_service_1 = require('./../../shared/services/base.service');
var ProjectService = (function (_super) {
    __extends(ProjectService, _super);
    function ProjectService(http) {
        _super.call(this);
        this.http = http;
        this.getProjectDetailsUrl = 'http://localhost:9998/api/project/Get?id=';
        this.getTorqueBooksByBuildLevelIdUrl = 'http://localhost:9998/api/TorqueBook/GetTorqueBooksByBuildLevel?projectId=';
        this.getTorqueSheetsByTorqueBookIdUrl = 'http://localhost:9998/api/TorqueSheet/GetTorqueSheetsByTorqueBook?torqueBookId=';
        this.putProjectDetailsUrl = 'http://localhost:9998/api/project/Put';
        this.postTorqueBookUrl = 'http://localhost:9998/api/TorqueBook/Post';
        this.postTorqueSheetUrl = 'http://localhost:9998/api/TorqueSheet/Post';
        this.getBuildLevelsUrl = 'http://localhost:9998/api/project/GetProjectBuildLevels?projectId=';
    }
    ProjectService.prototype.getProjectDetails = function (id) {
        return this.http.get(this.getProjectDetailsUrl + id)
            .map(_super.prototype.getJson);
        //this.checkErrors)
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    };
    ProjectService.prototype.putProjectDetails = function (filterBody) {
        return this.http.put(this.putProjectDetailsUrl, filterBody)
            .map(this.getJson);
        //.chec
        // .catch(err => Observable.throw(err))
        // .map(this.getJson);
    };
    ProjectService.prototype.getBuildLevels = function (projectId) {
        return this.http.get(this.getBuildLevelsUrl + projectId)
            .map(_super.prototype.getJson);
        //this.checkErrors)
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    };
    ProjectService.prototype.postTorqueBook = function (torqueBookBody) {
        return this.http.post(this.postTorqueBookUrl, torqueBookBody)
            .map(_super.prototype.getJson);
        //.chec
        // .catch(err => Observable.throw(err))
        // .map(this.getJson);
    };
    ProjectService.prototype.postTorqueSheet = function (torqueSheetBody) {
        return this.http.post(this.postTorqueSheetUrl, torqueSheetBody)
            .map(_super.prototype.getJson);
        //.chec
        // .catch(err => Observable.throw(err))
        // .map(this.getJson);
    };
    ProjectService.prototype.getTorqueBooks = function (projectId, buildLevelId) {
        return this.http.get(this.getTorqueBooksByBuildLevelIdUrl + projectId + "&buildLevelId=" + buildLevelId)
            .map(_super.prototype.getJson);
        //this.checkErrors)
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    };
    ProjectService.prototype.getTorqueSheets = function (torqueBookId) {
        return this.http.get(this.getTorqueSheetsByTorqueBookIdUrl + torqueBookId)
            .map(_super.prototype.getJson);
        //this.checkErrors)
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    };
    ProjectService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ProjectService);
    return ProjectService;
}(base_service_1.BaseService));
exports.ProjectService = ProjectService;
//# sourceMappingURL=project.service.js.map