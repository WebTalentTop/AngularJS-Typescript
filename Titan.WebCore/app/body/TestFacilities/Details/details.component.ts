
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
import { DataTable,Header, Footer, TabViewModule, LazyLoadEvent, ButtonModule, InputTextareaModule, InputTextModule, PanelModule, FileUploadModule, MessagesModule, Message, GrowlModule, MenuItem } from 'primeng/primeng';
import { Component, AfterViewInit, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { SelectItem, ConfirmationService } from 'primeng/primeng';
import { BreadCrumbsService } from '../../../shared/services/breadCrumbs/breadCrumbs.service';

declare var $: JQueryStatic;
declare var fullcalendardef: FullCalendar.Calendar;
declare var cron: any;
//interface CronJonStatic {
//    new (cronTime: string | Date, onTick: () => void, onComplete?: () => void, start?: boolean, timeZone?: string, context?: any): CronJob;
//    new (options: {
//        cronTime: string | Date; onTick: () => void; onComplete?: () => void; start?: boolean; timeZone?: string; context?: any
//    }): CronJob;
//}
//interface CronJob {
//    start(): void;
//    stop(): void;
//}

//interface CronTime { }
//interface CronTimeStatic {
//    new (time: string | Date): CronTime;
//}
//declare var crondef: CronJonStatic;
//import cron = require('../typings/cron/index');
//declare var fullCalendardef: Calendar;
//let $ = require('//cdnjs.cloudflare.com/ajax/libs/fullcalendar/3.0.1/fullcalendar.min.js');
//let cron = require('../../../../typings/cron/index.d.ts');

@Component({
    selector: 'details-testfacility',
    templateUrl: 'app/body/TestFacilities/Details/details.component.html'
})
export class DetailsComponent implements AfterViewInit {

    IsFrequency: boolean = false;
    hasNotifications: boolean = true;
    frequency: any;
    titanApiUrl: any = titanApiUrl;
    username: string;
    details: string;
    testFacilityTenants: any;
    equipments: any;
    displayAssignDepartmentsDialog: boolean;
    displayAssignEquipmentsDialog: boolean;
    displayAssignUserRolesDialog: boolean;
    departments: any;
    selectedDepartment: any;
    selectedEquipment: any;
    categories: any;
    selectedCategory: any = 'a366476b-1249-4c9b-b3b8-072cbab81e80';
    IsKeepOpen: boolean = false;
    // Form Related variables
    entityIdentifierName:string = 'TestFacility';
    entityIdentifierInfo:any = {};
    formSchemaCategoryInfo:IFormSchemaCategory[] = [];
    formSchemaInfo:any = {};
    formSchemaData:IFormSchema[] = [];// new FormSchema('', []);
    comment: any;
    testFacilityLogComments: any;
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
    lastMaintenanceDate: any;
    displayEquipmentDialog: boolean = false;
    formConfiguration: any;
    formObject: any;
    formEquipmentObject: any;
    id: string;
    addressid: any;
    entityType: string = "TestFacility";
    entityId: string = this.id;
    filepath: string = "TestFacility";
    testFacility = { name: '', maintenanceFrequency: '' , nextMaintenanceDate: '' };
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

    breadcrumbs: MenuItem[];
    breadcrumbsHome: MenuItem;

    msgs: Message[];
    uploadedFiles: any[] = [];


    tabLoadStatus = [
        {loaded:true, method: this.loadDetailsTabViews},
        {loaded:false, method: this.loadEquipmentTabViews},
        {loaded:false, method:this.loadScheduleTabViews},
        {loaded:false, method:this.loadMaintainanceTabViews},
        {loaded:false, method:this.loadAttachmentsTabViews},
        {loaded:false, method:this.loadLogsTabViews}
    ];

    constructor(
        private breadCrumbsService: BreadCrumbsService,
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
        
        let breadC = this.breadCrumbsService.getBreadCrumbs();
        let testFacilitiesDetailsBreadCrumb = breadC.filter(filter =>
                filter.pageName === 'TestFacilitiesDetailsPage'
            )[0];

            this.breadcrumbs = [];
            this.breadcrumbs = testFacilitiesDetailsBreadCrumb.items;

            this.breadcrumbsHome = { routerLink: ['/'] };
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
    }
    //onMaintenanceNeeded(event)
    //{

    //    this.FrequencyInit(event);
    //}
    frequencyInit()
    {
       // var cron_field = $('#selector').cron();
      //  if (IsFrequency && cron_field != null) {
            if (this.testFacility.maintenanceFrequency != null)
            { this.selectedMaintenanceFrequency = this.testFacility.maintenanceFrequency; }
            else
            { this.selectedMaintenanceFrequency = "* * * * *"; }

            $("#selector").cron({

                initial: this.selectedMaintenanceFrequency,
                onChange: function () {

                    this.selectedMaintenanceFrequency = $(this).cron("value");
                    // $('#selector-val').text($(this).cron("value"));
                },
                effectOpts: {
                    openEffect: "fade",
                    openSpeed: "slow"
                },
                useGentleSelect: true
            })

      //  }
    }

    ngAfterViewInit() {
        //var frequency: any;


    }

    downloadAttachment(attachment) {

        window.open(titanApiUrl + '/TestFacilityAttachment/file/' + attachment.id);
    }

    loadDetailsTabViews(me) {

    }

    loadMaintainanceTabViews(me) {
        me.getEntityIdentifierInfo();
    }

    loadLogsTabViews(me) {
        me.GetLogCommentsByTestFacilityId();
    }

    loadAttachmentsTabViews(me) {
        me.getCategories();
        me.getTestFacilityAttachmentServiceById();
    }

    loadScheduleTabViews(me) {
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
        let ref = me;
        setTimeout(function () { ref.initSchedule(); }, 10);
    }
    loadEquipmentTabViews(me) {
        me.getTestFacilities();
        me.getTestFacilityEquipmentById();
        me.getEquipments();
    }

    handleChange(event) {

        let load = this.tabLoadStatus[event.index];
        if (!load.loaded) {
            load.method(this);
            load.loaded = true;
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
        this.selectedRole = (event.value);

    }
    onDepartmentChange(event) {
        this.selectedDepartment = (event.value);

    }
    onEquipmentChange(event) {
        this.selectedEquipment = (event.value);
        //   this.EquipmentSubType.calibrationform = (event);

    }

    onMaintenanceFrequencyChange(event) {
        this.selectedMaintenanceFrequency = (event.value);

    }
    onOperatingHourChange(event) {
        this.selectedOperatingHour = (event.value);

    }
    onTestRoleChange(event) {
        this.selectedTestRoles = (event.value);


    }
    onBuildLevelChange(event) {
        this.selectedBuildLevels = (event.value);

    }
    onProjectCodeChange(event) {
        this.selectedProjectCodes = (event.value);

    }
    onCategoryChange(event) {
        this.selectedCategory = (event.value);
    }
    onTestFacilityChange(event) {
        this.selectedTestFacilities = (event.value);

    }
    onTestModeChange(event) {
        this.selectedTestModes = (event.value);
        //   this.EquipmentSubType.calibrationform = (event);

    }
    onTestTypeChange(event) {
        this.selectedTestTypes = (event.value);
        //   this.EquipmentSubType.calibrationform = (event);

    }
    onTestStatusChange(event) {
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
                this.testFacilityTenants = res;
            });

    }
    GetLogCommentsByTestFacilityId() {
        this.testFacilityService.getLogComments(this.id)
            .subscribe(res => {
                this.testFacilityLogComments = res;
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
        });
    }
    getCategories() {
        //    userRoles
        this.testFacilityService.getCategories().subscribe(response => {
            this.categories = new Array();
            if (response != null) {
                var resultMap = new Array();
                resultMap.push({
                    label: "Select Category",
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
                        label: template.frequency,
                        value: template.id
                    }
                    resultMap.push(temp);
                }
                this.maintenanceFrequencies = resultMap;
            }
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

    getTestFacilityById(){
        this.testFacilityService.getById(this.id)
            .subscribe(res => {
                //this.formConfiguration = res.formConfiguration;
                //this.formObject = res.formObject;
                this.address = res.address;
                this.addressid = res.address.id
                this.testFacility = res.testFacility;
                this.frequencyInit();
                this.testFacility.maintenanceFrequency = res.testFacility.maintenanceFrequency;
                this.lastMaintenanceDate = res.testFacility.lastMaintenanceDate;
            //    this.selectedOperatingHour = res.testFacility.operatingHourName;
              //  this.selectedMaintenanceFrequency = res.testFacility.frequency;
                //this.model = res.formObject;
                //console.log("----- Result of formConfiguration -----", this.formConfiguration.fields.$values);
                //console.log("----- Result of formObject -----", this.model);
            });
        if (this.id) {
            this.testFacilityService.getNotifications(this.id)
                .subscribe(res => {
                    if (res) {
                        this.notifications = res;
                        if (res.length > 0) {
                            this.hasNotifications = false;
                        }
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

    getTestFacilityRoleService() {
        this.testfacilityroleservice.getByIdusing(this.id)
            .subscribe(TestFacilityRoles => {
                this.TestFacilityRoles = TestFacilityRoles;
            });
    }
    getTestFacilityAttachmentServiceById() {
        this.testfacilityattachmentservice.getByIdusing(this.id)
            .subscribe(TestFacilityAttachments => {
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

        if (!this.IsKeepOpen)
            this.displayAssignUserRolesDialog = false;
        else
            this.displayAssignUserRolesDialog = true;

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

        if ((this.TestFacilityRoles.find(tfr => tfr.role == "Primary Incharge") != undefined) && (this.selectedRole == "1753ca8b-5162-4d98-8fc0-64ff08377ae8")) {
            this.msgs = [];
            this.msgs.push({ severity: 'info', summary: 'Already user with PIC present', detail: '' });
            return null;
        }

        if (this.filteredSelectedUserNames.length > 1 && this.selectedRole == "1753ca8b-5162-4d98-8fc0-64ff08377ae8") {
            this.msgs = [];
            this.msgs.push({ severity: 'info', summary: 'Please select only one user for role PIC', detail: '' });
            return null;
        }
        if ((this.TestFacilityRoles.find(tfr => tfr.role == "Secondary Incharge") != undefined) && (this.selectedRole == "c8d592a9-3cac-41c1-803d-c8f0464db0b8")) {
            this.msgs = [];
            this.msgs.push({ severity: 'info', summary: 'Already user with SIC present', detail: '' });
            return null;
        }

        if (this.filteredSelectedUserNames.length > 1 && this.selectedRole == "c8d592a9-3cac-41c1-803d-c8f0464db0b8") {
            this.msgs = [];
            this.msgs.push({ severity: 'info', summary: 'Please select only one user for role SIC', detail: '' });
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
                    this.TestFacilityRoles = TestFacilityRoles;
                    if (this.selectedRole == "1753ca8b-5162-4d98-8fc0-64ff08377ae8" || this.selectedRole == "c8d592a9-3cac-41c1-803d-c8f0464db0b8") {
                        this.testFacilityService.getNotifications(this.id)
                            .subscribe(res => {
                                if (res) {
                                    this.notifications = res;
                                    if (res.length > 0)
                                    {
                                        this.hasNotifications = false;
                                    }
                                }

                                this.notifications.forEach(x => {
                                    this.notificationMsgs.push({ severity: 'warn', summary: x.ruleMessage, detail: x.description });
                                })
                            });
                    }
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
        if (!this.IsKeepOpen)
            this.displayAssignDepartmentsDialog = false;
        else
            this.displayAssignDepartmentsDialog = true;

        this.testFacilityService.postAddDepartment(this.id, this.selectedDepartment).subscribe(filteredList => {

            this.testFacilityService.getTenants(this.id)
                .subscribe(res => {
                    this.testFacilityTenants = res;
                });
        });

        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Department Added', detail: '' });
    }

    AddLogComment()
    {
        if (this.comment == null || this.comment == '') {
            this.msgs = [];
            this.msgs.push({ severity: 'info', summary: 'Please write any comment', detail: '' });
            return null;
        }

        this.testFacilityService.PostLogComments(this.id,JSON.stringify(this.comment)).subscribe(filteredList => {
            this.testFacilityService.getLogComments(this.id)
                .subscribe(res => {
                    this.testFacilityLogComments = res;
                });

        });

        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Comment saved', detail: '' });

    }
    onAddEquipment() {

        if (this.selectedEquipment == null) {
            this.msgs = [];
            this.msgs.push({ severity: 'info', summary: 'Search any equipment to add', detail: '' });
            return null;
        }
        if (!this.IsKeepOpen)
            this.displayAssignEquipmentsDialog = false;
        else
            this.displayAssignEquipmentsDialog = true;

        this.testFacilityService.postAddEquipment(this.id, this.selectedEquipment).subscribe(filteredList => {

            this.testFacilityService.getEquipmentsByIdusing(this.id)
                .subscribe(res => {
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
        formRef.isDeleted = false;
        let formData: any = {
            id: this.id,
            name: '',
            description: '',
            operatingHourId: '',
            maintenanceFrequency: '',
            lastMaintenanceDate : '',
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
     
        formData.maintenanceFrequency = $('#selector').cron("value");
        formData.address.id = this.addressid;
        formData.address.addressLine1 = formRef.addressLine1;
        formData.address.addressLine2 = formRef.addressLine2;
        formData.address.city = formRef.city;
        formData.address.state = formRef.state;
        formData.address.postalCode = formRef.postalCode;
        formData.locale = "en-us";
        this.testFacilityService.postUpdate(formData).subscribe(res => {

            if (res.isSuccess) {
                this.testFacilityService.getById(this.id)
                    .subscribe(res => {
                        //this.formConfiguration = res.formConfiguration;
                        //this.formObject = res.formObject;
                        this.address = res.address;
                        this.addressid = res.address.id
                        this.testFacility = res.testFacility;
                        this.frequencyInit();
                        this.testFacility.maintenanceFrequency = res.testFacility.maintenanceFrequency;
                        this.lastMaintenanceDate = res.testFacility.lastMaintenanceDate;
                       
                    });
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
        this.testfacilityattachmentservice.DeleteAttachmentsById(TestFacilityAttachment.id)
            .subscribe(res => {

                this.testfacilityattachmentservice.getByIdusing(this.id)
                    .subscribe(TestFacilityAttachments => {
                        this.TestFacilityAttachments = TestFacilityAttachments;
                    });
            });
    }

    onDeleteUserRoleMap(event) {
        this.testFacilityService.DeleteUserRoleMap(event)
            .subscribe(res => {

                this.testfacilityroleservice.getByIdusing(this.id)
                    .subscribe(TestFacilityRoles => {
                        this.TestFacilityRoles = TestFacilityRoles;
                        this.testFacilityService.getNotifications(this.id)
                            .subscribe(res => {
                                if (res) {
                                    this.notifications = res;
                                    if (res.length > 0) {
                                        this.hasNotifications = false;
                                    }
                                }

                                this.notifications.forEach(x => {
                                    this.notificationMsgs.push({ severity: 'warn', summary: x.ruleMessage, detail: x.description });
                                })
                            });

                    });
            });
    }
    onDeleteEquipmentMap(event) {
        this.testFacilityService.DeleteEquipmentMap(event)
            .subscribe(res => {

                this.testFacilityService.getEquipmentsByIdusing(this.id)
                    .subscribe(res => {
                        this.TestFacilityEquipments = res;

                    });
            });
    }
    onDeleteTenantMap(event) {
        this.testFacilityService.DeleteTenantMap(event)
            .subscribe(res => {

                this.testFacilityService.getTenants(this.id)
                    .subscribe(res => {
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
                this.TestFacilityAttachments = TestFacilityAttachments;
            });

        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'File Uploaded', detail: '' });
    }

    private getEntityIdentifierInfo() {
        this.entityIdentifierService.getByName(this.entityIdentifierName)
            .subscribe(res => {
                if(res.isSuccess) {
                    this.entityIdentifierInfo = res.result;

                    this.formSchemaCategoryService.getByEntityIdentifierId(this.entityIdentifierInfo.id)
                        .subscribe(fsCategory => {
                            if(fsCategory.isSuccess) {
                                this.formSchemaCategoryInfo = fsCategory.result;

                                let fscIds = this.formSchemaCategoryInfo.map(fsc => fsc.id);


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
    }

    closeFormPreviewDialog() {
        this.displayPreviewSelectedForm = false;
        this.selectedFormName = '';
        this.selectedFormFields = [];
    }


    // Entering data to the form to create a Form Instance
    showFormInstance(formSchema) {
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