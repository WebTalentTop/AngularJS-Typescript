import { titanApiUrl } from './titanApiUrl';
import { GridApiUrl } from './gridApiUrl';
export class TestFacilityApiUrl {
    public static gridApiUrl:string  = GridApiUrl.testFacilityGridUrl;
    public static postCreatedUrl: string = titanApiUrl + 'market';
    public static postUpdateUrl: string = titanApiUrl + 'market';
    public static getByIdUrl: string = titanApiUrl + 'market';
}