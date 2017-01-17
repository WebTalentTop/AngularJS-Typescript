import {titanApiUrl} from '../../shared/services/apiurlconst/titanapiurl';
import {TestFacilityService} from '../../shared/services/Containers/TestFacilityService/testFacility.service';
import { BuildLevelService } from '../../shared/services/Containers/BuildLevelService/buildlevel.service';
import {TestStatusService} from '../../shared/services/teststatus.service';
import {TestRoleService} from '../../shared/services/testRole.service';
import { ProjectService } from '../../shared/services/Containers/ProjectService/project.service';
import {TestModeService} from '../../shared/services/testMode.service';
import {TestTypeService} from '../../shared/services/testType.service';
import {TitanUserService} from '../../shared/services/titanuser.service';
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
declare var $: JQueryStatic;
declare var fullcalendardef: FullCalendar.Calendar;


@Component({
    selector: 'calendar',
    templateUrl: 'app/body/calendar/titancalendar.component.html'
})

export class TitanCalendarComponent implements AfterViewInit, OnInit {
    // region fields
    defaultCalendarSetting: ICalendarSettings;
    currentUser: IUserProfile;
    assignUserSchedule: ITestFacilityUserScheduleDbViewModel;
    moveTestFacilityEvent: ITestFacilityMoveEventDbViewModel;
    splitTestFacilityEvent: ITestFacilitySplitEventViewModel;

    displaySplitDialog: boolean = false;
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
                private titanUserProfileService: TitanUserProfileService) {
        this.titanUserProfileService.getCurrentUserProfile()
            .subscribe(res => {
                this.currentUser = res.result;
            })
    }

// endregion constructor
    initCalendarOptions() {
        this.daysofweek = [];
        this.daysofweek.push({label: 'Sunday', value: {id: 1, name: '0', code: 'SUN'}});
        this.daysofweek.push({label: 'Monday', value: {id: 2, name: '1', code: 'NY'}});
        this.daysofweek.push({label: 'Tuesday', value: {id: 3, name: '2', code: 'NY'}});
        this.daysofweek.push({label: 'Wednesday', value: {id: 4, name: '3', code: 'NY'}});
        this.daysofweek.push({label: 'Thursday', value: {id: 5, name: '4', code: 'NY'}});
        this.daysofweek.push({label: 'Friday', value: {id: 6, name: '5', code: 'NY'}});
        this.daysofweek.push({label: 'Saturday', value: {id: 7, name: '6', code: 'NY'}});

        this.slotDurations = [];
        //this.slotDurations.push({ label: 'Month', value: { id: 1, name: '30.00.', code: 'SUN' } });
        this.slotDurations.push({label: 'Week', value: {weeks: 1}});
        this.slotDurations.push({label: 'Day', value: {days: 1}});
        this.slotDurations.push({label: 'Shift', value: {hours: 8}});
        //this.slotDurations.push({label: 'Hour', value: {hours: 1}});
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
        let DEFAULTDATE = todayDate.clone().add(-7, 'day').format('YYYY-MM-DD');

        var tt = this.tooltip;
        let scheduleConfig: any = {
            timezone: this.defaultCalendarSetting.defaultTimeZone,
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
                left: 'settings,prev,next today',
                center: 'title',
                right: 'month timeline3weeks'
            },
            customButtons: {
                settings: {
                    text: 'room',
                    click: function () {
                        self.displayCalendarSetting = true;

                    },
                    themeIcon: 'refresh'
                }
            },
            defaultDate: DEFAULTDATE,
            defaultView: 'timeline3weeks',
            buttonText: {
                today: 'today',
                month: 'month',
                week: 'week',
                day: 'day',
                list: 'list',
                timeline3weeks: 'Schedule'
            },
            views: {
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

            eventSources: [{
                id: 'testFacilityEventSource',
                events: function (start, end, timezone, callback) {
                    $.ajax({
                        url: titanApiUrl + 'TestFacility/Schedule',
                        type: 'POST',
                        data: {
                            startdate: start.utc().format(),
                            enddate: end.utc().format(),
                            projectCodeIdList: [],
                            timezone: tz

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
            ,{
                    id: 'testFacilityUserSource',
                    events: function (start, end, timezone, callback) {
                        $.ajax({
                            url: titanApiUrl + 'TitanUser/Schedule',
                            type: 'POST',
                            data: {
                                startdate: start.utc().format(),
                                enddate: end.utc().format(),
                                projectCodeIdList: [],
                                timezone: tz

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
                }],
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
            eventAfterAllRender: function(){
                    $("span.fc-time").hide();
            },
            eventClick: function (calEvent, jsEvent, view) {
                //self.displayEventDialog = true;
                console.log("---click is blocked--");
                return false;
            },
            eventDrop: function (event, delta, revertFunc) {
                self.selectedEventId = event.id;//testFacilityScheduleId
                self.moveToTestFacilityName = $("#calendar").fullCalendar('getResourceById', event.resourceId).title;
                self.moveFullCalendarEventRef = event;
                self.moveToTestFacilityHeader = "Move to " + self.moveToTestFacilityName;
                self.moveTestScheduleStartDate = event.start.toDate();
                self.moveTestScheduleEndDate = event.end.toDate();


                self.displayMoveDialog = true;
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
                self.populateUpdateTestFacilityAndUserSchedule(self, event.entityId, event.id, 'resize');
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
        this.getTestFacilities();
        this.getTestModes();
        this.getTestTypes();
        this.getBuildLevels();
        this.getTestStatus();
        this.getProjectCodes();
        this.getTestRoles();
        this.initSchedule();
        this.initCalendarOptions();

        this.moveTestFacilityEvent = <ITestFacilityMoveEventDbViewModel>{};
        this.splitTestFacilityEvent = <ITestFacilitySplitEventViewModel>{}
        this.splitTestFacilityEvent.existingSchedule = <ITitanUserScheduleViewModel>{};
        this.splitTestFacilityEvent.newSchedule = <ITitanUserScheduleViewModel>{};

        //this.splitTestFacilityEvent.existingSchedule.startDate = new Date();
    }

    populateUpdateTestFacilityAndUserSchedule(selfRef, entityId, eventId, action) {
        selfRef.assignUserSchedule = <ITestFacilityUserScheduleDbViewModel>{};
        selfRef.assignUserSchedule.startDate = $("#calendar").fullCalendar('clientEvents', eventId)[0].start.toDate();
        selfRef.assignUserSchedule.endDate = $("#calendar").fullCalendar('clientEvents', eventId)[0].end.toDate();
        selfRef.assignUserSchedule.testFacilityScheduleId = eventId;
        selfRef.assignUserSchedule.updateTestFacilitySchedule = false;
        selfRef.assignUserSchedule.entityId = entityId;
        if (action === 'resize') {
            selfRef.assignResourceHeader = "Event resized - Assign resources " + selfRef.assignBlockTestFacilityName + " from " +
                $.fullCalendar.formatRange(moment(selfRef.assignUserSchedule.startDate), moment(selfRef.assignUserSchedule.endDate), 'MMMM D YYYY');
        } else {
            selfRef.assignResourceHeader = "Assign resources" + selfRef.assignBlockTestFacilityName + " from " +
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
                var m = "clicked: " + key;
                let entityId = $(this).attr("entityId");
                let id = $(this).attr("eventId");
                 switch (key) {
                    case "AssignResources": {

                        // selfRef.displayEventDialog = true;
                        selfRef.displayAssignDialog = true;

                        selfRef.selectedTestRequestId = entityId;
                        selfRef.selectedEventId = id;
                        selfRef.selectedResourceId = $(this).attr("resourceId");
                        selfRef.assignBlockTestFacilityName = $("#calendar").fullCalendar('getResourceById', selfRef.selectedResourceId).title;

                        selfRef.plannedStartDate = $(this).attr("plannedStart");
                        selfRef.plannedEndDate = $(this).attr("plannedEnd");

                        // Taking the simplistic approach now/
                        selfRef.selectedBlockStartDate = $("#calendar").fullCalendar('clientEvents', id)[0].start.toDate();
                        selfRef.selectedBlockEndDate = $("#calendar").fullCalendar('clientEvents', id)[0].end.toDate();
                        selfRef.assignResourceHeader = "Assign resources to " + selfRef.assignBlockTestFacilityName + " from " +
                            $.fullCalendar.formatRange(moment(selfRef.selectedBlockStartDate), moment(selfRef.selectedBlockEndDate), 'MMMM D YYYY');

                        selfRef.assignUserSchedule = <ITestFacilityUserScheduleDbViewModel>{};
                        selfRef.assignUserSchedule.startDate = $("#calendar").fullCalendar('clientEvents', id)[0].start.toDate();
                        selfRef.assignUserSchedule.endDate = $("#calendar").fullCalendar('clientEvents', id)[0].end.toDate();
                        selfRef.assignUserSchedule.testFacilityScheduleId = id;
                        selfRef.assignUserSchedule.updateTestFacilitySchedule = false;
                        selfRef.assignUserSchedule.entityId = entityId;
                        selfRef.assignUserSchedule.entityIdentifierId = TitanConstants.TestRequestEntityIdentifierId;

                        selfRef.dueDate = $(this).attr("dueDate");
                        selfRef.testName = $(this).attr("eventName");
                        selfRef.displayEventDialogHeader = `${selfRef.testName}`;
                        selfRef.testRequestService.getUserScheduleById(selfRef.selectedEventId, "testfacilityscheduleid").subscribe(res => {
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


                }
            },
            items: {
                "Schedule" :{name:"Schedule", icon:"fa fa-clock"},
                "AssignResources": {name: "Assign Resources", icon: "edit"}
                , "Split": {name: "Split", icon: "cut"}
                , "Details": {name: "Details", icon: "fa fa-beer"}
                , "Delete": {name: "Delete", icon: "delete"}
                //,"sep1": "---------"
                // ,"quit": {
                //     name: "Quit", icon: function () {
                //         return 'context-menu-icon context-menu-icon-quit';
                //     }
                // }
            }
        });
        // var combo = $("<select><option>A</option></select>").attr("id", "slot").attr("name", "slot");
        // $(".fc-left .fc-button-group").append(combo);
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
        this.teststatusservice.getTestStatus().subscribe(response => {
            this.testStatus = new Array();

            if (response != null) {
                var resultMap = new Array();
                //resultMap.push({
                //    label: "Select Test Status",
                //    value: null
                //});
                for (let template of response) {
                    var temp = {
                        label: template.name,
                        value: template.id
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
            this.projectCodes = new Array();
            if (response != null) {
                var resultMap = new Array();
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


    updateCalendarSettings(event) {
        let schedulerOptions: any = {};
        let viewStardDate: any = $('#calendar').fullCalendar('getView').start.format();
        schedulerOptions.weekends = (this.selectedHideWeekendValue === 'true');
        schedulerOptions.firstDay = this.selectedFirstDayValue;
        schedulerOptions.minTime = this.startWorkHoursValue;
        schedulerOptions.maxTime = this.endWorkHoursValue;
        schedulerOptions.slotDuration = this.selectedSlotDurationValue;
        console.log(this.selectedSlotDurationValue, schedulerOptions);
        $('#calendar').fullCalendar('option', schedulerOptions);
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
        console.log("-- Clearing the events");

        debugger;
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

    saveAssignResourcesChanges() {
        // Validate

        //this.assignUserSchedule.entityId = this.selectedTestRequestId;
        //this.assignUserSchedule.entityIdentifierId = TitanConstants.TestRequestEntityIdentifierId;
        // since we are storing the deleted items in a separate array, join them before sending.
        this.assignUserSchedule.schedules = this.testOperatorsForBlock.concat(this.deletedTestOperatorsForBlock);

        //postdata.entityId ='A';
        console.log('Modified Users', this.testOperatorsForBlock.filter(x => x.action !== 'pristine'));
        this.testRequestService.postAssignUser(this.assignUserSchedule).subscribe(res => {
            // console.log("Response after **" res);
            if (res.result !== null && res.result) {
                this.msgs.push({severity: 'success', detail: 'Schedules updated successfully.', summary: 'Success'});
                this.displayAssignDialog = false;
            } else {
                this.msgs.push({
                    severity: 'error',
                    detail: 'Please check inputs and try again. If problem persists, contact Administrator.',
                    summary: 'Error'
                });
            }

        });

        console.log("---Operators List", this.testOperatorsForBlock);
    }

    filterOperatorUserNames(event) {
        this.testfacilityservice.filterByUserNames(event.query).subscribe(filteredList => {
            this.filteredOperatorUserNames = filteredList.$values;
        });
    }

    onFacilityScheduleCalendarDateSelection(event) {
        console.log("start--", this.selectedTitanUserScheduleStartDate);
        console.log("end--", this.selectedTitanUserScheduleEndDate)
        if (this.selectedTitanUserScheduleStartDate > this.selectedTitanUserScheduleEndDate) {
            this.selectedTitanUserScheduleEndDate = this.blankDate;
        }
        console.log("--onFacilityScheduleCalendarDateBlur--", event);
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
            testFacility: this.selectedFacilityForOperator
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

        item.entityId = this.selectedTestRequestId;
        item.id = '';
        item.scheduleEventTypeId = TitanConstants.TestRequestScheduleEventTypeId;
        item.testFacilityId = this.selectedResourceId;
        item.shiftId = TitanConstants.DefaultShiftId;
        item.testFacilityScheduleId = this.selectedEventId;
        this.testOperatorsForBlock.splice(0, 0, item);

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


    testOperatorsForBlockChange(rowData, index) {
        console.log("testOperatorsForBlockChange", rowData, index);
        // For newly added items, we dont have to change the status from new
        if (this.testOperatorsForBlock[index].action !== 'new') {
            this.testOperatorsForBlock[index].action = 'modify';
        }
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
        this.displayMoveDialog = false;
    }

    //#endregion move

    //#region Split
    saveSplitEventChanges(uiEvent) {
        debugger;
        console.log("Hello", "saveSplitEventChanges")
        this.displaySplitDialog = false;
        this.testfacilityservice.postSplitTestFacilityEvent(this.splitTestFacilityEvent).subscribe(res=>{
            console.log("Hello", res)

        });
    }

    //#endregion split
}
