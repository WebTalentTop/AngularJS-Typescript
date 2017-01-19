import { titanApiUrl } from '../titanApiUrl';
import { GridApiUrl } from '../gridApiUrls';

export class ProcedureApiUrl {
    public static gridApiUrl:string  = GridApiUrl.procedureGridUrl;
    public static postCreatedUrl: string = titanApiUrl + 'procedure';
    public static postUpdateUrl: string = titanApiUrl + 'procedure';
    public static postAddProcedureRequirementUrl: string = titanApiUrl + 'procedure/postProcedureRequirement?procedureId=';
    public static postAddProcedureStepUrl: string = titanApiUrl + 'procedure/postProcedureStep?procedureId=';
    public static getProcedureRequirementUrl: string = titanApiUrl + 'procedure/getProcedureRequirement?procedureId=';
    public static getProcedureStepUrl: string = titanApiUrl + 'procedure/getProcedureStep?procedureId=';
    public static postDeleteProcedureRequirementUrl: string = titanApiUrl + 'procedure/DeleteProcedureRequirement?procedureId=';
    public static postDeleteProcedureStepUrl: string = titanApiUrl + 'procedure/DeleteProcedureStep?procedureId=';
    public static getByIdUrl: string = titanApiUrl + 'procedure/Get?id=';
    public static putProcedureStepDisplayOrderUrl: string = titanApiUrl + 'procedure/updateProcedureStepDisplayOrder?procedureId=';
    public static filterByTestTemplateIdUrl: string = titanApiUrl + 'procedure/filterByTestTemplateId?testTemplateId='; 
}
