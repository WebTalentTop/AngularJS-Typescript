import { titanApiUrl } from './titanApiUrl';
import { GridApiUrl } from './gridApiUrls';
export class StepApiUrl {
    public static gridApiUrl:string  = GridApiUrl.stepGridUrl;
    public static postCreatedUrl: string = titanApiUrl + 'Step/post';
    public static postAddStepModuleUrl: string = titanApiUrl + 'Step/PostStepModule?stepId=';
    
    public static postUpdateUrl: string = titanApiUrl + 'Step/put';
    public static getByIdUrl: string = titanApiUrl + 'Step/get?id=';
    public static getStepFrequenciesUrl: string = titanApiUrl + 'Step/getStepFrequencies';
    public static getStepTypesUrl: string = titanApiUrl + 'Step/getStepTypes';
    public static getStepTypeDetailsUrl: string = titanApiUrl + 'Step/getStepTypeDetails?stepTypeId=';
    public static getStepModulesUrl: string = titanApiUrl + 'Step/GetStepModules?stepId=';
    public static filterByProcedureIdUrl: string = titanApiUrl + 'Step/filterByProcedureId?procedureId='; 
}