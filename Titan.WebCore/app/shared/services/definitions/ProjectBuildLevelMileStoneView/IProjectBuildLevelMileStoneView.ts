import {IMileStone} from "../MileStone/IMileStone";
import {IMileStoneBuilLevelRow} from "./IMileStoneBuilLevelRow";
/**
 * Created by ZeroInfinity on 1/11/2017.
 */

export interface IProjectBuildLevelMileStoneView {
    id:string;
    mileStoneBuildLevel:IMileStoneBuilLevelRow[];
}