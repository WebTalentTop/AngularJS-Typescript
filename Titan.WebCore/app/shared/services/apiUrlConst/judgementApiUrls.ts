import { titanApiUrl } from './titanApiUrl';
import { GridApiUrl } from './gridApiUrls';

export class JudgementApiUrl {
    public static gridApiUrl:string  = GridApiUrl.judgementGridUrl;
    public static postCreatedUrl: string = titanApiUrl + 'judgement/post';
    public static postUpdateUrl: string = titanApiUrl + 'judgement/put';
    public static getByIdUrl: string = titanApiUrl + 'judgement/get';
}