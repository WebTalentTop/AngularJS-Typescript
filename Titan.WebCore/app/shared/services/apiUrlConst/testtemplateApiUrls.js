"use strict";
var titanApiUrl_1 = require('./titanApiUrl');
var gridApiUrls_1 = require('./gridApiUrls');
var TestTemplateApiUrl = (function () {
    function TestTemplateApiUrl() {
    }
    TestTemplateApiUrl.gridApiUrl = gridApiUrls_1.GridApiUrl.testTemplateGridUrl;
    TestTemplateApiUrl.postCreatedUrl = titanApiUrl_1.titanApiUrl + 'testTemplate';
    TestTemplateApiUrl.postUpdateUrl = titanApiUrl_1.titanApiUrl + 'testTemplate';
    TestTemplateApiUrl.postAddTestTemplateProcedureUrl = titanApiUrl_1.titanApiUrl + 'testtemplate/postTestTemplateProcedure?testTemplateId=';
    TestTemplateApiUrl.getTestTemplateProcedureUrl = titanApiUrl_1.titanApiUrl + 'testtemplate/getTestTemplateProcedure?testTemplateId=';
    TestTemplateApiUrl.postDeleteTestTemplateProcedureUrl = titanApiUrl_1.titanApiUrl + 'testtemplate/DeleteTestTemplateProcedure?testTemplateId=';
    TestTemplateApiUrl.getByIdUrl = titanApiUrl_1.titanApiUrl + 'testTemplate/Get?id=';
    TestTemplateApiUrl.getAllUrl = titanApiUrl_1.titanApiUrl + 'testTemplate/GetAllTestTemplates';
    TestTemplateApiUrl.postAddTestTemplateRequirementUrl = titanApiUrl_1.titanApiUrl + 'testtemplate/postTestTemplateRequirement?testTemplateId=';
    TestTemplateApiUrl.getTestTemplateRequirementUrl = titanApiUrl_1.titanApiUrl + 'testtemplate/getTestTemplateRequirement?testTemplateId=';
    TestTemplateApiUrl.postDeleteTestTemplateRequirementUrl = titanApiUrl_1.titanApiUrl + 'testtemplate/DeleteTestTemplateRequirement?testTemplateId=';
    TestTemplateApiUrl.putTestTemplateProcedureDisplayOrderUrl = titanApiUrl_1.titanApiUrl + 'testtemplate/UpdateTestTemplateProcedureDisplayOrder?testTemplateId=';
    return TestTemplateApiUrl;
}());
exports.TestTemplateApiUrl = TestTemplateApiUrl;
