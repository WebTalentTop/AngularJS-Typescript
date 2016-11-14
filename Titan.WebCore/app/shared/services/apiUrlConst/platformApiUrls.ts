import { titanApiUrl } from './titanApiUrl'
import { GridApiUrl }  from './gridApiUrls';

export class PlatformApiUrl {
    public static gridApiUrl:string  = GridApiUrl.platformGridUrl;
    public static postCreatedUrl: string = titanApiUrl + 'platform';
    public static postUpdateUrl: string = titanApiUrl + 'platform';
    public static getByIdUrl: string = titanApiUrl + 'platform';
}