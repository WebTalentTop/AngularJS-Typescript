import { titanApiUrl } from './titanApiUrl'
import { GridApiUrl }  from './gridApiUrls';

export class testStatusApiUrl {
    public static gridApiUrl:string  = GridApiUrl.testStatusGridUrl;
    public static postCreatedUrl: string = titanApiUrl + 'testStatus/post';
    public static postUpdateUrl: string = titanApiUrl + 'testStatus/put';
    public static getByIdUrl: string = titanApiUrl + 'testStatus/get';
}