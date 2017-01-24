"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var formSchema_ApiUrls_1 = require('./apiUrlConst/formSchema.ApiUrls');
require('rxjs/Rx');
require('rxjs/add/operator/map');
require('rxjs/add/observable/throw');
var FormSchemaService = (function () {
    function FormSchemaService(ls, http) {
        this.ls = ls;
        this.http = http;
        this.headers = new http_1.Headers({
            'Content-Type': 'application/json'
        });
        this.pageNumber = 0;
        this.pageSize = 15;
        this.body = {
            "locale": "en-us",
            "defaultLocale": "en-us",
            "PageNumber": 1,
            "PageSize": 15,
            "IsPaging": true
        };
        this.ls.setShow(false);
        /*this.headers.append('Access-Control-Allow-Origin', 'http://localhost:62603');
         this.headers.append('Access-Control-Allow-Methods', 'GE, PUT, POST, OPTIONS');
         this.headers.append('Content-Type', 'application/json');*/
        this.headers.append('Accept', 'application/json');
        this.headers.append("TenantId", "FDC1A91F-75F4-4B2F-BA8A-9C2D731EBE4D");
    }
    FormSchemaService.prototype.postGridData = function () {
        return this.http.post("" + formSchema_ApiUrls_1.FormSchemaApiUrl.gridApiUrl, this.body, { headers: this.headers })
            .map(this.getJson);
    };
    FormSchemaService.prototype.postGridDataFilter = function (filterBody) {
        this.ls.logConsole("-------- Post Customers FilterBody --------", filterBody);
        return this.http.post("" + formSchema_ApiUrls_1.FormSchemaApiUrl.gridApiUrl, filterBody, { headers: this.headers })
            .map(this.getJson);
    };
    FormSchemaService.prototype.postAdd = function (filterBody) {
        this.ls.logConsole("-------- Post Customers FilterBody --------", filterBody);
        this.ls.logConsole("Post Schema URL ------------", formSchema_ApiUrls_1.FormSchemaApiUrl.postCreatedUrl);
        return this.http.post("" + formSchema_ApiUrls_1.FormSchemaApiUrl.postCreatedUrl, filterBody, { headers: this.headers })
            .map(this.getJson);
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    };
    FormSchemaService.prototype.postUpdate = function (filterBody) {
        this.ls.logConsole("-------- Post Customers FilterBody --------", filterBody);
        return this.http.put("" + formSchema_ApiUrls_1.FormSchemaApiUrl.postUpdateUrl, filterBody, { headers: this.headers })
            .map(this.getJson);
        /*.map(this.checkErrors)
        .catch(err => Observable.throw(err))
        .map(this.getJson);*/
    };
    FormSchemaService.prototype.getById = function (id) {
        return this.http.get(formSchema_ApiUrls_1.FormSchemaApiUrl.getByIdUrl + "/" + id, { headers: this.headers })
            .map(this.getJson);
    };
    FormSchemaService.prototype.getByFormSchemaCategoryId = function (id) {
        return this.http.get(formSchema_ApiUrls_1.FormSchemaApiUrl.getByFormSchemaCategoryId + "/" + id, { headers: this.headers })
            .map(this.getJson);
    };
    FormSchemaService.prototype.getByFormSchemaCategoryIdCol = function (ids) {
        return this.http.get(formSchema_ApiUrls_1.FormSchemaApiUrl.getByFormSchemaCategoryIdCol + "/" + ids, { headers: this.headers })
            .map(this.getJson);
    };
    FormSchemaService.prototype.getFormSchemaGrid = function (formSchemaCategoryId) {
        return this.http.get(formSchema_ApiUrls_1.FormSchemaApiUrl.getFormSchemaGridUrl + "/" + formSchemaCategoryId + "/" + this.pageNumber + "/" + this.pageSize, { headers: this.headers })
            .map(this.getJson);
    };
    FormSchemaService.prototype.getFormSchemaGridByEntityIdentifierId = function (entityIdentifierId) {
        return this.http.get(formSchema_ApiUrls_1.FormSchemaApiUrl.getFormSchemaGridByEntityIdentifierIdUrl + "/" + entityIdentifierId + "/" + this.pageNumber + "/" + this.pageSize, { headers: this.headers })
            .map(this.getJson);
    };
    /* getNotifications(id): Observable<any> {
     return this.http.get(`${FormSchemaFieldDataTypeApiUrl.getNotifications}/${id}`, {headers: this.headers})
     .map(this.getJson)
     .map(data => {
     this.ls.logConsole("Notification data --------", data);
     return data.$values
     });
     }*/
    FormSchemaService.prototype.getJson = function (response) {
        //this.ls.logConsole("In Data Service response.json() call: ", response.json());
        return response.json();
    };
    FormSchemaService.prototype.checkErrors = function (response) {
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
    FormSchemaService = __decorate([
        core_1.Injectable()
    ], FormSchemaService);
    return FormSchemaService;
}());
exports.FormSchemaService = FormSchemaService;
