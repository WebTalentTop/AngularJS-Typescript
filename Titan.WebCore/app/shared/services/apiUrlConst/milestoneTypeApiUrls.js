"use strict";
var titanApiUrl_1 = require('./titanApiUrl');
var gridApiUrls_1 = require('./gridApiUrls');
var MilestoneTypeApiUrl = (function () {
    function MilestoneTypeApiUrl() {
    }
    MilestoneTypeApiUrl.gridApiUrl = gridApiUrls_1.GridApiUrl.milestoneTypeGridUrl;
    MilestoneTypeApiUrl.postCreatedUrl = titanApiUrl_1.titanApiUrl + 'milestoneType/post';
    MilestoneTypeApiUrl.postUpdateUrl = titanApiUrl_1.titanApiUrl + 'milestoneType/put';
    MilestoneTypeApiUrl.getByIdUrl = titanApiUrl_1.titanApiUrl + 'milestoneType/get';
    return MilestoneTypeApiUrl;
}());
exports.MilestoneTypeApiUrl = MilestoneTypeApiUrl;
