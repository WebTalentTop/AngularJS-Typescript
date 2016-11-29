import { titanApiUrl } from './titanApiUrl';
import { GridApiUrl } from './gridApiUrls';

export class BuildLevelApiUrl {
    public static gridApiUrl:string  = GridApiUrl.buildLevelGridUrl;
    public static postCreatedUrl: string = titanApiUrl + 'buildLevel/post';
    public static postUpdateUrl: string = titanApiUrl + 'buildLevel/put';
    public static getByIdUrl: string = titanApiUrl + 'buildLevel/get';
}