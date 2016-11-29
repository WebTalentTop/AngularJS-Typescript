import { titanApiUrl } from './titanApiUrl';
import { GridApiUrl } from './gridApiUrls';

export class PermissionApiUrl {
    public static gridApiUrl:string  = GridApiUrl.permissionGridUrl;
    public static postCreatedUrl: string = titanApiUrl + 'permission/post';
    public static postUpdateUrl: string = titanApiUrl + 'permission/put';
    public static getByIdUrl: string = titanApiUrl + 'permission/get';
}