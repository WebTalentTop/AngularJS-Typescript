import { titanApiUrl } from './titanApiUrl';
import { GridApiUrl } from './gridApiUrls';

export class ContactApiUrl {
    public static gridApiUrl:string  = GridApiUrl.contactridUrl;
    public static postCreatedUrl: string = titanApiUrl + 'contact/post';
    public static postUpdateUrl: string = titanApiUrl + 'contact/put';
    public static getByIdUrl: string = titanApiUrl + 'contact/get';
}