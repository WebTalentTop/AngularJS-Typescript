"use strict";
var titanApiUrl_1 = require('./titanApiUrl');
var gridApiUrls_1 = require('./gridApiUrls');
var MilestoneApiUrl = (function () {
    function MilestoneApiUrl() {
    }
    MilestoneApiUrl.gridApiUrl = gridApiUrls_1.GridApiUrl.milestoneGridUrl;
    MilestoneApiUrl.postCreatedUrl = titanApiUrl_1.titanApiUrl + 'milestone/post';
    MilestoneApiUrl.postUpdateUrl = titanApiUrl_1.titanApiUrl + 'milestone/put';
    MilestoneApiUrl.getByIdUrl = titanApiUrl_1.titanApiUrl + 'milestone/get';
    return MilestoneApiUrl;
}());
exports.MilestoneApiUrl = MilestoneApiUrl;
