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
var StepApiUrls_1 = require('./apiUrlConst/StepApiUrls');
var base_service_1 = require('./base.service');
require('rxjs/Rx');
require('rxjs/add/operator/map');
require('rxjs/add/observable/throw');
var StepService = (function (_super) {
    __extends(StepService, _super);
    function StepService(http) {
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
    StepService.prototype.postGridData = function () {
        return this.http.post("" + StepApiUrls_1.StepApiUrl.gridApiUrl, this.body, { headers: this.headers })
            .map(this.getJson);
        //this.checkErrors)
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    };
    StepService.prototype.postGridDataFilter = function (filterBody) {
        console.log("-------- Post Customers FilterBody --------", filterBody);
        return this.http.post("" + StepApiUrls_1.StepApiUrl.gridApiUrl, filterBody, { headers: this.headers })
            .map(this.getJson);
        //this.checkErrors)
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    };
    StepService.prototype.postAdd = function (filterBody) {
        console.log("-------- Post Customers FilterBody --------", filterBody);
        return this.http.post("" + StepApiUrls_1.StepApiUrl.postCreatedUrl, filterBody, { headers: this.headers })
            .map(this.getJson);
        //this.checkErrors)
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    };
    StepService.prototype.postUpdate = function (filterBody) {
        console.log("-------- Post Customers FilterBody --------", filterBody);
        return this.http.put("" + StepApiUrls_1.StepApiUrl.postUpdateUrl, filterBody, { headers: this.headers })
            .map(this.getJson);
        //.map(this.checkErrors);
    };
    StepService.prototype.getById = function (id) {
        return this.http.get(("" + StepApiUrls_1.StepApiUrl.getByIdUrl) + id, { headers: this.headers })
            .map(this.getJson);
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    };
    StepService.prototype.getStepTypes = function () {
        return this.http.get("" + StepApiUrls_1.StepApiUrl.getStepTypesUrl, { headers: this.headers })
            .map(this.getJson);
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    };
    StepService.prototype.getStepTypeDetails = function (stepTypeId) {
        return this.http.get(("" + StepApiUrls_1.StepApiUrl.getStepTypeDetailsUrl) + stepTypeId, { headers: this.headers })
            .map(this.getJson);
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    };
    StepService.prototype.getStepFrequencies = function () {
        return this.http.get("" + StepApiUrls_1.StepApiUrl.getStepFrequenciesUrl, { headers: this.headers })
            .map(this.getJson);
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    };
    StepService.prototype.filterByProcedureId = function (procedureId, filterString) {
        return this.http.get(("" + StepApiUrls_1.StepApiUrl.filterByProcedureIdUrl) + procedureId + '&filterString=' + filterString, { headers: this.headers })
            .map(this.getJson);
    };
    StepService = __decorate([
        core_1.Injectable()
    ], StepService);
    return StepService;
}(base_service_1.BaseService));
exports.StepService = StepService;
