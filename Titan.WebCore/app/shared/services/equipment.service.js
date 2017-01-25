"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
var EquipmentApiUrls_1 = require('./apiUrlConst/EquipmentApiUrls');
require('rxjs/Rx');
require('rxjs/add/operator/map');
require('rxjs/add/observable/throw');
var EquipmentService = (function () {
    function EquipmentService(http) {
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
    EquipmentService.prototype.postGridData = function () {
        return this.http.post("" + EquipmentApiUrls_1.EquipmentApiUrl.gridApiUrl, this.body, { headers: this.headers })
            .map(this.getJson);
        //this.checkErrors)
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    };
    EquipmentService.prototype.postGridDataFilter = function (filterBody) {
        console.log("-------- Post Customers FilterBody --------", filterBody);
        return this.http.post("" + EquipmentApiUrls_1.EquipmentApiUrl.gridApiUrl, filterBody, { headers: this.headers })
            .map(this.getJson);
        //this.checkErrors)
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    };
    EquipmentService.prototype.postAdd = function (filterBody) {
        console.log("-------- Post Customers FilterBody --------", filterBody);
        return this.http.post("" + EquipmentApiUrls_1.EquipmentApiUrl.postCreatedUrl, filterBody, { headers: this.headers })
            .map(this.getJson);
        //this.checkErrors)
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    };
    EquipmentService.prototype.getLogComments = function (id) {
        return this.http.get(EquipmentApiUrls_1.EquipmentApiUrl.getLogComments + "/" + id, { headers: this.headers })
            .map(this.getJson)
            .map(function (data) {
            console.log('---------getbyusing testdata---------', data);
            return data.$values;
        });
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    };
    EquipmentService.prototype.PostLogComments = function (testFacilityId, comment) {
        return this.http.post(EquipmentApiUrls_1.EquipmentApiUrl.PostLogCommentsUrl + "/" + testFacilityId, comment, { headers: this.headers })
            .map(this.getJson);
    };
    EquipmentService.prototype.postManufacturerAdd = function (filterBody) {
        console.log("-------- Post Customers FilterBody --------", filterBody);
        return this.http.post("" + EquipmentApiUrls_1.EquipmentApiUrl.postManufacturerCreatedUrl, filterBody, { headers: this.headers })
            .map(this.getJson);
        //this.checkErrors)
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    };
    EquipmentService.prototype.postUpdate = function (filterBody) {
        console.log("-------- Post Customers FilterBody --------", filterBody);
        return this.http.put("" + EquipmentApiUrls_1.EquipmentApiUrl.postUpdateUrl, filterBody, { headers: this.headers })
            .map(this.getJson)
            .map(this.checkErrors)
            .catch(function (err) { return Observable_1.Observable.throw(err); })
            .map(this.getJson);
    };
    EquipmentService.prototype.getById = function (id) {
        return this.http.get(EquipmentApiUrls_1.EquipmentApiUrl.getByIdUrl + "/" + id, { headers: this.headers })
            .map(this.getJson);
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    };
    EquipmentService.prototype.getManufaturerDetailsById = function (id) {
        return this.http.get(EquipmentApiUrls_1.EquipmentApiUrl.getManufacturerDetailsByIdUrl + "/" + id, { headers: this.headers })
            .map(this.getJson);
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    };
    EquipmentService.prototype.getEquipmentManufacturers = function () {
        return this.http.get("" + EquipmentApiUrls_1.EquipmentApiUrl.getAllUrl, { headers: this.headers })
            .map(this.getJson);
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    };
    EquipmentService.prototype.getEquipmentTypes = function () {
        return this.http.get("" + EquipmentApiUrls_1.EquipmentApiUrl.getAllEquipmentTypesUrl, { headers: this.headers })
            .map(this.getJson);
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    };
    EquipmentService.prototype.getJson = function (response) {
        console.log("In Data Service response.json() call: ", response.json());
        return response.json();
    };
    EquipmentService.prototype.checkErrors = function (response) {
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
    EquipmentService = __decorate([
        core_1.Injectable()
    ], EquipmentService);
    return EquipmentService;
}());
exports.EquipmentService = EquipmentService;
