import { titanApiUrl } from './titanApiUrl'
import { GridApiUrl }  from './gridApiUrls';

export class PlatformApiUrl {
    
    public static gridApiUrl:string  = GridApiUrl.platformGridUrl;
    public static postCreatedUrl: string = titanApiUrl + 'platform/post';
    public static postUpdateUrl: string = titanApiUrl + 'platform/put';
    public static getByIdUrl: string = titanApiUrl + 'platform/get';
    public static getAllPlatforms: string = titanApiUrl + 'platform/getAllPlatforms';
}