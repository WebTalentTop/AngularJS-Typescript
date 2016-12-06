import { titanApiUrl } from './titanApiUrl';
import { GridApiUrl } from './gridApiUrls';

export class TestActivityApiUrl {
    public static gridApiUrl:string  = GridApiUrl.testActivityGridUrl;
    public static postCreatedUrl: string = titanApiUrl + 'testActivity/post';
    public static postUpdateUrl: string = titanApiUrl + 'testActivity/put';
    public static getByIdUrl: string = titanApiUrl + 'testActivity/get';
}