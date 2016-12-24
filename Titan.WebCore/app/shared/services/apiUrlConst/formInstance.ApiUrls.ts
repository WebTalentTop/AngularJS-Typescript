import { titanApiUrl } from './titanApiUrl';
import { GridApiUrl } from './gridApiUrls';

export class FormInstanceApiUrl {
    //public static gridApiUrl:string  = GridApiUrl.formInstanceGridUrl;
    public static postCreatedUrl: string = titanApiUrl + 'formInstance';
    public static postUpdateUrl: string = titanApiUrl + 'formInstance';
    public static getByIdUrl: string = titanApiUrl + 'formInstance';
    public static getByFormSchemaCategoryId: string = titanApiUrl + 'formInstance/getByFormSchemaCategoryId';
    public static getByFormSchemaCategoryIdCol: string = titanApiUrl + 'formInstance/getByFormSchemaCategoryIdCol';
}
