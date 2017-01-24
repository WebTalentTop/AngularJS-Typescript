"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var titanapiurl_1 = require('../../shared/services/apiurlconst/titanapiurl');
var moment = require('moment/moment');
var core_1 = require('@angular/core');
var TitanConstants_1 = require("../../shared/services/definitions/TitanConstants");
var TitanCalendarComponent = (function () {
    //endregion fields
    // region constructor
    function TitanCalendarComponent(route, router, testfacilityservice, buildlevelservice, teststatusservice, testroleservice, projectservice, testmodeservice, testtypeservice, testRequestService, titanService, calendarService, titanUserProfileService) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.testfacilityservice = testfacilityservice;
        this.buildlevelservice = buildlevelservice;
        this.teststatusservice = teststatusservice;
        this.testroleservice = testroleservice;
        this.projectservice = projectservice;
        this.testmodeservice = testmodeservice;
        this.testtypeservice = testtypeservice;
        this.testRequestService = testRequestService;
        this.titanService = titanService;
        this.calendarService = calendarService;
        this.titanUserProfileService = titanUserProfileService;
        this.displaySplitDialog = false;
        this.displayCalendarSetting = false;
        // Calendar Settings
        this.selectedHideWeekendValue = 'true';
        this.selectedFirstDayValue = 0;
        this.startWorkHoursValue = "00:00";
        this.endWorkHoursValue = "23:59";
        this.selectedSlotDurationValue = { days: 1 };
        this.filterResourcesWithEvents = false; //When this setting is activated, only resources that have associated events will be displayed
        this.displayEventDialog = false;
        this.contextMenuItems = [];
        this.displayEventDialogHeader = '';
        // Handle Context Menu Move
        this.moveEventDialogHeader = '';
        this.displayMoveDialog = false;
        this.moveToTestFacilityName = 'Hello I need to be updated';
        this.moveToTestFacilityHeader = '';
        this.moveTestFacilityOperatorOption = 0;
        // Search Filters on the main page
        this.filteredTestUserNames = [];
        //Assign Dialog Header Properties
        this.assignResourceHeader = '';
        this.assignBlockTestFacilityName = '';
        this.displayAssignDialog = false;
        this.testOperatorsForBlock = [];
        this.deletedTestOperatorsForBlock = [];
        this.testName = '';
        this.plannedStartDate = '';
        this.plannedEndDate = '';
        this.dueDate = '';
        this.testDuration = '';
        this.titanUsersListForTenant = [];
        // For assigning operators/technicians
        this.selectedOperatorUserNames = [];
        this.filteredOperatorUserNames = [];
        // For selecting Technicians
        this.selectedTestFacilityNames = [];
        this.testFacilityNamesLoaded = false;
        this.filteredTestFacilityNames = [];
        this.scheduledTestFacilities = [];
        this.selectedResourceId = '';
        // The id of the selected Event
        this.selectedEventId = '';
        // In the case of testRequest, it is the testRequestId
        this.selectedTestRequestId = '';
        this.testOperators = [];
        this.msgs = [];
        this.titanUserProfileService.getCurrentUserProfile()
            .subscribe(function (res) {
            _this.currentUser = res.result;
        });
    }
    // endregion constructor
    TitanCalendarComponent.prototype.initCalendarOptions = function () {
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
        this.slotDurations.push({ label: 'Week', value: { weeks: 1 } });
        this.slotDurations.push({ label: 'Day', value: { days: 1 } });
        this.slotDurations.push({ label: 'Shift', value: { hours: 8 } });
        //this.slotDurations.push({label: 'Hour', value: {hours: 1}});
        //TODO: Make Slots Dynamic. 30 mins and 15 mins should show up in week and day mode only
        //this.slotDurations.push({label: '30 minutes', value:  '00:30:00'});
        //this.slotDurations.push({label: '15 minutes', value:  '00:15:00'});
    };
    TitanCalendarComponent.prototype.initSchedule = function () {
        var _this = this;
        this.calendarService.getDefaultSettings('FDC1A91F-75F4-4B2F-BA8A-9C2D731EBE4D').subscribe(function (res) {
            _this.defaultCalendarSetting = res.result;
            console.log(res.result);
            _this.renderCalendar();
        });
    };
    TitanCalendarComponent.prototype.renderCalendar = function () {
        var tz = this.titanService.getDefaultTimeZone;
        var self = this;
        var todayDate = moment().startOf('day');
        var YESTERDAY = todayDate.clone().subtract(1, 'day').format('YYYY-MM-DD');
        var TODAY = todayDate.format('YYYY-MM-DD');
        var TOMORROW = todayDate.clone().add(1, 'day').format('YYYY-MM-DD');
        var DEFAULTDATE = todayDate.clone().add(-7, 'day').format('YYYY-MM-DD');
        var tt = this.tooltip;
        var scheduleConfig = {
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
                    duration: { months: 1 },
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
                    url: titanapiurl_1.titanApiUrl + 'Calendar/ResourcesForTimelineView',
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
                            url: titanapiurl_1.titanApiUrl + 'TestFacility/Schedule',
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
                                    console.log('------item------------', item);
                                });
                                console.log('------Event Source callback------------', events);
                                callback(events);
                            }
                        });
                    }
                },
                {
                    id: 'testFacilityUserSource',
                    events: function (start, end, timezone, callback) {
                        $.ajax({
                            url: titanapiurl_1.titanApiUrl + 'TitanUser/Schedule',
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
                                    console.log('------item------------', item);
                                });
                                console.log('------Event Source callback------------', events);
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
            eventAfterAllRender: function () {
                $("span.fc-time").hide();
            },
            eventClick: function (calEvent, jsEvent, view) {
                //self.displayEventDialog = true;
                console.log("---click is blocked--");
                return false;
            },
            eventDrop: function (event, delta, revertFunc) {
                self.selectedEventId = event.id; //testFacilityScheduleId
                self.moveToTestFacilityName = $("#calendar").fullCalendar('getResourceById', event.resourceId).title;
                self.moveFullCalendarEventRef = event;
                self.moveToTestFacilityHeader = "Move to " + self.moveToTestFacilityName;
                self.moveTestScheduleStartDate = event.start.toDate();
                self.moveTestScheduleEndDate = event.end.toDate();
                self.displayMoveDialog = true;
                self.moveRevertFunction = revertFunc;
                self.moveTestFacilityEvent = {};
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
                }
                else {
                }
                //alert(event.title + " end is now " + event.end.format());
                // if (!confirm("is this okay?")) {
                //     revertFunc();
                // }
            }
        };
        $('#calendar').fullCalendar(scheduleConfig);
    };
    TitanCalendarComponent.prototype.ngOnInit = function () {
        this.getTestFacilities();
        this.getTestModes();
        this.getTestTypes();
        this.getBuildLevels();
        this.getTestStatus();
        this.getProjectCodes();
        this.getTestRoles();
        this.initSchedule();
        this.initCalendarOptions();
        this.moveTestFacilityEvent = {};
        this.splitTestFacilityEvent = {};
        this.splitTestFacilityEvent.existingSchedule = {};
        this.splitTestFacilityEvent.newSchedule = {};
        //this.splitTestFacilityEvent.existingSchedule.startDate = new Date();
    };
    TitanCalendarComponent.prototype.populateUpdateTestFacilityAndUserSchedule = function (selfRef, entityId, eventId, action) {
        selfRef.assignUserSchedule = {};
        selfRef.assignUserSchedule.startDate = $("#calendar").fullCalendar('clientEvents', eventId)[0].start.toDate();
        selfRef.assignUserSchedule.endDate = $("#calendar").fullCalendar('clientEvents', eventId)[0].end.toDate();
        selfRef.assignUserSchedule.testFacilityScheduleId = eventId;
        selfRef.assignUserSchedule.updateTestFacilitySchedule = false;
        selfRef.assignUserSchedule.entityId = entityId;
        if (action === 'resize') {
            selfRef.assignResourceHeader = "Event resized - Assign resources " + selfRef.assignBlockTestFacilityName + " from " +
                $.fullCalendar.formatRange(moment(selfRef.assignUserSchedule.startDate), moment(selfRef.assignUserSchedule.endDate), 'MMMM D YYYY');
        }
        else {
            selfRef.assignResourceHeader = "Assign resources" + selfRef.assignBlockTestFacilityName + " from " +
                $.fullCalendar.formatRange(moment(selfRef.assignUserSchedule.startDate), moment(selfRef.assignUserSchedule.endDate), 'MMMM D YYYY');
        }
        selfRef.assignUserSchedule.entityIdentifierId = TitanConstants_1.TitanConstants.TestRequestEntityIdentifierId;
        selfRef.testRequestService.getUserScheduleById(selfRef.assignUserSchedule.testFacilityScheduleId, "testfacilityscheduleid").subscribe(function (res) {
            console.log("----GetUserScheduleById", res);
            var items = res.result.map(function (x) {
                var r = x;
                r.startDate = moment(r.startDate).toDate();
                r.endDate = moment(r.endDate).toDate();
                r.action = 'pristine';
                return r;
            });
            selfRef.testOperatorsForBlock = items;
        });
        selfRef.testfacilityservice.filterByUserNames("t").subscribe(function (filteredList) {
            var values = filteredList.$values;
            selfRef.titanUsersListForTenant = filteredList.$values.map(function (x) {
                var r = {};
                r.label = x.displayName;
                r.value = x.id;
                return r;
            });
            var item = {
                label: 'Select user',
                value: ''
            };
            selfRef.titanUsersListForTenant.splice(0, 0, item);
        });
        selfRef.testRequestService.getTestFacilityScheduleById(selfRef.assignUserSchedule.entityId).subscribe(function (res) {
            var items = res.result.map(function (x) {
                var r = x;
                return r;
            });
            selfRef.scheduledTestFacilities = items;
        });
    };
    TitanCalendarComponent.prototype.ngAfterViewInit = function () {
        //here you will have code where component content is ready.
        var selfRef = this;
        $.contextMenu({
            selector: '.showContextMenu',
            callback: function (key, options) {
                var m = "clicked: " + key;
                var entityId = $(this).attr("entityId");
                var id = $(this).attr("eventId");
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
                        selfRef.assignUserSchedule = {};
                        selfRef.assignUserSchedule.startDate = $("#calendar").fullCalendar('clientEvents', id)[0].start.toDate();
                        selfRef.assignUserSchedule.endDate = $("#calendar").fullCalendar('clientEvents', id)[0].end.toDate();
                        selfRef.assignUserSchedule.testFacilityScheduleId = id;
                        selfRef.assignUserSchedule.updateTestFacilitySchedule = false;
                        selfRef.assignUserSchedule.entityId = entityId;
                        selfRef.assignUserSchedule.entityIdentifierId = TitanConstants_1.TitanConstants.TestRequestEntityIdentifierId;
                        selfRef.dueDate = $(this).attr("dueDate");
                        selfRef.testName = $(this).attr("eventName");
                        selfRef.displayEventDialogHeader = "" + selfRef.testName;
                        selfRef.testRequestService.getUserScheduleById(selfRef.selectedEventId, "testfacilityscheduleid").subscribe(function (res) {
                            console.log("----GetUserScheduleById", res);
                            var items = res.result.map(function (x) {
                                var r = x;
                                r.startDate = moment(r.startDate).toDate();
                                r.endDate = moment(r.endDate).toDate();
                                r.action = 'pristine';
                                return r;
                            });
                            selfRef.testOperatorsForBlock = items;
                        });
                        selfRef.testfacilityservice.filterByUserNames("t").subscribe(function (filteredList) {
                            var values = filteredList.$values;
                            selfRef.titanUsersListForTenant = filteredList.$values.map(function (x) {
                                var r = {};
                                r.label = x.displayName;
                                r.value = x.id;
                                return r;
                            });
                            var item = {
                                label: 'Select user',
                                value: ''
                            };
                            selfRef.titanUsersListForTenant.splice(0, 0, item);
                        });
                        selfRef.testRequestService.getTestFacilityScheduleById(selfRef.assignUserSchedule.entityId).subscribe(function (res) {
                            var items = res.result.map(function (x) {
                                var r = x;
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
                        selfRef.router.navigate(['testrequest/details', entityId]);
                        break;
                    }
                    case "Split": {
                        this.splitTestFacilityEvent = {};
                        this.splitTestFacilityEvent.existingSchedule = {};
                        this.splitTestFacilityEvent.newSchedule = {};
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
                "AssignResources": { name: "Assign Resources", icon: "edit" },
                "Split": { name: "Split", icon: "cut" },
                "Details": { name: "Details", icon: "fa fa-beer" },
                "Delete": { name: "Delete", icon: "delete" }
            }
        });
        // var combo = $("<select><option>A</option></select>").attr("id", "slot").attr("name", "slot");
        // $(".fc-left .fc-button-group").append(combo);
    };
    //#region filters
    TitanCalendarComponent.prototype.onTestRoleChange = function (event) {
        this.selectedTestRoles = (event.value);
    };
    TitanCalendarComponent.prototype.onBuildLevelChange = function (event) {
        console.log('------updating selected build levels------------', event);
        this.selectedBuildLevels = (event.value);
        console.log(this.selectedBuildLevels);
    };
    TitanCalendarComponent.prototype.onProjectCodeChange = function (event) {
        console.log('------event------------', event);
        this.selectedProjectCodes = (event.value);
        console.log(this.selectedProjectCodes);
        //   this.EquipmentSubType.calibrationform = (event);
    };
    TitanCalendarComponent.prototype.onTestFacilityChange = function (event) {
        console.log('------event------------', event);
        this.selectedTestFacilities = (event.value);
        //   this.EquipmentSubType.calibrationform = (event);
    };
    TitanCalendarComponent.prototype.onTestModeChange = function (event) {
        console.log('------event------------', event);
        this.selectedTestModes = (event.value);
        //   this.EquipmentSubType.calibrationform = (event);
    };
    TitanCalendarComponent.prototype.onTestTypeChange = function (event) {
        console.log('------event------------', event);
        this.selectedTestTypes = (event.value);
        //   this.EquipmentSubType.calibrationform = (event);
    };
    TitanCalendarComponent.prototype.onTestStatusChange = function (event) {
        console.log('------event------------', event);
        this.selectedTestStatuses = (event.value);
    };
    TitanCalendarComponent.prototype.getTestUsers = function (event) {
        var _this = this;
        this.testfacilityservice.filterByUserNames(event.query).subscribe(function (filteredList) {
            _this.filteredTestUserNames = filteredList.$values;
        });
    };
    TitanCalendarComponent.prototype.getTestRoles = function () {
        var _this = this;
        //    userRoles
        this.testroleservice.getTestRoles().subscribe(function (response) {
            _this.testRoles = new Array();
            if (response != null) {
                var resultMap = new Array();
                //resultMap.push({
                //    label: "Select Test Role",
                //    value: null
                //});
                for (var _i = 0, _a = response.$values; _i < _a.length; _i++) {
                    var template = _a[_i];
                    var temp = {
                        label: template.name,
                        value: template.id
                    };
                    resultMap.push(temp);
                }
                _this.testRoles = resultMap;
            }
            console.log(response);
        });
    };
    TitanCalendarComponent.prototype.getTestFacilities = function () {
        var _this = this;
        this.testfacilityservice.getTestFacilities().subscribe(function (response) {
            _this.testFacilities = [];
            if (response != null) {
                var resultMap = [];
                resultMap.push({ label: 'Select a Facility', value: { label: '', value: '' } });
                for (var _i = 0, response_1 = response; _i < response_1.length; _i++) {
                    var template = response_1[_i];
                    var temp = {
                        label: template.name,
                        value: template.id
                    };
                    resultMap.push(temp);
                }
                _this.testFacilities = resultMap;
            }
            console.log("from ngoninit", response, _this.testFacilities);
        });
    };
    TitanCalendarComponent.prototype.getTestModes = function () {
        var _this = this;
        //    userRoles
        this.testmodeservice.getAllTestModes().subscribe(function (response) {
            _this.testAllModes = new Array();
            if (response != null) {
                var resultMap = new Array();
                //resultMap.push({
                //    label: "Select Test Role",
                //    value: null
                //});
                for (var _i = 0, _a = response.result; _i < _a.length; _i++) {
                    var template = _a[_i];
                    var temp = {
                        label: template.name,
                        value: template.id
                    };
                    resultMap.push(temp);
                }
                _this.testAllModes = resultMap;
            }
            console.log(response);
        });
    };
    TitanCalendarComponent.prototype.getTestTypes = function () {
        var _this = this;
        //    userRoles
        this.testtypeservice.getAllTestTypes().subscribe(function (response) {
            _this.testTypes = new Array();
            if (response != null) {
                var resultMap = new Array();
                //resultMap.push({
                //    label: "Select Test Role",
                //    value: null
                //});
                for (var _i = 0, _a = response.result; _i < _a.length; _i++) {
                    var template = _a[_i];
                    var temp = {
                        label: template.label,
                        value: template.value
                    };
                    resultMap.push(temp);
                }
                _this.testTypes = resultMap;
            }
            console.log(response);
        });
    };
    TitanCalendarComponent.prototype.getTestStatus = function () {
        var _this = this;
        //    userRoles
        this.teststatusservice.getTestStatus().subscribe(function (response) {
            _this.testStatus = new Array();
            if (response != null) {
                var resultMap = new Array();
                //resultMap.push({
                //    label: "Select Test Status",
                //    value: null
                //});
                for (var _i = 0, response_2 = response; _i < response_2.length; _i++) {
                    var template = response_2[_i];
                    var temp = {
                        label: template.name,
                        value: template.id
                    };
                    resultMap.push(temp);
                }
                _this.testStatus = resultMap;
            }
            console.log(response);
        });
    };
    TitanCalendarComponent.prototype.getProjectCodes = function () {
        var _this = this;
        //    userRoles
        this.projectservice.getProjectCodes().subscribe(function (response) {
            _this.projectCodes = new Array();
            if (response != null) {
                var resultMap = new Array();
                //resultMap.push({
                //    label: "Select Project Code",
                //    value: null
                //});
                for (var _i = 0, _a = response.$values; _i < _a.length; _i++) {
                    var template = _a[_i];
                    var temp = {
                        label: template.code,
                        value: template.id
                    };
                    resultMap.push(temp);
                }
                _this.projectCodes = resultMap;
            }
            console.log(response);
        });
    };
    TitanCalendarComponent.prototype.getBuildLevels = function () {
        var _this = this;
        //    userRoles
        this.buildlevelservice.getBuildLevels().subscribe(function (response) {
            _this.buildLevels = new Array();
            if (response != null) {
                var resultMap = new Array();
                //resultMap.push({
                //    label: "Select Build Level",
                //    value: null
                //});
                for (var _i = 0, _a = response.$values; _i < _a.length; _i++) {
                    var template = _a[_i];
                    var temp = {
                        label: template.name,
                        value: template.id
                    };
                    resultMap.push(temp);
                }
                _this.buildLevels = resultMap;
            }
            console.log(response);
        });
    };
    TitanCalendarComponent.prototype.updateCalendarSettings = function (event) {
        var schedulerOptions = {};
        var viewStardDate = $('#calendar').fullCalendar('getView').start.format();
        schedulerOptions.weekends = (this.selectedHideWeekendValue === 'true');
        schedulerOptions.firstDay = this.selectedFirstDayValue;
        schedulerOptions.minTime = this.startWorkHoursValue;
        schedulerOptions.maxTime = this.endWorkHoursValue;
        schedulerOptions.slotDuration = this.selectedSlotDurationValue;
        console.log(this.selectedSlotDurationValue, schedulerOptions);
        $('#calendar').fullCalendar('option', schedulerOptions);
    };
    TitanCalendarComponent.prototype.filterCalendarEvents = function (event) {
        console.log("--inside filterCalendarEvents");
        // We may be able to do pure client side filtering. Need to investigate.
        //For now lets go to the server.
        var start = moment().utc();
        var end = moment.utc();
        var timezome = '';
        var testFacilityEventSource = $("#calendar").fullCalendar('getEventSourceById', 'testFacilityEventSource');
        $("#calendar").fullCalendar('removeEventSource', testFacilityEventSource);
        $("#calendar").fullCalendar('removeEventSource', { id: 'testFacilityEventSource' });
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
                    url: titanapiurl_1.titanApiUrl + 'TestFacility/Schedule',
                    type: 'POST',
                    data: payload,
                    error: function () {
                        alert('there was an error while fetching events!');
                    },
                    success: function (result) {
                        var events = [];
                        $.each(result.calendarEvents.$values, function (index, item) {
                            events.push(item);
                            console.log('------item------------', item);
                        });
                        console.log('------Event Source callback------------', events);
                        callback(events);
                    }
                });
            }
        };
        console.log(source1);
        $("#calendar").fullCalendar('addEventSource', source1);
    };
    //#endregion filters
    //#region Assign Resources Region
    TitanCalendarComponent.prototype.saveAssignResourcesChanges = function () {
        // Validate
        var _this = this;
        //this.assignUserSchedule.entityId = this.selectedTestRequestId;
        //this.assignUserSchedule.entityIdentifierId = TitanConstants.TestRequestEntityIdentifierId;
        // since we are storing the deleted items in a separate array, join them before sending.
        this.assignUserSchedule.schedules = this.testOperatorsForBlock.concat(this.deletedTestOperatorsForBlock);
        //postdata.entityId ='A';
        console.log('Modified Users', this.testOperatorsForBlock.filter(function (x) { return x.action !== 'pristine'; }));
        this.testRequestService.postAssignUser(this.assignUserSchedule).subscribe(function (res) {
            // console.log("Response after **" res);
            if (res.result !== null && res.result) {
                _this.msgs.push({ severity: 'success', detail: 'Schedules updated successfully.', summary: 'Success' });
                _this.displayAssignDialog = false;
            }
            else {
                _this.msgs.push({
                    severity: 'error',
                    detail: 'Please check inputs and try again. If problem persists, contact Administrator.',
                    summary: 'Error'
                });
            }
        });
        console.log("---Operators List", this.testOperatorsForBlock);
    };
    TitanCalendarComponent.prototype.filterOperatorUserNames = function (event) {
        var _this = this;
        this.testfacilityservice.filterByUserNames(event.query).subscribe(function (filteredList) {
            _this.filteredOperatorUserNames = filteredList.$values;
        });
    };
    TitanCalendarComponent.prototype.onFacilityScheduleCalendarDateSelection = function (event) {
        console.log("start--", this.selectedTitanUserScheduleStartDate);
        console.log("end--", this.selectedTitanUserScheduleEndDate);
        if (this.selectedTitanUserScheduleStartDate > this.selectedTitanUserScheduleEndDate) {
            this.selectedTitanUserScheduleEndDate = this.blankDate;
        }
        console.log("--onFacilityScheduleCalendarDateBlur--", event);
    };
    TitanCalendarComponent.prototype.validateScheduleDates = function (event, startDate, endDate) {
        console.log("start--", startDate);
        console.log("end--", endDate);
        if (startDate > endDate) {
            endDate = this.blankDate;
        }
        console.log("--onFacilityScheduleCalendarDateBlur--", event);
    };
    TitanCalendarComponent.prototype.onSubmitOperatorSchedule = function (formValues) {
        // let {displayName, firstName, titanUserId} = this.filteredselectedOperatorUserNames;
        var item = {
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
        this.testRequestService.postAssignUser(item).subscribe(function (res) {
            console.log("Here is the response from AssignUser", res);
        });
        this.testOperators.push(item);
        var selectedEvent = $("#calendar").fullCalendar('clientEvents', this.selectedTestRequestId);
    };
    TitanCalendarComponent.prototype.addEmptyRowOperatorBlock = function () {
        var item = {};
        item.startDate = this.selectedBlockStartDate;
        item.endDate = this.selectedBlockEndDate;
        item.action = "new";
        item.entityId = this.selectedTestRequestId;
        item.id = '';
        item.scheduleEventTypeId = TitanConstants_1.TitanConstants.TestRequestScheduleEventTypeId;
        item.testFacilityId = this.selectedResourceId;
        item.shiftId = TitanConstants_1.TitanConstants.DefaultShiftId;
        item.testFacilityScheduleId = this.selectedEventId;
        this.testOperatorsForBlock.splice(0, 0, item);
    };
    TitanCalendarComponent.prototype.onSubmitTestFacilitySchedule = function (values) {
        var _this = this;
        var postdata = {
            startDate: this.selectedTestScheduleStartDate,
            endDate: this.selectedTestScheduleEndDate,
            entityId: this.selectedTestRequestId,
            testFacilityScheduleId: this.selectedEventId
        };
        this.testfacilityservice.postReserve(postdata).subscribe(function (res) {
            var x = res.result;
            _this.scheduledTestFacilities.push({
                testFacilityScheduleId: x.id,
                testFacilityId: x.testFacilityId,
                startDate: x.startDate,
                endDate: x.endDate,
                facilityName: "Name"
            });
            // Add an event to the calendar
            var newEvent = {};
            newEvent.id = x.id;
            newEvent.start = x.startDate;
            newEvent.end = x.endDate;
            newEvent.resourceId = x.testFacilityId;
            newEvent.url = '';
            newEvent.title = "Hello AJay";
            $("#calendar").fullCalendar('renderEvent', newEvent);
        });
        var selectedEvent = $("#calendar").fullCalendar('clientEvents', this.selectedTestRequestId);
        // Clearing the test facility Name
        this.selectedTestFacilityForSchedule = null;
        //  We can add an event here using the renderEvent or renderEvents  .fullCalendar( 'renderEvent', event [, stick ] )
    };
    TitanCalendarComponent.prototype.onSubmitMoveTestFacilitySchedule = function (formValues) {
        var _this = this;
        this.testfacilityservice.postMoveTest(this.moveTestFacilityEvent).subscribe(function (res) {
            console.log("This is the move boy", res);
            _this.displayMoveDialog = false;
        });
    };
    TitanCalendarComponent.prototype.generateTestFacilitySelectItems = function (items, retDistict) {
        var selectedItems = [];
        var unique = {};
        items.forEach(function (x) {
            var key = x.name;
            if (!unique[key]) {
                selectedItems.push({ label: x.name, value: x.id });
                unique[key] = true;
            }
        });
        console.log("after generateTestFacilitySelectItems", selectedItems);
        return selectedItems;
    };
    TitanCalendarComponent.prototype.testOperatorsForBlockChange = function (rowData, index) {
        console.log("testOperatorsForBlockChange", rowData, index);
        // For newly added items, we dont have to change the status from new
        if (this.testOperatorsForBlock[index].action !== 'new') {
            this.testOperatorsForBlock[index].action = 'modify';
        }
    };
    TitanCalendarComponent.prototype.removeOperator = function (index, operatorBlock) {
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
    };
    TitanCalendarComponent.prototype.removeFacility = function (row) {
        var _this = this;
        var freeViewModel = { testFacilityScheduleId: row.testFacilityScheduleId, entityId: this.selectedTestRequestId };
        this.testfacilityservice.postFree(freeViewModel).subscribe(function (res) {
            if (res.result.isSuccess) {
                _this.scheduledTestFacilities = _this.scheduledTestFacilities.filter(function (el) {
                    return el.testFacilityScheduleId !== row.testFacilityScheduleId;
                });
                $("#calendar").fullCalendar('removeEvents', row.testFacilityScheduleId);
            }
        });
        // Now make an Ajax call to remove the row
    };
    //#endregion Assign Resources Region
    //#region Move
    TitanCalendarComponent.prototype.cancelMove = function (event) {
        console.log("--invoking revert function");
        this.moveRevertFunction();
        this.displayMoveDialog = false;
    };
    //#endregion move
    //#region Split
    TitanCalendarComponent.prototype.saveSplitEventChanges = function (uiEvent) {
        debugger;
        console.log("Hello", "saveSplitEventChanges");
        this.displaySplitDialog = false;
        this.testfacilityservice.postSplitTestFacilityEvent(this.splitTestFacilityEvent).subscribe(function (res) {
            console.log("Hello", res);
        });
    };
    TitanCalendarComponent = __decorate([
        core_1.Component({
            selector: 'calendar',
            templateUrl: 'app/body/calendar/titancalendar.component.html'
        })
    ], TitanCalendarComponent);
    return TitanCalendarComponent;
}());
exports.TitanCalendarComponent = TitanCalendarComponent;
