import { titanApiUrl } from './titanApiUrl'
import { GridApiUrl }  from './gridApiUrls';

export class TestRoleApiUrl {
    public static gridApiUrl:string  = GridApiUrl.testRoleGridUrl;
    public static postCreatedUrl: string = titanApiUrl + 'testRole/post';
    public static postUpdateUrl: string = titanApiUrl + 'testRole/put';
    public static getByIdUrl: string = titanApiUrl + 'testRole/get';
    public static getAllUrl: string = titanApiUrl + 'testRole';
}