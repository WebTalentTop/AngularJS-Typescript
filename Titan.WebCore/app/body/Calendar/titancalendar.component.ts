import { titanApiUrl } from '../../shared/services/apiurlconst/titanapiurl';
import { TestFacilityService } from '../../shared/services/testFacility.service';
import { BuildLevelService } from '../../shared/services/buildlevel.service';
import { TestStatusService } from '../../shared/services/teststatus.service';
import { TestRoleService } from '../../shared/services/testRole.service';
import { ProjectService } from '../../shared/services/project.service';
import { TestModeService } from '../../shared/services/testMode.service';
import { TestTypeService } from '../../shared/services/testType.service';
import { TitanUserService } from '../../shared/services/titanuser.service';
import { BreadCrumbsService } from '../../shared/services/breadCrumbs/breadCrumbs.service';
import { DataTable, TabViewModule, LazyLoadEvent, ButtonModule, InputTextareaModule, InputTextModule, PanelModule, FileUploadModule, MessagesModule, Message, GrowlModule } from 'primeng/primeng';
import { Component, AfterViewInit, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { SelectItem, ConfirmationService } from 'primeng/primeng';
import { MenuItem } from 'primeng/primeng';
declare var $: JQueryStatic;
declare var fullcalendardef: FullCalendar.Calendar;


@Component({
    selector: 'calendar',
    templateUrl: 'app/body/calendar/titancalendar.component.html'
})
export class TitanCalendarComponent implements AfterViewInit {
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
    selectedHideWeekendValue: string = 'true';
    daysofweek: SelectItem[];
    slotDurations: SelectItem[];
    selectedFirstDayValue: number = 0;
    startWorkHoursValue: string = "05:00";
    endWorkHoursValue: string = "19:00";
    selectedSlotDurationValue: string = "01:00";
    filterResourcesWithEvents: boolean = false; //When this setting is activated, only resources that have associated events will be displayed
    tooltip: any;
    displayEventDialog: boolean = false;
    contextMenuItems: MenuItem[] = [];
    displayEventDialogHeader: string = '';
    selectedTestScheduleStartDate: Date;
    selectedTestScheduleEndDate: Date;

    // Search Filters on the main page
    filteredTestUserNames: any[] = [];
    filteredSelectedTestUserNames: any;


    //Assign Dialog Header Properties
    testName: string = '';
    plannedStartDate: string = '';
    plannedEndDate: string = '';
    dueDate: string = '';
    testDuration: string = '';

    // For assigning operators/technicians
    selectedOperatorUserNames: any[] = [];;
    filteredOperatorUserNames: any[] = [];;
    filteredselectedOperatorUserNames: any;//[] = [];

    // For selecting Technicians
    selectedTestFacilityNames: any[] = [];;
    filteredTestFacilityNames: any[] = [];;
    filteredselectedTestFacilityNames: any;//[] = [];
    selectedTestFacilityItems: SelectItem[] = [];
    scheduledTestFacilities: any[] = [];
    selectedFacilityForOperator: string;

    selectedResourceId: string = '';
    selectedEventId: string = '';

    testOperators: any[] = [];

    constructor(
        private breadCrumbsService: BreadCrumbsService,
        private route: ActivatedRoute,
        private router: Router,
        private testfacilityservice: TestFacilityService,
        private buildlevelservice: BuildLevelService,
        private teststatusservice: TestStatusService,
        private testroleservice: TestRoleService,
        private projectservice: ProjectService,
        private testmodeservice: TestModeService,
        private testtypeservice: TestTypeService

    ) { }

    initCalendarOptions() {
        this.daysofweek = [];
        this.daysofweek.push({ label: 'Sunday', value: { id: 1, name: '0', code: 'SUN' } });
        this.daysofweek.push({ label: 'Monday', value: { id: 2, name: '1', code: 'NY' } });
        this.daysofweek.push({ label: 'Tuesday', value: { id: 3, name: '2', code: 'NY' } });
        this.daysofweek.push({ label: 'Wednesday', value: { id: 4, name: '3', code: 'NY' } });
        this.daysofweek.push({ label: 'Thursday', value: { id: 5, name: '4', code: 'NY' } });
        this.daysofweek.push({ label: 'Friday', value: { id: 6, name: '5', code: 'NY' } });
        this.daysofweek.push({ label: 'Saturday', value: { id: 7, name: '6', code: 'NY' } });

        this.slotDurations = [];
        //this.slotDurations.push({ label: 'Month', value: { id: 1, name: '30.00.', code: 'SUN' } });
        this.slotDurations.push({ label: 'Week', value: "168:00:00" });
        this.slotDurations.push({ label: 'Day', value: "24:00:00" });
        this.slotDurations.push({ label: 'Shift', value: "08:00" });
        this.slotDurations.push({ label: 'Hour', value: "01:00" });
        this.slotDurations.push({ label: '30 minutes', value: { id: 4, name: '00:00:30' } });
        this.slotDurations.push({ label: '15 minutes', value: { id: 5, name: '00:00:15' } });



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
            defaultView: 'timelineFifteenDays',
            views: {
                timelineFifteenDays: {
                    type: 'timeline',
                    duration: { days: 15 },
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
                            });
                            callback(events);
                        }
                    });
                }
            }],
            eventRender: function (event, element) {
                element.attr("event-id", event.id);
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
                return false;
            },

            eventMouseover: function (calEvent, jsEvent, view) {
                //var tooltip = '<div class="tooltipevent" style="width:100px;height:100px;background:#ccc;position:absolute;z-index:10001;">' + 'Ajay Was Here' + '</div>';
                //var $tooltip = $(tooltip).appendTo('body');

                //$(this).mouseover(function (e) {
                //    $(this).css('z-index', 10000);
                //    $tooltip.fadeIn('500');
                //    $tooltip.fadeTo('10', 1.9);
                //}).mousemove(function (e) {
                //    $tooltip.css('top', e.pageY + 10);
                //    $tooltip.css('left', e.pageX + 20);
                //});
            },

            eventMouseout: function (calEvent, jsEvent) {
                //$(this).css('z-index', 8);
                //$('.tooltipevent').remove();
            },
        };

        $('#calendar').fullCalendar(scheduleConfig);
    }
    breadcrumbs: MenuItem[];
    breadcrumbsHome: MenuItem;
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
        this.selectedTestFacilityItems = [];
        this.selectedTestFacilityItems.push({ label: 'Audi', value: 'Audi' });

            let breadC = this.breadCrumbsService.getBreadCrumbs();
            let calendarBreadCrumb = breadC.filter(filter =>
                filter.pageName === 'CalendarHomePage'
            )[0];

            console.log("BreadC -----", breadC);
            console.log("calendarBreadCrumb ---------", calendarBreadCrumb);
            this.breadcrumbs = [];
            this.breadcrumbs = calendarBreadCrumb.items;

            console.log("breadcurmbs ------", this.breadcrumbs);

            this.breadcrumbsHome = { routerLink: ['/'] };
    }

    ngAfterViewInit() {
        //here you will have code where component content is ready.
        var selfRef = this;

        $.contextMenu({
            selector: '.showContextMenu',
            callback: function (key, options) {
                var m = "clicked: " + key;
                let testRequestId = $(this).attr("event-id");
                switch (key) {
                    case "AssignResources": {

                        selfRef.displayEventDialog = true;
                        selfRef.selectedEventId = testRequestId;
                        selfRef.selectedResourceId = $(this).attr("resource-id");
                        selfRef.plannedStartDate = $(this).attr("plannedStart");
                        selfRef.plannedEndDate = $(this).attr("plannedEnd");
                        selfRef.dueDate = $(this).attr("dueDate");
                        selfRef.testName = $(this).attr("testName");

                        selfRef.displayEventDialogHeader = `${selfRef.testName}`;
                        break;
                    }
                    case "Details": {
                        selfRef.router.navigate(['testrequest/details', testRequestId]);
                        break;
                    }


                }
            },
            items: {
                "AssignResources": { name: "Assign Resources", icon: "edit" },
                "Split": { name: "Split", icon: "cut" },
                "Details": { name: "Details", icon: "fa fa-beer" },
                "copy": { name: "Copy", icon: "copy" },
                "paste": { name: "Paste", icon: "paste" },
                "delete": { name: "Delete", icon: "delete" },
                "sep1": "---------",
                "quit": {
                    name: "Quit", icon: function () {
                        return 'context-menu-icon context-menu-icon-quit';
                    }
                }
            }
        })
    }


    //#region filters 

    onTestRoleChange(event) {
        this.selectedTestRoles = (event.value);
    }

    onBuildLevelChange(event) {
        this.selectedBuildLevels = (event.value);
    }

    onProjectCodeChange(event) {
        this.selectedProjectCodes = (event.value);
    }

    onTestFacilityChange(event) {
        this.selectedTestFacilities = (event.value);

    }

    onTestModeChange(event) {
        this.selectedTestModes = (event.value);
    }

    onTestTypeChange(event) {
        this.selectedTestTypes = (event.value);
    }

    onTestStatusChange(event) {
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
        });
    }

    getTestFacilities() {
        //    userRoles
        this.testfacilityservice.getTestFacilities().subscribe(response => {
            this.testFacilities = new Array();
            if (response != null) {
                var resultMap = new Array();
                //resultMap.push({
                //    label: "Select Test Role",
                //    value: null
                //});
                for (let template of response) {
                    var temp = {
                        label: template.name,
                        value: template.id
                    }
                    resultMap.push(temp);
                }
                this.testFacilities = resultMap;
            }
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
        });
    }


    updateCalendarSettings(event) {
        let schedulerOptions: any = {

        };
        let viewStardDate: any = $('#calendar').fullCalendar('getView').start.format();


        schedulerOptions.weekends = (this.selectedHideWeekendValue === 'true');
        schedulerOptions.firstDay = this.selectedFirstDayValue;
        schedulerOptions.minTime = this.startWorkHoursValue;
        schedulerOptions.maxTime = this.endWorkHoursValue;
        schedulerOptions.slotDuration = this.selectedSlotDurationValue;
        $('#calendar').fullCalendar('option', schedulerOptions);
    }

    filterCalendarEvents(event) {
        // console.log("--inside filterCalendarEvents")
        // We may be able to do pure client side filtering. Need to investigate. 
        //For now lets go to the server.
        let start = moment().utc();
        let end = moment.utc();
        let timezome = '';
        let testFacilityEventSource = $("#calendar").fullCalendar('getEventSourceById', 'testFacilityEventSource');
        $("#calendar").fullCalendar('removeEventSource', testFacilityEventSource)
        $("#calendar").fullCalendar('removeEventSource', { id: 'testFacilityEventSource' });

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
        // console.log(payload);
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
                        });
                        callback(events);
                    }
                });
            }
        }
        $("#calendar").fullCalendar('addEventSource', source1);


    }

    //#endregion filters

    //#region Assign Resources Region
    filterOperatorUserNames(event) {
        this.testfacilityservice.filterByUserNames(event.query).subscribe(filteredList => {
            this.filteredOperatorUserNames = filteredList.$values;
        });
    }

    filterTestFacilityNames(event) {
        this.testfacilityservice.getTestFacilities().subscribe(filteredList => {
            this.filteredTestFacilityNames = filteredList;
        })
    }

    scheduleUsers(event) {

        let {displayName, firstName, id} = this.filteredselectedOperatorUserNames;

        let item = {
            name: displayName,
            startDate: '1-1-2016',
            endDate: '1-2-2090',
            id: id,
            testFacility: this.selectedFacilityForOperator
        };
        this.testOperators.push(item);
        var selectedEvent = $("#calendar").fullCalendar('clientEvents', this.selectedEventId)

        //  We can add an event here using the renderEvent or renderEvents  .fullCalendar( 'renderEvent', event [, stick ] )
    }


    scheduleFacilities(event) {

        let {name, id} = this.filteredselectedTestFacilityNames;

        let item = {
            name: name,
            startDate: '1-1-2016',
            endDate: '1-2-2090',
            id: id
        };
        this.scheduledTestFacilities.push(item);

        this.selectedTestFacilityItems = this.generateTestFacilitySelectItems(this.scheduledTestFacilities, true);

        var selectedEvent = $("#calendar").fullCalendar('clientEvents', this.selectedEventId)

        // Clearing the test facility Name
        this.filteredselectedTestFacilityNames = null;

        //  We can add an event here using the renderEvent or renderEvents  .fullCalendar( 'renderEvent', event [, stick ] )
    }

    generateTestFacilitySelectItems(items, retDistict) {

        let selectedItems: SelectItem[] = [];
        let unique = {};
        items.forEach(function (x) {
            var key = x.name;
            if (!unique[key]) {
                selectedItems.push({ label: x.name, value: x.id });
                unique[key] = true;
            }
        });

        return selectedItems;
    }

    removeOperator(operator) {
    }



    //#endregion Assign Resources Region
}
