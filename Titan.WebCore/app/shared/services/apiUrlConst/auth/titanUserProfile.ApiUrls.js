"use strict";
/**
 * Created by ZeroInfinity on 1/6/2017.
 */
/**
 * Created by 12thWonder on 1/5/2017.
 */
var userProfile_ApiUrl_1 = require('./userProfile.ApiUrl');
var TitanUserProfileApiUrls = (function () {
    function TitanUserProfileApiUrls() {
    }
    TitanUserProfileApiUrls.getCurrentUserProfileUrl = userProfile_ApiUrl_1.titanUserProfileApiUrl;
    return TitanUserProfileApiUrls;
}());
exports.TitanUserProfileApiUrls = TitanUserProfileApiUrls;
