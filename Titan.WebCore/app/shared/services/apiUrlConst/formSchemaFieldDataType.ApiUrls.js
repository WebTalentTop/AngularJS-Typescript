"use strict";
var titanApiUrl_1 = require('./titanApiUrl');
var FormSchemaFieldDataTypeApiUrl = (function () {
    function FormSchemaFieldDataTypeApiUrl() {
    }
    /*    public static gridApiUrl:string  = GridApiUrl.formSchemaFieldDataTypeGridUrl;
        public static postCreatedUrl: string = titanApiUrl + 'formSchemaFieldDataType';
        public static postUpdateUrl: string = titanApiUrl + 'formSchemaFieldDataType';*/
    FormSchemaFieldDataTypeApiUrl.getByIdUrl = titanApiUrl_1.titanApiUrl + 'formSchemaFieldDataType';
    FormSchemaFieldDataTypeApiUrl.getAll = titanApiUrl_1.titanApiUrl + 'formSchemaFieldDataType';
    return FormSchemaFieldDataTypeApiUrl;
}());
exports.FormSchemaFieldDataTypeApiUrl = FormSchemaFieldDataTypeApiUrl;
