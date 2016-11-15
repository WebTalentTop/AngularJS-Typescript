import { titanApiUrl } from './titanApiUrl';
import { GridApiUrl } from './gridApiUrls';

export class DetailsApiUrl {
    public static gridApiUrl:string  = GridApiUrl.detailsGridUrl;
    public static postCreatedUrl: string = titanApiUrl + 'details';
    public static postUpdateUrl: string = titanApiUrl + 'details';
    public static getByIdUrl: string = titanApiUrl + 'details';
}