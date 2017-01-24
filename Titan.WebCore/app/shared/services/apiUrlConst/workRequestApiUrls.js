"use strict";
var titanApiUrl_1 = require('./titanApiUrl');
var WorkRequestApiUrl = (function () {
    function WorkRequestApiUrl() {
    }
    //public static gridApiUrl: string = GridApiUrl.testFacilityGridUrl;
    //public static postCreatedUrl: string = titanApiUrl + 'testFacility/post';
    //public static postUpdateUrl: string = titanApiUrl + 'testFacility/update';
    //public static getByIdUrl: string = titanApiUrl + 'testFacility/get';
    WorkRequestApiUrl.getworkRequestUrl = titanApiUrl_1.titanApiUrl + 'workRequest/GetWorkRequest';
    return WorkRequestApiUrl;
}());
exports.WorkRequestApiUrl = WorkRequestApiUrl;
