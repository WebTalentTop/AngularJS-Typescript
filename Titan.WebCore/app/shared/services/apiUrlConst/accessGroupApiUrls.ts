import { titanApiUrl } from './titanApiUrl';
import { GridApiUrl } from './gridApiUrls';

export class AccessGroupApiUrl {
    public static gridApiUrl:string  = GridApiUrl.accessGroupGridUrl;
    public static postCreatedUrl: string = titanApiUrl + 'accessGroup/post';
    public static postUpdateUrl: string = titanApiUrl + 'accessGroup/put';
    public static getByIdUrl: string = titanApiUrl + 'accessGroup/get';
}