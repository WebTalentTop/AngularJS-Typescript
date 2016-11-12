import { titanApiUrl } from './titanApiUrl';
import { GridApiUrl } from './gridApiUrl';
export class TitanRoleApiUrl {
    public static gridApiUrl:string  = GridApiUrl.testFacilityGridUrl;
    public static postCreatedUrl: string = titanApiUrl + 'titanRole';
    public static postUpdateUrl: string = titanApiUrl + 'titanRole';
    public static getByIdUrl: string = titanApiUrl + 'titanRole';
}