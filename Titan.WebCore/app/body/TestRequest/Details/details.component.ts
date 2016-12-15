import { TimeEntryService } from '../../../shared/services/timeEntry.service';
import { TestRequestSensorService } from '../../../shared/services/testrequestsensor.service';
import { TestFacilityService } from '../../../shared/services/testfacility.service';
//import { EquipmentTypeService } from '../../../shared/services/equipmentType.service';
import { EquipmentTypeService } from '../../../shared/services/equipmentType.service';
import { TestTemplateService } from '../../../shared/services/testTemplate.service';
import { TestStatusService } from '../../../shared/services/teststatus.service';
import { TestRoleService } from '../../../shared/services/testRole.service';
import { ProjectService } from '../../../shared/services/project.service';
import { TestModeService } from '../../../shared/services/testMode.service';
import { TestTypeService } from '../../../shared/services/testType.service';
import { BuildLevelService } from '../../../shared/services/buildlevel.service';
import { Message, MessagesModule, GrowlModule } from 'primeng/primeng';
import { Component, AfterViewInit, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GridComponent } from '../../../shared/UIComponents/GridComponent/grid.component';
import { SelectItem, ConfirmationService } from 'primeng/primeng';
import { Router } from '@angular/router';
declare var $: JQueryStatic;

@Component({
    selector: 'details-testrequest',
    templateUrl: 'app/body/TestRequest/Details/details.component.html'
})
export class DetailsComponent implements AfterViewInit {
    ngAfterViewInit() {
    }
    // qui
    gridData = [];
    confInfo: any = {};
    cols = [];
    gridFilter = {};
    buildLevels: any;
    projectCodes: any;
    testTypes: any;
    testTemplates: any;
    testAllModes: any;
    testStatus: any;
    testFacilities: any;
    testRoles: any;
    selectedTestTypes: any;
    selectedTestModes: any;
    selectedBuildLevels: any;
    selectedProjectCodes: any;
    selectedTestRoles: any;
    selectedTestFacilities: any;
    selectedTestStatuses: any;
    selectedTestTemplates: any;
    sensorRequests: any;
    idField: string;
    linkFieldId: string;
    username: string;
    details: string;
    testStages: any;
    hourEntries: any;
    downTimeReasons: any;
    estimateDuration: any;
    formConfiguration: any;

    formObject: any;
    formEquipmentObject: any;
    TimeEntryTypeId: any;
    selectedTestStageId: any;
    selectedTimeEntryTypeId: any;
    selectedDownTimeReasonId: any;
    projectId: any;
    selectedHourEntry: any;
    id: string;
    entityType: string = "TestFacility";
    entityId: string = this.id;
    filepath: string = "TestFacility";
    TrackingList: any;
    startTime: any;
    endTime: any;
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
        private dataService: TimeEntryService,
        private testfacilityservice: TestFacilityService,
        private service: EquipmentTypeService,
        private testtemplateservice: TestTemplateService,
        private testrequestsensorserice: TestRequestSensorService,
        private router: Router,
        private projectservice: ProjectService,
        private testmodeservice: TestModeService,
        private teststatusservice: TestStatusService,
        private testroleservice: TestRoleService,
        private testtypeservice: TestTypeService,
        private buildlevelservice: BuildLevelService

    ) {
        this.route.params.subscribe(params => this.id = params['id']);
        this.entityId = this.id;
        console.log("---- TF Details ID Param -----", this.id);
    }
    handleChange(event) {

        console.log('tes---', event);
        console.log('-------targetid-------', event.originalEvent.target.innerText);
    }
    ngOnInit() {
        this.getTestStages();
        this.getTestFacilities();
        this.getTestModes();
        // this.getTestTypes();
        this.getBuildLevels();
        this.getTestStatus();
        //  this.getProjectCodes();
        this.getTestTemplates();
        this.getTestRoles();
        this.getHourEntryByEntityIdentifierId();
        this.getDownTimeReasons();
        let resData: any;
        this.testrequestsensorserice.GetAllTestRequestSensors(this.entityId)
            .subscribe(res => {
                this.sensorRequests = res.result;
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
            .subscribe(res => {
                this.TrackingList = res.$values;

                //this.formConfiguration = res.formConfiguration;
                //this.formObject = res.formObject;
                //this.model = res.formObject;
                //console.log("----- Result of formConfiguration -----", this.formConfiguration.fields.$values);
                //console.log("----- Result of formObject -----", this.model);
            });

    }
    onTestStageChange(event) {
        console.log('------event------------', event)
        this.selectedTestStageId = (event.value);
        //   this.EquipmentSubType.calibrationform = (event);

    }
    onTestFacilityChange(event) {
        console.log('------event------------', event)
        this.selectedTestFacilities = (event.value);
        //   this.EquipmentSubType.calibrationform = (event);

    }
    onDownTimeReasonChange(event) {
        console.log('------event------------', event)
        this.selectedDownTimeReasonId = (event.value);
        //   this.EquipmentSubType.calibrationform = (event);

    }
    onTestRoleChange(event) {
        console.log('------event------------', event)
        this.selectedTestRoles = (event.value);

        //   this.EquipmentSubType.calibrationform = (event);

    }
    onTestTemplateChange(event) {
        console.log('------event------------', event)
        this.selectedTestTemplates = (event.value);

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
    onHourEntryChange(event) {
        console.log('------event------------', event)
        this.selectedTimeEntryTypeId = (event.value);
        //   this.EquipmentSubType.calibrationform = (event);

    }
    getTestStages() {
        //    userRoles
        this.dataService.getTestStages().subscribe(response => {
            this.testStages = new Array();
            if (response != null) {
                var resultMap = new Array();
                resultMap.push({
                    label: "--Select--",
                    value: null
                });
                for (let template of response) {
                    var temp = {
                        label: template.name,
                        value: template.id
                    }
                    resultMap.push(temp);
                }
                this.testStages = resultMap;
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
    getTestRoles() {
        //    userRoles
        this.testroleservice.getTestRoles().subscribe(response => {
            this.testRoles = new Array();
            if (response != null) {
                var resultMap = new Array();
                resultMap.push({
                    label: "Select Test Role",
                    value: null
                });
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
    getTestStatus() {
        //    userRoles
        this.teststatusservice.getTestStatus().subscribe(response => {
            this.testStatus = new Array();
            if (response != null) {
                var resultMap = new Array();
                resultMap.push({
                    label: "Select Test Status",
                    value: null
                });
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
    getTestModes() {
        //    userRoles
        this.testmodeservice.getAllTestModes().subscribe(response => {
            this.testAllModes = new Array();
            if (response != null) {
                var resultMap = new Array();
                resultMap.push({
                    label: "Select Test Mode",
                    value: null
                });
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
                resultMap.push({
                    label: "Select Test Type",
                    value: null
                });
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


    getProjectCodes() {
        //    userRoles
        this.projectservice.getProjectCodes().subscribe(response => {
            this.projectCodes = new Array();
            if (response != null) {
                var resultMap = new Array();
                resultMap.push({
                    label: "Select Project Code",
                    value: null
                });
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
    getTestTemplates() {
        //    userRoles
        this.testtemplateservice.getTestTemplates().subscribe(response => {
            this.testTemplates = new Array();
            if (response != null) {
                var resultMap = new Array();
                resultMap.push({
                    label: "Select Test Template",
                    value: null
                });
                for (let template of response.$values) {
                    var temp = {
                        label: template.name,
                        value: template.id
                    }
                    resultMap.push(temp);
                }
                this.testTemplates = resultMap;
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
                resultMap.push({
                    label: "Select Build Level",
                    value: null
                });
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
    getDownTimeReasons() {
        //    userRoles
        this.dataService.GetAllDownTimeReasons().subscribe(response => {
            this.downTimeReasons = new Array();
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
                this.downTimeReasons = resultMap;
            }
            console.log(response);
        });
    }
    getHourEntryByEntityIdentifierId() {
        //    userRoles
        this.dataService.getHourEntryByEntityIdentifierId(this.id).subscribe(response => {
            this.hourEntries = new Array();
            if (response != null) {
                var resultMap = new Array();
                resultMap.push({
                    label: "--Select--",
                    value: null
                });
                for (let template of response) {
                    var temp = {
                        label: template.name,
                        value: template.id
                    }
                    resultMap.push(temp);
                }
                this.hourEntries = resultMap;
            }

            console.log(response);
        });
    }
    onSubmit(formRef) {
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


        let formData: any = {
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
        this.dataService.postAdd(formData).subscribe(res => {

            // console.log(res);
            this.TrackingList = res.$values;

            //if (!res.errorMessage) {
            //    //this.router.navigate(["/testfacilities/details/", res.result.id]);
            //}

        });
        this.msgs = [];
        this.msgs.push({ severity: 'success', summary: 'saved', detail: '' });

    }
    navigateDetails(id: string) {
        this.router.navigate(['testrequest/sensor/details/', id]);
    }



}