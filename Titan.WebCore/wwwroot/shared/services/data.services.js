"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var gridApiUrl_1 = require('./apiUrlConst/gridApiUrl');
require('rxjs/Rx');
require('rxjs/add/operator/map');
require('rxjs/add/observable/throw');
var DataService = (function () {
    function DataService(http) {
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
    DataService.prototype.postDepartmentGridData = function () {
        return this.http.post("" + gridApiUrl_1.GridApiUrl.departmentGridUrl, this.body, { headers: this.headers })
            .map(this.getJson);
        //this.checkErrors)
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    };
    DataService.prototype.postDepartmentGridDataFilter = function (filterBody) {
        console.log("-------- Post Customers FilterBody --------", filterBody);
        return this.http.post("" + gridApiUrl_1.GridApiUrl.departmentGridUrl, filterBody, { headers: this.headers })
            .map(this.getJson);
        //this.checkErrors)
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    };
    DataService.prototype.postProjectGridData = function () {
        console.log("---- postProjectGridData", gridApiUrl_1.GridApiUrl.projectGridUrl);
        return this.http.post("" + gridApiUrl_1.GridApiUrl.projectGridUrl, this.body, { headers: this.headers })
            .map(this.getJson);
        //this.checkErrors)
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    };
    DataService.prototype.postProjectGridDataFilter = function (filterBody) {
        console.log("---- postProjectGridDataFilter", gridApiUrl_1.GridApiUrl.projectGridUrl);
        console.log("-------- Post Customers FilterBody --------", filterBody);
        return this.http.post("" + gridApiUrl_1.GridApiUrl.projectGridUrl, filterBody, { headers: this.headers })
            .map(this.getJson);
        //this.checkErrors)
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    };
    DataService.prototype.postPlatformGridData = function () {
        return this.http.post("" + gridApiUrl_1.GridApiUrl.platformGridUrl, this.body, { headers: this.headers })
            .map(this.getJson);
        //this.checkErrors)
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    };
    DataService.prototype.postPlatformGridDataFilter = function (filterBody) {
        console.log("-------- Post Customers FilterBody --------", filterBody);
        return this.http.post("" + gridApiUrl_1.GridApiUrl.platformGridUrl, filterBody, { headers: this.headers })
            .map(this.getJson);
        //this.checkErrors)
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    };
    DataService.prototype.postEquipmentGridData = function () {
        return this.http.post("" + gridApiUrl_1.GridApiUrl.equipmentGridUrl, this.body, { headers: this.headers })
            .map(this.getJson);
        //this.checkErrors)
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    };
    DataService.prototype.postEquipmentGridDataFilter = function (filterBody) {
        console.log("-------- Post Customers FilterBody --------", filterBody);
        return this.http.post("" + gridApiUrl_1.GridApiUrl.equipmentGridUrl, filterBody, { headers: this.headers })
            .map(this.getJson);
        //this.checkErrors)
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    };
    DataService.prototype.getJson = function (response) {
        console.log("In Data Service response.json() call: ", response.json());
        return response.json();
    };
    DataService.prototype.checkErrors = function (response) {
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
    DataService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], DataService);
    return DataService;
}());
exports.DataService = DataService;
//# sourceMappingURL=data.services.js.map