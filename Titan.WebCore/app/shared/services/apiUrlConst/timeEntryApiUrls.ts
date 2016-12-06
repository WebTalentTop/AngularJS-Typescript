import { titanApiUrl } from './titanApiUrl'
import { GridApiUrl }  from './gridApiUrls';

export class TimeEntryApiUrl {
    public static gridApiUrl: string = GridApiUrl.testStatusGridUrl;
    public static getTestStages: string = titanApiUrl + 'testStage/GetTestStages';
    public static getHourEntryByEntityIdentifierId: string = titanApiUrl + 'timeEntryType/GetHourlyEntries';
    public static postCreatedUrl: string = titanApiUrl + 'timeEntry/post';
    public static postUpdateUrl: string = titanApiUrl + 'timeEntry/put';
    public static getByIdUrl: string = titanApiUrl + 'timeEntry/get';
    public static GetTrackingListByEntityId: string = titanApiUrl + 'timeEntry/GetTrackingListByEntityId';
    public static GetAllDownTimeReasons: string = titanApiUrl + 'downTimeReason/GetAllDownTimeReasons';
    public static GetProjectId: string = titanApiUrl + 'testRequest/GetProjectId';
}