import { titanApiUrl } from './titanApiUrl';
import { GridApiUrl } from './gridApiUrls';

export class VerificationMethodApiUrl {
    public static gridApiUrl:string  = GridApiUrl.verificationmethodGridUrl;
    public static postCreatedUrl: string = titanApiUrl + 'verificationmethod';
    public static postUpdateUrl: string = titanApiUrl + 'verificationmethod';
    public static getByIdUrl: string = titanApiUrl + 'verificationmethod';
}