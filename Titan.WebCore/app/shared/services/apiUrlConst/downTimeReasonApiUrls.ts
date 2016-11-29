import { titanApiUrl } from './titanApiUrl';
import { GridApiUrl } from './gridApiUrls';

export class DownTimeReasonApiUrl {
    public static gridApiUrl:string  = GridApiUrl.downTimeReasonGridUrl;
    public static postCreatedUrl: string = titanApiUrl + 'downTimeReason/post';
    public static postUpdateUrl: string = titanApiUrl + 'downTimeReason/put';
    public static getByIdUrl: string = titanApiUrl + 'downTimeReason/get';
}