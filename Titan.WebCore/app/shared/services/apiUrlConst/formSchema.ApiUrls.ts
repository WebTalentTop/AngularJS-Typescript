import { titanApiUrl } from './titanApiUrl';
import { GridApiUrl } from './gridApiUrls';

export class FormSchemaApiUrl {
    public static gridApiUrl:string  = GridApiUrl.formSchemaGridUrl;
    public static postCreatedUrl: string = titanApiUrl + 'formSchema/post';
    public static postUpdateUrl: string = titanApiUrl + 'formSchema';
    public static getByIdUrl: string = titanApiUrl + 'formSchema';
    public static getByFormSchemaCategoryId: string = titanApiUrl + 'formSchema/getByFormSchemaCategoryId';
    public static getByFormSchemaCategoryIdCol: string = titanApiUrl + 'formSchema/getByFormSchemaCategoryIdCol';
    public static getFormSchemaGridUrl:string = titanApiUrl + 'formSchema/getFormSchemaGrid';
    public static getAllFormsByFormSchemaCategoryIdUrl:string = titanApiUrl + 'formSchema/getAllFormsByFormSchemaCategoryId';
    public static getFormSchemaGridByEntityIdentifierIdUrl:string = titanApiUrl + 'formSchema/getFormSchemaGridByEntityIdentifierId';
}
