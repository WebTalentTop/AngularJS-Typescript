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
var formSchemaFieldDataType_ApiUrls_1 = require('./apiUrlConst/formSchemaFieldDataType.ApiUrls');
require('rxjs/Rx');
require('rxjs/add/operator/map');
require('rxjs/add/observable/throw');
var base_service_1 = require("./base.service");
var FormSchemaFieldDataTypeService = (function (_super) {
    __extends(FormSchemaFieldDataTypeService, _super);
    function FormSchemaFieldDataTypeService(http) {
        _super.call(this);
        this.http = http;
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
        _super.prototype.Headers.call(this).append('Accept', 'application/json');
        _super.prototype.Headers.call(this).append("TenantId", "FDC1A91F-75F4-4B2F-BA8A-9C2D731EBE4D");
    }
    /* postGridData(): Observable<any> {
         return this.http.post(`${FormSchemaFieldDataTypeApiUrl.gridApiUrl}`, this.body, { headers: this.headers })
             .map(this.getJson);
     }
     postGridDataFilter(filterBody): Observable<any> {
         console.log("-------- Post Customers FilterBody --------", filterBody);
         return this.http.post(`${FormSchemaFieldDataTypeApiUrl.gridApiUrl}`, filterBody, { headers: this.headers })
             .map(this.getJson);
     }
 
     postAdd(filterBody): Observable<any> {
         console.log("-------- Post Customers FilterBody --------", filterBody);
         return this.http.post(`${FormSchemaFieldDataTypeApiUrl.postCreatedUrl}`, filterBody, { headers: this.headers })
             .map(this.getJson).catch(err => Observable.throw(err))
             .map(this.getJson);
     }
 
     postUpdate(filterBody): Observable<any> {
         console.log("-------- Post Customers FilterBody --------", filterBody);
         return this.http.put(`${FormSchemaFieldDataTypeApiUrl.postUpdateUrl}`, filterBody, { headers: this.headers })
             .map(this.getJson)
             .map(this.checkErrors)
             .catch(err => Observable.throw(err))
             .map(this.getJson);
     }*/
    FormSchemaFieldDataTypeService.prototype.getById = function (id) {
        return this.http.get(formSchemaFieldDataType_ApiUrls_1.FormSchemaFieldDataTypeApiUrl.getByIdUrl + "/" + id, { headers: this.headers })
            .map(_super.prototype.getJson);
    };
    FormSchemaFieldDataTypeService.prototype.getAll = function () {
        return this.http.get("" + formSchemaFieldDataType_ApiUrls_1.FormSchemaFieldDataTypeApiUrl.getAll, { headers: this.headers })
            .map(_super.prototype.getJson);
    };
    FormSchemaFieldDataTypeService = __decorate([
        core_1.Injectable()
    ], FormSchemaFieldDataTypeService);
    return FormSchemaFieldDataTypeService;
}(base_service_1.BaseService));
exports.FormSchemaFieldDataTypeService = FormSchemaFieldDataTypeService;
