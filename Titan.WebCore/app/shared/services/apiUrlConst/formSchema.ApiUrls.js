"use strict";
var titanApiUrl_1 = require('./titanApiUrl');
var gridApiUrls_1 = require('./gridApiUrls');
var FormSchemaApiUrl = (function () {
    function FormSchemaApiUrl() {
    }
    FormSchemaApiUrl.gridApiUrl = gridApiUrls_1.GridApiUrl.formSchemaGridUrl;
    FormSchemaApiUrl.postCreatedUrl = titanApiUrl_1.titanApiUrl + 'formSchema/post';
    FormSchemaApiUrl.postUpdateUrl = titanApiUrl_1.titanApiUrl + 'formSchema';
    FormSchemaApiUrl.getByIdUrl = titanApiUrl_1.titanApiUrl + 'formSchema';
    FormSchemaApiUrl.getByFormSchemaCategoryId = titanApiUrl_1.titanApiUrl + 'formSchema/getByFormSchemaCategoryId';
    FormSchemaApiUrl.getByFormSchemaCategoryIdCol = titanApiUrl_1.titanApiUrl + 'formSchema/getByFormSchemaCategoryIdCol';
    FormSchemaApiUrl.getFormSchemaGridUrl = titanApiUrl_1.titanApiUrl + 'formSchema/getFormSchemaGrid';
    FormSchemaApiUrl.getFormSchemaGridByEntityIdentifierIdUrl = titanApiUrl_1.titanApiUrl + 'formSchema/getFormSchemaGridByEntityIdentifierId';
    return FormSchemaApiUrl;
}());
exports.FormSchemaApiUrl = FormSchemaApiUrl;
