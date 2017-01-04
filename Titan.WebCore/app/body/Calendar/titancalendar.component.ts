import {titanApiUrl} from '../../shared/services/apiurlconst/titanapiurl';
import {TestFacilityService} from '../../shared/services/testFacility.service';
import {BuildLevelService} from '../../shared/services/buildlevel.service';
import {TestStatusService} from '../../shared/services/teststatus.service';
import {TestRoleService} from '../../shared/services/testRole.service';
import {ProjectService} from '../../shared/services/project.service';
import {TestModeService} from '../../shared/services/testMode.service';
import {TestTypeService} from '../../shared/services/testType.service';
import {TitanUserService} from '../../shared/services/titanuser.service';
import {TestRequestService} from '../../shared/services/testrequest.service';
import * as moment from 'moment/moment';
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
declare var $: JQueryStatic;
declare var fullcalendardef: FullCalendar.Calendar;


@Component({
    selector: 'calendar',
    templateUrl: 'app/body/calendar/titancalendar.component.html'
})
export class TitanCalendarComponent implements AfterViewInit, OnInit {
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

    // Calendar Settings
    selectedHideWeekendValue: string = 'true';
    daysofweek: SelectItem[];
    slotDurations: SelectItem[];
    selectedFirstDayValue: number = 0;
    startWorkHoursValue: string = "05:00";
    endWorkHoursValue: string = "19:00";
    selectedSlotDurationValue: string = "24:00:00";
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
    moveToTestFacilityHeader: string ='';
    moveTestFacilityOperatorOption: number =0;
    moveFullCalendarEventRef:any;
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
    assignResourceHeader: string ='';
    assignBlockTestFacilityName : string ='';
    displayAssignDialog: boolean =false;
    selectedBlockStartDate: Date;
    selectedBlockEndDate:Date;
    testOperatorsForBlock:any[] =[];
    testName: string = '';
    plannedStartDate: string = '';
    plannedEndDate: string = '';
    dueDate: string = '';
    testDuration: string = '';
    titanUsersListForTenant: SelectItem[] =[];

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



    constructor(private route: ActivatedRoute,
                private router: Router,
                private testfacilityservice: TestFacilityService,
                private buildlevelservice: BuildLevelService,
                private teststatusservice: TestStatusService,
                private testroleservice: TestRoleService,
                private projectservice: ProjectService,
                private testmodeservice: TestModeService,
                private testtypeservice: TestTypeService,
                private testRequestService: TestRequestService,) {
    }

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
        this.slotDurations.push({label: 'Week', value: "168:00:00"});
        this.slotDurations.push({label: 'Day', value: "24:00:00"});
        this.slotDurations.push({label: 'Shift', value: "08:00"});
        this.slotDurations.push({label: 'Hour', value: "01:00"});
        this.slotDurations.push({label: '30 minutes', value: {id: 4, name: '00:00:30'}});
        this.slotDurations.push({label: '15 minutes', value: {id: 5, name: '00:00:15'}});


    }

    initSchedule() {
        var self = this;
        let todayDate = moment().startOf('day');
        let YESTERDAY = todayDate.clone().subtract(1, 'day').format('YYYY-MM-DD');
        let TODAY = todayDate.format('YYYY-MM-DD');
        let TOMORROW = todayDate.clone().add(1, 'day').format('YYYY-MM-DD');
        let DEFAULTDATE = todayDate.clone().add(-7, 'day').format('YYYY-MM-DD');
        var tt = this.tooltip;
        let scheduleConfig: any = {
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
                right: 'timelineMonth timelineFifteenDays timelineWeek timelineDay month basicWeek basicDay listMonth'
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
            defaultView: 'timelineMonth',
            views: {
                timelineFifteenDays: {
                    type: 'timeline',
                    duration: {days: 15},
                    minTime: this.startWorkHoursValue,
                    maxTime: this.endWorkHoursValue,
                    slotDuration: this.selectedSlotDurationValue,
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
                            projectCodeIdList: []

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
                element.attr("event-id", event.id);
                element.attr("testrequest-id", event.testRequestId);

                element.attr("resource-id", event.resourceId);
                element.attr("testName", event.testName);
                element.attr("plannedStart", moment(event.plannedStartDate).format("llll"));
                element.attr("plannedEnd", moment(event.plannedEndDate).format("llll"));
                element.attr("dueDate", moment(event.dueDate).format("llll"));
                element.addClass('showContextMenu');

                //element.qtip({
                //    content: event.description
                //});
            },
            eventClick: function (calEvent, jsEvent, view) {
                self.displayEventDialog = true;
                console.log("---click is blocked--");
                return false;
            },
            eventDrop: function (event, delta, revertFunc) {

                console.log("resource",event.resourceId);
                console.log("event",event);
                self.selectedEventId = event.id;//testFacilityScheduleId
                self.moveToTestFacilityName = $("#calendar").fullCalendar( 'getResourceById', event.resourceId ).title;
                self.moveFullCalendarEventRef = event;
                self.moveToTestFacilityHeader ="Move to " + self.moveToTestFacilityName;
                self.moveTestScheduleStartDate = event.start.toDate();
                self.moveTestScheduleEndDate = event.end.toDate();
                self.displayMoveDialog = true;
                self.moveRevertFunction = revertFunc;

                // if (!confirm("Are you sure about this change?")) {
                //     revertFunc();
                // }
                console.log("--drop completed--");
            },
            eventResize: function(event, delta, revertFunc) {

                alert(event.title + " end is now " + event.end.format());

                if (!confirm("is this okay?")) {
                    revertFunc();
                }

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
    }

    ngAfterViewInit() {
        //here you will have code where component content is ready.
        var selfRef = this;

        $.contextMenu({
            selector: '.showContextMenu',
            callback: function (key, options) {
                var m = "clicked: " + key;
                let testRequestId = $(this).attr("testrequest-id");
                let id = $(this).attr("event-id");
                console.log("testreqid", testRequestId)
                switch (key) {
                    case "AssignResources": {

                       // selfRef.displayEventDialog = true;
                        selfRef.displayAssignDialog = true;

                        selfRef.selectedTestRequestId = testRequestId;
                        selfRef.selectedEventId = id;
                        selfRef.selectedResourceId = $(this).attr("resource-id");
                        selfRef.assignBlockTestFacilityName = $("#calendar").fullCalendar( 'getResourceById', selfRef.selectedResourceId ).title;
                        selfRef.assignResourceHeader = "Assign resources to " + selfRef.assignBlockTestFacilityName;
                        selfRef.plannedStartDate = $(this).attr("plannedStart");
                        selfRef.plannedEndDate = $(this).attr("plannedEnd");
                        // Taking the simplistic approach now/
                        selfRef.selectedBlockStartDate = $("#calendar").fullCalendar( 'clientEvents', id )[0].start.toDate();
                        selfRef.selectedBlockEndDate = $("#calendar").fullCalendar( 'clientEvents', id )[0].end.toDate();

                        selfRef.dueDate = $(this).attr("dueDate");
                        selfRef.testName = $(this).attr("testName");
                        selfRef.displayEventDialogHeader = `${selfRef.testName}`;
                        selfRef.testRequestService.getUserScheduleById(selfRef.selectedEventId,"testfacilityscheduleid").subscribe(res => {
                            console.log("----GetUserScheduleById", res);
                            let items = res.result.map(x => {
                                let r: {
                                    testFacilityId,
                                    userDisplayName,
                                    startDate,
                                    endDate, userId,
                                    testUserScheduleId,
                                    testfacilityName} = x;

                                r.startDate = moment(r.startDate).toDate();
                                r.endDate = moment(r.endDate).toDate();
                                return r;
                            });
                            selfRef.testOperatorsForBlock = items;
                        });
                        selfRef.testfacilityservice.filterByUserNames("t").subscribe(filteredList => {
                            let values = filteredList.$values;
                            console.log("Making the call", filteredList);
                            selfRef.titanUsersListForTenant = filteredList.$values.map(x=>{
                                let r : any = {};
                                r.label = x.displayName;
                                r.value = x.id;
                                return r;
                            });
                        });
                        selfRef.testRequestService.getTestFacilityScheduleById(selfRef.selectedTestRequestId).subscribe(res => {
                            let items = res.result.map(x => {
                                let r: {testFacilityScheduleId, testFacilityId, startDate, endDate, name} = x;
                                return r;
                            });
                            selfRef.scheduledTestFacilities = items;

                        });
                        selfRef.testRequestService.getUserScheduleById(selfRef.selectedTestRequestId,"testrequestid").subscribe(res => {
                            console.log("----GetUserScheduleById", res);
                            let items = res.result.map(x => {
                                let r: {testFacilityId, userDisplayName, startDate, endDate, userId, testUserScheduleId, testfacilityName} = x;
                                console.log(r);
                                return r;
                            });
                            selfRef.testOperators = items;
                        });

                        break;
                    }
                    case "Details": {
                        selfRef.router.navigate(['testrequest/details', testRequestId]);
                        break;
                    }


                }
            },
            items: {
                "AssignResources": {name: "Assign Resources", icon: "edit"},
                "Split": {name: "Split", icon: "cut"},
                "Details": {name: "Details", icon: "fa fa-beer"},
                "copy": {name: "Copy", icon: "copy"},
                "paste": {name: "Paste", icon: "paste"},
                "delete": {name: "Delete", icon: "delete"},
                "sep1": "---------",
                "quit": {
                    name: "Quit", icon: function () {
                        return 'context-menu-icon context-menu-icon-quit';
                    }
                }
            }
        })
        var combo = $("<select><option>A</option></select>").attr("id", "slot").attr("name", "slot");
        $(".fc-left .fc-button-group").append(combo);
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
            entityId: this.selectedTestRequestId,
            testFacility: this.selectedFacilityForOperator
        };
        this.testRequestService.postAssignUser(item).subscribe(res => {
            console.log("Here is the response from AssignUser", res);
        })
        this.testOperators.push(item);
        var selectedEvent = $("#calendar").fullCalendar('clientEvents', this.selectedTestRequestId)


    }
    addEmptyRowOperatorBlock(){

       let r={
            testFacilityId:'',
            userDisplayName:'',
            startDate:moment.utc().toDate(),
            endDate:moment.utc().toDate(),
            userId:'',
            testUserScheduleId:'',
            testfacilityName:''
        }
        console.log(r);
        //r.startDate = moment.utc().toDate();

        this.testOperatorsForBlock.splice(0,0, r);

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
    onSubmitMoveTestFacilitySchedule(formValues){
        let postdata = {
            testFacilityScheduleId: this.selectedEventId,
            moveToTestFacilityId: this.moveFullCalendarEventRef.resourceId,
            startDate: this.moveTestScheduleStartDate,
            endDate: this.moveTestScheduleEndDate,
            updateExistingUserSchedule: this.moveTestFacilityOperatorOption
        };
        console.log("---post data for move---", postdata)
        this.testfacilityservice.postMoveTest(postdata).subscribe(res =>{
            console.log("This is the move boy",res);
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

    removeOperator(row) {
        console.log("row1", row)
        let formBody: any = {"titanUserScheduleId": row.titanUserScheduleId};

        console.log("----formBody", formBody);
        this.testRequestService.postDeleteUserScheduleInstance(formBody).subscribe(res => {
            console.log("--succes of postDeleteUserScheduleInstanceUrl --", res);
        });
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

    //#
}
