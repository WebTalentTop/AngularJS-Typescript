"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var formInstance_ApiUrls_1 = require('./apiUrlConst/formInstance.ApiUrls');
require('rxjs/Rx');
require('rxjs/add/operator/map');
require('rxjs/add/observable/throw');
var FormInstanceService = (function () {
    function FormInstanceService(http) {
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
        return this.http.post(`${FormInstanceApiUrl.gridApiUrl}`, this.body, { headers: this.headers })
            .map(this.getJson);
    }
    postGridDataFilter(filterBody): Observable<any> {
        console.log("-------- Post Customers FilterBody --------", filterBody);
        return this.http.post(`${FormInstanceApiUrl.gridApiUrl}`, filterBody, { headers: this.headers })
            .map(this.getJson);
    }*/
    FormInstanceService.prototype.postAdd = function (filterBody) {
        //console.log("-------- Post Customers FilterBody --------", filterBody);
        //console.log("Post Schema URL ------------", FormInstanceApiUrl.postCreatedUrl);
        return this.http.post("" + formInstance_ApiUrls_1.FormInstanceApiUrl.postCreatedUrl, filterBody, { headers: this.headers })
            .map(this.getJson);
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    };
    FormInstanceService.prototype.postUpdate = function (filterBody) {
        //console.log("-------- Post Customers FilterBody --------", filterBody);
        return this.http.put("" + formInstance_ApiUrls_1.FormInstanceApiUrl.postUpdateUrl, filterBody, { headers: this.headers })
            .map(this.getJson);
        /*.map(this.checkErrors)
        .catch(err => Observable.throw(err))
        .map(this.getJson);*/
    };
    FormInstanceService.prototype.getGridByEntityId = function (id) {
        return this.http.get(formInstance_ApiUrls_1.FormInstanceApiUrl.getGridByEntityIdUrl + "/" + id, { headers: this.headers })
            .map(this.getJson);
    };
    FormInstanceService.prototype.getById = function (id) {
        return this.http.get(formInstance_ApiUrls_1.FormInstanceApiUrl.getByIdUrl + "/" + id, { headers: this.headers })
            .map(this.getJson);
    };
    /*
        getByFormSchemaCategoryId(id):Observable<any> {
            return this.http.get(`${FormInstanceApiUrl.getByFormSchemaCategoryId}/${id}`, { headers: this.headers})
                .map(this.getJson);
        }
    
        getByFormSchemaCategoryIdCol(ids):Observable<any> {
            return this.http.get(`${FormInstanceApiUrl.getByFormSchemaCategoryIdCol}/${ids}`, { headers: this.headers})
                .map(this.getJson);
        }*/
    /* getNotifications(id): Observable<any> {
     return this.http.get(`${FormSchemaFieldDataTypeApiUrl.getNotifications}/${id}`, {headers: this.headers})
     .map(this.getJson)
     .map(data => {
     console.log("Notification data --------", data);
     return data.$values
     });
     }*/
    FormInstanceService.prototype.getJson = function (response) {
        return response.json();
    };
    FormInstanceService = __decorate([
        core_1.Injectable()
    ], FormInstanceService);
    return FormInstanceService;
}());
exports.FormInstanceService = FormInstanceService;
