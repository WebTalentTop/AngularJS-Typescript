import { titanApiUrl } from './titanApiUrl';
import { GridApiUrl } from './gridApiUrls';

export class LookupApiUrl {
    public static gridApiUrl:string  = GridApiUrl.lookupGridUrl;
    public static postCreatedUrl: string = titanApiUrl + 'lookup';
    public static postUpdateUrl: string = titanApiUrl + 'lookup';
    public static getByIdUrl: string = titanApiUrl + 'lookup';
}