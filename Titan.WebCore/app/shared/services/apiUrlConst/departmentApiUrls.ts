import { titanApiUrl } from './titanApiUrl';
import { GridApiUrl } from './gridApiUrls';

export class DepartmentApiUrl {
    public static gridApiUrl:string  = GridApiUrl.departmentGridUrl;
    public static postCreatedUrl: string = titanApiUrl + 'department';
    public static postUpdateUrl: string = titanApiUrl + 'department';
    public static getByIdUrl: string = titanApiUrl + 'platform';
    public static getAllUrl: string = titanApiUrl + 'department/GetAllDepartments';
    
}