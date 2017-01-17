
﻿import { titanApiUrl } from '../titanApiUrl'
import { GridApiUrl } from '../gridApiUrls';

export class TestReqestApiUrl {
   
    public static getFacilityScheduleByTestRequestIdUrl: string = titanApiUrl + 'testRequest/GetFacilityScheduleByTestRequestId/';
    public static getUserScheduleByIdUrl: string = titanApiUrl + 'testRequest/GetUserScheduleById/';
    public static getUserScheduleByTestFacilityScheduleIdUrl: string = titanApiUrl + 'testRequest/GetUserScheduleByTestFacilityScheduleId/';
    public static postDeleteUserScheduleInstanceUrl: string = titanApiUrl + 'testRequest/DeleteUserScheduleInstance/';
    public static postMoveTestRequestUrl: string = titanApiUrl + 'testRequest/Move/';
    public static postAssignUserUrl: string = titanApiUrl + 'testRequest/AssignUsers/';
    public static postTestRequestTestTemplateInsert: string = titanApiUrl + 'testRequest/TestRequestTestTemplateProcedureMap';
    public static getProcedures: string = titanApiUrl + 'procedure/GetAll';
    public static GetAllTestRequestPartsList: string = titanApiUrl + 'partsList';
    public static postAddPartsList: string = titanApiUrl + 'partsList';

    public static getTestTemplateProceduresByTestRequestId: string = titanApiUrl + 'testrequest/GetAllTemplateProcedureListByTestRequestId';
 

    
}