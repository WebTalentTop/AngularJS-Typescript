"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by ZeroInfinity on 1/6/2017.
 */
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var titanUserProfile_ApiUrls_1 = require('./apiUrlConst/auth/titanUserProfile.ApiUrls');
require('rxjs/Rx');
require('rxjs/add/operator/map');
require('rxjs/add/observable/throw');
var UserProfileService = (function () {
    function UserProfileService(http) {
        this.http = http;
        this.headers = new http_1.Headers({
            'Content-Type': 'application/json'
        });
        /*this.getCurrentUserProfile()
         .subscribe(res =>{
         this.userProfile = res.result;
         });*/
    }
    UserProfileService.prototype.getCurrentUserProfile = function () {
        return this.http.get("" + titanUserProfile_ApiUrls_1.TitanUserProfileApiUrls.getCurrentUserProfileUrl, { headers: this.headers })
            .map(this.getJson);
    };
    UserProfileService.prototype.getJson = function (response) {
        console.log("In Data Service response.json() call: ", response.json());
        return response.json();
    };
    UserProfileService.prototype.checkErrors = function (response) {
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
    UserProfileService = __decorate([
        core_1.Injectable()
    ], UserProfileService);
    return UserProfileService;
}());
exports.UserProfileService = UserProfileService;
