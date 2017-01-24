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
var TestTemplateApiUrls_1 = require('./apiUrlConst/TestTemplateApiUrls');
var base_service_1 = require('./base.service');
require('rxjs/Rx');
require('rxjs/add/operator/map');
require('rxjs/add/observable/throw');
var TestTemplateService = (function (_super) {
    __extends(TestTemplateService, _super);
    function TestTemplateService(http) {
        _super.call(this);
        this.http = http;
        this.headers.append("TenantId", "FDC1A91F-75F4-4B2F-BA8A-9C2D731EBE4D");
    }
    TestTemplateService.prototype.postGridData = function () {
        return this.http.post("" + TestTemplateApiUrls_1.TestTemplateApiUrl.gridApiUrl, this.body, { headers: this.headers })
            .map(this.getJson);
        //this.checkErrors)
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    };
    TestTemplateService.prototype.getTestTemplates = function () {
        return this.http.get("" + TestTemplateApiUrls_1.TestTemplateApiUrl.getAllUrl, { headers: this.headers })
            .map(this.getJson);
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    };
    TestTemplateService.prototype.postGridDataFilter = function (filterBody) {
        console.log("-------- Post Customers FilterBody --------", filterBody);
        return this.http.post("" + TestTemplateApiUrls_1.TestTemplateApiUrl.gridApiUrl, filterBody, { headers: this.headers })
            .map(this.getJson);
        //this.checkErrors)
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    };
    TestTemplateService.prototype.postAdd = function (filterBody) {
        console.log("-------- Post Customers FilterBody --------", filterBody);
        return this.http.post("" + TestTemplateApiUrls_1.TestTemplateApiUrl.postCreatedUrl, filterBody, { headers: this.headers })
            .map(this.getJson);
        //this.checkErrors)
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    };
    TestTemplateService.prototype.postUpdate = function (filterBody) {
        console.log("-------- Post Customers FilterBody --------", filterBody);
        return this.http.put("" + TestTemplateApiUrls_1.TestTemplateApiUrl.postUpdateUrl, filterBody, { headers: this.headers })
            .map(this.getJson);
    };
    TestTemplateService.prototype.getById = function (id) {
        return this.http.get(("" + TestTemplateApiUrls_1.TestTemplateApiUrl.getByIdUrl) + id, { headers: this.headers })
            .map(this.getJson);
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    };
    TestTemplateService.prototype.postAddProcedures = function (filterBody, testTemplateId) {
        return this.http.post(("" + TestTemplateApiUrls_1.TestTemplateApiUrl.postAddTestTemplateProcedureUrl) + testTemplateId, filterBody, { headers: this.headers })
            .map(this.getJson);
    };
    TestTemplateService.prototype.getTestTemplateProcedures = function (testTemplateId) {
        return this.http.get(("" + TestTemplateApiUrls_1.TestTemplateApiUrl.getTestTemplateProcedureUrl) + testTemplateId, { headers: this.headers })
            .map(this.getJson);
    };
    TestTemplateService.prototype.postDeleteTestTemplateProcedure = function (testTemplateId, procedureId) {
        return this.http.put(("" + TestTemplateApiUrls_1.TestTemplateApiUrl.postDeleteTestTemplateProcedureUrl) + testTemplateId + '&procedureId=' + procedureId, null, { headers: this.headers })
            .map(this.getJson);
    };
    TestTemplateService.prototype.postAddTestRequirements = function (filterBody, testTemplateId) {
        return this.http.post(("" + TestTemplateApiUrls_1.TestTemplateApiUrl.postAddTestTemplateRequirementUrl) + testTemplateId, filterBody, { headers: this.headers })
            .map(this.getJson);
    };
    TestTemplateService.prototype.getTestTemplateRequirements = function (testTemplateId) {
        return this.http.get(("" + TestTemplateApiUrls_1.TestTemplateApiUrl.getTestTemplateRequirementUrl) + testTemplateId, { headers: this.headers })
            .map(this.getJson);
    };
    TestTemplateService.prototype.postDeleteTestTemplateRequirement = function (testTemplateId, requirementId) {
        return this.http.put(("" + TestTemplateApiUrls_1.TestTemplateApiUrl.postDeleteTestTemplateRequirementUrl) + testTemplateId + '&requirementId=' + requirementId, null, { headers: this.headers })
            .map(this.getJson);
    };
    TestTemplateService.prototype.putTestTemplateProcedureDisplayOrder = function (filterBody, testTemplateId) {
        return this.http.put(("" + TestTemplateApiUrls_1.TestTemplateApiUrl.putTestTemplateProcedureDisplayOrderUrl) + testTemplateId, filterBody, { headers: this.headers })
            .map(this.getJson);
    };
    TestTemplateService = __decorate([
        core_1.Injectable()
    ], TestTemplateService);
    return TestTemplateService;
}(base_service_1.BaseService));
exports.TestTemplateService = TestTemplateService;
