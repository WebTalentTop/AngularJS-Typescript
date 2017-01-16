/**
 * Created by ZeroInfinity on 1/12/2017.
 */
import { titanApiUrl } from '../titanApiUrl';
import { GridApiUrl } from '../gridApiUrls';

export class ProjectBuildLevelMapApiUrls {
    public static getAllUrl: string = titanApiUrl + 'projectBuildLevelMap';
    public static getAllByProjectIdUrl: string = titanApiUrl + 'projectBuildLevelMap/getByProjectId';
}