import { titanApiUrl } from './titanApiUrl';
import { GridApiUrl } from './gridApiUrls';

export class TestFacilityRoleApiUrl {
  //public static gridApiUrl: string = GridApiUrl.testFacilityGridUrl;
  //public static postCreatedUrl: string = titanApiUrl + 'testFacilityRole';
  //public static postUpdateUrl: string = titanApiUrl + 'testFacilityRole';
    public static getByIdUrl: string = titanApiUrl + 'testFacilityRole';
    public static getTestFacilityUsersByTestFacilityIdUrl: string = titanApiUrl + 'testFacility/GetTestFacilityUserRoleByTestFacilityId';
}