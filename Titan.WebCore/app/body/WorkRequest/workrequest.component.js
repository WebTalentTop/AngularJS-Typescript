"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var WorkRequestComponent = (function () {
    function WorkRequestComponent(route, dataService, testfacilityservice, service, testtemplateservice, testrequestsensorserice, router, testverificationmethodservice, projectservice, testmodeservice, teststatusservice, testroleservice, testtypeservice, buildlevelservice, confirmservice, departmentservice, workrequestservice) {
        this.route = route;
        this.dataService = dataService;
        this.testfacilityservice = testfacilityservice;
        this.service = service;
        this.testtemplateservice = testtemplateservice;
        this.testrequestsensorserice = testrequestsensorserice;
        this.router = router;
        this.testverificationmethodservice = testverificationmethodservice;
        this.projectservice = projectservice;
        this.testmodeservice = testmodeservice;
        this.teststatusservice = teststatusservice;
        this.testroleservice = testroleservice;
        this.testtypeservice = testtypeservice;
        this.buildlevelservice = buildlevelservice;
        this.confirmservice = confirmservice;
        this.departmentservice = departmentservice;
        this.workrequestservice = workrequestservice;
        // qui
        this.gridData = [];
        this.confInfo = {};
        this.cols = [];
        this.gridFilter = {};
        this.IsThermoCouple = false;
        this.entityType = "TestFacility";
        this.filepath = "TestFacility";
        this.display = false;
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
        //this.route.params.subscribe(params => this.id = params['id']);
        //this.entityId = this.id;
        console.log("---- TF Details ID Param -----", this.id);
    }
    WorkRequestComponent.prototype.ngAfterViewInit = function () {
    };
    WorkRequestComponent.prototype.handleChange = function (event) {
        console.log('tes---', event);
        console.log('-------targetid-------', event.originalEvent.target.innerText);
    };
    WorkRequestComponent.prototype.OK = function () {
        this.display = false;
    };
    WorkRequestComponent.prototype.confirm1 = function () {
        this.display = true;
    };
    WorkRequestComponent.prototype.ngOnInit = function () {
        var _this = this;
        //this.getTestStages();
        //this.getDepartments();
        //this.getTestFacilities();
        //this.getTestModes();
        //this.getTestVerificationMethods();
        //this.getTestTypes();
        //this.getBuildLevels();
        //this.getTestStatus();
        //this.getProjectCodes();
        //this.getTestTemplates();
        //this.getTestRoles();
        //this.getHourEntryByEntityIdentifierId();
        //this.getDownTimeReasons();
        //let resData: any;
        // display all work requests
        this.workrequestservice.getworkRequestUrl()
            .subscribe(function (res) {
            _this.workRequests = res.result;
            //  resData = res;
            //this.gridData = res.Data;
            //this.cols = res.Configuration.Columns;
            ////console.log("-------- Cols --------", this.cols);
            //this.confInfo = res.Configuration;
            //console.log("------- Configuration --------", this.confInfo);
        });
        //this.testrequestsensorserice.GetAllTestRequestSensors()
        //    .subscribe(res => {
        //        this.sensorRequests = res.result;
        //        //  resData = res;
        //        //this.gridData = res.Data;
        //        //this.cols = res.Configuration.Columns;
        //        ////console.log("-------- Cols --------", this.cols);
        //        //this.confInfo = res.Configuration;
        //        //console.log("------- Configuration --------", this.confInfo);
        //    });
        //this.dataService.GetProjectId(this.id)
        //    .subscribe(res => {
        //        this.projectId = res.$values;
        //        //this.formConfiguration = res.formConfiguration;
        //        //this.formObject = res.formObject;
        //        //this.model = res.formObject;
        //        //console.log("----- Result of formConfiguration -----", this.formConfiguration.fields.$values);
        //        //console.log("----- Result of formObject -----", this.model);
        //    });
        //this.dataService.GetTrackingListByEntityId(this.id)
        //    .subscribe(res => {
        //        this.TrackingList = res.$values;
        //        //this.formConfiguration = res.formConfiguration;
        //        //this.formObject = res.formObject;
        //        //this.model = res.formObject;
        //        //console.log("----- Result of formConfiguration -----", this.formConfiguration.fields.$values);
        //        //console.log("----- Result of formObject -----", this.model);
        //    });
    };
    WorkRequestComponent.prototype.onTestStageChange = function (event) {
        console.log('------event------------', event);
        this.selectedTestStageId = (event.value);
        //   this.EquipmentSubType.calibrationform = (event);
    };
    WorkRequestComponent.prototype.onTestVerificationMethodChange = function (event) {
        console.log('------event------------', event);
        this.selectedTestVerificationMethods = (event.value);
        //   this.EquipmentSubType.calibrationform = (event);
    };
    WorkRequestComponent.prototype.onTestFacilityChange = function (event) {
        console.log('------event------------', event);
        this.selectedTestFacilities = (event.value);
        //   this.EquipmentSubType.calibrationform = (event);
    };
    WorkRequestComponent.prototype.onDownTimeReasonChange = function (event) {
        console.log('------event------------', event);
        this.selectedDownTimeReasonId = (event.value);
        //   this.EquipmentSubType.calibrationform = (event);
    };
    WorkRequestComponent.prototype.onTestRoleChange = function (event) {
        console.log('------event------------', event);
        this.selectedTestRoles = (event.value);
        //   this.EquipmentSubType.calibrationform = (event);
    };
    WorkRequestComponent.prototype.onDepartmentChange = function (event) {
        console.log('------event------------', event);
        this.selectedDepartment = (event.value);
        //   this.EquipmentSubType.calibrationform = (event);
    };
    WorkRequestComponent.prototype.onTestTemplateChange = function (event) {
        console.log('------event------------', event);
        this.selectedTestTemplates = (event.value);
        //   this.EquipmentSubType.calibrationform = (event);
    };
    WorkRequestComponent.prototype.onTestStatusChange = function (event) {
        console.log('------event------------', event);
        this.selectedTestStatuses = (event.value);
        //this.dataService.getFilteredEvents(this.selectedTestStatuses, this.selectedTestStatuses, this.selectedTestStatuses, this.selectedTestStatuses, this.selectedTestStatuses, this.selectedTestStatuses, this.selectedTestStatuses)
        //    .subscribe(TestFacilityEvents => {
        //        console.log('-----------  TestFacilitiesEvents------------------', TestFacilityEvents);
        //        //this.TestFacilityEvents = TestFacilityEvents;
        //    });
        //   this.EquipmentSubType.calibrationform = (event);
    };
    WorkRequestComponent.prototype.onBuildLevelChange = function (event) {
        console.log('------event------------', event);
        this.selectedBuildLevels = (event.value);
        //   this.EquipmentSubType.calibrationform = (event);
    };
    WorkRequestComponent.prototype.onProjectCodeChange = function (event) {
        console.log('------event------------', event);
        this.selectedProjectCodes = (event.value);
        //   this.EquipmentSubType.calibrationform = (event);
    };
    WorkRequestComponent.prototype.onTestModeChange = function (event) {
        console.log('------event------------', event);
        this.selectedTestModes = (event.value);
        //   this.EquipmentSubType.calibrationform = (event);
    };
    WorkRequestComponent.prototype.onTestTypeChange = function (event) {
        console.log('------event------------', event);
        this.selectedTestTypes = (event.value);
        //   this.EquipmentSubType.calibrationform = (event);
    };
    WorkRequestComponent.prototype.onHourEntryChange = function (event) {
        console.log('------event------------', event);
        this.selectedTimeEntryTypeId = (event.value);
        //   this.EquipmentSubType.calibrationform = (event);
    };
    WorkRequestComponent.prototype.getTestStages = function () {
        var _this = this;
        //    userRoles
        this.dataService.getTestStages().subscribe(function (response) {
            _this.testStages = new Array();
            if (response != null) {
                var resultMap = new Array();
                resultMap.push({
                    label: "--Select--",
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
                _this.testStages = resultMap;
            }
            console.log(response);
        });
    };
    WorkRequestComponent.prototype.getTestFacilities = function () {
        var _this = this;
        //    userRoles
        this.testfacilityservice.getTestFacilities().subscribe(function (response) {
            _this.testFacilities = new Array();
            if (response != null) {
                var resultMap = new Array();
                resultMap.push({
                    label: "Select Test Facility",
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
                _this.testFacilities = resultMap;
            }
            console.log(response);
        });
    };
    WorkRequestComponent.prototype.getTestRoles = function () {
        var _this = this;
        //    userRoles
        this.testroleservice.getTestRoles().subscribe(function (response) {
            _this.testRoles = new Array();
            if (response != null) {
                var resultMap = new Array();
                resultMap.push({
                    label: "Select Test Role",
                    value: null
                });
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
    WorkRequestComponent.prototype.getDepartments = function () {
        var _this = this;
        //    userRoles
        this.departmentservice.getDepartments().subscribe(function (response) {
            _this.departments = new Array();
            if (response != null) {
                var resultMap = new Array();
                resultMap.push({
                    label: "Select Department",
                    value: null
                });
                for (var _i = 0, _a = response.$values; _i < _a.length; _i++) {
                    var template = _a[_i];
                    var temp = {
                        label: template.name,
                        value: template.id
                    };
                    resultMap.push(temp);
                }
                _this.departments = resultMap;
            }
            console.log(response);
        });
    };
    WorkRequestComponent.prototype.getTestStatus = function () {
        var _this = this;
        //    userRoles
        this.teststatusservice.getTestStatus().subscribe(function (response) {
            _this.testStatus = new Array();
            if (response != null) {
                var resultMap = new Array();
                resultMap.push({
                    label: "Select Test Status",
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
                _this.testStatus = resultMap;
            }
            console.log(response);
        });
    };
    WorkRequestComponent.prototype.getTestVerificationMethods = function () {
        var _this = this;
        //    userRoles
        this.testverificationmethodservice.getTestVerificationMethods().subscribe(function (response) {
            _this.testVerificationMethods = new Array();
            if (response != null) {
                var resultMap = new Array();
                resultMap.push({
                    label: "Select Test Verification Method",
                    value: null
                });
                for (var _i = 0, response_4 = response; _i < response_4.length; _i++) {
                    var template = response_4[_i];
                    var temp = {
                        label: template.name,
                        value: template.id
                    };
                    resultMap.push(temp);
                }
                _this.testVerificationMethods = resultMap;
            }
            console.log(response);
        });
    };
    WorkRequestComponent.prototype.getTestModes = function () {
        var _this = this;
        //    userRoles
        this.testmodeservice.getAllTestModes().subscribe(function (response) {
            _this.testAllModes = new Array();
            if (response != null) {
                var resultMap = new Array();
                resultMap.push({
                    label: "Select Test Mode",
                    value: null
                });
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
    WorkRequestComponent.prototype.getTestTypes = function () {
        var _this = this;
        //    userRoles
        this.testtypeservice.getAllTestTypes().subscribe(function (response) {
            _this.testTypes = new Array();
            if (response != null) {
                var resultMap = new Array();
                resultMap.push({
                    label: "Select Test Type",
                    value: null
                });
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
    WorkRequestComponent.prototype.getProjectCodes = function () {
        var _this = this;
        //    userRoles
        this.projectservice.getProjectCodes().subscribe(function (response) {
            _this.projectCodes = new Array();
            if (response != null) {
                var resultMap = new Array();
                resultMap.push({
                    label: "--------Select-------",
                    value: null
                });
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
    WorkRequestComponent.prototype.getTestTemplates = function () {
        var _this = this;
        //    userRoles
        this.testtemplateservice.getTestTemplates().subscribe(function (response) {
            _this.testTemplates = new Array();
            if (response != null) {
                var resultMap = new Array();
                resultMap.push({
                    label: "Select Test Template",
                    value: null
                });
                for (var _i = 0, _a = response.$values; _i < _a.length; _i++) {
                    var template = _a[_i];
                    var temp = {
                        label: template.name,
                        value: template.id
                    };
                    resultMap.push(temp);
                }
                _this.testTemplates = resultMap;
            }
            console.log(response);
        });
    };
    WorkRequestComponent.prototype.getBuildLevels = function () {
        var _this = this;
        //    userRoles
        this.buildlevelservice.getBuildLevels().subscribe(function (response) {
            _this.buildLevels = new Array();
            if (response != null) {
                var resultMap = new Array();
                resultMap.push({
                    label: "Select Build Level",
                    value: null
                });
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
    WorkRequestComponent.prototype.getDownTimeReasons = function () {
        var _this = this;
        //    userRoles
        this.dataService.GetAllDownTimeReasons().subscribe(function (response) {
            _this.downTimeReasons = new Array();
            if (response != null) {
                var resultMap = new Array();
                resultMap.push({
                    label: "--Select--",
                    value: null
                });
                for (var _i = 0, _a = response.$values; _i < _a.length; _i++) {
                    var template = _a[_i];
                    var temp = {
                        label: template.name,
                        value: template.id
                    };
                    resultMap.push(temp);
                }
                _this.downTimeReasons = resultMap;
            }
            console.log(response);
        });
    };
    WorkRequestComponent.prototype.getHourEntryByEntityIdentifierId = function () {
        var _this = this;
        //    userRoles
        this.dataService.getHourEntryByEntityIdentifierId(this.id).subscribe(function (response) {
            _this.hourEntries = new Array();
            if (response != null) {
                var resultMap = new Array();
                resultMap.push({
                    label: "--Select--",
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
                _this.hourEntries = resultMap;
            }
            console.log(response);
        });
    };
    WorkRequestComponent.prototype.onTestRequestSubmit = function (formRef) {
        var _this = this;
        var formTestRequestData = {
            //   Id : ' ' ,
            TestNumber: this.number,
            // TenantId: ' ',
            TestTemplateId: this.selectedTestTemplates,
            TestFacilityId: this.selectedTestFacilities,
            ProjectId: this.selectedProjectCodes,
            BuildLevelId: this.selectedBuildLevels,
            VerificationMethodId: this.selectedTestVerificationMethods,
            PlannedStartDate: this.plannedStartDate,
            PlannedEndDate: this.plannedEndDate,
            TestStatusId: this.selectedTestStatuses
        };
        if (this.number == null || this.number == "") {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: 'Please enter Test Number', detail: '' });
            return null;
        }
        if (this.selectedProjectCodes == null || this.selectedProjectCodes == undefined) {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: 'Please select Project Code', detail: '' });
            return null;
        }
        if (this.selectedTestFacilities == null || this.selectedTestFacilities == undefined) {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: 'Please select Test Facility', detail: '' });
            return null;
        }
        if (this.selectedBuildLevels == null || this.selectedBuildLevels == undefined) {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: 'Please select Build Levels', detail: '' });
            return null;
        }
        if (this.selectedTestTemplates == null || this.selectedTestTemplates == undefined) {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: 'Please select Test Template', detail: '' });
            return null;
        }
        if (this.selectedTestVerificationMethods == null || this.selectedTestVerificationMethods == undefined) {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: 'Please select Test Verification Method' });
            return null;
        }
        if (this.plannedStartDate == null || this.plannedStartDate == "") {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: 'Please select Planned Start Date', detail: '' });
            return null;
        }
        if (this.plannedEndDate == null || this.plannedEndDate == "") {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: 'Please select Planned End Date', detail: '' });
            return null;
        }
        //    this.testrequestsensorserice.postTestRequestAdd(formTestRequestData).subscribe(res => {
        // console.log(res);
        //  this.TrackingList = res.$values;
        if (this.IsThermoCouple) {
            var workrequestbody = {
                EntityIdentifierId: '756BCBA4-6FA5-4BB6-88D9-C1773471C7A0',
                EntityId: 'CF338C63-A9EC-4D7F-8F48-EA1F8353EC2A' //res.id  
            };
            //1. save workrequest for testrequest(res.id) , testrequestentityidentifierId() 
            this.testrequestsensorserice.postWorkRequestAdd(workrequestbody).subscribe(function (workresult) {
                _this.selectedDepartment.forEach(function (dept) {
                    var primaryuserid = 'BE06471E-F53B-E013-642A-003087ABCAA3';
                    var taskbody = {
                        EntityIdentifierId: '756BCBA4-6FA5-4BB6-88D9-C1773471C7A0',
                        EntityId: 'CF338C63-A9EC-4D7F-8F48-EA1F8353EC2A',
                        DepartmentId: dept,
                        UserId: primaryuserid
                    };
                    _this.testrequestsensorserice.postTasksAdd(taskbody).subscribe(function (taskresult) {
                    });
                });
            });
        }
        //   });
    };
    WorkRequestComponent.prototype.onSubmit = function (formRef) {
        var _this = this;
        console.log(formRef);
        if (this.selectedTestStageId == null || this.selectedTestStageId == undefined) {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: 'Please select Test Stage', detail: '' });
            return null;
        }
        if (this.selectedDownTimeReasonId == null || this.selectedDownTimeReasonId == undefined) {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: 'Please select DownTimeReason', detail: '' });
            return null;
        }
        if (this.selectedTimeEntryTypeId == null || this.selectedTimeEntryTypeId == undefined) {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: 'Please select activity', detail: '' });
            return null;
        }
        if (this.estimateDuration == null || this.estimateDuration == "") {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: 'Please select Estimate Duration', detail: '' });
            return null;
        }
        if (this.startTime == null || this.startTime == "") {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: 'Please select start Time', detail: '' });
            return null;
        }
        if (this.endTime == null || this.endTime == "") {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: 'Please select End Time', detail: '' });
            return null;
        }
        //   console.log(this.testFacility.name);
        formRef.isDeleted = false;
        //let formData: any = {
        //    id: this.id,
        //    name: '',
        //    address: {
        //        id: '',
        //        addressLine1: '',
        //        addressLine2: '',
        //        city: '',
        //        state: '',
        //        postalCode: '',
        //    }
        //};
        var formData = {
            timeEntryTypeId: this.selectedTimeEntryTypeId,
            entityTypeId: '',
            entityId: this.id,
            startTime: this.startTime,
            endTime: this.endTime,
            userId: '',
            projectId: '53FE9592-1A9B-07D0-85D7-006A30BCD348',
            testStageId: this.selectedTestStageId,
            isDownTime: false,
            estimateDuration: this.estimateDuration,
            downTimeReasonId: this.selectedDownTimeReasonId,
            description: '',
            tenantId: '',
            userCreatedById: '',
            id: ' '
        };
        //  formData.id = this.id;
        //  formData.name = formRef.name;
        //formData.address.id = this.addressid;
        //formData.address.addressLine1 = formRef.addressLine1;
        //formData.address.addressLine2 = formRef.addressLine2;
        //formData.address.city = formRef.city;
        //formData.address.state = formRef.state;
        //formData.address.postalCode = formRef.postalCode;
        formData.locale = "en-us";
        console.log(formData);
        this.dataService.postAdd(formData).subscribe(function (res) {
            // console.log(res);
            _this.TrackingList = res.$values;
            //if (!res.errorMessage) {
            //    //this.router.navigate(["/testfacilities/details/", res.result.id]);
            //}
        });
        this.msgs = [];
        this.msgs.push({ severity: 'success', summary: 'saved', detail: '' });
    };
    WorkRequestComponent.prototype.navigateDetails = function (id) {
        this.router.navigate(['testrequest/sensor/details/', id]);
    };
    WorkRequestComponent = __decorate([
        core_1.Component({
            selector: 'workrequest',
            templateUrl: 'app/body/WorkRequest/workrequest.component.html'
        })
    ], WorkRequestComponent);
    return WorkRequestComponent;
}());
exports.WorkRequestComponent = WorkRequestComponent;
