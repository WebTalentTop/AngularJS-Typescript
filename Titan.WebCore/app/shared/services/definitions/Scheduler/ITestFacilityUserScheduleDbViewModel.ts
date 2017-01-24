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
    defaultStartMinutesPastMidnight : number;
    defaultEndMinutesPastMidnight: number;
    eventStatusId:string;
    schedules:ITitanUserScheduleViewModel[];
    isTimeBlockScheduled : boolean;
    // The minDate and maxDate are used for validation
    minDate:Date;
    maxDate:Date;

}
