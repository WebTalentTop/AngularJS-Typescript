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
var ProcedureApiUrls_1 = require('./apiUrlConst/ProcedureApiUrls');
var base_service_1 = require('./base.service');
require('rxjs/Rx');
require('rxjs/add/operator/map');
require('rxjs/add/observable/throw');
var ProcedureService = (function (_super) {
    __extends(ProcedureService, _super);
    function ProcedureService(http) {
        _super.call(this);
        this.http = http;
        this.headers.append("TenantId", "FDC1A91F-75F4-4B2F-BA8A-9C2D731EBE4D");
    }
    ProcedureService.prototype.postGridData = function () {
        return this.http.post("" + ProcedureApiUrls_1.ProcedureApiUrl.gridApiUrl, this.body, { headers: this.headers })
            .map(this.getJson);
        //this.checkErrors)
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    };
    ProcedureService.prototype.postGridDataFilter = function (filterBody) {
        console.log("-------- Post Customers FilterBody --------", filterBody);
        return this.http.post("" + ProcedureApiUrls_1.ProcedureApiUrl.gridApiUrl, filterBody, { headers: this.headers })
            .map(this.getJson);
        //this.checkErrors)
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    };
    ProcedureService.prototype.postAdd = function (filterBody) {
        console.log("-------- Post Customers FilterBody --------", filterBody);
        return this.http.post("" + ProcedureApiUrls_1.ProcedureApiUrl.postCreatedUrl, filterBody, { headers: this.headers })
            .map(this.getJson);
        //this.checkErrors)
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    };
    ProcedureService.prototype.postUpdate = function (filterBody) {
        console.log("-------- Post Customers FilterBody --------", filterBody);
        return this.http.put("" + ProcedureApiUrls_1.ProcedureApiUrl.postUpdateUrl, filterBody, { headers: this.headers })
            .map(this.getJson);
    };
    ProcedureService.prototype.getById = function (id) {
        return this.http.get(("" + ProcedureApiUrls_1.ProcedureApiUrl.getByIdUrl) + id, { headers: this.headers })
            .map(this.getJson);
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    };
    ProcedureService.prototype.postAddTestRequirements = function (filterBody, procedureId) {
        return this.http.post(("" + ProcedureApiUrls_1.ProcedureApiUrl.postAddProcedureRequirementUrl) + procedureId, filterBody, { headers: this.headers })
            .map(this.getJson);
    };
    ProcedureService.prototype.postAddSteps = function (filterBody, procedureId) {
        return this.http.post(("" + ProcedureApiUrls_1.ProcedureApiUrl.postAddProcedureStepUrl) + procedureId, filterBody, { headers: this.headers })
            .map(this.getJson);
    };
    ProcedureService.prototype.putProcedureStepDisplayOrder = function (filterBody, procedureId) {
        return this.http.put(("" + ProcedureApiUrls_1.ProcedureApiUrl.putProcedureStepDisplayOrderUrl) + procedureId, filterBody, { headers: this.headers })
            .map(this.getJson);
    };
    ProcedureService.prototype.getProcedureRequirements = function (procedureId) {
        return this.http.get(("" + ProcedureApiUrls_1.ProcedureApiUrl.getProcedureRequirementUrl) + procedureId, { headers: this.headers })
            .map(this.getJson);
    };
    ProcedureService.prototype.getProcedureSteps = function (procedureId) {
        return this.http.get(("" + ProcedureApiUrls_1.ProcedureApiUrl.getProcedureStepUrl) + procedureId, { headers: this.headers })
            .map(this.getJson);
    };
    ProcedureService.prototype.postDeleteProcedureRequirement = function (procedureId, testRequirementId) {
        return this.http.put(("" + ProcedureApiUrls_1.ProcedureApiUrl.postDeleteProcedureRequirementUrl) + procedureId + '&testRequirementId=' + testRequirementId, null, { headers: this.headers })
            .map(this.getJson);
    };
    ProcedureService.prototype.postDeleteProcedureStep = function (procedureId, stepId) {
        return this.http.put(("" + ProcedureApiUrls_1.ProcedureApiUrl.postDeleteProcedureStepUrl) + procedureId + '&stepId=' + stepId, null, { headers: this.headers })
            .map(this.getJson);
    };
    ProcedureService.prototype.filterByTestTemplateId = function (testTemplateId, filterString) {
        return this.http.get(("" + ProcedureApiUrls_1.ProcedureApiUrl.filterByTestTemplateIdUrl) + testTemplateId + '&filterString=' + filterString, { headers: this.headers })
            .map(this.getJson);
    };
    ProcedureService = __decorate([
        core_1.Injectable()
    ], ProcedureService);
    return ProcedureService;
}(base_service_1.BaseService));
exports.ProcedureService = ProcedureService;
