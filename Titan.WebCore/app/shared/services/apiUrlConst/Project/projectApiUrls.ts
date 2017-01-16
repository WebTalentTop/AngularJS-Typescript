import { titanApiUrl } from '../titanApiUrl';
import { GridApiUrl } from '../gridApiUrls';

export class ProjectApiUrl {
    public static gridApiUrl: string = GridApiUrl.projectGridUrl;
    public static getProjectDetailsUrl: string = titanApiUrl + 'project/Get?id=';
    public static postCreatedUrl: string = titanApiUrl + 'project';
    public static postUpdateUrl: string = titanApiUrl + 'project';
    public static getAllUrl: string = titanApiUrl + 'project/GetAllProjects';
    public static getByIdUrl: string = titanApiUrl + 'project';
    public static putProjectDetailsUrl: string = titanApiUrl + 'project/Put'
    public static getBuildLevelsUrl: string = titanApiUrl + 'project/GetProjectBuildLevels?projectId='
    public static postTorqueBookUrl: string = titanApiUrl + 'TorqueBook/Post'
    public static getTorqueBooksByBuildLevelIdUrl: string = titanApiUrl + 'TorqueBook/GetTorqueBooksByBuildLevel?projectId='
}