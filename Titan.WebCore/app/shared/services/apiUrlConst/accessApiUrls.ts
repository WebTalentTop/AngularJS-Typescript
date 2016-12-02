import { titanApiUrl } from './titanApiUrl';
import { GridApiUrl } from './gridApiUrls';

export class AccessApiUrl {
    public static gridApiUrl:string  = GridApiUrl.accessGridUrl;
    public static postCreatedUrl: string = titanApiUrl + 'access/post';
    public static postUpdateUrl: string = titanApiUrl + 'access/put';
    public static getByIdUrl: string = titanApiUrl + 'access/get';
}