"use strict";
var titanApiUrl_1 = require('./titanApiUrl');
var TestFacilityAttachmentApiUrl = (function () {
    function TestFacilityAttachmentApiUrl() {
    }
    TestFacilityAttachmentApiUrl.getByIdUrl = titanApiUrl_1.titanApiUrl + 'testFacilityAttachment';
    TestFacilityAttachmentApiUrl.DeleteAttachmentsByIdUrl = titanApiUrl_1.titanApiUrl + 'testFacilityAttachment/delete';
    return TestFacilityAttachmentApiUrl;
}());
exports.TestFacilityAttachmentApiUrl = TestFacilityAttachmentApiUrl;
