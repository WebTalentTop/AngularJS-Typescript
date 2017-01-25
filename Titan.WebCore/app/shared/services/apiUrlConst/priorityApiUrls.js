"use strict";
var titanApiUrl_1 = require('./titanApiUrl');
var gridApiUrls_1 = require('./gridApiUrls');
var PriorityApiUrl = (function () {
    function PriorityApiUrl() {
    }
    PriorityApiUrl.gridApiUrl = gridApiUrls_1.GridApiUrl.priorityGridUrl;
    PriorityApiUrl.postCreatedUrl = titanApiUrl_1.titanApiUrl + 'priority/post';
    PriorityApiUrl.postUpdateUrl = titanApiUrl_1.titanApiUrl + 'priority/put';
    PriorityApiUrl.getByIdUrl = titanApiUrl_1.titanApiUrl + 'priority/get';
    PriorityApiUrl.getAllUrl = titanApiUrl_1.titanApiUrl + 'priority';
    return PriorityApiUrl;
}());
exports.PriorityApiUrl = PriorityApiUrl;
