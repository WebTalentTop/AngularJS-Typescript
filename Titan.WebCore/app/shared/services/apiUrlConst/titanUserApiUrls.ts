import { titanApiUrl } from './titanApiUrl';
import { GridApiUrl } from './gridApiUrls';
export class TitanUserApiUrl {
    public static gridApiUrl:string  = GridApiUrl.titanUserGridUrl;
    public static postCreatedUrl: string = titanApiUrl + 'titanUser/post';
    public static postUpdateUrl: string = titanApiUrl + 'titanUser/put';
    public static getByIdUrl: string = titanApiUrl + 'titanUser/get';
    public static getProfileByIdUrl: string = titanApiUrl + 'titanUser/Profile';
    public static getAllowedTenantsListUrl: string = titanApiUrl + 'titanUser/allowedTenantsList';
    public static putSetDefaultTenantIdUrl: string = titanApiUrl + 'titanUser/setDefaultTenant/';
}