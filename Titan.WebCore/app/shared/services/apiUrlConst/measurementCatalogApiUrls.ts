import { titanApiUrl } from './titanApiUrl';
import { GridApiUrl } from './gridApiUrls';

export class MeasurementCatalogApiUrl {
    public static gridApiUrl: string = GridApiUrl.downTimeReasonGridUrl;
    
    public static getAllMeasurementCatalogs: string = titanApiUrl + 'MeasurementCatalog';
    public static postCreatedUrl: string = titanApiUrl + 'MeasurementCatalog';
    public static postUpdateUrl: string = titanApiUrl + 'MeasurementCatalog';
    public static getByIdUrl: string = titanApiUrl + 'MeasurementCatalog/get';
    public static RemoveInputParameterCatalogMap: string = titanApiUrl + 'MeasurementCatalog/get';
    public static postAddInputDetailsById: string = titanApiUrl + 'MeasurementCatalog';
    
    
}