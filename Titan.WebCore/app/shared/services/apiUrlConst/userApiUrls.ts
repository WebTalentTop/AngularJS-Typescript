import {titanApiUrl} from './titanApiUrl';
import {localizationApiUrl} from './localizationApiUrl';
import {GridApiUrl} from './gridApiUrls';

export class UserApiUrl {

    public static CreateUserTenantAccess: string = titanApiUrl + 'titanUser/AddUserTenantMapping';
    public static postCreatedUrl: string = titanApiUrl + 'titanUser/post';
    public static postUpdateUrl: string = titanApiUrl + 'titanUser/update';
    public static GetTenantMembershipsByUser: string = titanApiUrl + 'titanUser/GetTenantMembershipsByUser';
    public static getUsersByTenantId: string = titanApiUrl + 'titanUser/GetAllUserMembershipsByTenant';
    public static getUserDetailsById: string = titanApiUrl + 'titanUser/get';
    public static GetAllUserFunctionGroupMappingByTenant: string = titanApiUrl + 'titanUser/GetAllUserFunctionGroupMappingByTenant';
    public static RemoveFunctionGroupUserMap: string = titanApiUrl + 'functionGroup/RemoveFunctionGroupUserMap';
    public static postAddFunctionGroupToUser: string = titanApiUrl + 'functionGroup/AddFunctionGroupUserMap';
    public static getAllFunctionGroups: string = titanApiUrl + 'functionGroup/GetAll';
    public static GetUserFunctionGroupsByUser: string = titanApiUrl + 'functionGroup/GetUserFunctionGroupsByUser';
    public static getTenants: string = titanApiUrl + 'tenant';
   public static getTimeZones: string = titanApiUrl + 'titanTimeZone/GetAll';
   public static getTitanRoles: string = titanApiUrl + 'titanRole/GetAll';
   public static getDepartments: string = titanApiUrl + 'department/GetAllDepartments';
   public static getUsers: string = titanApiUrl + 'titanUser/GetAll';
   public static filterUserByName: string = titanApiUrl + 'titanUser/FilterUsersByName?filterString=';
   public static RemoveTenantMapping: string = titanApiUrl + 'titanUser/RemoveTenantMapping';
}