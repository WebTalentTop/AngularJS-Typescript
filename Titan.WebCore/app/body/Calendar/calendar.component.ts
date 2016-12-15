import { titanApiUrl } from '../../shared/services/apiurlconst/titanapiurl';
import { TestFacilityService } from './../../shared/services/testfacility.service';
import { BuildLevelService } from './../../shared/services/buildlevel.service';
import { TestStatusService } from './../../shared/services/teststatus.service';
import { TestRoleService } from './../../shared/services/testRole.service';
import { ProjectService } from './../../shared/services/project.service';
import { TestModeService } from './../../shared/services/testMode.service';
import { TestTypeService } from './../../shared/services/testType.service';

import { DataTable, TabViewModule, LazyLoadEvent, ButtonModule, InputTextareaModule, InputTextModule, PanelModule, FileUploadModule, MessagesModule, Message, GrowlModule } from 'primeng/primeng';
import { Component, AfterViewInit, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { SelectItem, ConfirmationService } from 'primeng/primeng';

declare var $: JQueryStatic;
declare var fullcalendardef: FullCalendar.Calendar;

@Component({
    selector: 'calendar',
    templateUrl: 'app/body/calendar/calendar.component.html'
})
export class CalendarComponent {
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
    constructor(
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
    initSchedule() {
        var scheduleConfig = {
            theme: true,
            header: {
                left: 'prev,next today',
                center: 'title',
                right: 'month,basicWeek,basicDay,listMonth'
            },
            editable: true,
            eventSources:[]
            //events:{}
        };
      scheduleConfig.eventSources = [function (start, end, timezone, callback) {
            $.ajax({
                url: titanApiUrl + 'TestFacility/Schedule',
                type: 'POST',
                data: {
                    startdate: start.utc().format(),
                    enddate: end.utc().format(),

                },
                error: function () {
                    alert('there was an error while fetching events!');
                },
                success: function (result) {
                    var events = [];

                    $.each(result.calendarEvents.$values, function (index, element) {
                        element.start = element.start;
                        element.end = element.end;
                        element.title = element.title;
                        element.url = element.url;
                        events.push(element);
                    });
                    callback(events);
                }
            });
        }, function (start, end, timezone, callback) {
            $.ajax({
                url: titanApiUrl + 'TestFacility/Schedule',
                type: 'POST',
                data: {
                    startdate: start.utc().format(),
                    enddate: end.utc().format(),

                },
                error: function () {
                    alert('there was an error while fetching events!');
                },
                success: function (result) {
                    var events = [];

                    $.each(result.calendarEvents.$values, function (index, element) {
                        element.start = element.start;
                        element.end = element.end;
                        element.title = element.title;
                        element.url = element.url;
                        events.push(element);
                    });
                    callback(events);
                }
            });
        }];
        //scheduleConfig.events= 
        $('#calendar').fullCalendar(scheduleConfig);
    }
    ngOnInit() {
     //   this.getTestFacilities();
        this.getTestModes();
        this.getTestTypes();
        this.getBuildLevels();
        this.getTestStatus();
        this.getProjectCodes();
        this.getTestRoles();
        this.initSchedule();
    }
    onTestRoleChange(event) {
        console.log('------event------------', event)
        this.selectedTestRoles = (event.value);

        //   this.EquipmentSubType.calibrationform = (event);

    }
    onBuildLevelChange(event) {
        console.log('------event------------', event)
        this.selectedBuildLevels = (event.value);
        //   this.EquipmentSubType.calibrationform = (event);

    }
    onProjectCodeChange(event) {
        console.log('------event------------', event)
        this.selectedProjectCodes = (event.value);
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
        //this.dataService.getFilteredEvents(this.selectedTestStatuses, this.selectedTestStatuses, this.selectedTestStatuses, this.selectedTestStatuses, this.selectedTestStatuses, this.selectedTestStatuses, this.selectedTestStatuses)
        //    .subscribe(TestFacilityEvents => {
        //        console.log('-----------  TestFacilitiesEvents------------------', TestFacilityEvents);
        //        //this.TestFacilityEvents = TestFacilityEvents;
        //    });
        //   this.EquipmentSubType.calibrationform = (event);

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
            console.log(response);
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
}
