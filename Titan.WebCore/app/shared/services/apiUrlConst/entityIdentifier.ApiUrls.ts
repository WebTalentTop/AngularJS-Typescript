/**
 * Created by ZeroInfinity on 12/16/2016.
 */
import { titanApiUrl } from './titanApiUrl';
//import { localizationApiUrl } from './localizationApiUrl';
//import { GridApiUrl } from './gridApiUrls';

export class EntityIdentifierApiUrl {
    //public static entityIdentifierApiUrl:string  = `${titanApiUrl}entityIdentifier`;
    public static getByIdUrl: string = `${titanApiUrl}entityIdentifier/get`;
    public static getByNameUrl: string = `${titanApiUrl}entityIdentifier/getByName`;
    public static getByNameForFormsUrl = titanApiUrl + "entityIdentifier/getByNameForForms"

    /*public static gridApiUrl:string  = GridApiUrl.testFacilityGridUrl;
    public static postCreatedUrl: string = titanApiUrl + 'testFacility/post';
    public static postUpdateUrl: string = titanApiUrl + 'testFacility/update';

    public static getAllUrl: string = titanApiUrl + `${this.nameOfThis}/GetByTenantId`;
    public static getEquipmentDetailsByIdUrl: string = titanApiUrl + 'testFacility/GetTestFacilityEquipments';
    public static getfilesByIdUrl: string = titanApiUrl + 'testFacilityAttachment/file';
    public static getNotifications: string = titanApiUrl + 'testFacility/CheckNotifications';
    public static getRoles: string = titanApiUrl + 'testFacility/GetRoles';
    public static getFilteredEvents: string = titanApiUrl + 'testFacility/GetFilteredEvents';
    public static filterUserNames: string = titanApiUrl + 'testFacility/FilterByUserNames';
    public static PostAddUserRolesUrl: string = titanApiUrl + 'testFacility/PostUserRoles';
    public static getDetailsTabLocJs:string = localizationApiUrl;*/
}
