/**
 * Created by 12thWonder on 1/8/2017.
 */
export interface ITestFacilityResizeEventDbViewModel {
    testFacilityScheduleId:string;
    startDate:Date;
    endDate:Date;
    // 0 for remove, 1 for update
    updateExistingUserSchedule: number;
    deltaInMinutes:number;
}