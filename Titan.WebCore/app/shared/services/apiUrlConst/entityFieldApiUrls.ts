import { titanApiUrl } from './titanApiUrl';
import { GridApiUrl } from './gridApiUrls';

export class EntityFieldApiUrl {
    public static gridApiUrl:string  = GridApiUrl.entityFieldGridUrl;
    public static postCreatedUrl: string = titanApiUrl + 'entityField/post';
    public static postUpdateUrl: string = titanApiUrl + 'entityField/put';
    public static getByIdUrl: string = titanApiUrl + 'entityField/get';
}