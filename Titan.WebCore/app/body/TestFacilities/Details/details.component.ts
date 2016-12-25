import { titanApiUrl } from '../../../shared/services/apiurlconst/titanapiurl';
import { TestFacilityService } from '../../../shared/services/testfacility.service';

import { EntityIdentifierService } from '../../../shared/services/entityIdentifier.service';
import { FormSchemaCategoryService } from '../../../shared/services/formSchemaCategory.service';
import { FormSchemaService } from '../../../shared/services/formSchema.service';
import { IFormSchema, FormSchema} from '../../../shared/services/definitions/IFormSchema';

import { BuildLevelService } from '../../../shared/services/buildlevel.service';
import { TestStatusService } from '../../../shared/services/teststatus.service';
import { TestRoleService } from '../../../shared/services/testRole.service';
import { ProjectService } from '../../../shared/services/project.service';
import { TestModeService } from '../../../shared/services/testMode.service';
import { TestTypeService } from '../../../shared/services/testType.service';
import { TestFacilityRoleService } from '../../../shared/services/testFacilityRole.service';
import { IFormSchemaCategory } from '../../../shared/services/definitions/IFormSchemaCateogry';
import { ITestFacilityRole } from '../../../shared/services/definitions/ITestFacilityRole';
import { TestFacilityAttachmentService } from '../../../shared/services/testFacilityAttachment.service';
import { ITestFacilityAttachment } from '../../../shared/services/definitions/ITestFacilityAttachment';
import { ITestFacilityEquipment } from '../../../shared/services/definitions/ITestFacilityEquipment';
import { DataTable,Header, Footer, TabViewModule, LazyLoadEvent, ButtonModule, InputTextareaModule, InputTextModule, PanelModule, FileUploadModule, MessagesModule, Message, GrowlModule } from 'primeng/primeng';
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
    selector: 'details-testfacility',
    templateUrl: 'app/body/TestFacilities/Details/details.component.html'
})
export class DetailsComponent implements AfterViewInit {

    titanApiUrl: any = titanApiUrl;
    username: string;
    details: string;
    testFacilityTenants: any;
    equipments: any;
    displayAssignDepartmentsDialog: boolean;
    displayAssignEquipmentsDialog: boolean;
    departments: any;
    selectedDepartment: any;
    selectedEquipment: any;
    categories: any;
    selectedCategory: any;
    // Form Related variables
    entityIdentifierName:string = 'TestFacility';
    entityIdentifierInfo:any = {};
    formSchemaCategoryInfo:IFormSchemaCategory[] = [];
    formSchemaInfo:any = {};
    formSchemaData:IFormSchema[] = [];// new FormSchema('', []);
    
    displayPreviewSelectedForm:boolean = false;
    operatingHours: any;
    maintenanceFrequencies: any;
    selectedOperatingHour: any;
    selectedMaintenanceFrequency: any;
    // Form Display
    selectedFormSchemaCategory;
    selectedFormFields:any[] = [];
    selectedFormName:string;
    // End of Form Display

    // FormInstance variables
    displayFormInsanceForm:boolean = false;
    formInstanceFormSchemaVersionId:string;
    formInstanceFormSchema:any;
    formInstanceFields: any[] = [];
    
    // End Of Form Related Variables

    notificationMsgs: Message[] = [];
    notifications: any;

    testTemplate: any;
    userRoles: any;
    testRoles: any;
    buildLevels: any;
    projectCodes: any;
    testFacilities: any;
    testAllModes: any;
    testTypes: any;
    testStatus: any;
    testModes: Array<any> = new Array();
    selectedUserNames: Array<any> = new Array();
    filteredUserNames: Array<any> = new Array();
    filteredSelectedUserNames: Array<any> = new Array();
    selectedRole: any;
    selectedTestRoles: any[];
    selectedTestFacilities: any[];
    selectedTestTypes: any[];
    selectedTestModes: any[];
    selectedBuildLevels: any[];
    selectedTestStatuses: any[];
    selectedProjectCodes: any[];
    displayEquipmentDialog: boolean = false;
    formConfiguration: any;
    formObject: any;
    formEquipmentObject: any;
    id: string;
    addressid: any;
    entityType: string = "TestFacility";
    entityId: string = this.id;
    filepath: string = "TestFacility";
    testFacility = { name: '' };
    address = { addressLine1: '', addressLine2: '', city: '', state: '', postalCode: '' };
    TestFacilityAttachments: ITestFacilityAttachment[];
    TestFacilityRoles: ITestFacilityRole[];
    TestFacilityEquipments: ITestFacilityEquipment[];
    selectedEquipmentId: any;
    // Hide show Tab Panels
    displayEquipmentTab: boolean = false;
    displayScheduleTab: boolean = false;
    model: any = {
        id: '',
        isDeleted: false,
        name: '',
        createdOn: '',
        modifiedOn: '',
        userCreatedById: '',
        userInChargedId: '',
        userModifiedById: ''
    };

    msgs: Message[];
    uploadedFiles: any[] = [];

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private testFacilityService: TestFacilityService,
        private entityIdentifierService: EntityIdentifierService,
        private formSchemaCategoryService: FormSchemaCategoryService,
        private formSchemaService: FormSchemaService,
        private testfacilityroleservice: TestFacilityRoleService,
        private buildlevelservice: BuildLevelService,
        private teststatusservice: TestStatusService,
        private testroleservice: TestRoleService,
        private projectservice: ProjectService,
        private testmodeservice: TestModeService,
        private testtypeservice: TestTypeService,

        private testfacilityattachmentservice: TestFacilityAttachmentService
    ) {
        this.route.params.subscribe(params => this.id = params['id']);
        this.entityId = this.id;
        console.log("---- TF Details ID Param -----", this.id);
    }

    ngOnInit() {
        if (this.id) {
            //this.categories = [];
            //this.categories.push({ label: 'All categories', value: null });
            //this.categories.push({ label: 'Wheel Alignment', value: '5A3AFB53-A3D2-4BDF-8909-E60ED577F84D' });
            //this.categories.push({ label: 'Torque for Parts', value: '817164F9-01D8-470D-BD58-618F4BF135F2' });
            //this.categories.push({ label: 'Certificates', value: 'Certificates' });
            //this.categories.push({ label: 'Standard Documents', value: 'Standard Documents' });
            //this.categories.push({ label: 'Manual', value: 'Manual' });
            //this.categories.push({ label: 'Results', value: 'Results' });
           

            this.getEntityIdentifierInfo();
            this.getUserRoles();
            this.getTestFacilities();
            this.getTestModes();
            this.getTestTypes();
            this.getBuildLevels();
            this.getTestStatus();
            this.getProjectCodes();
            this.getTestRoles();
            this.getTestFacilityById();
            this.getTestFacilityRoleService();
            this.getTestFacilityAttachmentServiceById();
            this.getTestFacilityEquipmentById();
            this.GetTenantsByTestFacilityId();

            this.getDepartments();
            this.getEquipments();

            this.getOperatingHours();
            this.getMaintenanceFrequencies();
            this.getCategories();

        }
    }

    ngAfterViewInit() {

    }
    downloadAttachment(attachment) {

        window.open(titanApiUrl + '/TestFacilityAttachment/file/' + attachment.id);
    }
    handleChange(event) {
        // console.log('--------tab changed---', event);
        // console.log('-------targetid-------', event.originalEvent.target.innerText);
        if (event.originalEvent.currentTarget.classList.contains("equipment")) {
            this.displayEquipmentTab = true;
        } else if (!this.displayScheduleTab && event.originalEvent.currentTarget.classList.contains("schedule")) {
            this.displayScheduleTab = true;
            $("#calendar").parent('.ui-tabview-panel').show();
            let ref = this;
            setTimeout(function () { ref.initSchedule(); }, 10);
        }


    }
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

    onUserRoleChange(event) {
        // console.log('------event------------', event)
        this.selectedRole = (event.value);
        //   this.EquipmentSubType.calibrationform = (event);

    }
    onDepartmentChange(event) {
        // console.log('------event------------', event)
        this.selectedDepartment = (event.value);
        //   this.EquipmentSubType.calibrationform = (event);

    }
    onEquipmentChange(event) {
        // console.log('------event------------', event)
        this.selectedEquipment = (event.value);
        //   this.EquipmentSubType.calibrationform = (event);

    }
   
    onMaintenanceFrequencyChange(event) {
        // console.log('------event------------', event)
        this.selectedMaintenanceFrequency = (event.value);
        //   this.EquipmentSubType.calibrationform = (event);

    }
    onOperatingHourChange(event) {
        // console.log('------event------------', event)
        this.selectedOperatingHour = (event.value);
        //   this.EquipmentSubType.calibrationform = (event);

    }
    onTestRoleChange(event) {
        // console.log('------event------------', event)
        this.selectedTestRoles = (event.value);
       
        //   this.EquipmentSubType.calibrationform = (event);

    }
    onBuildLevelChange(event) {
        // console.log('------event------------', event)
        this.selectedBuildLevels = (event.value);
        //   this.EquipmentSubType.calibrationform = (event);

    }
    onProjectCodeChange(event) {
        // console.log('------event------------', event)
        this.selectedProjectCodes = (event.value);
        //   this.EquipmentSubType.calibrationform = (event);

    }
    onCategoryChange(event) {
        // console.log('------event------------', event)
        this.selectedCategory = (event.value);
        //   this.EquipmentSubType.calibrationform = (event);

    }
    onTestFacilityChange(event) {
        // console.log('------event------------', event)
        this.selectedTestFacilities = (event.value);
        //   this.EquipmentSubType.calibrationform = (event);

    }
    onTestModeChange(event) {
        // console.log('------event------------', event)
        this.selectedTestModes = (event.value);
        //   this.EquipmentSubType.calibrationform = (event);

    }
    onTestTypeChange(event) {
        // console.log('------event------------', event)
        this.selectedTestTypes = (event.value);
        //   this.EquipmentSubType.calibrationform = (event);

    }
    onTestStatusChange(event) {
        // console.log('------event------------', event)
        this.selectedTestStatuses = (event.value);
        //this.testFacilityService.getFilteredEvents(this.selectedTestStatuses, this.selectedTestStatuses, this.selectedTestStatuses, this.selectedTestStatuses, this.selectedTestStatuses, this.selectedTestStatuses, this.selectedTestStatuses)
        //    .subscribe(TestFacilityEvents => {
        //        console.log('-----------  TestFacilitiesEvents------------------', TestFacilityEvents);
        //        //this.TestFacilityEvents = TestFacilityEvents;
        //    });
        //   this.EquipmentSubType.calibrationform = (event);

    }
    showEquipmentDialog(event) {
        this.displayEquipmentDialog = true;
        this.selectedEquipmentId = event.equipmentId;
        //this.selectedCalibration = null;
        //this.EquipmentSubType = new PrimeEquipmentSubType('', '', '', '', '', '', this.id);
        //this.displayDialog = true;
        // this.IsSubType= true;
    }
    moveEquipmenttoTestFacility()
    {
        if (this.selectedTestFacilities == null || this.selectedTestFacilities == undefined) {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: 'Please select Test Facility', detail: '' });
            return null;
        }
        let postbody = {
            'equipmentId': this.selectedEquipmentId,
            'facilityId': this.selectedTestFacilities
        };
     
        this.testFacilityService.moveEquipmenttoTestFacility(postbody).subscribe(res => {

            this.displayEquipmentDialog = false;
            this.testFacilityService.getEquipmentsByIdusing(this.id)
                .subscribe(res => {
                    this.TestFacilityEquipments = res;

                });
        });
        // selected testfacility,selectedequipment info .... call to assign testfacility to equipment
    }

    GetTenantsByTestFacilityId()
    {
        this.testFacilityService.getTenants(this.id)
            .subscribe(res => {
                //    console.log('-----------  TestFacilitiesroles------------------', TestFacilityRoles);
                this.testFacilityTenants = res;
            });

    }
    getUserRoles() {
        //    userRoles
        this.testFacilityService.getRoles().subscribe(response => {
            this.userRoles = new Array();
            if (response != null) {
                var resultMap = new Array();
                resultMap.push({
                    label: "Select User Role",
                    value: null
                });
                for (let template of response) {
                    var temp = {
                        label: template.name,
                        value: template.id
                    }
                    resultMap.push(temp);
                }
                this.userRoles = resultMap;
            }
            // console.log(response);
        });
    }
    getCategories() {
        //    userRoles
        this.testFacilityService.getCategories().subscribe(response => {
            this.categories = new Array();
            if (response != null) {
                var resultMap = new Array();
                resultMap.push({
                    label: "Select User Role",
                    value: null
                });
                for (let template of response) {
                    var temp = {
                        label: template.name,
                        value: template.id
                    }
                    resultMap.push(temp);
                }
                this.categories = resultMap;
            }
            // console.log(response);
        });
    }
    getDepartments() {
        //    userRoles
        this.testFacilityService.getDepartments().subscribe(response => {
            this.departments = new Array();
            if (response != null) {
                var resultMap = new Array();
                resultMap.push({
                    label: "Select Department",
                    value: null
                });
                for (let template of response) {
                    var temp = {
                        label: template.name,
                        value: template.id
                    }
                    resultMap.push(temp);
                }
                this.departments = resultMap;
            }
            // console.log(response);
        });
    }
    getMaintenanceFrequencies() {
        //    userRoles
        this.testFacilityService.getMaintenanceFrequencies().subscribe(response => {
            this.maintenanceFrequencies = new Array();
            if (response != null) {
                var resultMap = new Array();
                resultMap.push({
                    label: "Select Maintenance Frequency",
                    value: null
                });
                for (let template of response) {
                    var temp = {
                        label: template.name,
                        value: template.id
                    }
                    resultMap.push(temp);
                }
                this.maintenanceFrequencies = resultMap;
            }
            // console.log(response);
        });
    }
    getOperatingHours() {
        //    userRoles
        this.testFacilityService.getOperatingHours().subscribe(response => {
            this.operatingHours = new Array();
            if (response != null) {
                var resultMap = new Array();
                resultMap.push({
                    label: "Select Operating Hours",
                    value: null
                });
                for (let template of response) {
                    var temp = {
                        label: template.name,
                        value: template.id
                    }
                    resultMap.push(temp);
                }
                this.operatingHours = resultMap;
            }
            // console.log(response);
        });
    }
    getEquipments() {
        //    userRoles
        this.testFacilityService.getEquipments().subscribe(response => {
            this.equipments = new Array();
            if (response != null) {
                var resultMap = new Array();
                resultMap.push({
                    label: "Select Equipment",
                    value: null
                });
                for (let template of response) {
                    var temp = {
                        label: template.name,
                        value: template.id
                    }
                    resultMap.push(temp);
                }
                this.equipments = resultMap;
            }
            // console.log(response);
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
            // console.log(response);
        });
    }

    getTestFacilityById(){
        this.testFacilityService.getById(this.id)
            .subscribe(res => {
                //this.formConfiguration = res.formConfiguration;
                //this.formObject = res.formObject;
                this.address = res.address;
                this.addressid = res.address.id
                this.testFacility = res.testFacility;
                //this.model = res.formObject;
                //console.log("----- Result of formConfiguration -----", this.formConfiguration.fields.$values);
                //console.log("----- Result of formObject -----", this.model);
            });
        if (this.id) {
            this.testFacilityService.getNotifications(this.id)
                .subscribe(res => {
                    if (res) {
                        this.notifications = res;
                    }

                    this.notifications.forEach(x => {
                        this.notificationMsgs.push({ severity: 'warn', summary: x.ruleMessage, detail: x.description });
                    })
                })
        }
    }

    getTestFacilities() {
        //    userRoles
        this.testFacilityService.getTestFacilities().subscribe(response => {
            this.testFacilities = new Array();
            if (response != null) {
                var resultMap = new Array();
                resultMap.push({
                    label: "Select Test Facility",
                    value: null
                });
                for (let template of response) {
                    var temp = {
                        label: template.name,
                        value: template.id
                    }
                    resultMap.push(temp);
                }
                this.testFacilities = resultMap;
            }
            // console.log(response);
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
            // console.log(response);
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
            // console.log(response);
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
            //console.log(response);
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
            //console.log(response);
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
            //console.log(response);
        });
    }

    getTestFacilityRoleService() {
        this.testfacilityroleservice.getByIdusing(this.id)
            .subscribe(TestFacilityRoles => {
            //    console.log('-----------  TestFacilitiesroles------------------', TestFacilityRoles);
                this.TestFacilityRoles = TestFacilityRoles;
            });
    }
    getTestFacilityAttachmentServiceById() {
        this.testfacilityattachmentservice.getByIdusing(this.id)
            .subscribe(TestFacilityAttachments => {
                console.log('-----------  TestFacilitiesroles------------------', TestFacilityAttachments);
                this.TestFacilityAttachments = TestFacilityAttachments;
            });
    }

    getTestFacilityEquipmentById() {
        this.testFacilityService.getEquipmentsByIdusing(this.id)
            .subscribe(res => {
                this.TestFacilityEquipments = res;

            });
    }

    onAddUserRole() {

        if (this.filteredSelectedUserNames.length == 0) {
            this.msgs = [];
            this.msgs.push({ severity: 'info', summary: 'Search any user to add', detail: '' });
            return null;
        }
        if (this.selectedRole == null) {
            this.msgs = [];
            this.msgs.push({ severity: 'info', summary: 'Please select Role', detail: '' });
            return null;
        }
        var selectedUserNames = new Array();
        for (var sel of this.filteredSelectedUserNames) {
            selectedUserNames.push(sel.id);
        }
        //var inputDto = {
        //    testRequirementList: selectedTestRequirementIds
        //}
        this.testFacilityService.postAddUserNames(selectedUserNames, this.id, this.selectedRole).subscribe(filteredList => {
            this.selectedUserNames = filteredList.$values;
            this.filteredSelectedUserNames = null;
            this.testfacilityroleservice.getByIdusing(this.id)
                .subscribe(TestFacilityRoles => {
          //          console.log('-----------  TestFacilitiesroles------------------', TestFacilityRoles);
                    this.TestFacilityRoles = TestFacilityRoles;
                });
        });

        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'User Added', detail: '' });
    }

    onAddDepartment() {

        if (this.selectedDepartment == null) {
            this.msgs = [];
            this.msgs.push({ severity: 'info', summary: 'Search any department to add', detail: '' });
            return null;
        }
        
        this.testFacilityService.postAddDepartment(this.id, this.selectedDepartment).subscribe(filteredList => {
           
            this.testFacilityService.getTenants(this.id)
                .subscribe(res => {
                    //          console.log('-----------  TestFacilitiesroles------------------', TestFacilityRoles);
                    this.testFacilityTenants = res;
                });
        });

        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Department Added', detail: '' });
    }

    onAddEquipment() {

        if (this.selectedEquipment == null) {
            this.msgs = [];
            this.msgs.push({ severity: 'info', summary: 'Search any equipment to add', detail: '' });
            return null;
        }

        this.testFacilityService.postAddEquipment(this.id, this.selectedEquipment).subscribe(filteredList => {
           
            this.testFacilityService.getEquipmentsByIdusing(this.id)
                .subscribe(res => {
                    //          console.log('-----------  TestFacilitiesroles------------------', TestFacilityRoles);
                    this.TestFacilityEquipments = res;
                });
        });

        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Department Added', detail: '' });
    }

    filterUserNames(event) {
        this.testFacilityService.filterByUserNames(event.query).subscribe(filteredList => {
            this.filteredUserNames = filteredList.$values;
        });
    }
    onSubmit(formRef) {
        //console.log(formRef);
        //console.log(this.testFacility.name);
        formRef.isDeleted = false;
        let formData: any = {
            id: this.id,
            name: '',
            description: '',
            operatingHourId: '',
            maintenanceFrequencyId: '',
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
        formData.maintenanceFrequencyId = this.selectedMaintenanceFrequency;        
        formData.address.id = this.addressid;
        formData.address.addressLine1 = formRef.addressLine1;
        formData.address.addressLine2 = formRef.addressLine2;
        formData.address.city = formRef.city;
        formData.address.state = formRef.state;
        formData.address.postalCode = formRef.postalCode;
        formData.locale = "en-us";
        console.log(formData);
        this.testFacilityService.postUpdate(formData).subscribe(res => {

            if (res.isSuccess) {
                this.msgs = [];
                this.msgs.push({ severity: 'info', summary: 'saved', detail: '' });

               // this.router.navigate(["/testfacilities/details/", res.result.id]);
            }

        });
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'saved', detail: '' });

    }

    onBeforeUpload(event) {

        for (let file of event.files) {
            this.uploadedFiles.push(file);

        }
    }
    onDelete(TestFacilityAttachment: ITestFacilityAttachment) {
        //console.log('--------------TestFacilityAttachment id0------------', TestFacilityAttachment);
        this.testfacilityattachmentservice.DeleteAttachmentsById(TestFacilityAttachment.id)
            .subscribe(res => {

                this.testfacilityattachmentservice.getByIdusing(this.id)
                    .subscribe(TestFacilityAttachments => {
          //              console.log('-----------  TestFacilitiesroles------------------', TestFacilityAttachments);
                        this.TestFacilityAttachments = TestFacilityAttachments;
                    });
            });
    }

    onDeleteUserRoleMap(event) {
        //console.log('--------------TestFacilityAttachment id0------------', TestFacilityAttachment);
        this.testFacilityService.DeleteUserRoleMap(event)
            .subscribe(res => {

                this.testfacilityroleservice.getByIdusing(this.id)
                    .subscribe(TestFacilityRoles => {
                        //              console.log('-----------  TestFacilitiesroles------------------', TestFacilityAttachments);
                        this.TestFacilityRoles = TestFacilityRoles;
                    });
            });
    }
    onDeleteEquipmentMap(event) {
        //console.log('--------------TestFacilityAttachment id0------------', TestFacilityAttachment);
        this.testFacilityService.DeleteEquipmentMap(event)
            .subscribe(res => {

                this.testFacilityService.getEquipmentsByIdusing(this.id)
                    .subscribe(res => {
                        this.TestFacilityEquipments = res;

                    });
            });
    }
    onDeleteTenantMap(event) {
        //console.log('--------------TestFacilityAttachment id0------------', TestFacilityAttachment);
        this.testFacilityService.DeleteTenantMap(event)
            .subscribe(res => {

                this.testFacilityService.getTenants(this.id)
                    .subscribe(res => {
                        //    console.log('-----------  TestFacilitiesroles------------------', TestFacilityRoles);
                        this.testFacilityTenants = res;
                    });

            });
    }

    selectAttachment(TestFacilityAttachment: ITestFacilityAttachment) {
        //console.log('---------------buttonclick---------------', TestFacilityAttachment);
        // return this.http.get(`${TestFacilityApiUrl.getfilesByIdUrl}/${path}`, { headers: this.headers })
        //   this.msgs = [];
        // this.msgs.push({severity:'info', summary:'Attachment Select', detail:'',  + TestFacilityAttachment.$values.path});


    }

    onUpload(event) {
        for (let file of event.files) {

            this.uploadedFiles.push(file);

        }

        this.testfacilityattachmentservice.getByIdusing(this.id)
            .subscribe(TestFacilityAttachments => {
                //console.log('-----------  TestFacilitiesroles------------------', TestFacilityAttachments);
                this.TestFacilityAttachments = TestFacilityAttachments;
            });

        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'File Uploaded', detail: '' });
    }

    private getEntityIdentifierInfo() {
        this.entityIdentifierService.getByName(this.entityIdentifierName)
            .subscribe(res => {
                if(res.isSuccess) {
                    console.log("EntityIdentifierInfo Call ----------", res);
                    this.entityIdentifierInfo = res.result;

                    this.formSchemaCategoryService.getByEntityIdentifierId(this.entityIdentifierInfo.id)
                        .subscribe(fsCategory => {
                            console.log("FormSchemaCategoryInfo ----------", fsCategory);
                            if(fsCategory.isSuccess) {
                                this.formSchemaCategoryInfo = fsCategory.result;

                                let fscIds = this.formSchemaCategoryInfo.map(fsc => fsc.id);

                                console.log("Form Schema Category Ids -----", fscIds);

                                /*this.formSchemaService.getByFormSchemaCategoryId(fscIds[1])
                                    .subscribe(formSchemaResult => {
                                        console.log("FormSchema Result by FormSchemaCategory ------", formSchemaResult);
                                        this.formSchemaData = formSchemaResult.result;
                                        console.log("FormSchemaData ----------", this.formSchemaData);

                                    });*/
                                this.formSchemaService.getByFormSchemaCategoryIdCol(fscIds)
                                    .subscribe(formSchemaResult => {
                                        console.log("FormSchema Result by FormSchemaCategory ------", formSchemaResult);
                                        if (formSchemaResult.isSuccess){
                                            this.formSchemaData = formSchemaResult.result;
                                            console.log("FormSchemaData ----------", this.formSchemaData);
                                        }
                                        else {
                                            this.formSchemaData = [];
                                        }

                                    });
                            }
                        });
                }
                else{
                    //Add a message to the user and maybe after certain seconds take them to home page or ...
                    //this.msgs.push({})
                }
            })
    }

    selectedFormToView(formName,formSchemaItems) {
        this.selectedFormName = formName;
        this.selectedFormFields = formSchemaItems;
        this.displayPreviewSelectedForm = true;
        console.log("FormName -------", this.selectedFormName);
        console.log("Form Schema To View clicked ----", this.selectedFormFields);
        console.log("PreviewSelectedForm dialog display -------", this.displayPreviewSelectedForm);
    }

    closeFormPreviewDialog() {
        this.displayPreviewSelectedForm = false;
        this.selectedFormName = '';
        this.selectedFormFields = [];
        console.log("After Closed Dialog FormName -------", this.selectedFormName || "reseted");
        console.log("After Closed Dialog Form Schema To View clicked ----", this.selectedFormFields || "reseted");
        console.log("After Closed Dialog PreviewSelectedForm dialog display -------", this.displayPreviewSelectedForm || "reseted");
    }


    // Entering data to the form to create a Form Instance
    showFormInstance(formSchema) {
        console.log("ShowFOrmInstance ----", formSchema);
        this.selectedFormName = formSchema.name;
        this.formInstanceFormSchemaVersionId = formSchema.formSchemaVersion.id;
        this.formInstanceFields = formSchema.fields.$values;
        //this.formInstanceFormSchema = formSchema;*/
        this.displayFormInsanceForm = true;
    }

    closeFormInstanceDialog() {
        this.displayFormInsanceForm = false;
        this.selectedFormName = '';
        this.formInstanceFormSchemaVersionId = '';
        this.formInstanceFields = [];
    }

}