"use strict";
var titanApiUrl_1 = require('./titanApiUrl');
var gridApiUrls_1 = require('./gridApiUrls');
var MilestoneEventApiUrl = (function () {
    function MilestoneEventApiUrl() {
    }
    MilestoneEventApiUrl.gridApiUrl = gridApiUrls_1.GridApiUrl.milestoneEventGridUrl;
    MilestoneEventApiUrl.postCreatedUrl = titanApiUrl_1.titanApiUrl + 'milestoneEvent/post';
    MilestoneEventApiUrl.postUpdateUrl = titanApiUrl_1.titanApiUrl + 'milestoneEvent/put';
    MilestoneEventApiUrl.getByIdUrl = titanApiUrl_1.titanApiUrl + 'milestoneEvent/get';
    return MilestoneEventApiUrl;
}());
exports.MilestoneEventApiUrl = MilestoneEventApiUrl;
