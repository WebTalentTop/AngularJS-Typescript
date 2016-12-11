import { titanApiUrl } from './titanApiUrl';
import { GridApiUrl } from './gridApiUrls';

export class TestRequirementApiUrl {
    public static gridApiUrl:string  = GridApiUrl.testRequirementGridUrl;
    public static postCreatedUrl: string = titanApiUrl + 'testRequirement/post';
    public static postUpdateUrl: string = titanApiUrl + 'testRequirement/put';
    public static getByIdUrl: string = titanApiUrl + 'testRequirement/get';
    public static filterByTestTemplateIdUrl: string = titanApiUrl + 'testRequirement/filterByTestTemplateId?testTemplateId='; 
    public static filterByProcedureIdUrl: string = titanApiUrl + 'testRequirement/filterByProcedureId?procedureId='; 
}