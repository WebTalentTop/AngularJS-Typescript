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
var TestRequestApiUrl_1 = require('./apiUrlConst/TestRequestApiUrl');
var base_service_1 = require('./base.service');
require('rxjs/Rx');
require('rxjs/add/operator/map');
require('rxjs/add/observable/throw');
var TestRequestService = (function (_super) {
    __extends(TestRequestService, _super);
    function TestRequestService(http) {
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
        //this.headers.append("TenantId", "FDC1A91F-75F4-4B2F-BA8A-9C2D731EBE4D");
    }
    TestRequestService.prototype.getTestFacilityScheduleById = function (id) {
        return this.http.get(("" + TestRequestApiUrl_1.TestReqestApiUrl.getFacilityScheduleByTestRequestIdUrl) + id, { headers: this.headers })
            .map(this.getJson);
    };
    TestRequestService.prototype.getUserScheduleById = function (id, idType) {
        return this.http.get("" + TestRequestApiUrl_1.TestReqestApiUrl.getUserScheduleByIdUrl + id + "/" + idType, { headers: this.headers })
            .map(this.getJson);
    };
    TestRequestService.prototype.postDeleteUserScheduleInstance = function (formBody) {
        console.log("-------- testRequest/DeleteUserScheduleInstance --------", formBody);
        return this.http.post("" + TestRequestApiUrl_1.TestReqestApiUrl.postDeleteUserScheduleInstanceUrl, formBody, { headers: this.headers })
            .map(this.getJson);
    };
    TestRequestService.prototype.postAssignUser = function (formBody) {
        console.log("-------- testRequest/DeleteUserScheduleInstance --------", formBody);
        return this.http.post("" + TestRequestApiUrl_1.TestReqestApiUrl.postAssignUserUrl, formBody, { headers: this.headers })
            .map(this.getJson);
    };
    TestRequestService.prototype.postMoveTestRequest = function (formBody) {
        return this.http.post("" + TestRequestApiUrl_1.TestReqestApiUrl.postDeleteUserScheduleInstanceUrl, formBody, { headers: this.headers })
            .map(this.getJson);
    };
    TestRequestService = __decorate([
        core_1.Injectable()
    ], TestRequestService);
    return TestRequestService;
}(base_service_1.BaseService));
exports.TestRequestService = TestRequestService;
