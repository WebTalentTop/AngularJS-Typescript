export interface ITestFacilityMoveEventDbViewModel {
    testFacilityScheduleId:string;
    moveToTestFacilityId:string;
    startDate:Date;
    endDate:Date;
    // 0 for remove, 1 for update
    updateExistingUserSchedule: number;
    deltaInMinutes:number;
}
