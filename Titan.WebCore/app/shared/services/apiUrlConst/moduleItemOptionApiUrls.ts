import { titanApiUrl } from './titanApiUrl';
import { GridApiUrl } from './gridApiUrls';

export class ModuleItemOptionApiUrl {
    //public static gridApiUrl:string  = GridApiUrl.ModuleItemOptionGridUrl;
    public static postCreatedUrl: string = titanApiUrl + 'ModuleItemOption/post';
    public static deleteUrl: string = titanApiUrl + 'ModuleItemOption/Delete?id=';
    public static postUpdateUrl: string = titanApiUrl + 'ModuleItemOption/put';
    public static getByIdUrl: string = titanApiUrl + 'ModuleItemOption/get';
    //public static getModuleItemOptionTypesUrl: string = titanApiUrl + 'ModuleItemOption/GetModuleItemOptionTypes';

    //public static filterByModuleTypeUrl: string = titanApiUrl + 'ModuleItemOption/filterByModuleType?ModuleItemOptionTypeId=';
}