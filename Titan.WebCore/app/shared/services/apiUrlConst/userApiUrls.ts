import { titanApiUrl } from './titanApiUrl';
import { localizationApiUrl } from './localizationApiUrl';
import { GridApiUrl } from './gridApiUrls';

export class UserApiUrl {

    //public static gridApiUrl: string = GridApiUrl.testFacilityGridUrl;
    //public static postCreatedUrl: string = titanApiUrl + 'testFacility/post';
    //public static postUpdateUrl: string = titanApiUrl + 'testFacility/update';
    //public static getByIdUrl: string = titanApiUrl + 'testFacility/get';
    public static getUsersByTenantId: string = titanApiUrl + 'titanUser/getUsersByTenantId';
    public static getUserDetailsById: string = titanApiUrl + 'titanUser/get';
    public static GetAllUserFunctionGroupMappingByTenant: string = titanApiUrl + 'titanUser/GetAllUserFunctionGroupMappingByTenant';
    public static RemoveFunctionGroup: string = titanApiUrl + 'titanUser/RemoveFunctionGroup';
    public static postAddFunctionGroupToUser: string = titanApiUrl + 'titanUser/AddFunctionGroup';
    //public static getFilteredEvents: string = titanApiUrl + 'testFacility/GetFilteredEvents';
    //public static filterUserNames: string = titanApiUrl + 'testFacility/FilterByUserNames';
    //public static PostAddUserRolesUrl: string = titanApiUrl + 'testFacility/PostUserRoles';
    //public static PostMoveEquipmentToFacilityUrl: string = titanApiUrl + 'TestFacility/MoveEquipmentToFacility';
    //public static getDetailsTabLocJs: string = localizationApiUrl;
}