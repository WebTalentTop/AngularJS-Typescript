import { titanApiUrl } from './titanApiUrl';
import { localizationApiUrl } from './localizationApiUrl';
import { GridApiUrl } from './gridApiUrls';

export class UserApiUrl {

    //public static gridApiUrl: string = GridApiUrl.testFacilityGridUrl;
    public static postCreatedUrl: string = titanApiUrl + 'titanUser/post';
    public static postUpdateUrl: string = titanApiUrl + 'titanUser/update';
    //public static getByIdUrl: string = titanApiUrl + 'testFacility/get';
    public static getUsersByTenantId: string = titanApiUrl + 'titanUser/GetUsers';
    public static getUserDetailsById: string = titanApiUrl + 'titanUser/get';
    public static GetAllUserFunctionGroupMappingByTenant: string = titanApiUrl + 'titanUser/GetAllUserFunctionGroupMappingByTenant';
    public static RemoveFunctionGroup: string = titanApiUrl + 'titanUser/RemoveFunctionGroup';
    public static postAddFunctionGroupToUser: string = titanApiUrl + 'titanUser/AddFunctionGroup';
   public static getAllFunctionGroups: string = titanApiUrl + 'functionGroup/GetAll';
   public static getTimeZones: string = titanApiUrl + 'titanTimeZone/GetAll';
   public static getTitanRoles: string = titanApiUrl + 'titanRole/GetAll';
   public static getDepartments: string = titanApiUrl + 'department/GetAllDepartments';
    //public static getDetailsTabLocJs: string = localizationApiUrl;
}