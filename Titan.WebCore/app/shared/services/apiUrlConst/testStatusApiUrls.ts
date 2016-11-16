import { titanApiUrl } from './titanApiUrl'
import { GridApiUrl }  from './gridApiUrls';

export class testStatusApiUrl {
    public static gridApiUrl:string  = GridApiUrl.testStatusGridUrl;
    public static postCreatedUrl: string = titanApiUrl + 'testStatus';
    public static postUpdateUrl: string = titanApiUrl + 'testStatus';
    public static getByIdUrl: string = titanApiUrl + 'testStatus';
}