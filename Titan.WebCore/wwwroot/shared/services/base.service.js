"use strict";
require('rxjs/Rx');
require('rxjs/add/operator/map');
require('rxjs/add/observable/throw');
var BaseService = (function () {
    function BaseService() {
    }
    BaseService.prototype.getJson = function (response) {
        //console.log("In Data Service response.json() call: ",response.json());
        return response.json();
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
//# sourceMappingURL=base.service.js.map