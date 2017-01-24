"use strict";
var titanApiUrl_1 = require('./titanApiUrl');
var gridApiUrls_1 = require('./gridApiUrls');
var StepApiUrl = (function () {
    function StepApiUrl() {
    }
    StepApiUrl.gridApiUrl = gridApiUrls_1.GridApiUrl.stepGridUrl;
    StepApiUrl.postCreatedUrl = titanApiUrl_1.titanApiUrl + 'Step/post';
    StepApiUrl.postUpdateUrl = titanApiUrl_1.titanApiUrl + 'Step/put';
    StepApiUrl.getByIdUrl = titanApiUrl_1.titanApiUrl + 'Step/get?id=';
    StepApiUrl.getStepFrequenciesUrl = titanApiUrl_1.titanApiUrl + 'Step/getStepFrequencies';
    StepApiUrl.getStepTypesUrl = titanApiUrl_1.titanApiUrl + 'Step/getStepTypes';
    StepApiUrl.getStepTypeDetailsUrl = titanApiUrl_1.titanApiUrl + 'Step/getStepTypeDetails?stepTypeId=';
    StepApiUrl.filterByProcedureIdUrl = titanApiUrl_1.titanApiUrl + 'Step/filterByProcedureId?procedureId=';
    return StepApiUrl;
}());
exports.StepApiUrl = StepApiUrl;
