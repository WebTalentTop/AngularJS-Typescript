//import { titanApiUrl } from '../../../shared/services/apiurlconst/titanapiurl';
//import { TestFacilityService } from '../../../shared/services/testfacility.service';
import { TestRequestSensorService } from '../../../../shared/services/testrequestsensor.service';
import { EquipmentTypeService } from '../../../../shared/services/equipmentType.service';
//import { TestFacilityRoleService } from '../../../shared/services/testFacilityRole.service';
//import { ITestFacilityRole } from '../../../shared/services/definitions/ITestFacilityRole';
import { TestFacilityAttachmentService } from '../../../../shared/services/testFacilityAttachment.service';
//import { ITestFacilityAttachment } from '../../../shared/services/definitions/ITestFacilityAttachment';
//import { ITestFacilityEquipment } from '../../../shared/services/definitions/ITestFacilityEquipment';
import { DataTable, TabViewModule, LazyLoadEvent, ButtonModule, InputTextareaModule, InputTextModule, PanelModule, FileUploadModule, MessagesModule, Message, GrowlModule } from 'primeng/primeng';
import { Component, AfterViewInit, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { SelectItem, ConfirmationService } from 'primeng/primeng';

declare var $: JQueryStatic;
declare var fullcalendardef: FullCalendar.Calendar;
//declare var fullCalendardef: Calendar;
//let $ = require('//cdnjs.cloudflare.com/ajax/libs/fullcalendar/3.0.1/fullcalendar.min.js');
//let $ = require('../../../shared/services/fullcalendar.js');

@Component({
    selector: 'details-sensor',
    templateUrl: 'app/body/TestRequest/Sensor/Details/details.component.html'
})
export class DetailsComponent {

    //username: string;
    //details: string;

    //notificationMsgs: Message[] = [];
    //notifications: any;

    //testTemplate: any;
    //userRoles: any;
    //testModes: Array<any> = new Array();
    //selectedUserNames: Array<any> = new Array();
    //filteredUserNames: Array<any> = new Array();
    //filteredSelectedUserNames: Array<any> = new Array();
    //selectedRole: any;
    //formConfiguration: any;
    //formObject: any;
    //formEquipmentObject: any;
    id: any;
    uploadedFiles: any[] = [];
    PIC: any;
    Sensors: any;
    departmentId: any;
    comment: any;
    testRequestSensorCommentId: any;
    selectedSensorTypeId: any;
    msgs: Message[]=[];
    entityId: any;
    entityType: any = "9F8D13F5-F0E8-452E-8D81-631FCD7A1C9A";
    testRequestSensorId: any;
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

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private equipmenttypeservice: EquipmentTypeService,

        private dataService: TestRequestSensorService,
        //private testfacilityroleservice: TestFacilityRoleService,
        private testfacilityattachmentservice: TestFacilityAttachmentService
    ) {
        this.route.params.subscribe(params => {
            this.id = params['id'];
            this.entityId = params['entityId'];
        });
        this.testRequestSensorId = this.id;
       // this.entityId=
        console.log("---- TF Details ID Param -----", this.id);
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
    ngOnInit() {

        this.getSensorList();
    //    this.getUserRoles();
        this.dataService.getById(this.id)
            .subscribe(res => {
              //  this.entityId = res.result.entityId;
                this.selectedSensorTypeId = res.result.sensorTypeId;     
                this.PIC = res.result.pic;
                this.departmentId = res.result.departmentId;
                       
               
            });
        this.dataService.getSensorCommentIdByTestRequestSensorId(this.testRequestSensorId)
            .subscribe(res => {
                //  this.entityId = res.result.entityId;
                this.testRequestSensorCommentId = res.result.id;
                this.comment = res.result.comment;

            });
        // getSensorAttachmentsByEntityIdUrl
        this.testfacilityattachmentservice.getSensorAttachmentsByEntityIdUrl(this.testRequestSensorId).subscribe(
            res => {
                this.uploadedFiles = res.$values;
            }
        );
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
    }
    onSensorChange(event) {
        console.log('------event------------', event)
        this.selectedSensorTypeId = (event.value);
        //   this.EquipmentSubType.calibrationform = (event);

    }
    getSensorList() {
        //    userRoles
        this.equipmenttypeservice.getSensorList().subscribe(response => {
            this.Sensors = new Array();
            if (response != null) {
                var resultMap = new Array();
                resultMap.push({
                    label: "--Select--",
                    value: null
                });
                for (let template of response.$values) {
                    var temp = {
                        label: template.name,
                        value: template.id
                    }
                    resultMap.push(temp);
                }
                this.Sensors = resultMap;
            }
            console.log(response);
        });
    }
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
    onSubmit(formRef) {
        formRef.isDeleted = false;
        let formData: any = {

            SensorTypeId: this.selectedSensorTypeId,
            PIC: this.PIC,
            Id: this.testRequestSensorId,
            TestRequestId: this.entityId,
            IsCompleted: 'false',
            IsDeleted: 'false',
            DepartmentId: this.departmentId

        };
        let formCommentData: any = {

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
        console.log(formData);
        this.dataService.postUpdate(formData).subscribe(res => {
            console.log("-------- Test Sensor Adding new result ----- ", res);
            if (res.IsSuccess) {
                this.router.navigate(["/testrequest/details/", this.id]);
            }
        });
        this.dataService.postCommentUpdate(formCommentData).subscribe(res => {
            console.log("-------- Test Sensor Adding new result ----- ", res);
            if (res.IsSuccess) {
                this.router.navigate(["/testrequest/details/", this.id]);
            }
        });

        //this.dataService.postAdd(formData).subscribe(res => {
        //    console.log("-------- Test Sensor Adding new result ----- ", res);
        //    if (res.IsSuccess) {
        //        this.router.navigate(["/testrequest/details/", this.id]);
        //    }
        //});
    }
    //onSubmit(formRef) {
    //    console.log(formRef);
    //    console.log(this.testFacility.name);
    //    formRef.isDeleted = false;
    //    let formData: any = {
    //        id: this.id,
    //        name: '',
    //        address: {

    //            id: '',
    //            addressLine1: '',
    //            addressLine2: '',
    //            city: '',
    //            state: '',
    //            postalCode: '',
    //        }
    //    };
    //    formData.id = this.id;
    //    formData.name = formRef.name;
    //    formData.address.id = this.addressid;
    //    formData.address.addressLine1 = formRef.addressLine1;
    //    formData.address.addressLine2 = formRef.addressLine2;
    //    formData.address.city = formRef.city;
    //    formData.address.state = formRef.state;
    //    formData.address.postalCode = formRef.postalCode;
    //    formData.locale = "en-us";
    //    console.log(formData);
    //    this.dataService.postUpdate(formData).subscribe(res => {

    //        if (!res.errorMessage) {
    //            this.router.navigate(["/testfacilities/details/", res.result.id]);
    //        }

    //    });
    //    this.msgs = [];
    //    this.msgs.push({ severity: 'info', summary: 'saved', detail: '' });

    //}

    //onBeforeUpload(event) {

    //    for (let file of event.files) {
    //        this.uploadedFiles.push(file);

    //    }
    //}
    //onDelete(TestFacilityAttachment: ITestFacilityAttachment) {
    //    console.log('--------------TestFacilityAttachment id0------------', TestFacilityAttachment);
    //    this.testfacilityattachmentservice.DeleteAttachmentsById(TestFacilityAttachment.id)
    //        .subscribe(res => {

    //            this.testfacilityattachmentservice.getByIdusing(this.id)
    //                .subscribe(TestFacilityAttachments => {
    //                    console.log('-----------  TestFacilitiesroles------------------', TestFacilityAttachments);
    //                    this.TestFacilityAttachments = TestFacilityAttachments;
    //                });
    //        });
    //}


    //selectAttachment(TestFacilityAttachment: ITestFacilityAttachment) {
    //    console.log('---------------buttonclick---------------', TestFacilityAttachment);
    //    // return this.http.get(`${TestFacilityApiUrl.getfilesByIdUrl}/${path}`, { headers: this.headers })
    //    //   this.msgs = [];
    //    // this.msgs.push({severity:'info', summary:'Attachment Select', detail:'',  + TestFacilityAttachment.$values.path});


    //}

    //onUpload(event) {
    //    for (let file of event.files) {

    //        this.uploadedFiles.push(file);

    //    }

    //    this.testfacilityattachmentservice.getByIdusing(this.id)
    //        .subscribe(TestFacilityAttachments => {
    //            console.log('-----------  TestFacilitiesroles------------------', TestFacilityAttachments);
    //            this.TestFacilityAttachments = TestFacilityAttachments;
    //        });

    //    this.msgs = [];
    //    this.msgs.push({ severity: 'info', summary: 'File Uploaded', detail: '' });
    //}



}