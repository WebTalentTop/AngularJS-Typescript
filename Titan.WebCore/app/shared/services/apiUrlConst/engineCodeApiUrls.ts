import { titanApiUrl } from './titanApiUrl';
import { GridApiUrl } from './gridApiUrls';

export class EngineCodeApiUrl {
    public static gridApiUrl:string  = GridApiUrl.engineCodeGridUrl;
    public static postCreatedUrl: string = titanApiUrl + 'engineCode/post';
    public static postUpdateUrl: string = titanApiUrl + 'engineCode/put';
    public static getByIdUrl: string = titanApiUrl + 'engineCode/get';
}