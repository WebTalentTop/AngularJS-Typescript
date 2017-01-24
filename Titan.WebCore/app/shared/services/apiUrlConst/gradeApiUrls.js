"use strict";
/**
 * Created by ZeroInfinity on 12/20/2016.
 */
var titanApiUrl_1 = require('./titanApiUrl');
var gridApiUrls_1 = require('./gridApiUrls');
var GradeApiUrl = (function () {
    function GradeApiUrl() {
    }
    GradeApiUrl.gridApiUrl = gridApiUrls_1.GridApiUrl.gradeGridUrl;
    GradeApiUrl.postCreatedUrl = titanApiUrl_1.titanApiUrl + 'grade/post';
    GradeApiUrl.postUpdateUrl = titanApiUrl_1.titanApiUrl + 'grade/put';
    GradeApiUrl.getByIdUrl = titanApiUrl_1.titanApiUrl + 'grade/get';
    return GradeApiUrl;
}());
exports.GradeApiUrl = GradeApiUrl;
