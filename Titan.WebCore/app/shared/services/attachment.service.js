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
var attachmentApiUrls_1 = require('./apiUrlConst/attachmentApiUrls');
var base_service_1 = require('./base.service');
require('rxjs/Rx');
require('rxjs/add/operator/map');
require('rxjs/add/observable/throw');
var AttachmentService = (function (_super) {
    __extends(AttachmentService, _super);
    function AttachmentService(http) {
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
        /*this.headers.append('Access-Control-Allow-Origin', 'http://localhost:62603');
        this.headers.append('Access-Control-Allow-Methods', 'GE, PUT, POST, OPTIONS');
        this.headers.append('Content-Type', 'application/json');*/
        this.headers.append('Accept', 'application/json');
        this.headers.append("TenantId", "FDC1A91F-75F4-4B2F-BA8A-9C2D731EBE4D");
    }
    AttachmentService.prototype.getCategories = function () {
        return this.http.get("" + attachmentApiUrls_1.AttachmentApiUrl.getCategories, { headers: this.headers })
            .map(this.getJson)
            .map(function (data) {
            console.log("Notification data --------", data);
            return data.$values;
        });
    };
    AttachmentService.prototype.getDocumentsByEntityIdentifierId = function (id) {
        return this.http.get(attachmentApiUrls_1.AttachmentApiUrl.getDocumentsByEntityIdentifierIdUrl + "/" + id, { headers: this.headers })
            .map(this.getJson)
            .map(function (data) {
            console.log('---------getbyusing testdata---------', data);
            return data.result;
        });
    };
    AttachmentService.prototype.DeleteDocumentById = function (AttachmentId) {
        return this.http.delete(attachmentApiUrls_1.AttachmentApiUrl.DeleteAttachmentByIdUrl + "/" + AttachmentId, { headers: this.headers }).map(this.getJson)
            .map(function (data) {
            console.log('---------getbyusing testdata---------', data);
            return data.result;
        });
    };
    AttachmentService = __decorate([
        core_1.Injectable()
    ], AttachmentService);
    return AttachmentService;
}(base_service_1.BaseService));
exports.AttachmentService = AttachmentService;
