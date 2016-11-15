import { titanApiUrl } from './titanApiUrl';
export class GridApiUrl {
    public static projectGridUrl: string = titanApiUrl + 'projectGrid/GetGridData';
    public static platformGridUrl: string = titanApiUrl + 'platformGrid/GetGridData';
    public static departmentGridUrl: string = titanApiUrl + 'departmentGrid/GetGridData';
    public static equipmentGridUrl: string = titanApiUrl + 'equipmentgrid/GetGridData';
    public static equipmentTypeGridUrl: string = titanApiUrl + 'equipmentTypeGrid/GetGridData';
    public static testFacilityGridUrl: string = titanApiUrl + 'testFacilityGrid/GetGridData';
    public static marketGridUrl: string = titanApiUrl + 'marketGrid/GetGridData';
    public static buildLevelGridUrl: string = titanApiUrl + 'buildLevelGrid/GetGridData';
    public static tenantGridUrl: string = titanApiUrl + 'tenantGrid/GetGridData';
}