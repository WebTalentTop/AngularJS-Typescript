"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by ZeroInfinity on 12/8/2016.
 */
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var formSchemaCategory_ApiUrls_1 = require('./apiUrlConst/formSchemaCategory.ApiUrls');
require('rxjs/Rx');
require('rxjs/add/operator/map');
require('rxjs/add/observable/throw');
var FormSchemaCategoryService = (function () {
    function FormSchemaCategoryService(ls, http) {
        this.ls = ls;
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
        this.ls.setShow(false);
        /*this.headers.append('Access-Control-Allow-Origin', 'http://localhost:62603');
         this.headers.append('Access-Control-Allow-Methods', 'GE, PUT, POST, OPTIONS');
         this.headers.append('Content-Type', 'application/json');*/
        this.headers.append('Accept', 'application/json');
        this.headers.append("TenantId", "FDC1A91F-75F4-4B2F-BA8A-9C2D731EBE4D");
    }
    /*postGridData(): Observable<any> {
        return this.http.post(`${FormSchemaCategoryApiUrl.gridApiUrl}`, this.body, { headers: this.headers })
            .map(this.getJson);
    }
    postGridDataFilter(filterBody): Observable<any> {
        this.ls.logConsole("-------- Post Customers FilterBody --------", filterBody);
        return this.http.post(`${FormSchemaCategoryApiUrl.gridApiUrl}`, filterBody, { headers: this.headers })
            .map(this.getJson);
    }*/
    /*postAdd(filterBody): Observable<any> {
        this.ls.logConsole("-------- Post FilterBody --------", filterBody);
        this.ls.logConsole("Post Schema URL ------------", FormSchemaCategoryApiUrl.postCreatedUrl);
        return this.http.post(`${FormSchemaCategoryApiUrl.postCreatedUrl}`, filterBody, { headers: this.headers })
            .map(this.getJson)

        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    }

    postUpdate(filterBody): Observable<any> {
        this.ls.logConsole("-------- Post FilterBody --------", filterBody);
        return this.http.put(`${FormSchemaCategoryApiUrl.postUpdateUrl}`, filterBody, { headers: this.headers })
            .map(this.getJson);
        /!*.map(this.checkErrors)
         .catch(err => Observable.throw(err))
         .map(this.getJson);*!/
    }

    getById(id): Observable<any> {
        return this.http.get(`${FormSchemaCategoryApiUrl.getByIdUrl}/${id}`, { headers: this.headers })
            .map(this.getJson);
    }*/
    FormSchemaCategoryService.prototype.getAll = function () {
        return this.http.get("" + formSchemaCategory_ApiUrls_1.FormSchemaCategoryApiUrl.getAllUrl, { headers: this.headers })
            .map(this.getJson);
    };
    FormSchemaCategoryService.prototype.getByEntityIdentifierId = function (id) {
        return this.http.get(formSchemaCategory_ApiUrls_1.FormSchemaCategoryApiUrl.getByEntityIdentifierId + "/" + id, { headers: this.headers })
            .map(this.getJson);
    };
    FormSchemaCategoryService.prototype.GetByEntitySubTypeId = function (id) {
        return this.http.get("" + formSchemaCategory_ApiUrls_1.FormSchemaCategoryApiUrl.getByEntitySubTypeId + id, { headers: this.headers })
            .map(this.getJson);
    };
    FormSchemaCategoryService.prototype.getJson = function (response) {
        //this.ls.logConsole("In Data Service response.json() call: ", response.json());
        return response.json();
    };
    FormSchemaCategoryService = __decorate([
        core_1.Injectable()
    ], FormSchemaCategoryService);
    return FormSchemaCategoryService;
}());
exports.FormSchemaCategoryService = FormSchemaCategoryService;
