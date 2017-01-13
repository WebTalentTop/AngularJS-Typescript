export interface ITestFacilityScheduleViewModel{
    id: string;
    testFacilityId:string;
    startDate: Date;
    endDate: Date;
}

export interface ITestFacilitySplitEventViewModel {
    existingSchedule : ITestFacilityScheduleViewModel
    newSchedule : ITestFacilityScheduleViewModel

}