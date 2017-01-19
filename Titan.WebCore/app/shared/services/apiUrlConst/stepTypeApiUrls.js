"use strict";
var titanApiUrl_1 = require('./titanApiUrl');
var gridApiUrls_1 = require('./gridApiUrls');
var StepTypeApiUrl = (function () {
    function StepTypeApiUrl() {
    }
    StepTypeApiUrl.gridApiUrl = gridApiUrls_1.GridApiUrl.stepTypeGridUrl;
    StepTypeApiUrl.postCreatedUrl = titanApiUrl_1.titanApiUrl + 'stepType/post';
    StepTypeApiUrl.postUpdateUrl = titanApiUrl_1.titanApiUrl + 'stepType/put';
    StepTypeApiUrl.getByIdUrl = titanApiUrl_1.titanApiUrl + 'stepType/get';
    return StepTypeApiUrl;
}());
exports.StepTypeApiUrl = StepTypeApiUrl;
