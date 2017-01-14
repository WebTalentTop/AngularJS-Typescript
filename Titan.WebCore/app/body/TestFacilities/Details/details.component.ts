import { TestFacilityService } from '../../../shared/services/Containers/TestFacilityService/testFacility.service';
import { LoggerService } from '../../../shared/services/logger/logger.service';
import { titanApiUrl } from '../../../shared/services/apiurlconst/titanapiurl';

import { EntityIdentifierService } from '../../../shared/services/entityIdentifier.service';
import { FormSchemaCategoryService } from '../../../shared/services/formSchemaCategory.service';
import { FormSchemaService } from '../../../shared/services/formSchema.service';
import { FormInstanceService } from '../../../shared/services/formInstance.service';
import { IFormSchema, FormSchema, IFormSchemaGridMF} from '../../../shared/services/definitions/IFormSchema';

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
import {ITitanSelectItem} from "../../../shared/services/definitions/ITitanSelectItem";

import { BreadCrumbsService } from '../../../shared/services/breadCrumbs/breadCrumbs.service';

import * as moment from 'moment/moment';


declare var $: JQueryStatic;
declare var fullcalendardef: FullCalendar.Calendar;
declare var cron: any;

@Component({
    selector: 'details-testfacility',
    templateUrl: 'app/body/TestFacilities/Details/details.component.html'
})
export class DetailsComponent implements AfterViewInit {

   hasNextMaintenanceDate: boolean = false;
    isMaintenaceFrequencySelected: boolean = false;
    isCronControlInitialized : boolean=false;

    frequency: any;
    IsTestFacilityDelete: boolean = false;
    titanApiUrl: any = titanApiUrl;
    username: string;
    details: string;
    testFacilityTenants: any;
    equipments: any;
    equipmentsToAdd :any;
    displayAssignDepartmentsDialog: boolean;
    displayAssignEquipmentsDialog: boolean;
    displayAssignUserRolesDialog: boolean;
    departments: any;
    displayCommentDialog: boolean = false;
    selectedDepartment: any;
    selectedEquipment: any;
    categories: any;
    selectedCategory: any = 'a366476b-1249-4c9b-b3b8-072cbab81e80';
    IsKeepOpen: boolean = false;
    // Form Related variables
    entityIdentifierName:string = 'TestFacility';
    entityIdentifierInfo:any = {};
    formSchemaCategories:IFormSchemaCategory[] = [];
    formSchemaCategoryList: ITitanSelectItem[];
    formSchemaInfo:any = {};
    formSchemaData:IFormSchema[] = [];// new FormSchema('', []);
    comment: any;
    testFacilityLogComments: any;
    formSchemaDataGridMF:IFormSchemaGridMF[] = [];
    selectedMaintenanceForm:IFormSchemaGridMF;

    //region Grid -- FormInstance Filled

    gridFormInstanceData: any[] = [];
    formInstanceUpdateView:boolean = false;
    formInstanceUpdateData: any;
    selectedGridFormInstance:any;
    formInstanceUpdateNotes:string;
    formInstanceId:string;
    //endregion

    selectedFormSchemaFP:any;
    fieldsFP:any[] = [];

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
    formInstanceFields: any[]

    // End Of Form Related Variables

    notificationMsgs: Message[] = [];
    notifications: any;

    testTemplate: any;
    userRoles: any;
    testRoles: any;
    buildLevels: any;
    projectCodes: any;
    testFacilities: any;
    currentTestFacilities: any;
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
    testFacility : any = { name: '', maintenanceFrequency: '', nextMaintenanceDate: '', lastMaintenanceDate: '' };
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
        { loaded: false, method: this.loadEquipmentTabViews },
        {loaded:false, method:this.loadScheduleTabViews},
        {loaded:false, method:this.loadMaintainanceTabViews},
        {loaded:false, method:this.loadAttachmentsTabViews},
        {loaded:false, method:this.loadLogsTabViews}
    ];

    constructor(
    	private breadCrumbsService: BreadCrumbsService,
        private loggerService: LoggerService,
        private route: ActivatedRoute,
        private router: Router,
        private testFacilityService: TestFacilityService,
        private entityIdentifierService: EntityIdentifierService,
        private formSchemaCategoryService: FormSchemaCategoryService,
        private formInstanceService: FormInstanceService,
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
        this.loggerService.setShow(false);
        this.loggerService.logConsole("Router ----------", this.router.url);

        this.route.params.subscribe(params => this.id = params['id']);
        this.entityId = this.id;

        let breadC = this.breadCrumbsService.getBreadCrumbs();
        let testFacilitiesDetailsBreadCrumb = breadC.filter(filter =>
                filter.pageName === 'TestFacilitiesDetailsPage'
            )[0];

            this.breadcrumbs = [];
            this.breadcrumbs = testFacilitiesDetailsBreadCrumb.items;

            this.breadcrumbsHome = { routerLink: ['/'] };
	        this.loggerService.logConsole("---- TF Details ID Param -----", this.id);
    }

    ngOnInit() {

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
    }

      frequencyInit()
      {
          if (this.testFacility.maintenanceFrequency != null && this.testFacility.maintenanceFrequency != "")
            {
                this.selectedMaintenanceFrequency = this.testFacility.maintenanceFrequency;
                this.isMaintenaceFrequencySelected = true;
                $("#selector").cron({

                    initial: this.selectedMaintenanceFrequency,
                    onChange: function () {
                        this.selectedMaintenanceFrequency = $(this).cron("value");
                    }, useGentleSelect:false
                });
                this.isCronControlInitialized = true;
            }
            else
            {
                this.selectedMaintenanceFrequency = "0 0 1 1 *";
                this.isMaintenaceFrequencySelected = false;
            }

    }

    showHideCronPicker(){
        console.log("--inside cronpicker show hide");
    
        if (this.isMaintenaceFrequencySelected){
            if (!this.isCronControlInitialized){
                $("#selector").cron({

                    initial: this.selectedMaintenanceFrequency,
                    onChange: function () {
                        this.selectedMaintenanceFrequency = $(this).cron("value");
                    }, useGentleSelect:false
                });
            }
        } else
        {
            // Hide the cron
        }
    }
    ngAfterViewInit() {
        //var frequency: any;


    }
    onTestFacilityDelete()
    {
        if (this.IsTestFacilityDelete)
            this.testFacilityService.DeleteTestFacility(this.id).subscribe(res => {
                this.IsTestFacilityDelete = true;
                console.log('-----delete-------', res);
            }

        );

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
       // me.getavailableTestFacilities();
       // me.getavailableEquipments();
        me.getTestFacilityEquipmentById();
        me.getEquipmentsToAdd();

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
        this.selectedEquipment = (event.value.id);
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
        //        this.loggerService.logConsole('-----------  TestFacilitiesEvents------------------', TestFacilityEvents);
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
    getEquipmentsToAdd() {
        //    userRoles
        this.testFacilityService.getEquipmentsToAdd(this.id).subscribe(response => {
            this.equipmentsToAdd = [];
            if (response != null) {
                var resultMap = [];
                resultMap.push({
                    label: "Select Equipment",
                    value: {id:'',name:'',serialNumber:'',testFacilityName:''}
                });
                for (let template of response) {
                    var temp = {
                        label: template.name,
                        //value: template.id
                        value: {id:template.id, name: template.name, serialNumber:template.serialNumber, testFacilityName: template.testFacilityName}
                    }
                    resultMap.push(temp);
                }
                console.log("equipments", resultMap);
                this.equipmentsToAdd = resultMap;
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
                if (res.testFacility.isDeleted) {
                    this.IsTestFacilityDelete = true;
                }
                else
                {
                    this.IsTestFacilityDelete = false;
                }
              //  onMaintenanceNeeded();
                this.testFacility.maintenanceFrequency = res.testFacility.maintenanceFrequency;
  			if (res.testFacility.nextMaintenanceDate != null) {
                    this.hasNextMaintenanceDate = true;
                }
                //  this.lastMaintenanceDate = new Date(res.testFacility.lastMaintenanceDate);
                this.testFacility.lastMaintenanceDate = new Date(res.testFacility.lastMaintenanceDate);
               // this.testFacility.lastMaintenanceDate = new Date(this.testFacility.lastMaintenanceDate);
            //    this.selectedOperatingHour = res.testFacility.operatingHourName;
              //  this.selectedMaintenanceFrequency = res.testFacility.frequency;
                //this.model = res.formObject;
                //this.loggerService.logConsole("----- Result of formConfiguration -----", this.formConfiguration.fields.$values);
                //this.loggerService.logConsole("----- Result of formObject -----", this.model);
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

    getavailableTestFacilities() {
        //    userRoles
        this.testFacilityService.getAvailableTestFacilities(this.id).subscribe(response => {
            this.testFacilities = new Array();
          //  this.currentTestFacilities = new Array();
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
             //   this.currentTestFacilities = resultMap.filter(tf => tf.value != this.id);
                this.testFacilities = resultMap;
            }
        });
    }

    getTestFacilities() {
        //    userRoles
        this.testFacilityService.getTestFacilities().subscribe(response => {
            this.testFacilities = new Array();
            this.currentTestFacilities = new Array();
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
                this.currentTestFacilities = resultMap.filter(tf => tf.value != this.id);
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
            this.msgs.push({ severity: 'warn', summary: 'Please Select User', detail: '' });
            return null;
        }
        if (this.selectedRole == null) {
            this.msgs = [];
            this.msgs.push({ severity: 'warn', summary: 'Please select Role', detail: '' });
            return null;
        }

        if ((this.TestFacilityRoles.find(tfr => tfr.role == "Primary Incharge") != undefined) && (this.selectedRole == "1753ca8b-5162-4d98-8fc0-64ff08377ae8")) {
            this.msgs = [];
            this.msgs.push({ severity: 'warn', summary: 'Primary Incharge already assigned', detail: '' });
            return null;
        }

        if (this.filteredSelectedUserNames.length > 1 && this.selectedRole == "1753ca8b-5162-4d98-8fc0-64ff08377ae8") {
            this.msgs = [];
            this.msgs.push({ severity: 'warn', summary: 'Please select only one user for primary Incharge', detail: '' });
            return null;
        }
        if ((this.TestFacilityRoles.find(tfr => tfr.role == "Secondary Incharge") != undefined) && (this.selectedRole == "c8d592a9-3cac-41c1-803d-c8f0464db0b8")) {
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
        for (var sel of this.filteredSelectedUserNames) {
            selectedUserNames.push(sel.id);
        }
        //var inputDto = {
        //    testRequirementList: selectedTestRequirementIds
        //}
        this.testFacilityService.postAddUserNames(selectedUserNames, this.id, this.selectedRole).subscribe(filteredList => {
            this.selectedUserNames = filteredList.$values;
            this.filteredSelectedUserNames = null;
            this.selectedRole = null;
            this.testfacilityroleservice.getByIdusing(this.id)
                .subscribe(TestFacilityRoles => {
                    this.TestFacilityRoles = TestFacilityRoles;
                    if (this.selectedRole == "1753ca8b-5162-4d98-8fc0-64ff08377ae8" || this.selectedRole == "c8d592a9-3cac-41c1-803d-c8f0464db0b8") {
                        this.testFacilityService.getNotifications(this.id)
                            .subscribe(res => {
                                if (res) {
                                    this.notifications = res;
                                    if (res.length == 0)
                                    {
                                        this.notificationMsgs = [];
                                    }
                                }

                                this.notifications.forEach(x => {

                                    this.notificationMsgs.push({ severity: 'warn', summary: x.ruleMessage, detail: x.description });
                                })
                            });
                    }
                    this.selectedRole = null;
                });
        });

        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'User Added', detail: '' });
    }

    onAddDepartment() {



        if (this.selectedDepartment == null) {
            this.msgs = [];
            this.msgs.push({ severity: 'warn', summary: 'Search any department to add', detail: '' });
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
                    this.selectedDepartment = null;
                });
        });

        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Department Added', detail: '' });
    }
    onAssignEquipments()
    {
        this.displayAssignEquipmentsDialog = true;
        //this.getEquipmentsToAdd();

    }
    AddLogComment()
    {
        if (this.comment == null || this.comment == '') {
            this.msgs = [];
            this.msgs.push({ severity: 'warn', summary: 'Please write any comment', detail: '' });
            return null;
        }

        this.testFacilityService.PostLogComments(this.id,JSON.stringify(this.comment)).subscribe(filteredList => {
            this.testFacilityService.getLogComments(this.id)
                .subscribe(res => {
                    this.testFacilityLogComments = res;
                });

        });
        this.displayCommentDialog = false;
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Comment saved', detail: '' });

    }
    onAddEquipment() {

        if (this.selectedEquipment == null) {
            this.msgs = [];
            this.msgs.push({ severity: 'warn', summary: 'Search any equipment to add', detail: '' });
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
                    this.selectedEquipment = null;

                });
        });

        this.msgs = [];

        this.msgs.push({ severity: 'success', summary: 'Success', detail: '' });

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
        formData.lastMaintenanceDate = this.testFacility.lastMaintenanceDate;
        if (this.isMaintenaceFrequencySelected){
            formData.maintenanceFrequency = $('#selector').cron("value");
        }
        else {
            formData.maintenanceFrequency = '' ;
        }

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
                        this.testFacility.maintenanceFrequency = res.testFacility.maintenanceFrequency;
                        if (res.testFacility.isDeleted) {
                            this.IsTestFacilityDelete = true;
                        }
                        else {
                            this.IsTestFacilityDelete = false;
                        }
                        //this.lastMaintenanceDate = res.testFacility.lastMaintenanceDate;
                        this.testFacility.lastMaintenanceDate = new Date(res.testFacility.lastMaintenanceDate);
                       // if (res.testFacility.lastMaintenanceDate != null && res.testFacility.maintenanceFrequency != null) {
                        if (res.testFacility.nextMaintenanceDate != null) {
                            this.hasNextMaintenanceDate = true;
                        }


                    });
                this.msgs = [];
                this.msgs.push({ severity: 'info', summary: 'saved', detail: '' });
            }
            else
            {
            this.msgs = [];
                this.msgs.push({ severity: 'warn', summary: res.errorMessage, detail: '' });
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

                                        if (res.length == 0) {
                                            this.notificationMsgs = [];
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

    onUpload(event) {
        for (let file of event.files) {

            this.uploadedFiles.push(file);

        }

        this.testfacilityattachmentservice.getByIdusing(this.id)
            .subscribe(TestFacilityAttachments => {
                this.TestFacilityAttachments = TestFacilityAttachments;
                this.selectedCategory = null;
            });

        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'File Uploaded', detail: '' });
    }

    private getEntityIdentifierInfo() {
        this.getGridFormInstanceInformationData();
        // Getting Entity Identifier Id first To get All The Form Categories
        this.entityIdentifierService.getByNameForForms(this.entityIdentifierName)
            .subscribe(res => {
                if(res.isSuccess) {

                    this.loggerService.logConsole("EntityIdentifierInfo Call ----------", res);
                    this.entityIdentifierInfo = res.result;

                    // Getting All the Form Schema Categories with The EntityIdentifierId
                    this.formSchemaCategoryService.getByEntityIdentifierId(this.entityIdentifierInfo.id)
                        .subscribe(fsCategory => {
                            this.loggerService.logConsole("FormSchemaCategoryInfo ----------", fsCategory);
                            if(fsCategory.isSuccess) {
                                this.loggerService.logConsole("Form Schema Category List-------------", res);
                                this.formSchemaCategories = fsCategory.result;
                                let listFormSchemaCaterory = fsCategory.result.map(newRes => {
                                    return {label: newRes.name, value: newRes.id, entityIdentifierId: newRes.entityIdentifierId};
                                });
                                this.formSchemaCategoryList = [];
                                this.formSchemaCategoryList.push({label: 'Select Category', value: null});
                                this.formSchemaCategoryList = this.formSchemaCategoryList.concat(listFormSchemaCaterory);
                                this.loggerService.logConsole("FormSchemaCategoryList ---------", this.formSchemaCategoryList);
                                this.loggerService.logConsole("ListFormSchemaCategory -----------", listFormSchemaCaterory);

                                let fscIds = fsCategory.result.map(fsc => fsc.id);
                                // Getting all the FormSchema created by the FormSchemaCategory by the EntityIdentifierId
                                this.loggerService.logConsole("Form Schema Category Ids -----", fscIds);

                                this.formSchemaService.getFormSchemaGridByEntityIdentifierId(this.entityIdentifierInfo.id)
                                    .subscribe(res => {
                                        if (res.isSuccess) {
                                            this.loggerService.logConsole("FSGridByEntityIdentifierId ----------", res.result);
                                            this.formSchemaDataGridMF = res.result;
                                            this.formSchemaDataGridMF = this.formSchemaDataGridMF.map(x => {
                                                x.createdOn = moment(x.createdOn).format("MM-DD-YYYY").toString();
                                                return x;
                                            })
                                        }

                                    });

                                this.formSchemaService.getByFormSchemaCategoryId(fscIds[1])
                                    .subscribe(formSchemaResult => {
                                        this.loggerService.logConsole("FormSchema Result by FormSchemaCategory ------", formSchemaResult);
                                        this.formSchemaData = formSchemaResult.result;
                                        this.loggerService.logConsole("FormSchemaData ----------", this.formSchemaData);

                                    });
                                this.formSchemaService.getByFormSchemaCategoryIdCol(fscIds)
                                    .subscribe(formSchemaResult => {
                                        this.loggerService.logConsole("FormSchema Result by FormSchemaCategory ------", formSchemaResult);
                                        if (formSchemaResult.isSuccess){
                                            this.formSchemaData = formSchemaResult.result;
                                            this.loggerService.logConsole("FormSchemaData ----------", this.formSchemaData);
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

    private getGridFormInstanceInformationData() {
        // Getting Grid for FormInstance by this TestFacility Id
        this.formInstanceService.getGridByEntityId(this.id)
            .subscribe(res => {
                this.loggerService.logConsole("GridFormInstance Data ------", res);
                if (res.isSuccess) {
                    this.gridFormInstanceData = res.result;
                }
            });
    }


    closeFormPreviewDialog() {
        this.displayPreviewSelectedForm = false;
        this.selectedFormName = '';
        this.selectedFormFields = [];
        this.loggerService.logConsole("After Closed Dialog FormName -------", this.selectedFormName || "reseted");
        this.loggerService.logConsole("After Closed Dialog Form Schema To View clicked ----", this.selectedFormFields || "reseted");
        this.loggerService.logConsole("After Closed Dialog PreviewSelectedForm dialog display -------", this.displayPreviewSelectedForm || "reseted");
    }


    // Entering data to the form to create a Form Instance
    showFormInstance(formSchema) {
        this.loggerService.logConsole("ShowFOrmInstance ----", formSchema);
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
        this.getGridFormInstanceInformationData();
    }


    createInstance(item) {
        this.selectedMaintenanceForm = item;
        //this.loggerService.logConsole("Create Instance -=----", item);
        this.getFormSchemaInfoSelectedByGridMF(false);
    }

    maintenanceFormRowSelect(item) {
        this.loggerService.logConsole("MaintenanceFormRowSelect --------", item);
        this.selectedMaintenanceForm = item;
        this.loggerService.logConsole("Selected Maintenance Item -------", this.selectedMaintenanceForm);
        this.getFormSchemaInfoSelectedByGridMF(true);
    }

    selectedFormToView(formName,formSchemaItems) {
        this.selectedFormName = formName;
        this.selectedFormSchemaFP = formSchemaItems;
        this.displayPreviewSelectedForm = true;
        // this.loggerService.logConsole("FormName -------", this.selectedFormName);
        //this.loggerService.logConsole("Form Schema To View clicked ----", this.selectedFormSchemaFP);
        //his.loggerService.logConsole("PreviewSelectedForm dialog display -------", this.displayPreviewSelectedForm);
    }

    getFormSchemaInfoSelectedByGridMF(formToView) {
        this.formSchemaService.getById(this.selectedMaintenanceForm.id)
            .subscribe(res => {
                this.loggerService.logConsole("After selection from the MF ----", res);
                let formSchema = res.result;
                let f = formSchema.fields.$values;
                this.fieldsFP = f;
                this.loggerService.logConsole("FormSchema by Selected Form-----", formSchema);
                if (formToView) {
                    this.selectedFormToView(this.selectedMaintenanceForm.name, res.result);
                }
                else {
                    this.showFormInstance(formSchema);
                }
            })
    }

    maintenanceInformationFormRowSelect(event) {
        this.formInstanceUpdateView = true;
        this.selectedMaintenanceForm = this.formSchemaDataGridMF.filter(filter => filter.id === this.selectedGridFormInstance.formSchemaId)[0];
        this.formInstanceId = this.selectedGridFormInstance.id;
        console.log("FormSchemaGridMF---------", this.formSchemaDataGridMF);
        console.log("SelectedGridFormInstance --------", this.selectedGridFormInstance);
        console.log("SelectedMaintance form -----", this.selectedMaintenanceForm);

        this.formInstanceUpdateNotes = this.selectedGridFormInstance.notes;

        this.formInstanceService.getById(this.selectedGridFormInstance.id)
            .subscribe(res => {
                this.formInstanceUpdateData = res.result;
                this.getFormSchemaInfoSelectedByGridMF(false);
            });
    }

       addCommentButton(event) {
       this.comment = '';
       this.displayCommentDialog = true;    


}
}
