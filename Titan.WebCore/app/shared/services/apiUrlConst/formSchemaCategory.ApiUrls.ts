/**
 * Created by ZeroInfinity on 12/8/2016.
 */
import { titanApiUrl } from './titanApiUrl';
import { GridApiUrl } from './gridApiUrls';

export class FormSchemaCategoryApiUrl {
    //public static gridApiUrl:string  = GridApiUrl.formSchemaCategoryGridUrl;
    //public static postCreatedUrl: string = titanApiUrl + 'formSchemaCategory';
    //public static postUpdateUrl: string = titanApiUrl + 'formSchemaCategory';
    //public static getByIdUrl: string = titanApiUrl + 'formSchemaCategory';
    public static getAllUrl: string = titanApiUrl + 'formSchemaCategory';
    public static getByEntityIdentifierId: string = titanApiUrl + 'formSchemaCategory/getByEntityIdentifierId';
    public static getByEntitySubTypeId: string = titanApiUrl + 'formSchemaCategory/getByEntitySubTypeId';
}
