"use strict";
var titanApiUrl_1 = require('./titanApiUrl');
var TaskApiUrl = (function () {
    function TaskApiUrl() {
    }
    //public static gridApiUrl: string = GridApiUrl.testFacilityGridUrl;
    //public static postCreatedUrl: string = titanApiUrl + 'testFacility/post';
    //public static postUpdateUrl: string = titanApiUrl + 'testFacility/update';
    //public static getByIdUrl: string = titanApiUrl + 'testFacility/get';
    TaskApiUrl.gettasksbyuseridUrl = titanApiUrl_1.titanApiUrl + 'task/GetTasks';
    return TaskApiUrl;
}());
exports.TaskApiUrl = TaskApiUrl;
