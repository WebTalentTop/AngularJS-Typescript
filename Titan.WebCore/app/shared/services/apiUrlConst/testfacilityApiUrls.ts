import { titanApiUrl } from './titanApiUrl';
import { localizationApiUrl } from './localizationApiUrl';
import { GridApiUrl } from './gridApiUrls';

export class TestFacilityApiUrl {

    public static gridApiUrl:string  = GridApiUrl.testFacilityGridUrl;
    public static postCreatedUrl: string = titanApiUrl + 'testFacility/post';
    public static postUpdateUrl: string = titanApiUrl + 'testFacility/update';
    public static getByIdUrl: string = titanApiUrl + 'testFacility/get';
    public static getAllUrl: string = titanApiUrl + 'testFacility/GetByTenantId';
    public static getAvailableAllUrl: string = titanApiUrl + 'testFacility/GetAvailableTestFacilitiesForEquipments';
    public static getEquipmentDetailsByIdUrl: string = titanApiUrl + 'testFacility/GetTestFacilityEquipments';
    public static getTenants: string = titanApiUrl + 'testFacility/GetTenantsByTestFacilityId';
    public static getLogComments: string = titanApiUrl + 'testFacility/GetTestFacilityLogCommentByTestFacilityId';
    public static DeleteUserRoleMap: string = titanApiUrl + 'testFacility/DeleteUserRoleMap';
    public static DeleteTestFacilityUrl: string = titanApiUrl + 'testFacility/Delete';
    public static DeleteEquipmentMap: string = titanApiUrl + 'testFacility/DeleteEquipmentMap';
    public static DeleteTenantMap: string = titanApiUrl + 'testFacility/DeleteTenantMap';
    public static getfilesByIdUrl: string = titanApiUrl + 'testFacilityAttachment/file';
    public static getNotifications: string = titanApiUrl + 'testFacility/CheckNotifications';
    public static getRoles: string = titanApiUrl + 'testFacility/GetRoles';
    public static getFilteredEvents: string = titanApiUrl + 'testFacility/GetFilteredEvents';
    public static filterUserNames: string = titanApiUrl + 'testFacility/FilterByUserNames';
    public static PostAddUserRolesUrl: string = titanApiUrl + 'testFacility/PostUserRoles';
    public static PostAddDepartmentMapUrl: string = titanApiUrl + 'testFacility/PostDepartments';
    public static getDepartments: string = titanApiUrl + 'tenant';
    public static getEquipments: string = titanApiUrl + 'testFacility/GetAvailableEquipmentsForTestFacility';
    public static getOperatingHours: string = titanApiUrl + 'operatingHours';
    public static getCategories: string = titanApiUrl + 'category';
    public static getMaintenanceFrequencies: string = titanApiUrl + 'maintenanceFrequency';
    public static PostAddEquipmentMapUrl: string = titanApiUrl + 'testFacility/PostEquipments';
    public static PostLogCommentsUrl: string = titanApiUrl + 'testFacility/PostLogComments';
    public static PostMoveEquipmentToFacilityUrl: string = titanApiUrl + 'TestFacility/MoveEquipmentToFacility';
    public static getDetailsTabLocJs: string = localizationApiUrl;
    public static postReserveUrl: string = titanApiUrl + 'testFacility/reserve/';
    public static postFreeUrl: string = titanApiUrl + 'testFacility/Free/';
    public static postMoveTestUrl: string = titanApiUrl + 'testFacility/MoveTest/';
    public static getEquipmentToAddUrl:string = titanApiUrl + 'testFacility/GetAvailableEquipmentsForTestFacility/'
}