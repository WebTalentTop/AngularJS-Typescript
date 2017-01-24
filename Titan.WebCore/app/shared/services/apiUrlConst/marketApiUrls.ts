import { titanApiUrl } from './titanApiUrl';
import { GridApiUrl } from './gridApiUrls';

export class MarketApiUrl {
    
    public static gridApiUrl:string  = GridApiUrl.marketGridUrl;
    public static postCreatedUrl: string = titanApiUrl + 'market/post';
    public static postUpdateUrl: string = titanApiUrl + 'market/put';
    public static getByIdUrl: string = titanApiUrl + 'market/get';
    public static getAllMarkets: string = titanApiUrl + 'market/GetAllMarkets';
}