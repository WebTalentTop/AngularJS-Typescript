import {titanApiUrl} from '../../shared/services/apiurlconst/titanapiurl';
import {RefToNg} from '../../shared/services/definitions/RefToNg';
import {TestFacilityService} from '../../shared/services/Containers/TestFacilityService/testFacility.service';
import {BuildLevelService} from '../../shared/services/Containers/BuildLevelService/buildLevel.service';
import {TestStatusService} from '../../shared/services/Containers/TestStatusService/testStatus.service';
import {TestRoleService} from '../../shared/services/testRole.service';
import {ProjectService} from '../../shared/services/Containers/ProjectService/project.service';
import {TestModeService} from '../../shared/services/testMode.service';
import {TestTypeService} from '../../shared/services/testType.service';
import {TitanUserProfileService} from '../../shared/services/titanUserProfile.service';
import {CalendarService} from '../../shared/services/Containers/CalendarService/calendar.service';
import {TestRequestService} from '../../shared/services/Containers/TestRequestService/testRequest.service';
import {TitanService} from '../../shared/services/titan.service'
import * as moment from 'moment/moment';
import {IUserProfile} from "../../shared/services/definitions/IUserProfile";
import {ICalendarSettings} from "../../shared/services/definitions/ICalendarSettings";
import {
    ITitanUserScheduleViewModel
}  from "../../shared/services/definitions/Scheduler/ITestFacilityAssignUsersViewModel";
import {FormBuilder, Validators, FormGroup} from '@angular/forms';
import {
    DataTable,
    TabViewModule,
    LazyLoadEvent,
    ButtonModule,
    InputTextareaModule,
    InputTextModule,
    PanelModule,
    FileUploadModule,
    MessagesModule,
    Message,
    GrowlModule,
    RadioButtonModule
} from 'primeng/primeng';
import {Component, AfterViewInit, OnInit, ViewChild, ElementRef} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';
import {SelectItem, ConfirmationService} from 'primeng/primeng';
import {MenuItem} from 'primeng/primeng';
import {TitanConstants} from "../../shared/services/definitions/TitanConstants";
import {ITestFacilityMoveEventDbViewModel} from "../../shared/services/definitions/Scheduler/ITestFacilityMoveEventDbViewModel";
import {ITestFacilityUserScheduleDbViewModel} from "../../shared/services/definitions/Scheduler/ITestFacilityUserScheduleDbViewModel";
import {
    ITestFacilitySplitEventViewModel,
    ITestFacilityScheduleViewModel
} from "../../shared/services/definitions/Scheduler/ITestFacilitySplitEventDbViewModel";
import {ICalendarDurationOptions} from "../../shared/services/definitions/ICalendarSlotOptions";
import {TenantService} from '../../shared/services/tenant.service';
import {ITenantViewModel} from "../../shared/services/definitions/tenantDefinitions/ITenantViewModel";
import {TestFacilityRoleService} from "../../shared/services/testFacilityRole.service";
import {UserProfileService} from "../../shared/services/userProfile.service";
import {Observable} from "rxjs/Observable";
declare var $: JQueryStatic;
declare var fullcalendardef: FullCalendar.Calendar;

@Component({
    selector: 'calendar',
    styleUrls: ['app/body/Calendar/titancalendar.component.css'],
    templateUrl: 'app/body/Calendar/titancalendar.component.html'

})

export class TitanCalendarComponent implements AfterViewInit, OnInit {
    // region fields
    defaultCalendarSetting: ICalendarSettings;
    currentUser: IUserProfile;
    assignUserSchedule: ITestFacilityUserScheduleDbViewModel;
    moveTestFacilityEvent: ITestFacilityMoveEventDbViewModel;
    splitTestFacilityEvent: ITestFacilitySplitEventViewModel;
    calendarDurationOptions: ICalendarDurationOptions[] = [];
    displaySplitDialog: boolean = false;
    displayScheduleDialog: boolean = false;
    displayCalendarSearchDialog: boolean = false;
    currentTenant: ITenantViewModel;
    testRoles: any;
    buildLevels: any;
    projectCodes: any;
    testFacilities: any;
    testAllModes: any;
    testTypes: any;
    testStatus: any;
    selectedTestRoles: any[];
    selectedTestFacilities: any[];
    selectedTestTypes: any[];
    selectedTestModes: any[];
    selectedBuildLevels: any[];
    selectedTestStatuses: any[];
    selectedProjectCodes: any[];
    displayCalendarSetting: boolean = false;
    date1: Date;
    // Calendar Settings
    selectedHideWeekendValue: string = 'true';
    daysofweek: SelectItem[];
    slotDurations: SelectItem[];
    selectedFirstDayValue: number = 0;
    startWorkHoursValue: string = "00:00";
    endWorkHoursValue: string = "23:59";
    selectedSlotDurationValue: any = {days: 1};
    filterResourcesWithEvents: boolean = false; //When this setting is activated, only resources that have associated events will be displayed
    tooltip: any;
    displayEventDialog: boolean = false;
    contextMenuItems: MenuItem[] = [];
    displayEventDialogHeader: string = '';

    // Handle Context Menu Move
    moveEventDialogHeader: string = '';
    displayMoveDialog: boolean = false;
    moveToTestFacilityName: string = 'Hello I need to be updated';
    moveTestScheduleStartDate: Date;
    moveTestScheduleEndDate: Date;
    moveRevertFunction: any;
    moveToTestFacilityHeader: string = '';
    moveTestFacilityOperatorOption: number = 0;
    moveFullCalendarEventRef: any;
    // Model for TestFacility Start date and end date
    // when assigning a test facility for a test
    selectedTestScheduleStartDate: Date;
    selectedTestScheduleEndDate: Date;

    // When selecting Operators
    selectedTitanUserScheduleStartDate: Date;
    selectedTitanUserScheduleEndDate: Date;

    blankDate: Date;
    // Search Filters on the main page
    filteredTestUserNames: any[] = [];
    filteredSelectedTestUserNames: any;


    //Assign Dialog Header Properties
    assignResourceHeader: string = '';
    assignBlockTestFacilityName: string = '';
    displayAssignDialog: boolean = false;
    selectedBlockStartDate: Date;
    selectedBlockEndDate: Date;
    testOperatorsForBlock: ITitanUserScheduleViewModel[] = [];
    deletedTestOperatorsForBlock: any[] = [];
    testName: string = '';
    plannedStartDate: string = '';
    plannedEndDate: string = '';
    dueDate: string = '';
    testDuration: string = '';
    titanUsersListForTenant: SelectItem[] = [];
    titanUsersListForFacility: SelectItem[] = [];
    timeOptions: SelectItem[] = [];
    filteredTimeOptions: SelectItem[] = [];
    // For assigning operators/technicians
    selectedOperatorUserNames: any[] = [];
    filteredOperatorUserNames: any[] = [];
    filteredselectedOperatorUserNames: any;//[] = [];

    // For selecting Technicians
    selectedTestFacilityNames: any[] = [];
    testFacilityNamesLoaded: boolean = false;
    filteredTestFacilityNames: any[] = [];
    selectedTestFacilityForSchedule: string;//[] = [];

    scheduledTestFacilities: any[] = [];
    selectedFacilityForOperator: string;

    selectedResourceId: string = '';
    // The id of the selected Event
    selectedEventId: string = '';
    // In the case of testRequest, it is the testRequestId
    selectedTestRequestId: string = '';

    testOperators: any[] = [];
    msgs: Message[] = [];
    scheduleDefaultStartTime: string = '';
    scheduleDefaultEndTime: string = '';
    durationOptions: SelectItem[] = [];
    selectedDurationOption: SelectItem;
    allSlotOptions = [];
    calendarHeader: string = '';
    scheduleStartTime: number;
    scheduleEndTime: number;
    calendarDisplayMode: string = 'timeline';

    showTimeDuringAssignOperation: boolean = false;
    draggedResourceId: string = '';
    facilityChanged: boolean = false;
    tfEventSource: any = {};
    tfUserSource: any = {};
    isTimeBlockScheduled: boolean = false;
    testFacilityEventStatusList: SelectItem[] = [];
    timeBlockEventStatusId: string = '';
    changeFacilityMessage: Message[];
//endregion fields

// region constructor
    constructor(private route: ActivatedRoute,
                private router: Router,
                private testfacilityservice: TestFacilityService,
                private buildlevelservice: BuildLevelService,
                private teststatusservice: TestStatusService,
                private testroleservice: TestRoleService,
                private projectservice: ProjectService,
                private testmodeservice: TestModeService,
                private testtypeservice: TestTypeService,
                private testRequestService: TestRequestService,
                private titanService: TitanService,
                private calendarService: CalendarService,
                private titanUserProfileService: UserProfileService,
                private testFacilityRoleService: TestFacilityRoleService,
                private tenantUserService: TenantService) {

        this.currentUser = this.titanUserProfileService.getCurrentUserProfile()


    }

// endregion constructor
    initCalendarOptions() {

        //region Year
        let year = <ICalendarDurationOptions>{};
        year.durationItem = {label: 'Year', value: 'Year'};
        year.defaultSlotWidth = {label: 'Week', value: {weeks: 1}};
        year.slotOptions = [];
        year.slotOptions.push({label: 'Month', value: {months: 1}});
        year.slotOptions.push({label: 'week', value: {weeks: 1}});
        year.slotOptions.push({label: 'day', value: {days: 1}});
        this.calendarDurationOptions.push(year);
        //endregion Year

        //region quarter
        let quarter = <ICalendarDurationOptions>{};
        quarter.durationItem = {label: 'Quarter', value: 'Quarter'};

        quarter.defaultSlotWidth = {label: 'Week', value: {weeks: 1}};
        quarter.slotOptions = [];
        quarter.slotOptions.push({label: 'Month', value: {months: 1}});
        quarter.slotOptions.push({label: 'week', value: {weeks: 1}});
        quarter.slotOptions.push({label: 'day', value: {days: 1}});
        this.calendarDurationOptions.push(quarter);
        //endregion quarter

        //region month
        let month = <ICalendarDurationOptions>{};
        month.durationItem = {label: 'Month', value: 'Month'};
        month.defaultSlotWidth = {label: 'day', value: {days: 1}};
        month.slotOptions = [];
        month.slotOptions.push({label: 'Week', value: {weeks: 1}});
        month.slotOptions.push({label: 'day', value: {days: 1}});
        month.slotOptions.push({label: 'Shift', value: {hours: 8}});
        month.slotOptions.push({label: 'hour', value: {hours: 1}});
        month.slotOptions.push({label: 'half-hour', value: {minutes: 30}});
        this.calendarDurationOptions.push(month);
        //endregion month

        //region day
        let day = <ICalendarDurationOptions>{};
        day.durationItem = {label: 'Day', value: 'Day'};
        day.defaultSlotWidth = {label: 'hour', value: {hours: 1}};
        day.slotOptions = [];
        //day.slotOptions.push({label: 'day', value: {days: 1}});
        day.slotOptions.push({label: 'Shift', value: {hours: 8}});
        day.slotOptions.push({label: 'hour', value: {hours: 1}});
        day.slotOptions.push({label: 'half-hour', value: {minutes: 30}});
        this.calendarDurationOptions.push(day);
        //endregion day

        this.allSlotOptions.push('HALF-HOUR');
        this.allSlotOptions.push('HOUR');
        this.allSlotOptions.push('SHIFT');
        this.allSlotOptions.push('DAY');
        this.allSlotOptions.push('WEEK');
        this.allSlotOptions.push('MONTH');
        this.allSlotOptions.push('YEAR');


        this.selectedDurationOption = month.durationItem.value;
        this.slotDurations = [];
        for (let item of this.calendarDurationOptions) {
            this.durationOptions.push(item.durationItem);
            if (item.durationItem.value === this.selectedDurationOption) {
                this.slotDurations = item.slotOptions;
            }
        }


        this.daysofweek = [];
        this.daysofweek.push({label: 'Sunday', value: {id: 1, name: '0', code: 'SUN'}});
        this.daysofweek.push({label: 'Monday', value: {id: 2, name: '1', code: 'NY'}});
        this.daysofweek.push({label: 'Tuesday', value: {id: 3, name: '2', code: 'NY'}});
        this.daysofweek.push({label: 'Wednesday', value: {id: 4, name: '3', code: 'NY'}});
        this.daysofweek.push({label: 'Thursday', value: {id: 5, name: '4', code: 'NY'}});
        this.daysofweek.push({label: 'Friday', value: {id: 6, name: '5', code: 'NY'}});
        this.daysofweek.push({label: 'Saturday', value: {id: 7, name: '6', code: 'NY'}});


        //this.slotDurations.push({ label: 'Month', value: { id: 1, name: '30.00.', code: 'SUN' } });
        // this.slotDurations.push({label: 'Month', value: {months: 1}});
        // this.slotDurations.push({label: 'Week', value: {weeks: 1}});
        // this.slotDurations.push({label: 'Day', value: {days: 1}});
        // this.slotDurations.push({label: 'Shift', value: {hours: 8}});
        // this.slotDurations.push({label: 'Hour', value: {hours: 1}});
        // this.slotDurations.push({label: 'HalfHour', value: {minutes: 30}});
        //TODO: Make Slots Dynamic. 30 mins and 15 mins should show up in week and day mode only
        //this.slotDurations.push({label: '30 minutes', value:  '00:30:00'});
        //this.slotDurations.push({label: '15 minutes', value:  '00:15:00'});


    }

    initSchedule() {
        this.calendarService.getDefaultSettings('FDC1A91F-75F4-4B2F-BA8A-9C2D731EBE4D').subscribe(res => {
            this.defaultCalendarSetting = res.result;
            console.log(res.result);
            this.renderCalendar();
        });

    }

    renderCalendar() {

        let tz = this.titanService.getDefaultTimeZone;
        var self = this;

        let todayDate = moment().startOf('day');
        let YESTERDAY = todayDate.clone().subtract(1, 'day').format('YYYY-MM-DD');
        let TODAY = todayDate.format('YYYY-MM-DD');
        let TOMORROW = todayDate.clone().add(1, 'day').format('YYYY-MM-DD');
        let DEFAULTDATE = todayDate.clone().add(-5, 'day').format('YYYY-MM-DD');
        let slotOptions = self.allSlotOptions;
        let slotDurationInMinutes = moment.duration(self.selectedSlotDurationValue).asMinutes();
        var tt = this.tooltip;
        self.tfEventSource = {
            id: 'testFacilityEventSource',
            events: function (start, end, timezone, callback) {

                $.ajax({
                    url: titanApiUrl + 'TestFacility/Schedule',
                    type: 'POST',
                    headers: {userId: self.currentUser.id, tenantId: self.currentUser.defaultTenantId },
                    data: {
                        startdate: start.utc().format(),
                        enddate: end.utc().format(),
                        projectCodeIdList: [],
                        timezone: 'local',//tz,
                        slotDurationInMinutes: moment.duration(self.selectedSlotDurationValue).asMinutes()


                    },
                    error: function () {
                        alert('there was an error while fetching events!');
                    },
                    success: function (result) {
                        var events = [];
                        $.each(result.calendarEvents.$values, function (index, item) {
                            events.push(item);
                            console.log('------item------------', item)
                        });
                        console.log('------Event Source callback------------', events)
                        callback(events);
                    }
                });
            }
        }
        self.tfUserSource = {
            id: 'testFacilityUserSource',
            events: function (start, end, timezone, callback) {
                $.ajax({
                    url: titanApiUrl + 'TitanUser/Schedule',
                    type: 'POST',
                    headers: {userId: self.currentUser.id, tenantId: self.currentUser.defaultTenantId },
                    data: {
                        startdate: start.utc().format(),
                        enddate: end.utc().format(),
                        projectCodeIdList: [],
                        timezone: 'local',
                        slotDurationInMinutes: moment.duration(self.selectedSlotDurationValue).asMinutes()

                    },
                    error: function () {
                        alert('there was an error while fetching events!');
                    },
                    success: function (result) {
                        var events = [];
                        $.each(result.calendarEvents.$values, function (index, item) {
                            events.push(item);
                            console.log('------item------------', item)
                        });
                        console.log('------Event Source callback------------', events)
                        callback(events);
                    }
                });
            }
        }
        let scheduleConfig: any = {
            timezone: 'local',//this.defaultCalendarSetting.defaultTimeZone,
            schedulerLicenseKey: '0799804275-fcs-1480895270',
            height: 650,
            theme: true,
            themeButtonIcons: {
                prev: 'circle-triangle-w',
                next: 'circle-triangle-e',
                prevYear: 'seek-prev',
                nextYear: 'seek-next',
                refresh: 'circle-triangle-w'
            },
            header: {
                center: 'title'
            },

            //     {
            //     left: 'settings,prev,next today',
            //     center: 'title',
            //     right: 'month timeline3weeks'
            // },
            defaultDate: DEFAULTDATE,
            defaultView: 'timelineMonth',
            buttonText: {
                today: 'today',
                month: 'month',
                week: 'week',
                day: 'day',
                list: 'list',
                timeline3weeks: 'Schedule',
                timelineTitanDefault: 'Timeline'
            },
            views: {
                calendarDay: {
                    type: 'basicDay',
                    duration: {days: 1}
                },
                calendarWeek: {
                    type: 'basicWeek',
                    duration: {days: 1}
                },
                calendarMonth: {
                    type: 'month',
                    duration: {months: 1}
                },
                calendarQuarter: {
                    type: 'month',
                    duration: {months: 3}
                },
                timelineDay: {
                    type: 'timelineDay',
                    duration: {days: 1}
                },
                timelineWeek: {
                    type: 'timelineWeek',
                    duration: {days: 1}
                },
                timelineMonth: {
                    type: 'timelineMonth',
                    duration: {months: 1}
                },
                timelineQuarter: {
                    type: 'timelineMonth',
                    duration: {months: 3}
                },
                timelineYear: {
                    type: 'timelineYear',
                    duration: {years: 1}
                },
                day: {},
                week: {},
                timeline3weeks: {
                    type: 'timeline',
                    duration: {months: 1},
                    minTime: this.startWorkHoursValue,
                    maxTime: this.endWorkHoursValue,
                    slotDuration: this.defaultCalendarSetting.defaultViewSlotDuration,
                }
            },
            editable: true,
            resourceAreaWidth: "125px",
            scrollTime: '00:00',
            resourceGroupField: "entityTypeIdentifier",
            resourceGroupText: function (groupValue) {
                return groupValue;
            },
            resources: function (callback) {
                console.log("----Resources Loading ------");
                $.ajax({
                    url: titanApiUrl + 'Calendar/ResourcesForTimelineView',
                    headers: {userId: self.currentUser.id, tenantId: self.currentUser.defaultTenantId },
                    data: {
                        includeTestFaciity: true,
                        includeProject: false,
                        includeUsers: true,
                        includeVehicle: false,
                        testFacilityHeader: 'Test Facility',
                        userHeader: 'User'

                    },
                    type: 'Post',
                    error: function () {
                        alert('there was an error while fetching events!');
                    },
                    success: function (data) {
                        console.log("----Resources Loaded ------" + data.result.calendarResources.$values);
                        callback(data.result.calendarResources.$values);
                    }
                });

            },

            eventSources: [
                self.tfEventSource
                , self.tfUserSource
            ],
            eventRender: function (event, element) {
                // The id is the testFacilityScheduleId
                element.attr("eventId", event.id);
                element.attr("entityId", event.entityId);
                element.attr("resourceId", event.resourceId);
                element.attr("eventName", event.eventName);
                element.attr("plannedStart", moment(event.plannedStartDate).format("llll"));
                element.attr("plannedEnd", moment(event.plannedEndDate).format("llll"));
                element.attr("dueDate", moment(event.dueDate).format("llll"));
                element.addClass('showContextMenu');

                //element.qtip({
                //    content: event.description
                //});
            },
            eventAfterAllRender: function (view) {
                // alert($('.fc-center h2').html());
                //$('.fc-center h2').hide();
                self.calendarHeader = $('#calendar').fullCalendar('getView').title;
                $('.fc-header-toolbar').hide();
                $("span.fc-time").hide();
            },
            eventClick: function (calEvent, jsEvent, view) {
                console.log("---click is blocked--");
                return false;
            },
            eventDragStart: function (event, jsEvent, ui, view) {
                self.draggedResourceId = event.resourceId;
            },
            loading: function (isLoading, view) {
                if (isLoading) {// isLoading gives boolean value
                    console.log("----loading----");
                    //show your loader here
                } else {
                    console.log("----done----");
                }
            },
            eventDrop: function (event, delta, revertFunc) {
                self.selectedEventId = event.id;//testFacilityScheduleId
                self.moveToTestFacilityName = $("#calendar").fullCalendar('getResourceById', event.resourceId).title;
                self.moveFullCalendarEventRef = event;
                self.moveToTestFacilityHeader = "Move to " + self.moveToTestFacilityName;
                self.moveTestScheduleStartDate = event.start.toDate();
                self.moveTestScheduleEndDate = event.end.toDate();

                /*
                 *  There are two options here.
                 *  1. Move the date in the same test facility
                 *  2. Change the test facility
                 * */
                self.facilityChanged = self.draggedResourceId !== event.resourceId;
                if (self.facilityChanged) {
                    self.moveToTestFacilityHeader = 'Change Test Facility to ' + $("#calendar").fullCalendar('getResourceById', event.resourceId).title;
                    self.changeFacilityMessage = [];
                    self.changeFacilityMessage.push({
                        severity: 'warn',
                        summary: 'Test Facility Change',
                        detail: 'Are you sure?'
                    });
                    self.changeFacilityMessage.push({detail: 'Operators will be removed and events status will be set to requested'});
                    self.displayMoveDialog = true;
                } else {
                    self.changeFacilityMessage = null;
                    self.moveToTestFacilityHeader = self.moveToTestFacilityName;
                    let entityId = $(this).attr("entityId");
                    let id = $(this).attr("eventId");
                    var blockevent: any = $("#calendar").fullCalendar('clientEvents', id)[0];
                    self.initTimeBlockDetailsDialogData(blockevent, entityId, 'AssignResources', delta);
                    // Need to work on the revert Function
                }

                self.moveRevertFunction = revertFunc;
                self.moveTestFacilityEvent = <ITestFacilityMoveEventDbViewModel>{};
                self.moveTestFacilityEvent.testFacilityScheduleId = event.id;
                self.moveTestFacilityEvent.moveToTestFacilityId = event.resourceId;
                self.moveTestFacilityEvent.startDate = event.start.toDate();
                self.moveTestFacilityEvent.endDate = event.end.toDate();
                self.moveTestFacilityEvent.deltaInMinutes = delta.asMinutes();
            },
            eventResize: function (event, delta, revertFunc) {
                console.log("The delta is ", delta.asMinutes());
                self.displayAssignDialog = true;
                self.populateUpdateTestFacilityAndUserSchedule(self, event.entityId, event.id, event.resourceId, 'resize');
                self.assignUserSchedule.updateTestFacilitySchedule = true;
                self.moveRevertFunction = revertFunc;
                //Need to Make the calls/
                if (delta.asMinutes() > 0) {
                    //Increase Duration
                } else {
                    //Decrease Duration
                }
                //alert(event.title + " end is now " + event.end.format());

                // if (!confirm("is this okay?")) {
                //     revertFunc();
                // }

            }


        };

        $('#calendar').fullCalendar(scheduleConfig);
    }

    ngOnInit() {

        RefToNg.ngRef = this;
        console.log("RefToNg", RefToNg.ngRef);
        this.getTestFacilities();
        this.getTestModes();
        this.getTestTypes();
        this.getBuildLevels();
        this.getTestStatus();
        this.getProjectCodes();
        this.getTestRoles();
        this.initCalendarOptions();
        this.initSchedule();
        this.initTimeOptions();
        //this.showTimeDuringAssignOperation = true;
        this.assignUserSchedule = <ITestFacilityUserScheduleDbViewModel>{};
        this.testfacilityservice.getTestFacilityEventStatus().subscribe(res => {

            this.testFacilityEventStatusList = res.result.map(x => {
                    return {label: x.name, value: x.id}
                }
            );

        });
        //this. currentUser =this.titanUserProfileService.currentUser;
        /*
         * public enum TestReservationTypes
         {
         Shift, // Sets the time equal to the default shift
         Day,  // Make the test take the entire day
         UserDefinedTime // explictly user defined time.
         }
         * */
        this.tenantUserService.getById('FDC1A91F-75F4-4B2F-BA8A-9C2D731EBE4D').subscribe(res => {
            this.currentTenant = res.result;

            if (this.currentTenant.defaultTestReservationIntervalTypeId == 2) {
                this.showTimeDuringAssignOperation = true;
            }else if (this.currentTenant.defaultTestReservationIntervalTypeId == 1) {
                this.scheduleStartTime = 0;
                this.scheduleEndTime = 1439;
            }
        });
        this.moveTestFacilityEvent = <ITestFacilityMoveEventDbViewModel>{};
        this.splitTestFacilityEvent = <ITestFacilitySplitEventViewModel>{};
        this.splitTestFacilityEvent.existingSchedule = <ITitanUserScheduleViewModel>{};
        this.splitTestFacilityEvent.newSchedule = <ITitanUserScheduleViewModel>{};

        //this.splitTestFacilityEvent.existingSchedule.startDate = new Date();
    }

    //region toolbar
    showSearchOptions() {
        this.displayCalendarSearchDialog = true;
    }

    showCalendarSettings() {
        this.displayCalendarSetting = true;
    }

    //endregion toolbar

    populateUpdateTestFacilityAndUserSchedule(selfRef, entityId, eventId, resourceId, action) {
        debugger;
        selfRef.assignUserSchedule.startDate = $("#calendar").fullCalendar('clientEvents', eventId)[0].start.toDate();
        selfRef.assignUserSchedule.endDate = $("#calendar").fullCalendar('clientEvents', eventId)[0].end.toDate();
        selfRef.assignUserSchedule.testFacilityScheduleId = eventId;
        selfRef.assignUserSchedule.updateTestFacilitySchedule = true;
        selfRef.assignUserSchedule.entityId = entityId;
        if (action === 'resize') {
            selfRef.assignResourceHeader = selfRef.assignBlockTestFacilityName + " from " +
                $.fullCalendar.formatRange(moment(selfRef.assignUserSchedule.startDate), moment(selfRef.assignUserSchedule.endDate), 'MMM D YYYY');
        } else {
            selfRef.assignResourceHeader = selfRef.assignBlockTestFacilityName + " from " +
                $.fullCalendar.formatRange(moment(selfRef.assignUserSchedule.startDate), moment(selfRef.assignUserSchedule.endDate), 'MMMM D YYYY');
        }

        selfRef.assignUserSchedule.entityIdentifierId = TitanConstants.TestRequestEntityIdentifierId;
        selfRef.testRequestService.getUserScheduleById(selfRef.assignUserSchedule.testFacilityScheduleId, "testfacilityscheduleid").subscribe(res => {
            console.log("----GetUserScheduleById", res);
            let items = res.result.map(x => {
                let r: {
                    testFacilityId,
                    userDisplayName,
                    startDate,
                    endDate,
                    userId,
                    testUserScheduleId,
                    testfacilityName,
                    action
                } = x;

                r.startDate = moment(r.startDate).toDate();
                r.endDate = moment(r.endDate).toDate();
                r.action = 'pristine';
                return r;
            });
            selfRef.testOperatorsForBlock = items;
        });

        selfRef.testfacilityservice.filterByUserNames("t").subscribe(filteredList => {
            let values = filteredList.$values;
            selfRef.titanUsersListForTenant = filteredList.$values.map(x => {
                let r: any = {};
                r.label = x.displayName;
                r.value = x.id;
                return r;
            });
            let item = {
                label: 'Select user',
                value: ''
            };
            selfRef.titanUsersListForTenant.splice(0, 0, item);
        });
        selfRef.testRequestService.getTestFacilityScheduleById(selfRef.assignUserSchedule.entityId).subscribe(res => {
            let items = res.result.map(x => {
                let r: {testFacilityScheduleId, testFacilityId, startDate, endDate, name} = x;
                return r;
            });
            selfRef.scheduledTestFacilities = items;

        });

    }

    ngAfterViewInit() {
        //here you will have code where component content is ready.
        var selfRef = this;
        $.contextMenu({
            selector: '.showContextMenu',
            callback: function (key, options) {
                console.log(options);
                var m = "clicked: " + key;
                let entityId = $(this).attr("entityId");
                let id = $(this).attr("eventId");
                var blockevent: any = $("#calendar").fullCalendar('clientEvents', id)[0];

                switch (key) {
                    case "AssignResources": {

                        selfRef.initTimeBlockDetailsDialogData(blockevent, entityId, 'AssignResources', 0);

                        /*  selfRef.testRequestService.getTestFacilityScheduleById(selfRef.assignUserSchedule.entityId)
                         .subscribe(res => {
                         let items = res.result.map(x => {
                         let r: {testFacilityScheduleId, testFacilityId, startDate, endDate, name} = x;
                         return r;
                         });
                         selfRef.scheduledTestFacilities = items;

                         });
                         selfRef.testfacilityservice.filterByUserNames("t").subscribe(filteredList => {
                         let values = filteredList.$values;
                         selfRef.titanUsersListForTenant = filteredList.$values.map(x => {
                         let r: any = {};
                         r.label = x.displayName;
                         r.value = x.id;
                         return r;
                         });
                         let item = {
                         label: 'Select user',
                         value: ''
                         };
                         selfRef.titanUsersListForTenant.splice(0, 0, item);
                         });*/
                        //selfRef.titanUsersListForFacility = facilityUsers;
                        // selfRef.testRequestService.getUserScheduleById(selfRef.assignUserSchedule.entityId, "testrequestid").subscribe(res => {
                        // let items = res.result.map(x => {
                        //         let r: {testFacilityId, userDisplayName, startDate, endDate, userId, testUserScheduleId, testfacilityName} = x;
                        //         console.log(r);
                        //         return r;
                        //     });
                        //     selfRef.testOperators = items;
                        // });

                        break;
                    }
                    case "Details": {
                        selfRef.router.navigate(['testRequest/details', entityId]);
                        break;
                    }
                    case "Split": {
                        this.splitTestFacilityEvent = <ITestFacilitySplitEventViewModel>{}
                        this.splitTestFacilityEvent.existingSchedule = <ITitanUserScheduleViewModel>{};
                        this.splitTestFacilityEvent.newSchedule = <ITitanUserScheduleViewModel>{};
                        console.log("This is the split");
                        selfRef.displaySplitDialog = true;
                        selfRef.splitTestFacilityEvent.existingSchedule.startDate = $("#calendar").fullCalendar('clientEvents', id)[0].start.toDate();
                        //selfRef.splitTestFacilityEvent.existingSchedule.endDate =
                        selfRef.splitTestFacilityEvent.newSchedule.endDate = $("#calendar").fullCalendar('clientEvents', id)[0].end.toDate();
                        selfRef.splitTestFacilityEvent.existingSchedule.id = id;
                        break;
                    }
                    case "Schedule": {

                        let viewModel: any = {};
                        viewModel.testRequestId = entityId;
                        viewModel.testFacilityScheduleId = id;
                        viewModel.StatusName = 'Scheduled';
                        selfRef.testRequestService.postScheduleTest(viewModel).subscribe(res => {
                            if (res.result !== null && res.result) {
                                this.msgs.push({
                                    severity: 'success',
                                    detail: 'Time scheduled successfully.',
                                    summary: 'Success'
                                });
                            } else {
                                this.msgs.push({
                                    severity: 'error',
                                    detail: 'Test could not be scheduled. Please try again.If problem persists, contact Administrator.',
                                    summary: 'Error'
                                });
                            }
                        });

                        break;
                    }

                }
            },
            items: {
                /* "Schedule": {
                 name: "Schedule",
                 icon: "fa fa-clock",
                 disabled: function (key, opt) {

                 let id = $(this).attr("eventId");
                 let blockevent: any = $("#calendar").fullCalendar('clientEvents', id)[0];
                 return blockevent.disableScheduleOption;
                 // if (blockevent.status ==="Scheduled"){
                 //     return true;
                 // }
                 //this.titanService.getScheduledTestStatusId

                 }

                 },*/
                "AssignResources": {
                    name: "Assign Resources",
                    icon: "edit"
                }
                , "Split": {
                    name: "Split",
                    icon: "cut"
                }
                , "Details": {
                    name: "Details",
                    icon: "fa fa-beer"
                }
                , "Delete": {
                    name: "Delete",
                    icon: "delete"
                }

            }
        });
        // var combo = $("<select><option>A</option></select>").attr("id", "slot").attr("name", "slot");
        // $(".fc-left .fc-button-group").append(combo);
    }

    private initTimeBlockDetailsDialogData(blockevent: any, entityId: string, action: string, delta: number) {
        this.assignUserSchedule = <ITestFacilityUserScheduleDbViewModel>{};
        this.displayAssignDialog = true;
        this.isTimeBlockScheduled = blockevent.isTimeBlockScheduled;
        this.assignUserSchedule.minDate = blockevent.startDate;
        this.assignUserSchedule.maxDate = blockevent.endDate;
        this.assignUserSchedule.eventStatusId = blockevent.testFacilityEventStatusId;
        this.assignUserSchedule.defaultStartMinutesPastMidnight = blockevent.defaultStartMinutesPastMidnight;
        this.assignUserSchedule.defaultEndMinutesPastMidnight = blockevent.defaultEndMinutesPastMidnight;
        this.getAvailableTimeBlocksForOperators();
        this.selectedTestRequestId = entityId;
        this.selectedEventId = blockevent.id;
        this.selectedResourceId = blockevent.resourceId;
        this.assignBlockTestFacilityName = $("#calendar").fullCalendar('getResourceById', this.selectedResourceId).title;

        this.plannedStartDate = blockevent.startDate;
        this.plannedEndDate = blockevent.endDate;

        // Taking the simplistic approach now/
        //this.selectedBlockStartDate = $("#calendar").fullCalendar('clientEvents', id)[0].start.toDate();
        //this.selectedBlockEndDate = $("#calendar").fullCalendar('clientEvents', id)[0].end.toDate();

        this.selectedBlockStartDate = blockevent.start.toDate();
        this.selectedBlockEndDate = blockevent.end.toDate();


        this.assignResourceHeader = "Assign resources to " + this.assignBlockTestFacilityName + " from " +
            $.fullCalendar.formatRange(moment(this.selectedBlockStartDate), moment(this.selectedBlockEndDate), 'MMMM D YYYY');

        debugger;
        this.assignUserSchedule.startDate = blockevent.start.toDate();
        this.assignUserSchedule.endDate = blockevent.end.toDate();
        this.assignUserSchedule.testFacilityScheduleId = blockevent.id;
        this.assignUserSchedule.updateTestFacilitySchedule = false;
        this.assignUserSchedule.entityId = entityId;
        this.assignUserSchedule.entityIdentifierId = TitanConstants.TestRequestEntityIdentifierId;

        this.dueDate = blockevent.dueDate;
        this.testName = blockevent.title;
        this.displayEventDialogHeader = `${this.testName}`;

        let userScheduleCall = this.testRequestService.getUserScheduleById(this.selectedEventId, "testfacilityscheduleid");
        let facilityUsersCall = this.testFacilityRoleService.getByTestFacilityId(blockevent.resourceId);

        Observable.forkJoin([userScheduleCall, facilityUsersCall]).subscribe(results => {
            let userScheduleData = results[0];
            let facilityUserData = results[1];
            this.initUserSchedule(userScheduleData, delta);
            this.initFacilityUserList(facilityUserData);

        });
    }

    /**
     * This is callback for handling facility user list
     * @param res
     */
    private initFacilityUserList(res) {
        let items = res.map(x => {
            let r: any = {};
            r.label = x.name;
            r.value = x.titanUserId
            return r;
        });
        this.titanUsersListForFacility = items;
        this.titanUsersListForFacility.splice(0, 0, {
            label: 'Select user',
            value: ''
        });
    }


    private initUserSchedule(res, delta) {

        let items = res.result.map(x => {
            let r: {
                testFacilityId,
                userDisplayName,
                startDate,
                endDate,
                userId,
                testUserScheduleId,
                testfacilityName,
                action,
                minDate,
                maxDate
            } = x;
            r.startDate = moment(r.startDate).add(delta, 'minutes').toDate();
            r.endDate = moment(r.endDate).add(delta, 'minutes').toDate();
            //r.minDate = this.assignUserSchedule.minDate;
            r.action = delta === 0 ? 'pristine' : 'modify';
            return r;
        });
        this.testOperatorsForBlock = items;
    }


    //#region filters


    onTestRoleChange(event) {
        this.selectedTestRoles = (event.value);
    }

    onBuildLevelChange(event) {
        console.log('------updating selected build levels------------', event)
        this.selectedBuildLevels = (event.value);
        console.log(this.selectedBuildLevels);
    }

    onProjectCodeChange(event) {
        console.log('------event------------', event)
        this.selectedProjectCodes = (event.value);
        console.log(this.selectedProjectCodes);
        //   this.EquipmentSubType.calibrationform = (event);

    }

    onTestFacilityChange(event) {
        console.log('------event------------', event)
        this.selectedTestFacilities = (event.value);
        //   this.EquipmentSubType.calibrationform = (event);

    }

    onTestModeChange(event) {
        console.log('------event------------', event)
        this.selectedTestModes = (event.value);
        //   this.EquipmentSubType.calibrationform = (event);

    }

    onTestTypeChange(event) {
        console.log('------event------------', event)
        this.selectedTestTypes = (event.value);
        //   this.EquipmentSubType.calibrationform = (event);

    }

    onTestStatusChange(event) {
        console.log('------event------------', event)
        this.selectedTestStatuses = (event.value);
    }

    getTestUsers(event) {

        this.testfacilityservice.filterByUserNames(event.query).subscribe(filteredList => {
            this.filteredTestUserNames = filteredList.$values;
        });
    }

    getTestRoles() {
        //    userRoles
        this.testroleservice.getTestRoles().subscribe(response => {
            this.testRoles = new Array();
            if (response != null) {
                var resultMap = new Array();
                //resultMap.push({
                //    label: "Select Test Role",
                //    value: null
                //});
                for (let template of response.$values) {
                    var temp = {
                        label: template.name,
                        value: template.id
                    }
                    resultMap.push(temp);
                }
                this.testRoles = resultMap;
            }
            console.log(response);
        });
    }

    getTestFacilities() {
        this.testfacilityservice.getTestFacilities().subscribe(response => {
            this.testFacilities = [];
            if (response != null) {
                var resultMap = [];
                resultMap.push({label: 'Select a Facility', value: {label: '', value: ''}});
                for (let template of response) {
                    var temp = {
                        label: template.name,
                        value: template.id
                    }
                    resultMap.push(temp);
                }

                this.testFacilities = resultMap;
            }
            console.log("from ngoninit", response, this.testFacilities);
        });
    }

    getTestModes() {
        //    userRoles
        this.testmodeservice.getAllTestModes().subscribe(response => {
            this.testAllModes = new Array();
            if (response != null) {
                var resultMap = new Array();
                //resultMap.push({
                //    label: "Select Test Role",
                //    value: null
                //});
                for (let template of response.result) {
                    var temp = {
                        label: template.name,
                        value: template.id
                    }
                    resultMap.push(temp);
                }
                this.testAllModes = resultMap;
            }
            console.log(response);
        });
    }

    getTestTypes() {
        //    userRoles
        this.testtypeservice.getAllTestTypes().subscribe(response => {
            this.testTypes = new Array();
            if (response != null) {
                var resultMap = new Array();
                //resultMap.push({
                //    label: "Select Test Role",
                //    value: null
                //});
                for (let template of response.result) {
                    var temp = {
                        label: template.label,
                        value: template.value
                    }
                    resultMap.push(temp);
                }
                this.testTypes = resultMap;
            }
            console.log(response);
        });
    }

    getTestStatus() {
        //    userRoles
        this.teststatusservice.getAll().subscribe(response => {
            this.testStatus = [];

            if (response != null) {
                var resultMap = [];
                for (let template of response) {
                    var temp = {
                        label: template.name,
                        value: {id: template.id, calendarDisplayColor: template.calendarDisplayColor}
                    }
                    resultMap.push(temp);
                }
                this.testStatus = resultMap;
            }
            console.log(response);
        });
    }

    getProjectCodes() {
        //    userRoles
        this.projectservice.getProjectCodes().subscribe(response => {
            this.projectCodes = [];
            if (response != null) {
                var resultMap = [];
                //resultMap.push({
                //    label: "Select Project Code",
                //    value: null
                //});
                for (let template of response.$values) {
                    var temp = {
                        label: template.code,
                        value: template.id
                    }
                    resultMap.push(temp);
                }
                this.projectCodes = resultMap;
            }
            console.log(response);
        });
    }

    getBuildLevels() {
        //    userRoles
        this.buildlevelservice.getBuildLevels().subscribe(response => {
            this.buildLevels = new Array();
            if (response != null) {
                var resultMap = new Array();
                //resultMap.push({
                //    label: "Select Build Level",
                //    value: null
                //});
                for (let template of response.$values) {
                    var temp = {
                        label: template.name,
                        value: template.id
                    }
                    resultMap.push(temp);
                }
                this.buildLevels = resultMap;
            }
            console.log(response);
        });
    }

    updateSlotDuration(event) {
        let item: any = this.calendarDurationOptions.filter(x => x.durationItem.value === this.selectedDurationOption);
        console.log("updateSlotDuration", item, this.selectedDurationOption);
        this.slotDurations = item[0].slotOptions;
    }

    updateCalendarSettings(updateSourceList) {
        /*
         *  Either in CalendarMode or Timeline Mode
         *  Depending upon the selected duration and Mode - Pick up the view
         * */
        let schedulerOptions: any = {};
        let viewStardDate: any = $('#calendar').fullCalendar('getView').start.format();
        let selectedView = $('#calendar').fullCalendar('getView');
        let selectedViewName = selectedView.name;
        schedulerOptions.weekends = (this.selectedHideWeekendValue === 'true');
        schedulerOptions.firstDay = this.selectedFirstDayValue;
        schedulerOptions.minTime = this.startWorkHoursValue;
        schedulerOptions.maxTime = this.endWorkHoursValue;
        console.log(this.selectedSlotDurationValue, schedulerOptions);
        for (let item of this.calendarDurationOptions) {
            if (item.durationItem.value === this.selectedDurationOption) {
                this.slotDurations = item.slotOptions;
                break;
            }
        }
        let optionExist: boolean = false;
        for (let opt of this.slotDurations) {
            if (this.jsonEqual(opt.value, this.selectedSlotDurationValue)) {
                optionExist = true;
                this.selectedSlotDurationValue = opt.value;
                break;
            }
        }
        if (!optionExist) {
            this.selectedSlotDurationValue = this.slotDurations[0].value;
        }
        schedulerOptions.slotDuration = this.selectedSlotDurationValue;
        let updatedViewName = this.calendarDisplayMode + this.selectedDurationOption;
        $('#calendar').fullCalendar('option', schedulerOptions);
        if (selectedViewName !== updatedViewName) {
            $('#calendar').fullCalendar('changeView', updatedViewName);
        }
        selectedView = $('#calendar').fullCalendar('getView');
        this.calendarHeader = selectedView.title;


        /*
         *  When toggling, there is no need to refetch all event sources
         * */
        if (updateSourceList) {
            if (this.calendarDisplayMode === 'calendar') {
                $('#calendar').fullCalendar('removeEventSource', this.tfUserSource);
            } else {
                $('#calendar').fullCalendar('addEventSource', this.tfUserSource);
            }
        } else {
            $('#calendar').fullCalendar('refetchEvents');
        }
        this.displayCalendarSetting = false;
    }

    jsonEqual(a, b) {
        return JSON.stringify(a) === JSON.stringify(b);
    }

    filterCalendarEvents(event) {
        console.log("--inside filterCalendarEvents")
        // We may be able to do pure client side filtering. Need to investigate.
        //For now lets go to the server.
        let start = moment().utc();
        let end = moment.utc();
        let timezome = '';
        let testFacilityEventSource = $("#calendar").fullCalendar('getEventSourceById', 'testFacilityEventSource');
        $("#calendar").fullCalendar('removeEventSource', testFacilityEventSource)
        $("#calendar").fullCalendar('removeEventSource', {id: 'testFacilityEventSource'});
        var payload = {
            startdate: '12-1-2016',
            enddate: '12-12-2017',
            projectCodeIdList: this.selectedProjectCodes,
            buildLevelIdList: this.selectedBuildLevels,
            testStatusIdList: this.selectedTestStatuses,
            testTypeIdList: this.selectedTestTypes,
            testModeIdList: this.selectedTestModes,
            TestFacilityIdList: this.selectedTestFacilities


        };
        console.log(payload);
        //this.initSchedule();
        var source1 = {
            id: 'testFacilityEventSource',
            events: function (start, end, timezone, callback) {
                $.ajax({
                    url: titanApiUrl + 'TestFacility/Schedule',
                    headers: {userId: this.currentUser.id, tenantId: this.currentUser.defaultTenantId },
                    type: 'POST',
                    data: payload,
                    error: function () {
                        alert('there was an error while fetching events!');
                    },
                    success: function (result) {
                        var events = [];
                        $.each(result.calendarEvents.$values, function (index, item) {
                            events.push(item);
                            console.log('------item------------', item)
                        });
                        console.log('------Event Source callback------------', events)
                        callback(events);
                    }
                });
            }
        }
        console.log(source1);
        $("#calendar").fullCalendar('addEventSource', source1);


    }

    //#endregion filters

    //#region Assign Resources Region

    saveAssignResourcesChanges(formRef) {
        // Validate
        //console.log("FORMREF", formRef);
        //this.assignUserSchedule.entityId = this.selectedTestRequestId;
        //this.assignUserSchedule.entityIdentifierId = TitanConstants.TestRequestEntityIdentifierId;
        // since we are storing the deleted items in a separate array, join them before sending.
        debugger;
        this.assignUserSchedule.schedules = this.testOperatorsForBlock.concat(this.deletedTestOperatorsForBlock);
        if (this.currentTenant.defaultTestReservationIntervalTypeId ===1){
            this.assignUserSchedule.defaultEndMinutesPastMidnight = 1439;
            this.assignUserSchedule.defaultStartMinutesPastMidnight = 0;
            for(let i of this.assignUserSchedule.schedules){
                 i.defaultEndMinutesPastMidnight = 1439;
                 i.defaultStartMinutesPastMidnight = 0;

            }
        }
        //postdata.entityId ='A';
        //console.log('Modified Users', this.testOperatorsForBlock.filter(x => x.action !== 'pristine'));
        this.testRequestService.postAssignUser(this.assignUserSchedule).subscribe(res => {
            // console.log("Response after **" res);
            if (res.result !== null && res.result) {
                this.msgs.push({severity: 'success', detail: 'Schedules updated successfully.', summary: 'Success'});
                this.displayAssignDialog = false;
                this.testOperatorsForBlock = [];
                $("#calendar").fullCalendar('refetchEvents')
            } else {
                this.msgs.push({
                    severity: 'error',
                    detail: 'Please check inputs and try again. If problem persists, contact Administrator.',
                    summary: 'Error'
                });
            }

        });
    }

    filterOperatorUserNames(event) {
        this.testfacilityservice.filterByUserNames(event.query).subscribe(filteredList => {
            this.filteredOperatorUserNames = filteredList.$values;
        });
    }

    onFacilityScheduleCalendarDateSelection(event) {
        if (this.selectedTitanUserScheduleStartDate > this.selectedTitanUserScheduleEndDate) {
            this.selectedTitanUserScheduleEndDate = this.blankDate;
        }
        console.log("--onFacilityScheduleCalendarDateBlur--", event);
    }

    /**
     * This function is used to check the start and end dates for all users and test facility.
     * Blanks the dates that are not in range.
     * @param event
     * @param startDate
     * @param endDate
     */
    validateSchedule(event, startDate, endDate) {
        if (startDate > endDate) {
            this.assignUserSchedule.endDate = this.blankDate;
        }
        //Now ensure that the operators schedule is between startdate and enddate
        for (let item of this.testOperatorsForBlock) {
            if (item.startDate < startDate) {
                item.startDate = this.blankDate;
            }
            if (item.endDate > endDate || item.endDate < item.startDate) {
                item.endDate = this.blankDate;
            }
        }
    }

    validateScheduleDates(event, startDate, endDate) {
        console.log("start--", startDate);
        console.log("end--", endDate)
        if (startDate > endDate) {
            endDate = this.blankDate;
        }
        console.log("--onFacilityScheduleCalendarDateBlur--", event);
    }

    onSubmitOperatorSchedule(formValues) {
        // let {displayName, firstName, titanUserId} = this.filteredselectedOperatorUserNames;

        let item = {
            id: "",
            titanUserId: this.filteredselectedOperatorUserNames.id,
            //scheduleEventTypeId
            testFacilityId: this.selectedFacilityForOperator,
            //shiftId,
            startDate: this.selectedTitanUserScheduleStartDate,
            endDate: this.selectedTitanUserScheduleEndDate,
            entityId: this.assignUserSchedule.entityId,
            testFacility: this.selectedFacilityForOperator,

        };
        this.testRequestService.postAssignUser(item).subscribe(res => {
            console.log("Here is the response from AssignUser", res);
        })
        this.testOperators.push(item);
        var selectedEvent = $("#calendar").fullCalendar('clientEvents', this.selectedTestRequestId)


    }

    addEmptyRowOperatorBlock() {

        let item = <ITitanUserScheduleViewModel>{};
        item.startDate = this.selectedBlockStartDate;
        item.endDate = this.selectedBlockEndDate;
        item.action = "new";
        item.defaultStartMinutesPastMidnight = this.scheduleStartTime;
        item.defaultEndMinutesPastMidnight = this.scheduleEndTime;
        item.entityId = this.selectedTestRequestId;
        item.id = '';
        item.scheduleEventTypeId = TitanConstants.TestRequestScheduleEventTypeId;
        item.testFacilityId = this.selectedResourceId;
        item.shiftId = TitanConstants.DefaultShiftId;
        item.testFacilityScheduleId = this.selectedEventId;
        item.titanUserId = '';
        //item.userDisplayName ='';
        this.testOperatorsForBlock.push(item);
        //this.testOperatorsForBlock.splice(0, 0, item);


    }

    onSubmitTestFacilitySchedule(values) {
        let postdata = {
            startDate: this.selectedTestScheduleStartDate,
            endDate: this.selectedTestScheduleEndDate,
            entityId: this.selectedTestRequestId,
            testFacilityScheduleId: this.selectedEventId
        };

        this.testfacilityservice.postReserve(postdata).subscribe(res => {
            let x = res.result;

            this.scheduledTestFacilities.push({
                testFacilityScheduleId: x.id,
                testFacilityId: x.testFacilityId,
                startDate: x.startDate,
                endDate: x.endDate,
                facilityName: "Name"
            });
            // Add an event to the calendar
            var newEvent: any = {};
            newEvent.id = x.id;
            newEvent.start = x.startDate;
            newEvent.end = x.endDate;
            newEvent.resourceId = x.testFacilityId;
            newEvent.url = '';
            newEvent.title = "Hello AJay";
            $("#calendar").fullCalendar('renderEvent', newEvent)
        });

        var selectedEvent = $("#calendar").fullCalendar('clientEvents', this.selectedTestRequestId)

        // Clearing the test facility Name
        this.selectedTestFacilityForSchedule = null;

        //  We can add an event here using the renderEvent or renderEvents  .fullCalendar( 'renderEvent', event [, stick ] )
    }

    onSubmitMoveTestFacilitySchedule(formValues) {
        this.testfacilityservice.postMoveTest(this.moveTestFacilityEvent).subscribe(res => {
            console.log("This is the move boy", res);
            this.displayMoveDialog = false;
        });
    }

    generateTestFacilitySelectItems(items, retDistict) {

        let selectedItems: SelectItem[] = [];
        let unique = {};
        items.forEach(function (x) {
            var key = x.name;
            if (!unique[key]) {
                selectedItems.push({label: x.name, value: x.id});
                unique[key] = true;
            }
        });

        console.log("after generateTestFacilitySelectItems", selectedItems);
        return selectedItems;
    }

    /**
     * This method filters the time slots availbel for the operators to pick
     * based on the default daily start and end time of test facility
     */
    getAvailableTimeBlocksForOperators() {
        this.filteredTimeOptions = this.timeOptions
            .filter(x => x.value >= this.assignUserSchedule.defaultStartMinutesPastMidnight
            && x.value <= this.assignUserSchedule.defaultEndMinutesPastMidnight);
        console.log(this.filteredTimeOptions);
        let emptyOption: SelectItem = {
            label: 'Select time',
            value: ''
        };

        this.filteredTimeOptions.splice(0, 0, emptyOption);
    }

    testFacilityTimeChanged() {
        if (this.assignUserSchedule.defaultStartMinutesPastMidnight > this.assignUserSchedule.defaultEndMinutesPastMidnight) {
            this.assignUserSchedule.defaultEndMinutesPastMidnight = null;
        }
        debugger;
        this.getAvailableTimeBlocksForOperators();
    }

    testOperatorsForBlockChange(rowData, index) {
        console.log("testOperatorsForBlockChange", rowData, index);

        // For newly added items, we dont have to change the status from new
        if (this.testOperatorsForBlock[index].action !== 'new') {
            this.testOperatorsForBlock[index].action = 'modify';
        }
        if (rowData.startDate > rowData.endDate) {
            rowData.endDate = this.blankDate;
        }
        if (rowData.defaultStartMinutesPastMidnight > rowData.defaultEndMinutesPastMidnight) {
            rowData.defaultEndMinutesPastMidnight = '';
        }
        this.testOperatorsForBlock[index].defaultStartMinutesPastMidnight = rowData.defaultStartMinutesPastMidnight;
        this.testOperatorsForBlock[index].defaultEndMinutesPastMidnight = rowData.defaultEndMinutesPastMidnight;

        //this.validateScheduleDates('', rowData.startDate,rowData.endDate);
        console.log(rowData.startDate, rowData.endDate);

    }

    removeOperator(index, operatorBlock) {
        if (operatorBlock.titanUserScheduleId !== '') {
            //var index = this.testOperatorsForBlock.findIndex(x=> x.titanUserScheduleId === row.titanUserScheduleId);
            this.testOperatorsForBlock[index].action = 'delete';
            //operatorBlock.status='delete';
            this.deletedTestOperatorsForBlock.push(operatorBlock);
        }
        ;
        this.testOperatorsForBlock.splice(index, 1);
        //
        //  console.log("row1", row)
        //  let formBody: any = {"titanUserScheduleId": row.titanUserScheduleId};
        //
        //  console.log("----formBody", formBody);
        //  this.testRequestService.postDeleteUserScheduleInstance(formBody).subscribe(res => {
        //      console.log("--succes of postDeleteUserScheduleInstanceUrl --", res);
        //  });
    }

    removeFacility(row) {
        let freeViewModel = {testFacilityScheduleId: row.testFacilityScheduleId, entityId: this.selectedTestRequestId};
        this.testfacilityservice.postFree(freeViewModel).subscribe(res => {
            if (res.result.isSuccess) {
                this.scheduledTestFacilities = this.scheduledTestFacilities.filter(function (el) {
                    return el.testFacilityScheduleId !== row.testFacilityScheduleId;
                });
                $("#calendar").fullCalendar('removeEvents', row.testFacilityScheduleId)
            }
        });
        // Now make an Ajax call to remove the row

    }


    //#endregion Assign Resources Region

    //#region Move
    cancelMove(event) {
        console.log("--invoking revert function")
        this.moveRevertFunction();
        this.moveRevertFunction = null;
        this.displayMoveDialog = false;
    }

    //#endregion move

    //#region Split
    saveSplitEventChanges(uiEvent) {
        this.displaySplitDialog = false;
        debugger;
        this.testfacilityservice.postSplitTestFacilityEvent(this.splitTestFacilityEvent).subscribe(res => {
            console.log("Splitting event completed", res);
            this.splitTestFacilityEvent = <ITestFacilitySplitEventViewModel>{};
            this.splitTestFacilityEvent.existingSchedule = <ITitanUserScheduleViewModel>{};
            this.splitTestFacilityEvent.newSchedule = <ITitanUserScheduleViewModel>{};

            $('#calendar').fullCalendar('refetchEvents');

        });
    }

    //#endregion split
    //region MISC
    initializeTimeOptions(selfRef) {

    }

    //TODO: NEED TO OPTIMIZE
    toggleTimelineView(displayModeName) {
        this.calendarDisplayMode = displayModeName;

        this.updateCalendarSettings(true);
    }

    initTimeOptions() {
        if (this.timeOptions.length == 0) {
            this.timeOptions.push({value: '', label: "Select"});
            this.timeOptions.push({value: 0, label: "00:00 PM"});
            this.timeOptions.push({value: 30, label: "12:30 AM"});
            this.timeOptions.push({value: 60, label: "1:00 AM"});
            this.timeOptions.push({value: 90, label: "1:30 AM"});
            this.timeOptions.push({value: 120, label: "2:00 AM"});
            this.timeOptions.push({value: 150, label: "2:30 AM"});
            this.timeOptions.push({value: 180, label: "3:00 AM"});
            this.timeOptions.push({value: 210, label: "3:30 AM"});
            this.timeOptions.push({value: 240, label: "4:00 AM"});
            this.timeOptions.push({value: 270, label: "4:30 AM"});
            this.timeOptions.push({value: 300, label: "5:00 AM"});
            this.timeOptions.push({value: 330, label: "5:30 AM"});
            this.timeOptions.push({value: 360, label: "6:00 AM"});
            this.timeOptions.push({value: 390, label: "6:30 AM"});
            this.timeOptions.push({value: 420, label: "7:00 AM"});
            this.timeOptions.push({value: 450, label: "7:30 AM"});
            this.timeOptions.push({value: 480, label: "8:00 AM"});
            this.timeOptions.push({value: 510, label: "8:30 AM"});
            this.timeOptions.push({value: 540, label: "9:00 AM"});
            this.timeOptions.push({value: 570, label: "9:30 AM"});
            this.timeOptions.push({value: 600, label: "10:00 AM"});
            this.timeOptions.push({value: 630, label: "10:30 AM"});
            this.timeOptions.push({value: 660, label: "11:00 AM"});
            this.timeOptions.push({value: 690, label: "11:30 AM"});
            this.timeOptions.push({value: 720, label: "12:00 PM"});
            this.timeOptions.push({value: 750, label: "12:30 PM"});
            this.timeOptions.push({value: 780, label: "1:00 PM"});
            this.timeOptions.push({value: 810, label: "1:30 PM"});
            this.timeOptions.push({value: 840, label: "2:00 PM"});
            this.timeOptions.push({value: 870, label: "2:30 PM"});
            this.timeOptions.push({value: 900, label: "3:00 PM"});
            this.timeOptions.push({value: 930, label: "3:30 PM"});
            this.timeOptions.push({value: 960, label: "4:00 PM"});
            this.timeOptions.push({value: 990, label: "4:30 PM"});
            this.timeOptions.push({value: 1020, label: "5:00 PM"});
            this.timeOptions.push({value: 1050, label: "5:30 PM"});
            this.timeOptions.push({value: 1080, label: "6:00 PM"});
            this.timeOptions.push({value: 1110, label: "6:30 PM"});
            this.timeOptions.push({value: 1140, label: "7:00 PM"});
            this.timeOptions.push({value: 1170, label: "7:30 PM"});
            this.timeOptions.push({value: 1200, label: "8:00 PM"});
            this.timeOptions.push({value: 1230, label: "8:30 PM"});
            this.timeOptions.push({value: 1260, label: "9:00 PM"});
            this.timeOptions.push({value: 1290, label: "9:30 PM"});
            this.timeOptions.push({value: 1320, label: "10:00 PM"});
            this.timeOptions.push({value: 1350, label: "10:30 PM"});
            this.timeOptions.push({value: 1380, label: "11:00 PM"});
            this.timeOptions.push({value: 1410, label: "11:30 PM"});
        }
    }

    //endregion
    moveCalendar(direction) {
        if (direction === 'forward') {
            $("#calendar").fullCalendar('next')
        } else {
            $("#calendar").fullCalendar('prev')
        }
    }

    onBeforeDialogHide(event) {
        console.log("Just before the dialog is closing");
        event.preventDefault();
        return false;

    }

    closeAssignResourceDialog() {
        this.displayAssignDialog = false;
        this.testOperatorsForBlock = [];
        this.assignUserSchedule = <ITestFacilityUserScheduleDbViewModel>{};
        if (this.moveRevertFunction != null) {
            this.moveRevertFunction();
            this.moveRevertFunction = null;
        }
        //this.moveRevertFunction();
    }

    validateOperatorDates(item) {

    }
}

//region Deleted Code
// //selfRef.displayScheduleDialog = true;

//endregion