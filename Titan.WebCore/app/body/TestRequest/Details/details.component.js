"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var DetailsComponent = (function () {
    function DetailsComponent(route, dataService, testfacilityservice, service, testtemplateservice, testrequestsensorserice, router, testverificationmethodservice, projectservice, testmodeservice, teststatusservice, testroleservice, testtypeservice, buildlevelservice, confirmservice, departmentservice) {
        var _this = this;
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
        // qui
        this.gridData = [];
        this.confInfo = {};
        this.cols = [];
        this.gridFilter = {};
        this.IsThermoCouple = false;
        this.testRequestDetails = {
            testNumber: '',
            // TenantId: ' ',
            testTemplateId: '',
            testFacilityId: '',
            projectId: '',
            buildLevelId: '',
            verificationMethodId: '',
            plannedEndDate: '',
            plannedStartDate: '',
            testStatusId: '',
            dueDate: ''
        };
        this.entityType = "TestFacility";
        this.entityId = this.id;
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
        this.route.params.subscribe(function (params) { return _this.id = params['id']; });
        this.entityId = this.id;
    }
    DetailsComponent.prototype.ngAfterViewInit = function () {
    };
    DetailsComponent.prototype.handleChange = function (event) {
    };
    DetailsComponent.prototype.OK = function () {
        this.display = false;
    };
    DetailsComponent.prototype.confirm1 = function () {
        this.display = true;
    };
    DetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getTestStages();
        this.getDepartments();
        this.getTestFacilities();
        this.getTestModes();
        this.getTestVerificationMethods();
        this.getTestTypes();
        this.getBuildLevels();
        this.getTestStatus();
        this.getProjectCodes();
        this.getTestTemplates();
        this.getTestRoles();
        this.getHourEntryByEntityIdentifierId();
        this.getDownTimeReasons();
        var resData;
        // get test request details byid
        this.testrequestsensorserice.getTestRequestById(this.id)
            .subscribe(function (res) {
            _this.testRequestDetails = res.result;
            _this.testRequestDetails.plannedStartDate = new Date(res.result.plannedStartDate);
            _this.testRequestDetails.plannedEndDate = new Date(res.result.plannedEndDate);
            _this.testRequestDetails.dueDate = new Date(res.result.dueDate);
            //  resData = res;
            //this.gridData = res.Data;
            //this.cols = res.Configuration.Columns;
            ////console.log("-------- Cols --------", this.cols);
            //this.confInfo = res.Configuration;
            //console.log("------- Configuration --------", this.confInfo);
        });
        var departmentId = '00000000-0000-0000-0000-000000000000';
        this.testrequestsensorserice.GetAllTestRequestSensors(this.entityId, departmentId)
            .subscribe(function (res) {
            _this.sensorRequests = res.result;
            //  resData = res;
            //this.gridData = res.Data;
            //this.cols = res.Configuration.Columns;
            ////console.log("-------- Cols --------", this.cols);
            //this.confInfo = res.Configuration;
            //console.log("------- Configuration --------", this.confInfo);
        });
        //this.dataService.GetProjectId(this.id)
        //    .subscribe(res => {
        //        this.projectId = res.$values;
        //        //this.formConfiguration = res.formConfiguration;
        //        //this.formObject = res.formObject;
        //        //this.model = res.formObject;
        //        //console.log("----- Result of formConfiguration -----", this.formConfiguration.fields.$values);
        //        //console.log("----- Result of formObject -----", this.model);
        //    });
        this.dataService.GetTrackingListByEntityId(this.id)
            .subscribe(function (res) {
            _this.TrackingList = res.$values;
            //this.formConfiguration = res.formConfiguration;
            //this.formObject = res.formObject;
            //this.model = res.formObject;
            //console.log("----- Result of formConfiguration -----", this.formConfiguration.fields.$values);
            //console.log("----- Result of formObject -----", this.model);
        });
    };
    DetailsComponent.prototype.onTestStageChange = function (event) {
        this.selectedTestStageId = (event.value);
        //   this.EquipmentSubType.calibrationform = (event);
    };
    DetailsComponent.prototype.onTestVerificationMethodChange = function (event) {
        this.selectedTestVerificationMethods = (event.value);
        //   this.EquipmentSubType.calibrationform = (event);
    };
    DetailsComponent.prototype.onTestFacilityChange = function (event) {
        this.selectedTestFacilities = (event.value);
        //   this.EquipmentSubType.calibrationform = (event);
    };
    DetailsComponent.prototype.onDownTimeReasonChange = function (event) {
        this.selectedDownTimeReasonId = (event.value);
        //   this.EquipmentSubType.calibrationform = (event);
    };
    DetailsComponent.prototype.onTestRoleChange = function (event) {
        this.selectedTestRoles = (event.value);
        //   this.EquipmentSubType.calibrationform = (event);
    };
    DetailsComponent.prototype.onDepartmentChange = function (event) {
        this.selectedDepartment = (event.value);
        //   this.EquipmentSubType.calibrationform = (event);
    };
    DetailsComponent.prototype.onTestTemplateChange = function (event) {
        this.selectedTestTemplates = (event.value);
        //   this.EquipmentSubType.calibrationform = (event);
    };
    DetailsComponent.prototype.onTestStatusChange = function (event) {
        this.selectedTestStatuses = (event.value);
        //this.dataService.getFilteredEvents(this.selectedTestStatuses, this.selectedTestStatuses, this.selectedTestStatuses, this.selectedTestStatuses, this.selectedTestStatuses, this.selectedTestStatuses, this.selectedTestStatuses)
        //    .subscribe(TestFacilityEvents => {
        //        console.log('-----------  TestFacilitiesEvents------------------', TestFacilityEvents);
        //        //this.TestFacilityEvents = TestFacilityEvents;
        //    });
        //   this.EquipmentSubType.calibrationform = (event);
    };
    DetailsComponent.prototype.onBuildLevelChange = function (event) {
        this.selectedBuildLevels = (event.value);
        //   this.EquipmentSubType.calibrationform = (event);
    };
    DetailsComponent.prototype.onProjectCodeChange = function (event) {
        this.selectedProjectCodes = (event.value);
        //   this.EquipmentSubType.calibrationform = (event);
    };
    DetailsComponent.prototype.onTestModeChange = function (event) {
        this.selectedTestModes = (event.value);
        //   this.EquipmentSubType.calibrationform = (event);
    };
    DetailsComponent.prototype.onTestTypeChange = function (event) {
        this.selectedTestTypes = (event.value);
        //   this.EquipmentSubType.calibrationform = (event);
    };
    DetailsComponent.prototype.onHourEntryChange = function (event) {
        this.selectedTimeEntryTypeId = (event.value);
        //   this.EquipmentSubType.calibrationform = (event);
    };
    DetailsComponent.prototype.getTestStages = function () {
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
        });
    };
    DetailsComponent.prototype.getTestFacilities = function () {
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
        });
    };
    DetailsComponent.prototype.getTestRoles = function () {
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
        });
    };
    DetailsComponent.prototype.getDepartments = function () {
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
        });
    };
    DetailsComponent.prototype.getTestStatus = function () {
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
        });
    };
    DetailsComponent.prototype.getTestVerificationMethods = function () {
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
        });
    };
    DetailsComponent.prototype.getTestModes = function () {
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
        });
    };
    DetailsComponent.prototype.getTestTypes = function () {
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
        });
    };
    DetailsComponent.prototype.getProjectCodes = function () {
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
        });
    };
    DetailsComponent.prototype.getTestTemplates = function () {
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
        });
    };
    DetailsComponent.prototype.getBuildLevels = function () {
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
        });
    };
    DetailsComponent.prototype.getDownTimeReasons = function () {
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
        });
    };
    DetailsComponent.prototype.getHourEntryByEntityIdentifierId = function () {
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
        });
    };
    DetailsComponent.prototype.onTestRequestSubmit = function (formRef) {
        var _this = this;
        var formTestRequestData = {
            //   Id : ' ' ,
            TestNumber: this.number,
            // TenantId: ' ',
            TestTemplateId: '2F59E940-50E9-403E-8075-F407AE285143',
            TestFacilityId: this.selectedTestFacilities,
            ProjectId: this.selectedProjectCodes,
            BuildLevelId: this.selectedBuildLevels,
            VerificationMethodId: this.testRequestDetails.plannedStartDate,
            PlannedEndDate: this.testRequestDetails.plannedEndDate,
            TestStatusId: this.selectedTestStatuses,
            DueDate: this.testRequestDetails.dueDate
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
        //if (this.selectedTestTemplates == null || this.selectedTestTemplates == undefined) {
        //    this.msgs = [];
        //    this.msgs.push({ severity: 'error', summary: 'Please select Test Template', detail: '' });
        //    return null;
        //}
        if (this.selectedTestVerificationMethods == null || this.selectedTestVerificationMethods == undefined) {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: 'Please select Test Verification Method' });
            return null;
        }
        if (this.plannedStartDate == null) {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: 'Please select Planned Start Date', detail: '' });
            return null;
        }
        if (this.plannedEndDate == null || this.plannedEndDate == "") {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: 'Please select Planned End Date', detail: '' });
            return null;
        }
        this.testrequestsensorserice.postTestRequestAdd(formTestRequestData).subscribe(function (res) {
            //  this.TrackingList = res.$values;
            if (_this.IsThermoCouple) {
                var workrequestbody = {
                    EntityIdentifierId: '756BCBA4-6FA5-4BB6-88D9-C1773471C7A0',
                    EntityId: res.id //'CF338C63-A9EC-4D7F-8F48-EA1F8353EC2A'//res.id  
                };
                //1. save workrequest for testrequest(res.id) , testrequestentityidentifierId() 
                _this.testrequestsensorserice.postWorkRequestAdd(workrequestbody).subscribe(function (workresult) {
                    _this.selectedDepartment.forEach(function (dept) {
                        var primaryuserid = 'BE06471E-F53B-E013-642A-003087ABCAA3';
                        var taskbody = {
                            EntityIdentifierId: '756BCBA4-6FA5-4BB6-88D9-C1773471C7A0',
                            EntityId: res.id,
                            DepartmentId: dept,
                            UserId: primaryuserid
                        };
                        _this.testrequestsensorserice.postTasksAdd(taskbody).subscribe(function (taskresult) {
                        });
                    });
                });
            }
        });
    };
    DetailsComponent.prototype.onSubmit = function (formRef) {
        var _this = this;
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
        this.dataService.postAdd(formData).subscribe(function (res) {
            _this.TrackingList = res.$values;
            //if (!res.errorMessage) {
            //    //this.router.navigate(["/testfacilities/details/", res.result.id]);
            //}
        });
        this.msgs = [];
        this.msgs.push({ severity: 'success', summary: 'saved', detail: '' });
    };
    DetailsComponent.prototype.navigateDetails = function (id) {
        this.router.navigate(['testrequest/sensor/details/', id]);
    };
    DetailsComponent = __decorate([
        core_1.Component({
            selector: 'details-testrequest',
            templateUrl: 'app/body/TestRequest/Details/details.component.html'
        })
    ], DetailsComponent);
    return DetailsComponent;
}());
exports.DetailsComponent = DetailsComponent;
