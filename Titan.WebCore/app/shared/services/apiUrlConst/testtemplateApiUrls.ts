import { titanApiUrl } from './titanApiUrl';
import { GridApiUrl } from './gridApiUrl';
export class TestTemplateApiUrl {
    public static gridApiUrl:string  = GridApiUrl.testFacilityGridUrl;
    public static postCreatedUrl: string = titanApiUrl + 'testTemplate';
    public static postUpdateUrl: string = titanApiUrl + 'testTemplate';
    public static getByIdUrl: string = titanApiUrl + 'testTemplate';
}