import { titanApiUrl } from './titanApiUrl';
import { GridApiUrl } from './gridApiUrls';

export class TestVerificationMethodApiUrl {
    public static gridApiUrl:string  = GridApiUrl.testVerificationMethodGridUrl;
    public static postCreatedUrl: string = titanApiUrl + 'testVerificationMethod/post';
    public static postUpdateUrl: string = titanApiUrl + 'testVerificationMethod/put';
    public static getByIdUrl: string = titanApiUrl + 'testVerificationMethod/get';
    public static getAllUrl: string = titanApiUrl + 'testVerificationMethod/GetAllVerificationMethods';
}