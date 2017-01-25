"use strict";
var titanApiUrl_1 = require('./titanApiUrl');
var gridApiUrls_1 = require('./gridApiUrls');
var ContactApiUrl = (function () {
    function ContactApiUrl() {
    }
    ContactApiUrl.gridApiUrl = gridApiUrls_1.GridApiUrl.contactGridUrl;
    ContactApiUrl.postCreatedUrl = titanApiUrl_1.titanApiUrl + 'contact/post';
    ContactApiUrl.postUpdateUrl = titanApiUrl_1.titanApiUrl + 'contact/put';
    ContactApiUrl.getByIdUrl = titanApiUrl_1.titanApiUrl + 'contact/get';
    return ContactApiUrl;
}());
exports.ContactApiUrl = ContactApiUrl;
