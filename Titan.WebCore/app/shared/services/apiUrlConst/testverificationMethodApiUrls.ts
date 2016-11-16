import { titanApiUrl } from './titanApiUrl';
import { GridApiUrl } from './gridApiUrls';

export class TestVerificationMethodApiUrl {
    public static gridApiUrl:string  = GridApiUrl.testverificationMethodGridUrl;
    public static postCreatedUrl: string = titanApiUrl + 'testverificationMethod';
    public static postUpdateUrl: string = titanApiUrl + 'testverificationMethod';
    public static getByIdUrl: string = titanApiUrl + 'testverificationMethod';
}