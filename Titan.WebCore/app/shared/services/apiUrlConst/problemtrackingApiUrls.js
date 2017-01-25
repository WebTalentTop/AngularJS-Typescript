"use strict";
var titanApiUrl_1 = require('./titanApiUrl');
var gridApiUrls_1 = require('./gridApiUrls');
var ProblemtrackingApiUrl = (function () {
    function ProblemtrackingApiUrl() {
    }
    ProblemtrackingApiUrl.gridApiUrl = gridApiUrls_1.GridApiUrl.problemtrackingGridUrl;
    ProblemtrackingApiUrl.postCreatedUrl = titanApiUrl_1.titanApiUrl + 'problemtracking';
    ProblemtrackingApiUrl.postUpdateUrl = titanApiUrl_1.titanApiUrl + 'problemtracking';
    ProblemtrackingApiUrl.getByIdUrl = titanApiUrl_1.titanApiUrl + 'problemtracking';
    return ProblemtrackingApiUrl;
}());
exports.ProblemtrackingApiUrl = ProblemtrackingApiUrl;
