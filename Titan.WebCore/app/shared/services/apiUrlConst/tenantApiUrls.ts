import { titanApiUrl } from './titanApiUrl';
import { GridApiUrl } from './gridApiUrls';

export class TenantApiUrl {
    public static gridApiUrl:string  = GridApiUrl.tenantGridUrl;
    public static postCreatedUrl: string = titanApiUrl + 'tenant';
    public static postUpdateUrl: string = titanApiUrl + 'tenant';
    public static getByIdUrl: string = titanApiUrl + 'tenant';
}