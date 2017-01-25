/**
 * Created by ZeroInfinity on 12/16/2016.
 */
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var entityIdentifier_ApiUrls_1 = require('./apiUrlConst/entityIdentifier.ApiUrls');
require('rxjs/Rx');
require('rxjs/add/operator/map');
require('rxjs/add/observable/throw');
var EntityIdentifierService = (function () {
    function EntityIdentifierService(ls, http) {
        this.ls = ls;
        this.http = http;
        this.headers = new http_1.Headers({
            'Content-Type': 'application/json'
        });
        this.ls.setShow(false);
        /*this.headers.append('Access-Control-Allow-Origin', 'http://localhost:62603');
         this.headers.append('Access-Control-Allow-Methods', 'GE, PUT, POST, OPTIONS');
         this.headers.append('Content-Type', 'application/json');*/
        this.headers.append('Accept', 'application/json');
        this.headers.append("TenantId", "FDC1A91F-75F4-4B2F-BA8A-9C2D731EBE4D");
    }
    EntityIdentifierService.prototype.getById = function (id) {
        return this.http.get(entityIdentifier_ApiUrls_1.EntityIdentifierApiUrl.getByIdUrl + "/" + id, { headers: this.headers })
            .map(this.getJson);
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    };
    EntityIdentifierService.prototype.getByName = function (name) {
        return this.http.get(entityIdentifier_ApiUrls_1.EntityIdentifierApiUrl.getByNameUrl + "/" + name, { headers: this.headers })
            .map(this.getJson);
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    };
    EntityIdentifierService.prototype.getByNameForForms = function (name) {
        return this.http.get(entityIdentifier_ApiUrls_1.EntityIdentifierApiUrl.getByNameForFormsUrl + "/" + name, { headers: this.headers })
            .map(this.getJson);
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    };
    EntityIdentifierService.prototype.getJson = function (response) {
        //this.ls.logConsole("In Data Service response.json() call: ", response.json());
        return response.json();
    };
    EntityIdentifierService = __decorate([
        core_1.Injectable()
    ], EntityIdentifierService);
    return EntityIdentifierService;
}());
exports.EntityIdentifierService = EntityIdentifierService;
