import { titanApiUrl } from './titanApiUrl';
import { GridApiUrl } from './gridApiUrls';

export class TestRequirementApiUrl {
    public static gridApiUrl:string  = GridApiUrl.testRequirementGridUrl;
    public static postCreatedUrl: string = titanApiUrl + 'testRequirement';
    public static postUpdateUrl: string = titanApiUrl + 'testRequirement';
    public static getByIdUrl: string = titanApiUrl + 'testRequirement';
    public static filterByTestTemplateIdUrl: string = titanApiUrl + 'testRequirement/filterByTestTemplateId?testTemplateId='; 
}