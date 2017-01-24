"use strict";
var titanApiUrl_1 = require('./titanApiUrl');
var TestFacilityRoleApiUrl = (function () {
    function TestFacilityRoleApiUrl() {
    }
    //public static gridApiUrl: string = GridApiUrl.testFacilityGridUrl;
    //public static postCreatedUrl: string = titanApiUrl + 'testFacilityRole';
    //public static postUpdateUrl: string = titanApiUrl + 'testFacilityRole';
    TestFacilityRoleApiUrl.getByIdUrl = titanApiUrl_1.titanApiUrl + 'testFacilityRole';
    TestFacilityRoleApiUrl.getRolesByTestFacilityIdUrl = titanApiUrl_1.titanApiUrl + 'testFacility/GetTestFacilityUserRoleByTestFacilityId';
    return TestFacilityRoleApiUrl;
}());
exports.TestFacilityRoleApiUrl = TestFacilityRoleApiUrl;
