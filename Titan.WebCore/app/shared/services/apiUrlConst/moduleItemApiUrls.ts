import { titanApiUrl } from './titanApiUrl';
import { GridApiUrl } from './gridApiUrls';

export class ModuleItemApiUrl {
    //public static gridApiUrl:string  = GridApiUrl.ModuleItemGridUrl;
    public static postCreatedUrl: string = titanApiUrl + 'ModuleItem/post';
    public static postUpdateUrl: string = titanApiUrl + 'ModuleItem/put';
    public static getByIdUrl: string = titanApiUrl + 'ModuleItem/get';
    public static getModuleItemTypesUrl: string = titanApiUrl + 'ModuleItem/GetModuleItemTypes';
    public static getModuleItemsByModuleIdUrl: string = titanApiUrl + 'ModuleItem/GetModuleItemsByModuleId?moduleId=';
    public static putModuleModuleItemDisplayOrderUrl: string = titanApiUrl + 'ModuleItem/UpdateModuleModuleItemDisplayOrder?moduleId=';
    
    //public static filterByModuleTypeUrl: string = titanApiUrl + 'ModuleItem/filterByModuleType?ModuleItemTypeId=';
}