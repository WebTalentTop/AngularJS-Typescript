import { titanApiUrl } from './titanApiUrl';
import { GridApiUrl } from './gridApiUrls';

export class MarketApiUrl {
    public static gridApiUrl:string  = GridApiUrl.marketGridUrl;
    public static postCreatedUrl: string = titanApiUrl + 'market';
    public static postUpdateUrl: string = titanApiUrl + 'market';
    public static getByIdUrl: string = titanApiUrl + 'market';
}