import { titanApiUrl } from './titanApiUrl';
import { GridApiUrl } from './gridApiUrls';

export class TestTypeApiUrl {
    public static gridApiUrl: string = GridApiUrl.testTypeGridUrl;
    public static postCreatedUrl: string = titanApiUrl + 'testType';
    public static postUpdateUrl: string = titanApiUrl + 'testType';
    public static getByIdUrl: string = titanApiUrl + 'testType/GetByIdAndLocale';
    public static getAllUrl: string = titanApiUrl + 'testType/GetByTenantId';
}