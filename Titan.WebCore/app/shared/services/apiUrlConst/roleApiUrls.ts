import { titanApiUrl } from './titanApiUrl';
import { GridApiUrl } from './gridApiUrls';

export class RoleApiUrl {
    public static gridApiUrl:string  = GridApiUrl.roleGridUrl;
    public static postCreatedUrl: string = titanApiUrl + 'role/post';
    public static postUpdateUrl: string = titanApiUrl + 'role/put';
    public static getByIdUrl: string = titanApiUrl + 'role/get';
}