"use strict";
/**
 * Created by ZeroInfinity on 12/8/2016.
 */
var titanApiUrl_1 = require('./titanApiUrl');
var FormSchemaCategoryApiUrl = (function () {
    function FormSchemaCategoryApiUrl() {
    }
    //public static gridApiUrl:string  = GridApiUrl.formSchemaCategoryGridUrl;
    //public static postCreatedUrl: string = titanApiUrl + 'formSchemaCategory';
    //public static postUpdateUrl: string = titanApiUrl + 'formSchemaCategory';
    //public static getByIdUrl: string = titanApiUrl + 'formSchemaCategory';
    FormSchemaCategoryApiUrl.getAllUrl = titanApiUrl_1.titanApiUrl + 'formSchemaCategory';
    FormSchemaCategoryApiUrl.getByEntityIdentifierId = titanApiUrl_1.titanApiUrl + 'formSchemaCategory/getByEntityIdentifierId';
    FormSchemaCategoryApiUrl.getByEntitySubTypeId = titanApiUrl_1.titanApiUrl + 'formSchemaCategory/getByEntitySubTypeId';
    return FormSchemaCategoryApiUrl;
}());
exports.FormSchemaCategoryApiUrl = FormSchemaCategoryApiUrl;
