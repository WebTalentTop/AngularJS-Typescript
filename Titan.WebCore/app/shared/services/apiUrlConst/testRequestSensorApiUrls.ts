import { titanApiUrl } from './titanApiUrl'
import { GridApiUrl } from './gridApiUrls';

export class TestReqestSensorApiUrl {
    //public static gridApiUrl: string = GridApiUrl.testStatusGridUrl;
    //public static getTestStages: string = titanApiUrl + 'testStage/GetTestStages';
    //public static getHourEntryByEntityIdentifierId: string = titanApiUrl + 'timeEntryType/GetHourlyEntries';
    public static postCreatedUrl: string = titanApiUrl + 'testRequestSensor/post';
    //public static postUpdateUrl: string = titanApiUrl + 'timeEntry/put';
   public static getByIdUrl: string = titanApiUrl + 'testRequestSensor/get';
    //public static GetTrackingListByEntityId: string = titanApiUrl + 'timeEntry/GetTrackingListByEntityId';
   public static GetAllTestRequestSensors: string = titanApiUrl + 'testRequestSensor/GetAllSensorRequestsByEntityId';
    //public static GetProjectId: string = titanApiUrl + 'testRequest/GetProjectId';
}