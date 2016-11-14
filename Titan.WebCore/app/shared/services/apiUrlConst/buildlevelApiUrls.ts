import { titanApiUrl } from '../apiUrlConst';
import { GridApiUrl } from './gridApiUrls';

export class BuildLevelApiUrl {
    public static gridApiUrl:string  = GridApiUrl.buildLevelGridUrl;
    public static postCreatedUrl: string = titanApiUrl + 'buildLevel';
    public static postUpdateUrl: string = titanApiUrl + 'buildLevel';
    public static getByIdUrl: string = titanApiUrl + 'buildLevel';
}