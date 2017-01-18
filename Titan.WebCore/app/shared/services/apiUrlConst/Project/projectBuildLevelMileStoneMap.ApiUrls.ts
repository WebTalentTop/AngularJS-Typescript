/**
 * Created by ZeroInfinity on 1/11/2017.
 */
import { titanApiUrl } from '../titanApiUrl';
import { GridApiUrl } from '../gridApiUrls';

export class ProjectBuildLevelMileStoneMapApiUrl {
    //public static gridApiUrl: string = GridApiUrl.projectBuildLevelMilestoneMapGridUrl;
    public static postCreatedUrl: string = titanApiUrl + 'projectBuildLevelMilestonemap/create';
    public static postUpdateByIdUrl: string = titanApiUrl + 'projectBuildLevelMilestonemap';
    public static getAllBuilLevelMilestoneByProjectUrl: string = titanApiUrl + 'projectBuildLevelMilestonemap/project';
    public static getByIdUrl: string = titanApiUrl + 'projectBuildLevelMilestonemap';

}