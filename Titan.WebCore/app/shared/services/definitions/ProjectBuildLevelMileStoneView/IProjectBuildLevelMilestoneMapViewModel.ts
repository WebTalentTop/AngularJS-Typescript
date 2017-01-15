/**
 * Created by ZeroInfinity on 1/13/2017.
 */
export interface IProjectBuildLevelMilestoneMapViewModel {
    id?:string;
    projectId:string;
    projectBuildLevelId:string;
    buildLevelName:string;
    mileStoneId:string;
    mileStoneName:string;
    mileStoneStatusId?:string;
    mileStoneStatus?:string;
    plannedStartDate?:string;
    plannedEndDate?:string;
    actualStartDate?:string;
    actualEndDate?:string;
}