import { titanApiUrl } from './titanApiUrl';
import { GridApiUrl } from './gridApiUrls';

export class TestModeApiUrl {
    public static gridApiUrl: string = GridApiUrl.testModeGridUrl;
    public static postCreatedUrl: string = titanApiUrl + 'testMode';
    public static postUpdateUrl: string = titanApiUrl + 'testMode';
    public static getByIdUrl: string = titanApiUrl + 'testMode/Get';
    public static getAllUrl: string = titanApiUrl + 'testMode/GetAll';
    public static getAllByTestTypeIdUrl: string = titanApiUrl + 'testMode/GetAllByTestType?testTypeId=';
}