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
var torqueSheetApiUrls_1 = require('./apiUrlConst/torqueSheetApiUrls');
var base_service_1 = require('./base.service');
require('rxjs/Rx');
require('rxjs/add/operator/map');
require('rxjs/add/observable/throw');
var TorquesheetService = (function (_super) {
    __extends(TorquesheetService, _super);
    function TorquesheetService(http) {
        _super.call(this);
        this.http = http;
        this.headers = new http_1.Headers({
            'Content-Type': 'application/json'
        });
        this.headers.append("TenantId", "FDC1A91F-75F4-4B2F-BA8A-9C2D731EBE4D");
    }
    TorquesheetService.prototype.getTorqueSheet = function (id, getCurrentVersionOrLatestVersion) {
        return this.http.get(("" + torqueSheetApiUrls_1.TorqueSheetApiUrl.getTorqueSheetUrl) + id + '&getCurrentVersionOrLatestVersion=' + getCurrentVersionOrLatestVersion)
            .map(_super.prototype.getJson);
        //this.checkErrors)
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    };
    TorquesheetService.prototype.postTorqueSheet = function (torqueSheetBody) {
        return this.http.post("" + torqueSheetApiUrls_1.TorqueSheetApiUrl.postTorqueSheetUrl, torqueSheetBody)
            .map(_super.prototype.getJson);
        //.chec
        // .catch(err => Observable.throw(err))
        // .map(this.getJson);
    };
    TorquesheetService.prototype.getTorqueBooksTorqueSheetNames = function (torqueBookId) {
        return this.http.get(("" + torqueSheetApiUrls_1.TorqueSheetApiUrl.getTorqueBooksTorqueSheetNamesUrl) + torqueBookId)
            .map(_super.prototype.getJson);
        //this.checkErrors)
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    };
    TorquesheetService.prototype.getTorqueSheets = function (torqueBookId) {
        return this.http.get(("" + torqueSheetApiUrls_1.TorqueSheetApiUrl.getTorqueSheetsByTorqueBookIdUrl) + torqueBookId)
            .map(_super.prototype.getJson);
        //this.checkErrors)
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    };
    TorquesheetService.prototype.getAllTorqueSheetTemplates = function () {
        return this.http.get("" + torqueSheetApiUrls_1.TorqueSheetApiUrl.getAllTorqueSheetTemplatesUrl)
            .map(_super.prototype.getJson);
    };
    TorquesheetService.prototype.postTorqueSheetTemplate = function (TorqueSheetTemplateBody) {
        return this.http.post("" + torqueSheetApiUrls_1.TorqueSheetApiUrl.torqueSheetTemplatePostUrl, TorqueSheetTemplateBody)
            .map(_super.prototype.getJson);
    };
    TorquesheetService.prototype.getTorqueSheetTemplate = function (id) {
        return this.http.get(("" + torqueSheetApiUrls_1.TorqueSheetApiUrl.getTorqueSheetTemplatesUrl) + id)
            .map(_super.prototype.getJson);
    };
    TorquesheetService.prototype.putTorqueSheetTemplate = function (filterBody) {
        return this.http.put("" + torqueSheetApiUrls_1.TorqueSheetApiUrl.putTorqueSheetTemplateUrl, filterBody)
            .map(this.getJson);
    };
    TorquesheetService.prototype.putTorqueSheet = function (status, filterBody) {
        return this.http.put(("" + torqueSheetApiUrls_1.TorqueSheetApiUrl.putTorqueSheetUrl) + status, filterBody)
            .map(this.getJson);
    };
    TorquesheetService.prototype.createNewTorqueSheetVersion = function (filterBody) {
        return this.http.post("" + torqueSheetApiUrls_1.TorqueSheetApiUrl.postNewTorqueSheetVersionUrl, filterBody)
            .map(this.getJson);
    };
    TorquesheetService = __decorate([
        core_1.Injectable()
    ], TorquesheetService);
    return TorquesheetService;
}(base_service_1.BaseService));
exports.TorquesheetService = TorquesheetService;
