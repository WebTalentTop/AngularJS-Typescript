import { titanApiUrl } from './titanApiUrl';
export class GridApiUrl {
    public static buildlevelGridUrl: string = titanApiUrl + 'buildlevelgrid/GetGridData';
    public static projectGridUrl: string = titanApiUrl + 'projectGrid/GetGridData';
    public static platformGridUrl: string = titanApiUrl + 'platformGrid/GetGridData';
    public static departmentGridUrl: string = titanApiUrl + 'departmentGrid/GetGridData';
    public static equipmentGridUrl: string = titanApiUrl + 'equipmentgrid/GetGridData';
    public static titanroleGridUrl: string = titanApiUrl + 'titanrolegrid/GetGridData';
    public static titanuserGridUrl: string = titanApiUrl + 'titanuserGrid/GetGridData';
}