import { titanApiUrl } from './titanApiUrl';
import { localizationApiUrl } from './localizationApiUrl';
import { GridApiUrl } from './gridApiUrls';

export class FunctionGroupApiUrl {
    
    public static removeUserFunctionGroup: string = titanApiUrl + 'functionGroup/RemoveFunctionGroupUserMap';
    public static postAssignUserFunctionGroup: string = titanApiUrl + 'functionGroup/AddFunctionGroupUserMap';
    public static getTenantUserFunctionGroupsById: string = titanApiUrl + 'functionGroup/GetFunctionGroupUsersTenantsByFunctionGroup';
    public static CreateUserTenantAccess: string = titanApiUrl + 'titanUser/AddUserTenantMapping';
    public static postCreatedUrl: string = titanApiUrl + 'titanUser/post';
    public static postUpdateUrl: string = titanApiUrl + 'titanUser/update';
    public static GetTenantMembershipsByUser: string = titanApiUrl + 'titanUser/GetTenantMembershipsByUser';
    public static getUsersByTenantId: string = titanApiUrl + 'titanUser/GetAllUserMembershipsByTenant';
    public static getFunctionGroupDetailsById: string = titanApiUrl + 'functionGroup/get';
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