"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
///<reference path="apiUrlConst/titanUserApiUrls.ts"/>
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/Rx');
require('rxjs/add/operator/map');
require('rxjs/add/observable/throw');
var titanUserProfile_ApiUrls_1 = require("./apiUrlConst/titanUserProfile.ApiUrls");
var TitanUserProfileService = (function () {
    function TitanUserProfileService(http) {
        this.http = http;
        this.headers = new http_1.Headers({
            'Content-Type': 'application/json'
        });
    }
    TitanUserProfileService.prototype.getCurrentUserProfile = function () {
        return this.http.get("" + titanUserProfile_ApiUrls_1.TitanUserProfileApiUrls.getCurrentUserProfileUrl, { headers: this.headers })
            .map(this.getJson);
    };
    TitanUserProfileService.prototype.getById = function () {
        var _this = this;
        return this.http.get("" + titanUserProfile_ApiUrls_1.TitanUserProfileApiUrls.getCurrentUserProfileUrl, { headers: this.headers })
            .map(this.getJson)
            .map(function (user) {
            _this.currentUser = user.result;
            return user;
        });
    };
    TitanUserProfileService.prototype.getJson = function (response) {
        console.log("In Data Service response.json() call: ", response.json());
        return response.json();
    };
    TitanUserProfileService.prototype.checkErrors = function (response) {
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
    TitanUserProfileService = __decorate([
        core_1.Injectable()
    ], TitanUserProfileService);
    return TitanUserProfileService;
}());
exports.TitanUserProfileService = TitanUserProfileService;
