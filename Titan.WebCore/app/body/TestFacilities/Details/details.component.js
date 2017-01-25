"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var titanapiurl_1 = require('../../../shared/services/apiurlconst/titanapiurl');
var core_1 = require('@angular/core');
var moment = require('moment/moment');
var DetailsComponent = (function () {
    function DetailsComponent(breadCrumbsService, loggerService, route, router, testFacilityService, entityIdentifierService, formSchemaCategoryService, formInstanceService, formSchemaService, testfacilityroleservice, buildlevelservice, teststatusservice, testroleservice, projectservice, testmodeservice, testtypeservice, testfacilityattachmentservice) {
        var _this = this;
        this.breadCrumbsService = breadCrumbsService;
        this.loggerService = loggerService;
        this.route = route;
        this.router = router;
        this.testFacilityService = testFacilityService;
        this.entityIdentifierService = entityIdentifierService;
        this.formSchemaCategoryService = formSchemaCategoryService;
        this.formInstanceService = formInstanceService;
        this.formSchemaService = formSchemaService;
        this.testfacilityroleservice = testfacilityroleservice;
        this.buildlevelservice = buildlevelservice;
        this.teststatusservice = teststatusservice;
        this.testroleservice = testroleservice;
        this.projectservice = projectservice;
        this.testmodeservice = testmodeservice;
        this.testtypeservice = testtypeservice;
        this.testfacilityattachmentservice = testfacilityattachmentservice;
        this.hasNextMaintenanceDate = false;
        this.isMaintenaceFrequencySelected = false;
        this.isCronControlInitialized = false;
        this.IsTestFacilityDelete = false;
        this.titanApiUrl = titanapiurl_1.titanApiUrl;
        this.selectedCategory = 'a366476b-1249-4c9b-b3b8-072cbab81e80';
        this.IsKeepOpen = false;
        // Form Related variables
        this.entityIdentifierName = 'TestFacility';
        this.entityIdentifierInfo = {};
        this.formSchemaCategories = [];
        this.formSchemaInfo = {};
        this.formSchemaData = []; // new FormSchema('', []);
        this.formSchemaDataGridMF = [];
        //region Grid -- FormInstance Filled
        this.gridFormInstanceData = [];
        this.formInstanceUpdateView = false;
        this.fieldsFP = [];
        this.displayPreviewSelectedForm = false;
        this.selectedFormFields = [];
        // End of Form Display
        // FormInstance variables
        this.displayFormInsanceForm = false;
        // End Of Form Related Variables
        this.notificationMsgs = [];
        this.testModes = new Array();
        this.selectedUserNames = new Array();
        this.filteredUserNames = new Array();
        this.filteredSelectedUserNames = new Array();
        this.displayEquipmentDialog = false;
        this.entityType = "TestFacility";
        this.entityId = this.id;
        this.filepath = "TestFacility";
        this.testFacility = { name: '', maintenanceFrequency: '', nextMaintenanceDate: '', lastMaintenanceDate: '' };
        this.address = { addressLine1: '', addressLine2: '', city: '', state: '', postalCode: '' };
        // Hide show Tab Panels
        this.displayEquipmentTab = false;
        this.displayScheduleTab = false;
        this.model = {
            id: '',
            isDeleted: false,
            name: '',
            createdOn: '',
            modifiedOn: '',
            userCreatedById: '',
            userInChargedId: '',
            userModifiedById: ''
        };
        this.uploadedFiles = [];
        this.tabLoadStatus = [
            { loaded: true, method: this.loadDetailsTabViews },
            { loaded: false, method: this.loadEquipmentTabViews },
            { loaded: false, method: this.loadScheduleTabViews },
            { loaded: false, method: this.loadMaintainanceTabViews },
            { loaded: false, method: this.loadAttachmentsTabViews },
            { loaded: false, method: this.loadLogsTabViews }
        ];
        this.loggerService.setShow(false);
        this.loggerService.logConsole("Router ----------", this.router.url);
        this.route.params.subscribe(function (params) { return _this.id = params['id']; });
        this.entityId = this.id;
        var breadC = this.breadCrumbsService.getBreadCrumbs();
        var testFacilitiesDetailsBreadCrumb = breadC.filter(function (filter) {
            return filter.pageName === 'TestFacilitiesDetailsPage';
        })[0];
        this.breadcrumbs = [];
        this.breadcrumbs = testFacilitiesDetailsBreadCrumb.items;
        this.breadcrumbsHome = { routerLink: ['/'] };
        this.loggerService.logConsole("---- TF Details ID Param -----", this.id);
    }
    DetailsComponent.prototype.ngOnInit = function () {
        if (this.id) {
            // TODO: Replace this with a breadcrumb data service.
            // this.breadcrumbs = [];
            // this.breadcrumbs.push({ label: 'Test Facilities', routerLink: ['/testfacilities']});
            // TODO: Find out why the home link does not use the pointer icon for its hover state.
            // this.breadcrumbsHome = { routerLink: ['/'] };
            this.getTestFacilityById();
            this.GetTenantsByTestFacilityId();
            this.getTestFacilityRoleService();
            this.getDepartments();
            this.getUserRoles();
            this.getOperatingHours();
            this.getMaintenanceFrequencies();
        }
    };
    DetailsComponent.prototype.frequencyInit = function () {
        if (this.testFacility.maintenanceFrequency != null && this.testFacility.maintenanceFrequency != "") {
            this.selectedMaintenanceFrequency = this.testFacility.maintenanceFrequency;
            this.isMaintenaceFrequencySelected = true;
            $("#selector").cron({
                initial: this.selectedMaintenanceFrequency,
                onChange: function () {
                    this.selectedMaintenanceFrequency = $(this).cron("value");
                }, useGentleSelect: false
            });
            this.isCronControlInitialized = true;
        }
        else {
            this.selectedMaintenanceFrequency = "0 0 1 1 *";
            this.isMaintenaceFrequencySelected = false;
        }
    };
    DetailsComponent.prototype.showHideCronPicker = function () {
        console.log("--inside cronpicker show hide");
        debugger;
        if (this.isMaintenaceFrequencySelected) {
            if (!this.isCronControlInitialized) {
                $("#selector").cron({
                    initial: this.selectedMaintenanceFrequency,
                    onChange: function () {
                        this.selectedMaintenanceFrequency = $(this).cron("value");
                    }, useGentleSelect: false
                });
            }
        }
        else {
        }
    };
    DetailsComponent.prototype.ngAfterViewInit = function () {
        //var frequency: any;
    };
    DetailsComponent.prototype.onTestFacilityDelete = function () {
        if (this.IsTestFacilityDelete)
            this.testFacilityService.DeleteTestFacility(this.id).subscribe(function (res) {
                return console.log('-----delete-------', res);
            });
    };
    DetailsComponent.prototype.downloadAttachment = function (attachment) {
        window.open(titanapiurl_1.titanApiUrl + '/TestFacilityAttachment/file/' + attachment.id);
    };
    DetailsComponent.prototype.loadDetailsTabViews = function (me) {
    };
    DetailsComponent.prototype.loadMaintainanceTabViews = function (me) {
        me.getEntityIdentifierInfo();
    };
    DetailsComponent.prototype.loadLogsTabViews = function (me) {
        me.GetLogCommentsByTestFacilityId();
    };
    DetailsComponent.prototype.loadAttachmentsTabViews = function (me) {
        me.getCategories();
        me.getTestFacilityAttachmentServiceById();
    };
    DetailsComponent.prototype.loadScheduleTabViews = function (me) {
        //schedule tab
        me.getUserRoles();
        me.getTestFacilities();
        me.getTestModes();
        me.getTestTypes();
        me.getBuildLevels();
        me.getTestStatus();
        me.getProjectCodes();
        me.getTestRoles();
        me.getTestFacilityRoleService();
        me.displayScheduleTab = true;
        $("#calendar").parent('.ui-tabview-panel').show();
        var ref = me;
        setTimeout(function () { ref.initSchedule(); }, 10);
    };
    DetailsComponent.prototype.loadEquipmentTabViews = function (me) {
        me.getTestFacilities();
        // me.getavailableTestFacilities();
        // me.getavailableEquipments();
        me.getTestFacilityEquipmentById();
        me.getEquipmentsToAdd();
    };
    DetailsComponent.prototype.handleChange = function (event) {
        var load = this.tabLoadStatus[event.index];
        if (!load.loaded) {
            load.method(this);
            load.loaded = true;
        }
    };
    DetailsComponent.prototype.initSchedule = function () {
        var scheduleConfig = {
            theme: true,
            header: {
                left: 'prev,next today',
                center: 'title',
                right: 'month,basicWeek,basicDay,listMonth'
            },
            editable: true,
            eventSources: []
        };
        scheduleConfig.eventSources = [function (start, end, timezone, callback) {
                $.ajax({
                    url: titanapiurl_1.titanApiUrl + 'TestFacility/Schedule',
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
                    url: titanapiurl_1.titanApiUrl + 'TestFacility/Schedule',
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
    };
    DetailsComponent.prototype.onUserRoleChange = function (event) {
        this.selectedRole = (event.value);
    };
    DetailsComponent.prototype.onDepartmentChange = function (event) {
        this.selectedDepartment = (event.value);
    };
    DetailsComponent.prototype.onEquipmentChange = function (event) {
        this.selectedEquipment = (event.value.id);
        //   this.EquipmentSubType.calibrationform = (event);
    };
    DetailsComponent.prototype.onMaintenanceFrequencyChange = function (event) {
        this.selectedMaintenanceFrequency = (event.value);
    };
    DetailsComponent.prototype.onOperatingHourChange = function (event) {
        this.selectedOperatingHour = (event.value);
    };
    DetailsComponent.prototype.onTestRoleChange = function (event) {
        this.selectedTestRoles = (event.value);
    };
    DetailsComponent.prototype.onBuildLevelChange = function (event) {
        this.selectedBuildLevels = (event.value);
    };
    DetailsComponent.prototype.onProjectCodeChange = function (event) {
        this.selectedProjectCodes = (event.value);
    };
    DetailsComponent.prototype.onCategoryChange = function (event) {
        this.selectedCategory = (event.value);
    };
    DetailsComponent.prototype.onTestFacilityChange = function (event) {
        this.selectedTestFacilities = (event.value);
    };
    DetailsComponent.prototype.onTestModeChange = function (event) {
        this.selectedTestModes = (event.value);
        //   this.EquipmentSubType.calibrationform = (event);
    };
    DetailsComponent.prototype.onTestTypeChange = function (event) {
        this.selectedTestTypes = (event.value);
        //   this.EquipmentSubType.calibrationform = (event);
    };
    DetailsComponent.prototype.onTestStatusChange = function (event) {
        this.selectedTestStatuses = (event.value);
        //this.testFacilityService.getFilteredEvents(this.selectedTestStatuses, this.selectedTestStatuses, this.selectedTestStatuses, this.selectedTestStatuses, this.selectedTestStatuses, this.selectedTestStatuses, this.selectedTestStatuses)
        //    .subscribe(TestFacilityEvents => {
        //        this.loggerService.logConsole('-----------  TestFacilitiesEvents------------------', TestFacilityEvents);
        //        //this.TestFacilityEvents = TestFacilityEvents;
        //    });
        //   this.EquipmentSubType.calibrationform = (event);
    };
    DetailsComponent.prototype.showEquipmentDialog = function (event) {
        this.displayEquipmentDialog = true;
        this.selectedEquipmentId = event.equipmentId;
        //this.selectedCalibration = null;
        //this.EquipmentSubType = new PrimeEquipmentSubType('', '', '', '', '', '', this.id);
        //this.displayDialog = true;
        // this.IsSubType= true;
    };
    DetailsComponent.prototype.moveEquipmenttoTestFacility = function () {
        var _this = this;
        if (this.selectedTestFacilities == null || this.selectedTestFacilities == undefined) {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: 'Please select Test Facility', detail: '' });
            return null;
        }
        var postbody = {
            'equipmentId': this.selectedEquipmentId,
            'facilityId': this.selectedTestFacilities
        };
        this.testFacilityService.moveEquipmenttoTestFacility(postbody).subscribe(function (res) {
            _this.displayEquipmentDialog = false;
            _this.testFacilityService.getEquipmentsByIdusing(_this.id)
                .subscribe(function (res) {
                _this.TestFacilityEquipments = res;
            });
        });
        // selected testfacility,selectedequipment info .... call to assign testfacility to equipment
    };
    DetailsComponent.prototype.GetTenantsByTestFacilityId = function () {
        var _this = this;
        this.testFacilityService.getTenants(this.id)
            .subscribe(function (res) {
            _this.testFacilityTenants = res;
        });
    };
    DetailsComponent.prototype.GetLogCommentsByTestFacilityId = function () {
        var _this = this;
        this.testFacilityService.getLogComments(this.id)
            .subscribe(function (res) {
            _this.testFacilityLogComments = res;
        });
    };
    DetailsComponent.prototype.getUserRoles = function () {
        var _this = this;
        //    userRoles
        this.testFacilityService.getRoles().subscribe(function (response) {
            _this.userRoles = new Array();
            if (response != null) {
                var resultMap = new Array();
                resultMap.push({
                    label: "Select User Role",
                    value: null
                });
                for (var _i = 0, response_1 = response; _i < response_1.length; _i++) {
                    var template = response_1[_i];
                    var temp = {
                        label: template.name,
                        value: template.id
                    };
                    resultMap.push(temp);
                }
                _this.userRoles = resultMap;
            }
        });
    };
    DetailsComponent.prototype.getCategories = function () {
        var _this = this;
        //    userRoles
        this.testFacilityService.getCategories().subscribe(function (response) {
            _this.categories = new Array();
            if (response != null) {
                var resultMap = new Array();
                resultMap.push({
                    label: "Select Category",
                    value: null
                });
                for (var _i = 0, response_2 = response; _i < response_2.length; _i++) {
                    var template = response_2[_i];
                    var temp = {
                        label: template.name,
                        value: template.id
                    };
                    resultMap.push(temp);
                }
                _this.categories = resultMap;
            }
        });
    };
    DetailsComponent.prototype.getDepartments = function () {
        var _this = this;
        //    userRoles
        this.testFacilityService.getDepartments().subscribe(function (response) {
            _this.departments = new Array();
            if (response != null) {
                var resultMap = new Array();
                resultMap.push({
                    label: "Select Department",
                    value: null
                });
                for (var _i = 0, response_3 = response; _i < response_3.length; _i++) {
                    var template = response_3[_i];
                    var temp = {
                        label: template.name,
                        value: template.id
                    };
                    resultMap.push(temp);
                }
                _this.departments = resultMap;
            }
        });
    };
    DetailsComponent.prototype.getMaintenanceFrequencies = function () {
        var _this = this;
        //    userRoles
        this.testFacilityService.getMaintenanceFrequencies().subscribe(function (response) {
            _this.maintenanceFrequencies = new Array();
            if (response != null) {
                var resultMap = new Array();
                resultMap.push({
                    label: "Select Maintenance Frequency",
                    value: null
                });
                for (var _i = 0, response_4 = response; _i < response_4.length; _i++) {
                    var template = response_4[_i];
                    var temp = {
                        label: template.frequency,
                        value: template.id
                    };
                    resultMap.push(temp);
                }
                _this.maintenanceFrequencies = resultMap;
            }
        });
    };
    DetailsComponent.prototype.getOperatingHours = function () {
        var _this = this;
        //    userRoles
        this.testFacilityService.getOperatingHours().subscribe(function (response) {
            _this.operatingHours = new Array();
            if (response != null) {
                var resultMap = new Array();
                resultMap.push({
                    label: "Select Operating Hours",
                    value: null
                });
                for (var _i = 0, response_5 = response; _i < response_5.length; _i++) {
                    var template = response_5[_i];
                    var temp = {
                        label: template.name,
                        value: template.id
                    };
                    resultMap.push(temp);
                }
                _this.operatingHours = resultMap;
            }
        });
    };
    // getavailableEquipments() {
    //       //    userRoles
    //       this.testFacilityService.getEquipments(this.id).subscribe(response => {
    //           this.equipments = new Array();
    //           if (response != null) {
    //               var resultMap = new Array();
    //               resultMap.push({
    //                   label: "Select Equipment",
    //                   value: null
    //               });
    //               for (let template of response) {
    //                   var temp = {
    //                       label: template.name,
    //                       value: template.id
    //                   }
    //                   resultMap.push(temp);
    //               }
    //               this.equipments = resultMap;
    //           }
    //       });
    //   }
    DetailsComponent.prototype.getEquipmentsToAdd = function () {
        var _this = this;
        //    userRoles
        this.testFacilityService.getEquipmentsToAdd(this.id).subscribe(function (response) {
            _this.equipmentsToAdd = [];
            if (response != null) {
                var resultMap = [];
                resultMap.push({
                    label: "Select Equipment",
                    value: { id: '', name: '', serialNumber: '', testFacilityName: '' }
                });
                for (var _i = 0, response_6 = response; _i < response_6.length; _i++) {
                    var template = response_6[_i];
                    var temp = {
                        label: template.name,
                        //value: template.id
                        value: { id: template.id, name: template.name, serialNumber: template.serialNumber, testFacilityName: template.testFacilityName }
                    };
                    resultMap.push(temp);
                }
                console.log("equipments", resultMap);
                _this.equipmentsToAdd = resultMap;
            }
        });
    };
    DetailsComponent.prototype.getTestRoles = function () {
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
        });
    };
    DetailsComponent.prototype.getTestFacilityById = function () {
        var _this = this;
        this.testFacilityService.getById(this.id)
            .subscribe(function (res) {
            //this.formConfiguration = res.formConfiguration;
            //this.formObject = res.formObject;
            _this.address = res.address;
            _this.addressid = res.address.id;
            _this.testFacility = res.testFacility;
            _this.frequencyInit();
            //  onMaintenanceNeeded();
            _this.testFacility.maintenanceFrequency = res.testFacility.maintenanceFrequency;
            if (res.testFacility.nextMaintenanceDate != null) {
                _this.hasNextMaintenanceDate = true;
            }
            //  this.lastMaintenanceDate = new Date(res.testFacility.lastMaintenanceDate);
            _this.testFacility.lastMaintenanceDate = new Date(res.testFacility.lastMaintenanceDate);
            // this.testFacility.lastMaintenanceDate = new Date(this.testFacility.lastMaintenanceDate);
            //    this.selectedOperatingHour = res.testFacility.operatingHourName;
            //  this.selectedMaintenanceFrequency = res.testFacility.frequency;
            //this.model = res.formObject;
            //this.loggerService.logConsole("----- Result of formConfiguration -----", this.formConfiguration.fields.$values);
            //this.loggerService.logConsole("----- Result of formObject -----", this.model);
        });
        if (this.id) {
            this.testFacilityService.getNotifications(this.id)
                .subscribe(function (res) {
                if (res) {
                    _this.notifications = res;
                }
                _this.notifications.forEach(function (x) {
                    _this.notificationMsgs.push({ severity: 'warn', summary: x.ruleMessage, detail: x.description });
                });
            });
        }
    };
    DetailsComponent.prototype.getavailableTestFacilities = function () {
        var _this = this;
        //    userRoles
        this.testFacilityService.getAvailableTestFacilities(this.id).subscribe(function (response) {
            _this.testFacilities = new Array();
            //  this.currentTestFacilities = new Array();
            if (response != null) {
                var resultMap = new Array();
                resultMap.push({
                    label: "Select Test Facility",
                    value: null
                });
                for (var _i = 0, response_7 = response; _i < response_7.length; _i++) {
                    var template = response_7[_i];
                    var temp = {
                        label: template.name,
                        value: template.id
                    };
                    resultMap.push(temp);
                }
                //   this.currentTestFacilities = resultMap.filter(tf => tf.value != this.id);
                _this.testFacilities = resultMap;
            }
        });
    };
    DetailsComponent.prototype.getTestFacilities = function () {
        var _this = this;
        //    userRoles
        this.testFacilityService.getTestFacilities().subscribe(function (response) {
            _this.testFacilities = new Array();
            _this.currentTestFacilities = new Array();
            if (response != null) {
                var resultMap = new Array();
                resultMap.push({
                    label: "Select Test Facility",
                    value: null
                });
                for (var _i = 0, response_8 = response; _i < response_8.length; _i++) {
                    var template = response_8[_i];
                    var temp = {
                        label: template.name,
                        value: template.id
                    };
                    resultMap.push(temp);
                }
                _this.currentTestFacilities = resultMap.filter(function (tf) { return tf.value != _this.id; });
                _this.testFacilities = resultMap;
            }
        });
    };
    DetailsComponent.prototype.getTestModes = function () {
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
        });
    };
    DetailsComponent.prototype.getTestTypes = function () {
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
        });
    };
    DetailsComponent.prototype.getTestStatus = function () {
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
                for (var _i = 0, response_9 = response; _i < response_9.length; _i++) {
                    var template = response_9[_i];
                    var temp = {
                        label: template.name,
                        value: template.id
                    };
                    resultMap.push(temp);
                }
                _this.testStatus = resultMap;
            }
        });
    };
    DetailsComponent.prototype.getProjectCodes = function () {
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
        });
    };
    DetailsComponent.prototype.getBuildLevels = function () {
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
        });
    };
    DetailsComponent.prototype.getTestFacilityRoleService = function () {
        var _this = this;
        this.testfacilityroleservice.getByIdusing(this.id)
            .subscribe(function (TestFacilityRoles) {
            _this.TestFacilityRoles = TestFacilityRoles;
        });
    };
    DetailsComponent.prototype.getTestFacilityAttachmentServiceById = function () {
        var _this = this;
        this.testfacilityattachmentservice.getByIdusing(this.id)
            .subscribe(function (TestFacilityAttachments) {
            _this.TestFacilityAttachments = TestFacilityAttachments;
        });
    };
    DetailsComponent.prototype.getTestFacilityEquipmentById = function () {
        var _this = this;
        this.testFacilityService.getEquipmentsByIdusing(this.id)
            .subscribe(function (res) {
            _this.TestFacilityEquipments = res;
        });
    };
    DetailsComponent.prototype.onAddUserRole = function () {
        var _this = this;
        if (!this.IsKeepOpen)
            this.displayAssignUserRolesDialog = false;
        else
            this.displayAssignUserRolesDialog = true;
        if (this.filteredSelectedUserNames.length == 0) {
            this.msgs = [];
            this.msgs.push({ severity: 'warn', summary: 'Please Select User', detail: '' });
            return null;
        }
        if (this.selectedRole == null) {
            this.msgs = [];
            this.msgs.push({ severity: 'warn', summary: 'Please select Role', detail: '' });
            return null;
        }
        if ((this.TestFacilityRoles.find(function (tfr) { return tfr.role == "Primary Incharge"; }) != undefined) && (this.selectedRole == "1753ca8b-5162-4d98-8fc0-64ff08377ae8")) {
            this.msgs = [];
            this.msgs.push({ severity: 'warn', summary: 'Primary Incharge already assigned', detail: '' });
            return null;
        }
        if (this.filteredSelectedUserNames.length > 1 && this.selectedRole == "1753ca8b-5162-4d98-8fc0-64ff08377ae8") {
            this.msgs = [];
            this.msgs.push({ severity: 'warn', summary: 'Please select only one user for primary Incharge', detail: '' });
            return null;
        }
        if ((this.TestFacilityRoles.find(function (tfr) { return tfr.role == "Secondary Incharge"; }) != undefined) && (this.selectedRole == "c8d592a9-3cac-41c1-803d-c8f0464db0b8")) {
            this.msgs = [];
            this.msgs.push({ severity: 'warn', summary: 'Secondary Incharge already assigned', detail: '' });
            return null;
        }
        if (this.filteredSelectedUserNames.length > 1 && this.selectedRole == "c8d592a9-3cac-41c1-803d-c8f0464db0b8") {
            this.msgs = [];
            this.msgs.push({ severity: 'warn', summary: 'Please select only one user for secondary Incharge', detail: '' });
            return null;
        }
        var selectedUserNames = new Array();
        for (var _i = 0, _a = this.filteredSelectedUserNames; _i < _a.length; _i++) {
            var sel = _a[_i];
            selectedUserNames.push(sel.id);
        }
        //var inputDto = {
        //    testRequirementList: selectedTestRequirementIds
        //}
        this.testFacilityService.postAddUserNames(selectedUserNames, this.id, this.selectedRole).subscribe(function (filteredList) {
            _this.selectedUserNames = filteredList.$values;
            _this.filteredSelectedUserNames = null;
            _this.testfacilityroleservice.getByIdusing(_this.id)
                .subscribe(function (TestFacilityRoles) {
                _this.TestFacilityRoles = TestFacilityRoles;
                if (_this.selectedRole == "1753ca8b-5162-4d98-8fc0-64ff08377ae8" || _this.selectedRole == "c8d592a9-3cac-41c1-803d-c8f0464db0b8") {
                    _this.testFacilityService.getNotifications(_this.id)
                        .subscribe(function (res) {
                        if (res) {
                            _this.notifications = res;
                            if (res.length == 0) {
                                _this.notificationMsgs = [];
                            }
                        }
                        _this.notifications.forEach(function (x) {
                            _this.notificationMsgs.push({ severity: 'warn', summary: x.ruleMessage, detail: x.description });
                        });
                    });
                }
                _this.selectedRole = null;
            });
        });
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'User Added', detail: '' });
    };
    DetailsComponent.prototype.onAddDepartment = function () {
        var _this = this;
        if (this.selectedDepartment == null) {
            this.msgs = [];
            this.msgs.push({ severity: 'warn', summary: 'Search any department to add', detail: '' });
            return null;
        }
        if (!this.IsKeepOpen)
            this.displayAssignDepartmentsDialog = false;
        else
            this.displayAssignDepartmentsDialog = true;
        this.testFacilityService.postAddDepartment(this.id, this.selectedDepartment).subscribe(function (filteredList) {
            _this.testFacilityService.getTenants(_this.id)
                .subscribe(function (res) {
                _this.testFacilityTenants = res;
                _this.selectedDepartment = null;
            });
        });
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Department Added', detail: '' });
    };
    DetailsComponent.prototype.onAssignEquipments = function () {
        this.displayAssignEquipmentsDialog = true;
        //this.getEquipmentsToAdd();
    };
    DetailsComponent.prototype.AddLogComment = function () {
        var _this = this;
        if (this.comment == null || this.comment == '') {
            this.msgs = [];
            this.msgs.push({ severity: 'warn', summary: 'Please write any comment', detail: '' });
            return null;
        }
        this.testFacilityService.PostLogComments(this.id, JSON.stringify(this.comment)).subscribe(function (filteredList) {
            _this.testFacilityService.getLogComments(_this.id)
                .subscribe(function (res) {
                _this.testFacilityLogComments = res;
            });
        });
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Comment saved', detail: '' });
    };
    DetailsComponent.prototype.onAddEquipment = function () {
        var _this = this;
        if (this.selectedEquipment == null) {
            this.msgs = [];
            this.msgs.push({ severity: 'warn', summary: 'Search any equipment to add', detail: '' });
            return null;
        }
        if (!this.IsKeepOpen)
            this.displayAssignEquipmentsDialog = false;
        else
            this.displayAssignEquipmentsDialog = true;
        this.testFacilityService.postAddEquipment(this.id, this.selectedEquipment).subscribe(function (filteredList) {
            _this.testFacilityService.getEquipmentsByIdusing(_this.id)
                .subscribe(function (res) {
                _this.TestFacilityEquipments = res;
                _this.selectedEquipment = null;
            });
        });
        this.msgs = [];
        this.msgs.push({ severity: 'success', summary: 'Success', detail: '' });
    };
    DetailsComponent.prototype.filterUserNames = function (event) {
        var _this = this;
        this.testFacilityService.filterByUserNames(event.query).subscribe(function (filteredList) {
            _this.filteredUserNames = filteredList.$values;
        });
    };
    DetailsComponent.prototype.onSubmit = function (formRef) {
        var _this = this;
        formRef.isDeleted = false;
        var formData = {
            id: this.id,
            name: '',
            description: '',
            operatingHourId: '',
            maintenanceFrequency: '',
            lastMaintenanceDate: '',
            address: {
                id: '',
                addressLine1: '',
                addressLine2: '',
                city: '',
                state: '',
                postalCode: '',
            }
        };
        formData.id = this.id;
        formData.description = formRef.description;
        formData.name = formRef.name;
        formData.operatingHourId = this.selectedOperatingHour;
        formData.lastMaintenanceDate = this.testFacility.lastMaintenanceDate;
        if (this.isMaintenaceFrequencySelected) {
            formData.maintenanceFrequency = $('#selector').cron("value");
        }
        else {
            formData.maintenanceFrequency = '';
        }
        formData.address.id = this.addressid;
        formData.address.addressLine1 = formRef.addressLine1;
        formData.address.addressLine2 = formRef.addressLine2;
        formData.address.city = formRef.city;
        formData.address.state = formRef.state;
        formData.address.postalCode = formRef.postalCode;
        formData.locale = "en-us";
        this.testFacilityService.postUpdate(formData).subscribe(function (res) {
            if (res.isSuccess) {
                _this.testFacilityService.getById(_this.id)
                    .subscribe(function (res) {
                    //this.formConfiguration = res.formConfiguration;
                    //this.formObject = res.formObject;
                    _this.address = res.address;
                    _this.addressid = res.address.id;
                    _this.testFacility = res.testFacility;
                    _this.testFacility.maintenanceFrequency = res.testFacility.maintenanceFrequency;
                    //this.lastMaintenanceDate = res.testFacility.lastMaintenanceDate;
                    _this.testFacility.lastMaintenanceDate = new Date(res.testFacility.lastMaintenanceDate);
                    // if (res.testFacility.lastMaintenanceDate != null && res.testFacility.maintenanceFrequency != null) {
                    if (res.testFacility.nextMaintenanceDate != null) {
                        _this.hasNextMaintenanceDate = true;
                    }
                });
                _this.msgs = [];
                _this.msgs.push({ severity: 'info', summary: 'saved', detail: '' });
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'warn', summary: res.errorMessage, detail: '' });
            }
        });
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'saved', detail: '' });
    };
    DetailsComponent.prototype.onBeforeUpload = function (event) {
        for (var _i = 0, _a = event.files; _i < _a.length; _i++) {
            var file = _a[_i];
            this.uploadedFiles.push(file);
        }
    };
    DetailsComponent.prototype.onDelete = function (TestFacilityAttachment) {
        var _this = this;
        this.testfacilityattachmentservice.DeleteAttachmentsById(TestFacilityAttachment.id)
            .subscribe(function (res) {
            _this.testfacilityattachmentservice.getByIdusing(_this.id)
                .subscribe(function (TestFacilityAttachments) {
                _this.TestFacilityAttachments = TestFacilityAttachments;
            });
        });
    };
    DetailsComponent.prototype.onDeleteUserRoleMap = function (event) {
        var _this = this;
        this.testFacilityService.DeleteUserRoleMap(event)
            .subscribe(function (res) {
            _this.testfacilityroleservice.getByIdusing(_this.id)
                .subscribe(function (TestFacilityRoles) {
                _this.TestFacilityRoles = TestFacilityRoles;
                _this.testFacilityService.getNotifications(_this.id)
                    .subscribe(function (res) {
                    if (res) {
                        _this.notifications = res;
                        if (res.length == 0) {
                            _this.notificationMsgs = [];
                        }
                    }
                    _this.notifications.forEach(function (x) {
                        _this.notificationMsgs.push({ severity: 'warn', summary: x.ruleMessage, detail: x.description });
                    });
                });
            });
        });
    };
    DetailsComponent.prototype.onDeleteEquipmentMap = function (event) {
        var _this = this;
        this.testFacilityService.DeleteEquipmentMap(event)
            .subscribe(function (res) {
            _this.testFacilityService.getEquipmentsByIdusing(_this.id)
                .subscribe(function (res) {
                _this.TestFacilityEquipments = res;
            });
        });
    };
    DetailsComponent.prototype.onDeleteTenantMap = function (event) {
        var _this = this;
        this.testFacilityService.DeleteTenantMap(event)
            .subscribe(function (res) {
            _this.testFacilityService.getTenants(_this.id)
                .subscribe(function (res) {
                _this.testFacilityTenants = res;
            });
        });
    };
    DetailsComponent.prototype.onUpload = function (event) {
        var _this = this;
        for (var _i = 0, _a = event.files; _i < _a.length; _i++) {
            var file = _a[_i];
            this.uploadedFiles.push(file);
        }
        this.testfacilityattachmentservice.getByIdusing(this.id)
            .subscribe(function (TestFacilityAttachments) {
            _this.TestFacilityAttachments = TestFacilityAttachments;
            _this.selectedCategory = null;
        });
        //this.msgs = [];
        //this.msgs.push({ severity: 'info', summary: 'File Uploaded', detail: '' });
    };
    DetailsComponent.prototype.getEntityIdentifierInfo = function () {
        var _this = this;
        this.getGridFormInstanceInformationData();
        // Getting Entity Identifier Id first To get All The Form Categories
        this.entityIdentifierService.getByNameForForms(this.entityIdentifierName)
            .subscribe(function (res) {
            if (res.isSuccess) {
                _this.loggerService.logConsole("EntityIdentifierInfo Call ----------", res);
                _this.entityIdentifierInfo = res.result;
                // Getting All the Form Schema Categories with The EntityIdentifierId
                _this.formSchemaCategoryService.getByEntityIdentifierId(_this.entityIdentifierInfo.id)
                    .subscribe(function (fsCategory) {
                    _this.loggerService.logConsole("FormSchemaCategoryInfo ----------", fsCategory);
                    if (fsCategory.isSuccess) {
                        _this.loggerService.logConsole("Form Schema Category List-------------", res);
                        _this.formSchemaCategories = fsCategory.result;
                        var listFormSchemaCaterory = fsCategory.result.map(function (newRes) {
                            return { label: newRes.name, value: newRes.id, entityIdentifierId: newRes.entityIdentifierId };
                        });
                        _this.formSchemaCategoryList = [];
                        _this.formSchemaCategoryList.push({ label: 'Select Category', value: null });
                        _this.formSchemaCategoryList = _this.formSchemaCategoryList.concat(listFormSchemaCaterory);
                        _this.loggerService.logConsole("FormSchemaCategoryList ---------", _this.formSchemaCategoryList);
                        _this.loggerService.logConsole("ListFormSchemaCategory -----------", listFormSchemaCaterory);
                        var fscIds = fsCategory.result.map(function (fsc) { return fsc.id; });
                        // Getting all the FormSchema created by the FormSchemaCategory by the EntityIdentifierId
                        _this.loggerService.logConsole("Form Schema Category Ids -----", fscIds);
                        _this.formSchemaService.getFormSchemaGridByEntityIdentifierId(_this.entityIdentifierInfo.id)
                            .subscribe(function (res) {
                            if (res.isSuccess) {
                                _this.loggerService.logConsole("FSGridByEntityIdentifierId ----------", res.result);
                                _this.formSchemaDataGridMF = res.result;
                                _this.formSchemaDataGridMF = _this.formSchemaDataGridMF.map(function (x) {
                                    x.createdOn = moment(x.createdOn).format("MM-DD-YYYY").toString();
                                    return x;
                                });
                            }
                        });
                        _this.formSchemaService.getByFormSchemaCategoryId(fscIds[1])
                            .subscribe(function (formSchemaResult) {
                            _this.loggerService.logConsole("FormSchema Result by FormSchemaCategory ------", formSchemaResult);
                            _this.formSchemaData = formSchemaResult.result;
                            _this.loggerService.logConsole("FormSchemaData ----------", _this.formSchemaData);
                        });
                        _this.formSchemaService.getByFormSchemaCategoryIdCol(fscIds)
                            .subscribe(function (formSchemaResult) {
                            _this.loggerService.logConsole("FormSchema Result by FormSchemaCategory ------", formSchemaResult);
                            if (formSchemaResult.isSuccess) {
                                _this.formSchemaData = formSchemaResult.result;
                                _this.loggerService.logConsole("FormSchemaData ----------", _this.formSchemaData);
                            }
                            else {
                                _this.formSchemaData = [];
                            }
                        });
                    }
                });
            }
            else {
            }
        });
    };
    DetailsComponent.prototype.getGridFormInstanceInformationData = function () {
        var _this = this;
        // Getting Grid for FormInstance by this TestFacility Id
        this.formInstanceService.getGridByEntityId(this.id)
            .subscribe(function (res) {
            _this.loggerService.logConsole("GridFormInstance Data ------", res);
            if (res.isSuccess) {
                _this.gridFormInstanceData = res.result;
            }
        });
    };
    DetailsComponent.prototype.closeFormPreviewDialog = function () {
        this.displayPreviewSelectedForm = false;
        this.selectedFormName = '';
        this.selectedFormFields = [];
        this.loggerService.logConsole("After Closed Dialog FormName -------", this.selectedFormName || "reseted");
        this.loggerService.logConsole("After Closed Dialog Form Schema To View clicked ----", this.selectedFormFields || "reseted");
        this.loggerService.logConsole("After Closed Dialog PreviewSelectedForm dialog display -------", this.displayPreviewSelectedForm || "reseted");
    };
    // Entering data to the form to create a Form Instance
    DetailsComponent.prototype.showFormInstance = function (formSchema) {
        this.loggerService.logConsole("ShowFOrmInstance ----", formSchema);
        this.selectedFormName = formSchema.name;
        this.formInstanceFormSchemaVersionId = formSchema.formSchemaVersion.id;
        this.formInstanceFields = formSchema.fields.$values;
        //this.formInstanceFormSchema = formSchema;*/
        this.displayFormInsanceForm = true;
    };
    DetailsComponent.prototype.closeFormInstanceDialog = function () {
        this.displayFormInsanceForm = false;
        this.selectedFormName = '';
        this.formInstanceFormSchemaVersionId = '';
        this.formInstanceFields = [];
        this.getGridFormInstanceInformationData();
    };
    DetailsComponent.prototype.createInstance = function (item) {
        this.selectedMaintenanceForm = item;
        //this.loggerService.logConsole("Create Instance -=----", item);
        this.getFormSchemaInfoSelectedByGridMF(false);
    };
    DetailsComponent.prototype.maintenanceFormRowSelect = function (item) {
        this.loggerService.logConsole("MaintenanceFormRowSelect --------", item);
        this.selectedMaintenanceForm = item;
        this.loggerService.logConsole("Selected Maintenance Item -------", this.selectedMaintenanceForm);
        this.getFormSchemaInfoSelectedByGridMF(true);
    };
    DetailsComponent.prototype.selectedFormToView = function (formName, formSchemaItems) {
        this.selectedFormName = formName;
        this.selectedFormSchemaFP = formSchemaItems;
        this.displayPreviewSelectedForm = true;
        // this.loggerService.logConsole("FormName -------", this.selectedFormName);
        //this.loggerService.logConsole("Form Schema To View clicked ----", this.selectedFormSchemaFP);
        //his.loggerService.logConsole("PreviewSelectedForm dialog display -------", this.displayPreviewSelectedForm);
    };
    DetailsComponent.prototype.getFormSchemaInfoSelectedByGridMF = function (formToView) {
        var _this = this;
        this.formSchemaService.getById(this.selectedMaintenanceForm.id)
            .subscribe(function (res) {
            _this.loggerService.logConsole("After selection from the MF ----", res);
            var formSchema = res.result;
            var f = formSchema.fields.$values;
            _this.fieldsFP = f;
            _this.loggerService.logConsole("FormSchema by Selected Form-----", formSchema);
            if (formToView) {
                _this.selectedFormToView(_this.selectedMaintenanceForm.name, res.result);
            }
            else {
                _this.showFormInstance(formSchema);
            }
        });
    };
    DetailsComponent.prototype.maintenanceInformationFormRowSelect = function (event) {
        var _this = this;
        this.formInstanceUpdateView = true;
        this.selectedMaintenanceForm = this.formSchemaDataGridMF.filter(function (filter) { return filter.id === _this.selectedGridFormInstance.formSchemaId; })[0];
        this.formInstanceId = this.selectedGridFormInstance.id;
        console.log("FormSchemaGridMF---------", this.formSchemaDataGridMF);
        console.log("SelectedGridFormInstance --------", this.selectedGridFormInstance);
        console.log("SelectedMaintance form -----", this.selectedMaintenanceForm);
        this.formInstanceUpdateNotes = this.selectedGridFormInstance.notes;
        this.formInstanceService.getById(this.selectedGridFormInstance.id)
            .subscribe(function (res) {
            _this.formInstanceUpdateData = res.result;
            _this.getFormSchemaInfoSelectedByGridMF(false);
        });
    };
    DetailsComponent = __decorate([
        core_1.Component({
            selector: 'details-testfacility',
            templateUrl: 'app/body/TestFacilities/Details/details.component.html'
        })
    ], DetailsComponent);
    return DetailsComponent;
}());
exports.DetailsComponent = DetailsComponent;
