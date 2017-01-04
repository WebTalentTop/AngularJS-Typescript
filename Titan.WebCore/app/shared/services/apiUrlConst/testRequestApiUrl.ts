import { titanApiUrl } from './titanApiUrl'
import { GridApiUrl } from './gridApiUrls';

export class TestReqestApiUrl {
   
    public static getFacilityScheduleByTestRequestIdUrl: string = titanApiUrl + 'testRequest/GetFacilityScheduleByTestRequestId/';
    public static getUserScheduleByIdUrl: string = titanApiUrl + 'testRequest/GetUserScheduleById/';
    public static getUserScheduleByTestFacilityScheduleIdUrl: string = titanApiUrl + 'testRequest/GetUserScheduleByTestFacilityScheduleId/';
    public static postDeleteUserScheduleInstanceUrl: string = titanApiUrl + 'testRequest/DeleteUserScheduleInstance/';
    public static postMoveTestRequestUrl: string = titanApiUrl + 'testRequest/Move/';
    public static postAssignUserUrl: string = titanApiUrl + 'testRequest/AssignUser/';

    
}