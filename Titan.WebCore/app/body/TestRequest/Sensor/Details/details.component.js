"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
//declare var fullCalendardef: Calendar;
//let $ = require('//cdnjs.cloudflare.com/ajax/libs/fullcalendar/3.0.1/fullcalendar.min.js');
//let $ = require('../../../shared/services/fullcalendar.js');
var DetailsComponent = (function () {
    //filepath: string = "TestFacility";
    //testFacility = { name: '' };
    //address = { addressLine1: '', addressLine2: '', city: '', state: '', postalCode: '' };
    //TestFacilityAttachments: ITestFacilityAttachment[];
    //TestFacilityRoles: ITestFacilityRole[];
    //TestFacilityEquipments: ITestFacilityEquipment[];
    //// Hide show Tab Panels
    //displayEquipmentTab: boolean = false;
    //displayScheduleTab: boolean = false;
    //model: any = {
    //    id: '',
    //    isDeleted: false,
    //    name: '',
    //    createdOn: '',
    //    modifiedOn: '',
    //    userCreatedById: '',
    //    userInChargedId: '',
    //    userModifiedById: ''
    //};
    //msgs: Message[];
    //uploadedFiles: any[] = [];
    function DetailsComponent(route, router, equipmenttypeservice, dataService, 
        //private testfacilityroleservice: TestFacilityRoleService,
        testfacilityattachmentservice) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.equipmenttypeservice = equipmenttypeservice;
        this.dataService = dataService;
        this.testfacilityattachmentservice = testfacilityattachmentservice;
        this.uploadedFiles = [];
        this.msgs = [];
        this.entityType = "9F8D13F5-F0E8-452E-8D81-631FCD7A1C9A";
        this.route.params.subscribe(function (params) {
            _this.id = params['id'];
            _this.entityId = params['entityId'];
        });
        this.testRequestSensorId = this.id;
    }
    //ngAfterViewInit() {
    //}
    //handleChange(event) {
    //    console.log('--------tab changed---', event);
    //    console.log('-------targetid-------', event.originalEvent.target.innerText);
    //    if (event.originalEvent.currentTarget.classList.contains("equipment")) {
    //        this.displayEquipmentTab = true;
    //    } else if (!this.displayScheduleTab && event.originalEvent.currentTarget.classList.contains("schedule")) {
    //        this.displayScheduleTab = true;
    //        $("#calendar").parent('.ui-tabview-panel').show();
    //        let ref = this;
    //        setTimeout(function () { ref.initSchedule(); }, 10);
    //    }
    //}
    //initSchedule() {
    //    $('#calendar').fullCalendar({
    //        theme: true,
    //        header: {
    //            left: 'prev,next today',
    //            center: 'title',
    //            right: 'month,agendaWeek,agendaDay,listMonth'
    //        },
    //        defaultDate: '2016-09-12',
    //        events: function (start, end, timezone, callback) {
    //            $.ajax({
    //                url: titanApiUrl + 'TestFacility/Schedule',
    //                type: 'POST',
    //                data: {
    //                    startdate: '1-1-2016',
    //                    enddate: '12-31-2018',
    //                },
    //                error: function () {
    //                    alert('there was an error while fetching events!');
    //                },
    //                success: function (result) {
    //                    var events = [];
    //                    $.each(result.calendarEvents.$values, function (index, element) {
    //                        element.start = element.start;
    //                        element.end = element.end;
    //                        element.title = element.title;
    //                        element.url = element.url;
    //                        events.push(element);
    //                    });
    //                    callback(events);
    //                }
    //            })
    //        },
    //        editable: true
    //    });
    //}
    DetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getSensorList();
        //    this.getUserRoles();
        this.dataService.getById(this.id)
            .subscribe(function (res) {
            //  this.entityId = res.result.entityId;
            _this.selectedSensorTypeId = res.result.sensorTypeId;
            _this.PIC = res.result.pic;
            _this.departmentId = res.result.departmentId;
        });
        this.dataService.getSensorCommentIdByTestRequestSensorId(this.testRequestSensorId)
            .subscribe(function (res) {
            //  this.entityId = res.result.entityId;
            _this.testRequestSensorCommentId = res.result.id;
            _this.comment = res.result.comment;
        });
        // getSensorAttachmentsByEntityIdUrl
        this.testfacilityattachmentservice.getSensorAttachmentsByEntityIdUrl(this.testRequestSensorId).subscribe(function (res) {
            _this.uploadedFiles = res.$values;
        });
        // get entityId by calling testrequest table for testrequestsensorId
        //    if (this.id) {
        //        this.dataService.getNotifications(this.id)
        //            .subscribe(res => {
        //                if (res) {
        //                    this.notifications = res;
        //                }
        //                this.notifications.forEach(x => {
        //                    this.notificationMsgs.push({ severity: 'warn', summary: x.ruleMessage, detail: x.description });
        //                })
        //            })
        //    }
        //    this.testfacilityroleservice.getByIdusing(this.id)
        //        .subscribe(TestFacilityRoles => {
        //            console.log('-----------  TestFacilitiesroles------------------', TestFacilityRoles);
        //            this.TestFacilityRoles = TestFacilityRoles;
        //        });
        //    this.testfacilityattachmentservice.getByIdusing(this.id)
        //        .subscribe(TestFacilityAttachments => {
        //            console.log('-----------  TestFacilitiesroles------------------', TestFacilityAttachments);
        //            this.TestFacilityAttachments = TestFacilityAttachments;
        //        });
        //    this.dataService.getEquipmentsByIdusing(this.id)
        //        .subscribe(res => {
        //            this.TestFacilityEquipments = res;
        //        });
    };
    DetailsComponent.prototype.onSensorChange = function (event) {
        this.selectedSensorTypeId = (event.value);
        //   this.EquipmentSubType.calibrationform = (event);
    };
    DetailsComponent.prototype.getSensorList = function () {
        var _this = this;
        //    userRoles
        this.equipmenttypeservice.getSensorList().subscribe(function (response) {
            _this.Sensors = new Array();
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
                _this.Sensors = resultMap;
            }
        });
    };
    //onUserRoleChange(event) {
    //    console.log('------event------------', event)
    //    this.selectedRole = (event.value);
    //    //   this.EquipmentSubType.calibrationform = (event);
    //}
    //getUserRoles() {
    //    //    userRoles
    //    this.dataService.getRoles().subscribe(response => {
    //        this.userRoles = new Array();
    //        if (response != null) {
    //            var resultMap = new Array();
    //            resultMap.push({
    //                label: "Select User Role",
    //                value: null
    //            });
    //            for (let template of response) {
    //                var temp = {
    //                    label: template.name,
    //                    value: template.id
    //                }
    //                resultMap.push(temp);
    //            }
    //            this.userRoles = resultMap;
    //        }
    //        console.log(response);
    //    });
    //}
    //onAddUserRole() {
    //    if (this.filteredSelectedUserNames.length == 0) {
    //        this.msgs = [];
    //        this.msgs.push({ severity: 'info', summary: 'Search any user to add', detail: '' });
    //        return null;
    //    }
    //    if (this.selectedRole == null) {
    //        this.msgs = [];
    //        this.msgs.push({ severity: 'info', summary: 'Please select Role', detail: '' });
    //        return null;
    //    }
    //    var selectedUserNames = new Array();
    //    for (var sel of this.filteredSelectedUserNames) {
    //        selectedUserNames.push(sel.id);
    //    }
    //    //var inputDto = {
    //    //    testRequirementList: selectedTestRequirementIds
    //    //}
    //    this.dataService.postAddUserNames(selectedUserNames, this.id, this.selectedRole).subscribe(filteredList => {
    //        this.selectedUserNames = filteredList.$values;
    //        this.filteredSelectedUserNames = null;
    //        this.testfacilityroleservice.getByIdusing(this.id)
    //            .subscribe(TestFacilityRoles => {
    //                console.log('-----------  TestFacilitiesroles------------------', TestFacilityRoles);
    //                this.TestFacilityRoles = TestFacilityRoles;
    //            });
    //    });
    //    this.msgs = [];
    //    this.msgs.push({ severity: 'info', summary: 'User Added', detail: '' });
    //}
    //filterUserNames(event) {
    //    this.dataService.filterByUserNames(event.query).subscribe(filteredList => {
    //        this.filteredUserNames = filteredList.$values;
    //    });
    //}
    DetailsComponent.prototype.onSubmit = function (formRef) {
        var _this = this;
        formRef.isDeleted = false;
        var formData = {
            SensorTypeId: this.selectedSensorTypeId,
            PIC: this.PIC,
            Id: this.testRequestSensorId,
            TestRequestId: this.entityId,
            IsCompleted: 'false',
            IsDeleted: 'false',
            DepartmentId: this.departmentId
        };
        var formCommentData = {
            Comment: this.comment,
            Id: this.testRequestSensorCommentId,
            TestRequestSensorId: this.id,
            IsDeleted: 'false'
        };
        //formData.name = formRef.name;
        //formData.address.addressLine1 = formRef.addressLine1;
        //formData.address.addressLine2 = formRef.addressLine2;
        //formData.address.city = formRef.city;
        //formData.address.state = formRef.state;
        //formData.address.postalCode = formRef.postalCode;
        //formData.locale = "en-us";
        this.dataService.postUpdate(formData).subscribe(function (res) {
            if (res.IsSuccess) {
                _this.router.navigate(["/testrequest/details/", _this.id]);
            }
        });
        this.dataService.postCommentUpdate(formCommentData).subscribe(function (res) {
            if (res.IsSuccess) {
                _this.router.navigate(["/testrequest/details/", _this.id]);
            }
        });
        //this.dataService.postAdd(formData).subscribe(res => {
        //    console.log("-------- Test Sensor Adding new result ----- ", res);
        //    if (res.IsSuccess) {
        //        this.router.navigate(["/testrequest/details/", this.id]);
        //    }
        //});
    };
    DetailsComponent = __decorate([
        core_1.Component({
            selector: 'details-sensor',
            templateUrl: 'app/body/TestRequest/Sensor/Details/details.component.html'
        })
    ], DetailsComponent);
    return DetailsComponent;
}());
exports.DetailsComponent = DetailsComponent;
