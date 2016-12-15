import { titanApiUrl } from './titanApiUrl';
import { GridApiUrl } from './gridApiUrls';

export class FormSchemaApiUrl {
    public static gridApiUrl:string  = GridApiUrl.formSchemaGridUrl;
    public static postCreatedUrl: string = titanApiUrl + 'formSchema/post';
    public static postUpdateUrl: string = titanApiUrl + 'formSchema';
    public static getByIdUrl: string = titanApiUrl + 'formSchema';
}
