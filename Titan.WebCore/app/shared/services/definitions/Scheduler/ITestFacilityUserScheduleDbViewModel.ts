import {ITitanUserScheduleViewModel} from "./ITestFacilityAssignUsersViewModel";
/**
 * Created by 12thWonder on 1/8/2017.
 */
export interface ITestFacilityUserScheduleDbViewModel {
    startDate:Date;
    endDate:Date;
    testFacilityScheduleId:string;
    updateTestFacilitySchedule: boolean;
    entityId:string;
    entityIdentifierId:string;
    schedules:ITitanUserScheduleViewModel[];
}
