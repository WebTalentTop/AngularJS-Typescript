"use strict";
var http_1 = require('@angular/http');
require('rxjs/Rx');
require('rxjs/add/operator/map');
require('rxjs/add/observable/throw');
var BaseService = (function () {
    function BaseService() {
        this.headers = new http_1.Headers({
            'Content-Type': 'application/json'
        });
        this.body = {
            "locale": "en-us",
            "defaultLocale": "en-us",
            "PageNumber": 1,
            "PageSize": 5,
            "IsPaging": true
        };
    }
    BaseService.prototype.Headers = function () {
        return this.headers;
    };
    BaseService.prototype.getJson = function (response) {
        //console.log("In Data Service response.json() call: ",response.json());
        var body;
        // check if empty, before call json
        if (response.text()) {
            body = response.json();
        }
        return body || {};
    };
    BaseService.prototype.checkErrors = function (response) {
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
    return BaseService;
}());
exports.BaseService = BaseService;
