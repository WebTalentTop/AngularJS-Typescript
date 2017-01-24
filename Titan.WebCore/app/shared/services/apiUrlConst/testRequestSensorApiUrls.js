"use strict";
var titanApiUrl_1 = require('./titanApiUrl');
var TestReqestSensorApiUrl = (function () {
    function TestReqestSensorApiUrl() {
    }
    //public static gridApiUrl: string = GridApiUrl.testStatusGridUrl;
    //public static getTestStages: string = titanApiUrl + 'testStage/GetTestStages';
    //public static getHourEntryByEntityIdentifierId: string = titanApiUrl + 'timeEntryType/GetHourlyEntries';
    TestReqestSensorApiUrl.postCreatedUrl = titanApiUrl_1.titanApiUrl + 'testRequestSensor/post';
    TestReqestSensorApiUrl.postTestRequestCreatedUrl = titanApiUrl_1.titanApiUrl + 'testRequest/post';
    TestReqestSensorApiUrl.postWorkRequestCreatedUrl = titanApiUrl_1.titanApiUrl + 'workRequest/post';
    TestReqestSensorApiUrl.postWorkRequestUrl = titanApiUrl_1.titanApiUrl + 'workRequest/CreateWorkRequest';
    TestReqestSensorApiUrl.postTestRequestExternalDepartmentsAddUrl = titanApiUrl_1.titanApiUrl + 'workRequest/PostExternalDepartments';
    TestReqestSensorApiUrl.postTasksAddUrl = titanApiUrl_1.titanApiUrl + 'workRequest/CreateTasks';
    TestReqestSensorApiUrl.postTasksCompleteUrl = titanApiUrl_1.titanApiUrl + 'task/TaskComplete';
    TestReqestSensorApiUrl.postEmailAllUserDepartmentsUrl = titanApiUrl_1.titanApiUrl + 'workRequest/post';
    TestReqestSensorApiUrl.postCommentCreatedUrl = titanApiUrl_1.titanApiUrl + 'testRequestSensor/post/uploadfile';
    TestReqestSensorApiUrl.postUpdateUrl = titanApiUrl_1.titanApiUrl + 'testRequestSensor/put';
    TestReqestSensorApiUrl.postCommentUpdateUrl = titanApiUrl_1.titanApiUrl + 'testRequestSensorComment/put';
    TestReqestSensorApiUrl.getByIdUrl = titanApiUrl_1.titanApiUrl + 'testRequestSensor/get';
    TestReqestSensorApiUrl.getTestRequestByIdUrl = titanApiUrl_1.titanApiUrl + 'testRequest/get';
    TestReqestSensorApiUrl.getTaskDetailsByIdUrl = titanApiUrl_1.titanApiUrl + 'task/get';
    //getSensorCommentIdByTestRequestSensorId
    TestReqestSensorApiUrl.getSensorCommentIdByTestRequestSensorIdUrl = titanApiUrl_1.titanApiUrl + 'testRequestSensorComment/GetTestRequestCommentById';
    //public static GetTrackingListByEntityId: string = titanApiUrl + 'timeEntry/GetTrackingListByEntityId';
    TestReqestSensorApiUrl.GetAllTestRequestSensors = titanApiUrl_1.titanApiUrl + 'testRequestSensor/GetAllSensorRequestsByEntityId';
    return TestReqestSensorApiUrl;
}());
exports.TestReqestSensorApiUrl = TestReqestSensorApiUrl;
