import { titanApiUrl } from './titanApiUrl';
import { GridApiUrl } from './gridApiUrls';

export class ModuleApiUrl {
    //public static gridApiUrl:string  = GridApiUrl.moduleGridUrl;
    public static postCreatedUrl: string = titanApiUrl + 'module/post';
    public static postUpdateUrl: string = titanApiUrl + 'module/put';
    public static getByIdUrl: string = titanApiUrl + 'module/get';
    public static filterByModuleTypeUrl: string = titanApiUrl + 'module/filterByModuleType?moduleTypeId=';
    public static postModuleModuleTypeMapUrl: string = titanApiUrl + 'moduleModuleTypeMap/post';
}