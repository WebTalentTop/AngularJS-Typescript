import { titanApiUrl } from './titanApiUrl';
import { GridApiUrl } from './gridApiUrl';
export class TestFacilityApiUrl {
    public static gridApiUrl:string  = GridApiUrl.testFacilityGridUrl;
    public static postCreatedUrl: string = titanApiUrl + 'testFacility';
    public static postUpdateUrl: string = titanApiUrl + 'testFacility';
    public static getByIdUrl: string = titanApiUrl + 'testFacility/Get';
}