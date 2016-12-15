/**
 * Created by ZeroInfinity on 12/8/2016.
 */
import { titanApiUrl } from './titanApiUrl';
import { GridApiUrl } from './gridApiUrls';

export class EntityEventApiUrl {
    //public static gridApiUrl:string  = GridApiUrl.formSchemaCategoryGridUrl;
    public static postCreatedUrl: string = titanApiUrl + 'entityEvent';
    public static postUpdateUrl: string = titanApiUrl + 'entityEvent';
    public static getByIdUrl: string = titanApiUrl + 'entityEvent';
    public static getAllUrl: string = titanApiUrl + 'entityEvent';
    public static getFindByEntityIdentifierId: string = titanApiUrl + 'entityEvent/getFindByEntityIdentifierId';
}
