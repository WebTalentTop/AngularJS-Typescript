
 export interface ITitanUserScheduleViewModel{
    id:string;
    testFacilityId: string;
    shiftId:string;
    scheduleEventTypeId:string;
    entityId:string;
    titanUserId:string;
    testFacilityScheduleId:string;
    startDate : Date;
    endDate: Date;
     // Number of minutes past midnight
     defaultStartMinutesPastMidnight: number;
     defaultEndMinutesPastMidnight: number;
    action:string;




}


