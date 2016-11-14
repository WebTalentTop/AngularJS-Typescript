import { titanApiUrl } from './titanApiUrl';
import { GridApiUrl } from './gridApiUrls';
export class TitanUserApiUrl {
    public static gridApiUrl:string  = GridApiUrl.testFacilityGridUrl;
    public static postCreatedUrl: string = titanApiUrl + 'titanUser';
    public static postUpdateUrl: string = titanApiUrl + 'titanUser';
    public static getByIdUrl: string = titanApiUrl + 'titanUser';
}