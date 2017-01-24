"use strict";
var titanApiUrl_1 = require('./titanApiUrl');
var FormInstanceApiUrl = (function () {
    function FormInstanceApiUrl() {
    }
    //public static gridApiUrl:string  = GridApiUrl.formInstanceGridUrl;
    FormInstanceApiUrl.postCreatedUrl = titanApiUrl_1.titanApiUrl + 'formInstance';
    FormInstanceApiUrl.postUpdateUrl = titanApiUrl_1.titanApiUrl + 'formInstance';
    FormInstanceApiUrl.getByIdUrl = titanApiUrl_1.titanApiUrl + 'formInstance';
    FormInstanceApiUrl.getByFormSchemaCategoryId = titanApiUrl_1.titanApiUrl + 'formInstance/getByFormSchemaCategoryId';
    FormInstanceApiUrl.getByFormSchemaCategoryIdCol = titanApiUrl_1.titanApiUrl + 'formInstance/getByFormSchemaCategoryIdCol';
    FormInstanceApiUrl.getGridByEntityIdUrl = titanApiUrl_1.titanApiUrl + 'formInstance/GetGridByEntityId';
    return FormInstanceApiUrl;
}());
exports.FormInstanceApiUrl = FormInstanceApiUrl;
