"use strict";
var titanApiUrl_1 = require('./titanApiUrl');
var gridApiUrls_1 = require('./gridApiUrls');
var TestRequirementApiUrl = (function () {
    function TestRequirementApiUrl() {
    }
    TestRequirementApiUrl.gridApiUrl = gridApiUrls_1.GridApiUrl.testRequirementGridUrl;
    TestRequirementApiUrl.postCreatedUrl = titanApiUrl_1.titanApiUrl + 'testRequirement/post';
    TestRequirementApiUrl.postUpdateUrl = titanApiUrl_1.titanApiUrl + 'testRequirement/put';
    TestRequirementApiUrl.getByIdUrl = titanApiUrl_1.titanApiUrl + 'testRequirement/get';
    TestRequirementApiUrl.filterByTestTemplateIdUrl = titanApiUrl_1.titanApiUrl + 'testRequirement/filterByTestTemplateId?testTemplateId=';
    TestRequirementApiUrl.filterByProcedureIdUrl = titanApiUrl_1.titanApiUrl + 'testRequirement/filterByProcedureId?procedureId=';
    return TestRequirementApiUrl;
}());
exports.TestRequirementApiUrl = TestRequirementApiUrl;
