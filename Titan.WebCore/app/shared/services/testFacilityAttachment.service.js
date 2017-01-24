"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var TestFacilityAttachmentApiUrls_1 = require('./apiUrlConst/TestFacilityAttachmentApiUrls');
require('rxjs/add/operator/toPromise');
require('rxjs/Rx');
require('rxjs/add/operator/map');
require('rxjs/add/observable/throw');
var TestFacilityAttachmentService = (function () {
    function TestFacilityAttachmentService(http) {
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
    TestFacilityAttachmentService.prototype.getByIdusing = function (id) {
        return this.http.get(TestFacilityAttachmentApiUrls_1.TestFacilityAttachmentApiUrl.getByIdUrl + "/" + id, { headers: this.headers })
            .map(this.getJson)
            .map(function (data) {
            console.log('---------getbyusing testdata---------', data);
            return data.$values;
        });
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    };
    TestFacilityAttachmentService.prototype.getSensorAttachmentsByEntityIdUrl = function (entityId) {
        return this.http.get(TestFacilityAttachmentApiUrls_1.TestFacilityAttachmentApiUrl.getByIdUrl + "/" + entityId, { headers: this.headers })
            .map(this.getJson);
        //.map(data => {
        //    console.log('---------getbyusing testdata---------', data);
        //    return data.$values
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    };
    TestFacilityAttachmentService.prototype.DeleteAttachmentsById = function (AttachmentId) {
        return this.http.delete(TestFacilityAttachmentApiUrls_1.TestFacilityAttachmentApiUrl.DeleteAttachmentsByIdUrl + "/" + AttachmentId, { headers: this.headers });
    };
    TestFacilityAttachmentService.prototype.getJson = function (response) {
        console.log("In Data Service response.json() call: ", response.json());
        return response.json();
    };
    TestFacilityAttachmentService.prototype.checkErrors = function (response) {
        if (response.status >= 200 && response.status <= 300) {
            return response;
        }
        else {
            var error = new Error(response.statusText);
            error['response'] = response;
            console.error(error);
            throw error;
        }
    };
    TestFacilityAttachmentService = __decorate([
        core_1.Injectable()
    ], TestFacilityAttachmentService);
    return TestFacilityAttachmentService;
}());
exports.TestFacilityAttachmentService = TestFacilityAttachmentService;
