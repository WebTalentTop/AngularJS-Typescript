import { titanApiUrl } from './titanApiUrl';

export class GridApiUrl {
    public static buildLevelGridUrl: string = titanApiUrl + 'buildLevelGrid/GetGridData';
    public static departmentGridUrl: string = titanApiUrl + 'departmentGrid/GetGridData';
    public static equipmentGridUrl: string = titanApiUrl + 'equipmentgrid/GetGridData';
    public static equipmentTypeGridUrl: string = titanApiUrl + 'equipmentTypeGrid/GetGridData';
    public static marketGridUrl: string = titanApiUrl + 'marketGrid/GetGridData';
    public static platformGridUrl: string = titanApiUrl + 'platformGrid/GetGridData';
    public static projectGridUrl: string = titanApiUrl + 'projectGrid/GetGridData';
    public static tenantGridUrl: string = titanApiUrl + 'tenantGrid/GetGridData';
    public static testFacilityGridUrl: string = titanApiUrl + 'testFacilityGrid/GetGridData';
    public static testModeGridUrl: string = titanApiUrl + 'testModeGrid/GetGridData';
    public static testTemplateGridUrl: string = titanApiUrl + 'testTemplateGrid/GetGridData';
    public static testTypeGridUrl: string = titanApiUrl + 'testTypeGrid/GetGridData';
    public static titanRoleGridUrl: string = titanApiUrl + 'titanRoleGrid/GetGridData';
    public static titanUserGridUrl: string = titanApiUrl + 'titanUserGrid/GetGridData';
}