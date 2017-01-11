import { titanApiUrl } from './titanApiUrl';
import { GridApiUrl } from './gridApiUrls';

export class ModuleTypeApiUrl {
    //public static gridApiUrl:string  = GridApiUrl.ModuleTypeGridUrl;
    public static postCreatedUrl: string = titanApiUrl + 'ModuleType/post';
    public static postUpdateUrl: string = titanApiUrl + 'ModuleType/put';
    public static getByIdUrl: string = titanApiUrl + 'ModuleType/get';
    //public static filterByModuleTypeUrl: string = titanApiUrl + 'ModuleType/filterByModuleType?ModuleTypeTypeId=';
}