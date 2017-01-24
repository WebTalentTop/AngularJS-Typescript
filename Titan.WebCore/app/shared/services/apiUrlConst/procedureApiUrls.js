"use strict";
var titanApiUrl_1 = require('./titanApiUrl');
var gridApiUrls_1 = require('./gridApiUrls');
var ProcedureApiUrl = (function () {
    function ProcedureApiUrl() {
    }
    ProcedureApiUrl.gridApiUrl = gridApiUrls_1.GridApiUrl.procedureGridUrl;
    ProcedureApiUrl.postCreatedUrl = titanApiUrl_1.titanApiUrl + 'procedure';
    ProcedureApiUrl.postUpdateUrl = titanApiUrl_1.titanApiUrl + 'procedure';
    ProcedureApiUrl.postAddProcedureRequirementUrl = titanApiUrl_1.titanApiUrl + 'procedure/postProcedureRequirement?procedureId=';
    ProcedureApiUrl.postAddProcedureStepUrl = titanApiUrl_1.titanApiUrl + 'procedure/postProcedureStep?procedureId=';
    ProcedureApiUrl.getProcedureRequirementUrl = titanApiUrl_1.titanApiUrl + 'procedure/getProcedureRequirement?procedureId=';
    ProcedureApiUrl.getProcedureStepUrl = titanApiUrl_1.titanApiUrl + 'procedure/getProcedureStep?procedureId=';
    ProcedureApiUrl.postDeleteProcedureRequirementUrl = titanApiUrl_1.titanApiUrl + 'procedure/DeleteProcedureRequirement?procedureId=';
    ProcedureApiUrl.postDeleteProcedureStepUrl = titanApiUrl_1.titanApiUrl + 'procedure/DeleteProcedureStep?procedureId=';
    ProcedureApiUrl.getByIdUrl = titanApiUrl_1.titanApiUrl + 'procedure/Get?id=';
    ProcedureApiUrl.putProcedureStepDisplayOrderUrl = titanApiUrl_1.titanApiUrl + 'procedure/updateProcedureStepDisplayOrder?procedureId=';
    ProcedureApiUrl.filterByTestTemplateIdUrl = titanApiUrl_1.titanApiUrl + 'procedure/filterByTestTemplateId?testTemplateId=';
    return ProcedureApiUrl;
}());
exports.ProcedureApiUrl = ProcedureApiUrl;
