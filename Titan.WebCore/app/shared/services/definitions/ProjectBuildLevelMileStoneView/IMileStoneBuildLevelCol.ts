import {IMileStone} from "../MileStone/IMileStone";
import {IBuildLevel} from "../BuildLevel/IBuildLevel";
import {IProjectBuildLevelMap} from "../ProjectBuildLevelMapView/IProjectBuildLevelMap";
/**
 * Created by ZeroInfinity on 1/11/2017.
 */
export interface IMileStoneBuildLevelCol {
    id:string;
    buildLevelId:string;
    buildLevelMap:IProjectBuildLevelMap;
    mileStone:IMileStone;
    plannedStartDate?:string;
    plannedEndDate?:string;
    actualStartDate?:string;
    actualEndDate?:string;
    userCreatedById?:string;
    createdOn?:string
    userModifiedById?:string;
    modifiedOn?:string;
    isDeleted:boolean;
    enabled:boolean;
    buildLevelMapped:boolean;
    mileStoneMapped:boolean;
}