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
var Observable_1 = require('rxjs/Observable');
var TestRequirementApiUrls_1 = require('./apiUrlConst/TestRequirementApiUrls');
var base_service_1 = require('./base.service');
require('rxjs/Rx');
require('rxjs/add/operator/map');
require('rxjs/add/observable/throw');
var TestRequirementService = (function (_super) {
    __extends(TestRequirementService, _super);
    function TestRequirementService(http) {
        _super.call(this);
        this.http = http;
        this.headers.append("TenantId", "FDC1A91F-75F4-4B2F-BA8A-9C2D731EBE4D");
    }
    TestRequirementService.prototype.postGridData = function () {
        return this.http.post("" + TestRequirementApiUrls_1.TestRequirementApiUrl.gridApiUrl, this.body, { headers: this.headers })
            .map(this.getJson);
        //this.checkErrors)
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    };
    TestRequirementService.prototype.postGridDataFilter = function (filterBody) {
        console.log("-------- Post Customers FilterBody --------", filterBody);
        return this.http.post("" + TestRequirementApiUrls_1.TestRequirementApiUrl.gridApiUrl, filterBody, { headers: this.headers })
            .map(this.getJson);
        //this.checkErrors)
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    };
    TestRequirementService.prototype.postAdd = function (filterBody) {
        console.log("-------- Post Customers FilterBody --------", filterBody);
        return this.http.post("" + TestRequirementApiUrls_1.TestRequirementApiUrl.postCreatedUrl, filterBody, { headers: this.headers })
            .map(this.getJson).catch(function (err) { return Observable_1.Observable.throw(err); })
            .map(this.getJson);
        //this.checkErrors)
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    };
    TestRequirementService.prototype.postUpdate = function (filterBody) {
        console.log("-------- Post Customers FilterBody --------", filterBody);
        return this.http.put("" + TestRequirementApiUrls_1.TestRequirementApiUrl.postUpdateUrl, filterBody, { headers: this.headers })
            .map(this.getJson);
    };
    TestRequirementService.prototype.getById = function (id) {
        return this.http.get(TestRequirementApiUrls_1.TestRequirementApiUrl.getByIdUrl + "/" + id, { headers: this.headers })
            .map(this.getJson);
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    };
    TestRequirementService.prototype.filterByTestTemplateId = function (testTemplateId, filterString) {
        return this.http.get(("" + TestRequirementApiUrls_1.TestRequirementApiUrl.filterByTestTemplateIdUrl) + testTemplateId + '&filterString=' + filterString, { headers: this.headers })
            .map(this.getJson);
    };
    TestRequirementService.prototype.filterByProcedureId = function (procedureId, filterString) {
        return this.http.get(("" + TestRequirementApiUrls_1.TestRequirementApiUrl.filterByProcedureIdUrl) + procedureId + '&filterString=' + filterString, { headers: this.headers })
            .map(this.getJson);
    };
    TestRequirementService = __decorate([
        core_1.Injectable()
    ], TestRequirementService);
    return TestRequirementService;
}(base_service_1.BaseService));
exports.TestRequirementService = TestRequirementService;
