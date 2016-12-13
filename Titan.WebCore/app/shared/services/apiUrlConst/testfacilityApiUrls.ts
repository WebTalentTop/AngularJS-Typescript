import { titanApiUrl } from './titanApiUrl';
import { GridApiUrl } from './gridApiUrls';
export class TestFacilityApiUrl {
    public static gridApiUrl:string  = GridApiUrl.testFacilityGridUrl;
    public static postCreatedUrl: string = titanApiUrl + 'testFacility/post';
    public static postUpdateUrl: string = titanApiUrl + 'testFacility/update';
    public static getByIdUrl: string = titanApiUrl + 'testFacility/get';
    public static getEquipmentDetailsByIdUrl: string = titanApiUrl + 'testFacility/GetTestFacilityEquipments';
    public static getfilesByIdUrl: string = titanApiUrl + 'testFacilityAttachment/file';
    public static getNotifications: string = titanApiUrl + 'testFacility/CheckNotifications';
    public static getRoles: string = titanApiUrl + 'testFacility/GetRoles';
    public static getFilteredEvents: string = titanApiUrl + 'testFacility/GetFilteredEvents';
    public static filterUserNames: string = titanApiUrl + 'testFacility/FilterByUserNames';
    public static PostAddUserRolesUrl: string = titanApiUrl + 'testFacility/PostUserRoles';
    

}