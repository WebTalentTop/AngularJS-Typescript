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
var entityEvent_ApiUrls_1 = require('./apiUrlConst/entityEvent.ApiUrls');
require('rxjs/Rx');
require('rxjs/add/operator/map');
require('rxjs/add/observable/throw');
var EntityEventService = (function () {
    function EntityEventService(http) {
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
    /*postGridData(): Observable<any> {
     return this.http.post(`${FormSchemaCategoryApiUrl.gridApiUrl}`, this.body, { headers: this.headers })
     .map(this.getJson);
     }
     postGridDataFilter(filterBody): Observable<any> {
     console.log("-------- Post Customers FilterBody --------", filterBody);
     return this.http.post(`${FormSchemaCategoryApiUrl.gridApiUrl}`, filterBody, { headers: this.headers })
     .map(this.getJson);
     }*/
    EntityEventService.prototype.postAdd = function (filterBody) {
        console.log("-------- Post FilterBody --------", filterBody);
        console.log("Post Schema URL ------------", entityEvent_ApiUrls_1.EntityEventApiUrl.postCreatedUrl);
        return this.http.post("" + entityEvent_ApiUrls_1.EntityEventApiUrl.postCreatedUrl, filterBody, { headers: this.headers })
            .map(this.getJson);
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    };
    EntityEventService.prototype.postUpdate = function (filterBody) {
        console.log("-------- Post FilterBody --------", filterBody);
        return this.http.put("" + entityEvent_ApiUrls_1.EntityEventApiUrl.postUpdateUrl, filterBody, { headers: this.headers })
            .map(this.getJson);
        /*.map(this.checkErrors)
         .catch(err => Observable.throw(err))
         .map(this.getJson);*/
    };
    EntityEventService.prototype.getById = function (id) {
        return this.http.get(entityEvent_ApiUrls_1.EntityEventApiUrl.getByIdUrl + "/" + id, { headers: this.headers })
            .map(this.getJson);
    };
    EntityEventService.prototype.getAll = function () {
        return this.http.get("" + entityEvent_ApiUrls_1.EntityEventApiUrl.getAllUrl, { headers: this.headers })
            .map(this.getJson);
    };
    EntityEventService.prototype.getFindByEntityIdentifierId = function (id) {
        return this.http.get(entityEvent_ApiUrls_1.EntityEventApiUrl.getFindByEntityIdentifierId + "/" + id, { headers: this.headers })
            .map(this.getJson);
    };
    EntityEventService.prototype.getJson = function (response) {
        return response.json();
    };
    EntityEventService.prototype.checkErrors = function (response) {
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
    EntityEventService = __decorate([
        core_1.Injectable()
    ], EntityEventService);
    return EntityEventService;
}());
exports.EntityEventService = EntityEventService;
