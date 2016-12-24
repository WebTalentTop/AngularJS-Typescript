import { titanApiUrl } from './titanApiUrl'
import { GridApiUrl } from './gridApiUrls';

export class TestReqestSensorApiUrl {
    //public static gridApiUrl: string = GridApiUrl.testStatusGridUrl;
    //public static getTestStages: string = titanApiUrl + 'testStage/GetTestStages';
    //public static getHourEntryByEntityIdentifierId: string = titanApiUrl + 'timeEntryType/GetHourlyEntries';
    public static postCreatedUrl: string = titanApiUrl + 'testRequestSensor/post';
    public static postTestRequestCreatedUrl: string = titanApiUrl + 'testRequest/post';
    public static postWorkRequestCreatedUrl: string = titanApiUrl + 'workRequest/post';
    public static postTestRequestExternalDepartmentsAddUrl: string = titanApiUrl + 'workRequest/PostExternalDepartments';
    public static postTasksAddUrl: string = titanApiUrl + 'workRequest/CreateTasks';
    public static postEmailAllUserDepartmentsUrl: string = titanApiUrl + 'workRequest/post';
    public static postCommentCreatedUrl: string = titanApiUrl + 'testRequestSensor/post/uploadfile';
    public static postUpdateUrl: string = titanApiUrl + 'testRequestSensor/put';
    public static postCommentUpdateUrl: string = titanApiUrl + 'testRequestSensorComment/put';
    public static getByIdUrl: string = titanApiUrl + 'testRequestSensor/get';
    //getSensorCommentIdByTestRequestSensorId
    public static getSensorCommentIdByTestRequestSensorIdUrl: string = titanApiUrl + 'testRequestSensorComment/GetTestRequestCommentById';
    //public static GetTrackingListByEntityId: string = titanApiUrl + 'timeEntry/GetTrackingListByEntityId';
   public static GetAllTestRequestSensors: string = titanApiUrl + 'testRequestSensor/GetAllSensorRequestsByEntityId';
    //public static GetProjectId: string = titanApiUrl + 'testRequest/GetProjectId';
}