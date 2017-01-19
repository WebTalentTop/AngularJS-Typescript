"use strict";
var titanApiUrl_1 = require('./titanApiUrl');
var gridApiUrls_1 = require('./gridApiUrls');
var JudgementApiUrl = (function () {
    function JudgementApiUrl() {
    }
    JudgementApiUrl.gridApiUrl = gridApiUrls_1.GridApiUrl.judgementGridUrl;
    JudgementApiUrl.postCreatedUrl = titanApiUrl_1.titanApiUrl + 'judgement/post';
    JudgementApiUrl.postUpdateUrl = titanApiUrl_1.titanApiUrl + 'judgement/put';
    JudgementApiUrl.getByIdUrl = titanApiUrl_1.titanApiUrl + 'judgement/get';
    return JudgementApiUrl;
}());
exports.JudgementApiUrl = JudgementApiUrl;
