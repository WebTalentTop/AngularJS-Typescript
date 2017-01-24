"use strict";
var titanApiUrl_1 = require('./titanApiUrl');
var gridApiUrls_1 = require('./gridApiUrls');
var StepFrequencyApiUrl = (function () {
    function StepFrequencyApiUrl() {
    }
    StepFrequencyApiUrl.gridApiUrl = gridApiUrls_1.GridApiUrl.stepFrequencyGridUrl;
    StepFrequencyApiUrl.postCreatedUrl = titanApiUrl_1.titanApiUrl + 'stepFrequency/post';
    StepFrequencyApiUrl.postUpdateUrl = titanApiUrl_1.titanApiUrl + 'stepFrequency/put';
    StepFrequencyApiUrl.getByIdUrl = titanApiUrl_1.titanApiUrl + 'stepFrequency/get';
    return StepFrequencyApiUrl;
}());
exports.StepFrequencyApiUrl = StepFrequencyApiUrl;
