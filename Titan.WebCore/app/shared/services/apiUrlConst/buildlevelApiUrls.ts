import { titanApiUrl } from './titanApiUrl';
import { GridApiUrl } from './gridApiUrl';
export class BuildLevelApiUrl {
    public static gridApiUrl:string  = GridApiUrl.testFacilityGridUrl;
    public static postCreatedUrl: string = titanApiUrl + 'buildLevel';
    public static postUpdateUrl: string = titanApiUrl + 'buildLevel';
    public static getByIdUrl: string = titanApiUrl + 'buildLevel';
}