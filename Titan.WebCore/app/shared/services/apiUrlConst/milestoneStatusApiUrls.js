"use strict";
var titanApiUrl_1 = require('./titanApiUrl');
var gridApiUrls_1 = require('./gridApiUrls');
var MilestoneStatusApiUrl = (function () {
    function MilestoneStatusApiUrl() {
    }
    MilestoneStatusApiUrl.gridApiUrl = gridApiUrls_1.GridApiUrl.milestoneStatusGridUrl;
    MilestoneStatusApiUrl.postCreatedUrl = titanApiUrl_1.titanApiUrl + 'milestoneStatus/post';
    MilestoneStatusApiUrl.postUpdateUrl = titanApiUrl_1.titanApiUrl + 'milestoneStatus/put';
    MilestoneStatusApiUrl.getByIdUrl = titanApiUrl_1.titanApiUrl + 'milestoneStatus/get';
    return MilestoneStatusApiUrl;
}());
exports.MilestoneStatusApiUrl = MilestoneStatusApiUrl;
