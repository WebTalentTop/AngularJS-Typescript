import { TimeEntryService } from '../../../shared/services/timeEntry.service';
import { TestRequestSensorService } from '../../../shared/services/testrequestsensor.service';
import { TestRequestService } from '../../../shared/services/Containers/TestRequestService/testRequest.service';
import { TestVerificationMethodService } from '../../../shared/services/testverificationMethod.service';
import { TestFacilityService } from '../../../shared/services/Containers/TestFacilityService/testfacility.service';
//import { EquipmentTypeService } from '../../../shared/services/equipmentType.service';
import { EquipmentTypeService } from '../../../shared/services/Containers/EquipmentTypeService/equipmentType.service';
import { TestTemplateService } from '../../../shared/services/Containers/TestTemplateService/testTemplate.service';
import { TestStatusService } from '../../../shared/services/Containers/TestStatusService/testStatus.service';
import { TestRoleService } from '../../../shared/services/testRole.service';
import { ProjectService } from '../../../shared/services/Containers/ProjectService/project.service';
import { TestModeService } from '../../../shared/services/testMode.service';
import { TestTypeService } from '../../../shared/services/testType.service';
import { BuildLevelService } from '../../../shared/services/Containers/BuildLevelService/buildLevel.service';
import { DepartmentService } from '../../../shared/services/department.service';
import { Message, MessagesModule, GrowlModule } from 'primeng/primeng';
import { Component, AfterViewInit, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GridComponent } from '../../../shared/UIComponents/GridComponent/grid.component';
import { SelectItem, ConfirmationService } from 'primeng/primeng';
import { Router } from '@angular/router';
declare var $: JQueryStatic;

@Component({
    selector: 'add-testrequest',
    templateUrl: 'app/body/TestRequest/Add/add.component.html'
})
export class AddComponent implements AfterViewInit {
    ngAfterViewInit() {
    }
    // qui
    gridData = [];
    IsPartsList: boolean = false;
    procedures: any;
    selectedProcedureId: any;
    confInfo: any = {};
    cols = [];
    gridFilter = {};
    buildLevels: any;
    plannedStartDate: any;
    plannedEndDate: any;
    projectCodes: any;
    testTypes: any;
    testTemplates: any;
    dueDate: any;
    testAllModes: any;
    testStatus: any;
    testFacilities: any;
    testVerificationMethods: any;
    testRoles: any;
    selectedTestTypes: any;
    selectedTestModes: any;
    IsThermoCouple: boolean = false;
    selectedDepartment: any;
    departments: any;
    selectedBuildLevels: any;
    selectedTestVerificationMethods: any;
    selectedProjectCodes: any;
    selectedTestRoles: any;
    number: any;
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
    display: boolean = false;
    endTime: any;
    testRequestEntityId: any;
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
        private testverificationmethodservice: TestVerificationMethodService,
        private projectservice: ProjectService,
        private testmodeservice: TestModeService,
        private teststatusservice: TestStatusService,
        private testroleservice: TestRoleService,
        private testtypeservice: TestTypeService,
        private buildlevelservice: BuildLevelService,
        private confirmservice: ConfirmationService,
        private departmentservice: DepartmentService,
        private testrequestservice: TestRequestService

    ) {
        this.route.params.subscribe(params => this.id = params['id']);
        this.entityId = this.id;
    }
    handleChange(event) {
    }
    OK()
    {
        this.display = false;
    }
    confirm1() {
              this.display = true;
    }
    confirmPartsDialog()
    {
       // this.IsPartsList = true;
    }
    ngOnInit() {
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
        this.getProcedures();
      //  this.getHourEntryByEntityIdentifierId();
        this.getDownTimeReasons();
        let resData: any;
        //this.testrequestsensorserice.GetAllTestRequestSensors(this.entityId,'')
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

        //    });

    }
    onTestStageChange(event) {
        this.selectedTestStageId = (event.value);
        //   this.EquipmentSubType.calibrationform = (event);

    }
    onTestVerificationMethodChange(event) {
        this.selectedTestVerificationMethods = (event.value);
        //   this.EquipmentSubType.calibrationform = (event);

    }
    onTestFacilityChange(event) {
        this.selectedTestFacilities = (event.value);
        //   this.EquipmentSubType.calibrationform = (event);

    }
    onProcedureChange(event) {
        this.selectedProcedureId = (event.value);
        //   this.EquipmentSubType.calibrationform = (event);

    }
    onDownTimeReasonChange(event) {
        this.selectedDownTimeReasonId = (event.value);
        //   this.EquipmentSubType.calibrationform = (event);

    }
    onTestRoleChange(event) {
        this.selectedTestRoles = (event.value);

        //   this.EquipmentSubType.calibrationform = (event);

    }
    onDepartmentChange(event) {
        this.selectedDepartment = (event.value);

        //   this.EquipmentSubType.calibrationform = (event);

    }
    onTestTemplateChange(event) {
        this.selectedTestTemplates = (event.value);

        //   this.EquipmentSubType.calibrationform = (event);

    }
    onTestStatusChange(event) {
        this.selectedTestStatuses = (event.value);
        //this.dataService.getFilteredEvents(this.selectedTestStatuses, this.selectedTestStatuses, this.selectedTestStatuses, this.selectedTestStatuses, this.selectedTestStatuses, this.selectedTestStatuses, this.selectedTestStatuses)
        //    .subscribe(TestFacilityEvents => {
        //        console.log('-----------  TestFacilitiesEvents------------------', TestFacilityEvents);
        //        //this.TestFacilityEvents = TestFacilityEvents;
        //    });
        //   this.EquipmentSubType.calibrationform = (event);

    }
    onBuildLevelChange(event) {
        this.selectedBuildLevels = (event.value);
        //   this.EquipmentSubType.calibrationform = (event);

    }
    onProjectCodeChange(event) {
        this.selectedProjectCodes = (event.value);
        //   this.EquipmentSubType.calibrationform = (event);

    }

    onTestModeChange(event) {
        this.selectedTestModes = (event.value);
        //   this.EquipmentSubType.calibrationform = (event);

    }
    onTestTypeChange(event) {
        this.selectedTestTypes = (event.value);
        //   this.EquipmentSubType.calibrationform = (event);

    }
    onHourEntryChange(event) {
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
        });
    }
    getTestFacilities() {
        //    userRoles
        this.testfacilityservice.getTestFacilities().subscribe(response => {
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
        });
    }

    getDepartments() {
        //    userRoles
        this.departmentservice.getDepartments().subscribe(response => {
            this.departments = new Array();
            if (response != null) {
                var resultMap = new Array();
                // resultMap.push({
                //     label: "Select Department",
                //     value: null
                // });
                for (let template of response.$values) {
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
    getTestStatus() {
        //    userRoles
        this.teststatusservice.getAll().subscribe(response => {
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
        });
    }
    getTestVerificationMethods() {
        //    userRoles
        this.testverificationmethodservice.getTestVerificationMethods().subscribe(response => {
            this.testVerificationMethods = new Array();
            if (response != null) {
                var resultMap = new Array();
                resultMap.push({
                    label: "Select Test Verification Method",
                    value: null
                });
                for (let template of response) {
                    var temp = {
                        label: template.name,
                        value: template.id
                    }
                    resultMap.push(temp);
                }
                this.testVerificationMethods = resultMap;
            }
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
        });
    }


    getProjectCodes() {
        //    userRoles
        this.projectservice.getProjectCodes().subscribe(response => {
            this.projectCodes = new Array();
            if (response != null) {
                var resultMap = new Array();
                resultMap.push({
                    label: "--------Select-------",
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
        });
    }
    getTestTemplates() {
        //    userRoles
        this.testtemplateservice.getTestTemplates().subscribe(response => {
            this.testTemplates = new Array();
            if (response != null) {
                var resultMap = new Array();
                // resultMap.push({
                //     label: "Select Test Template",
                //     value: null
                // });
                for (let template of response.$values) {
                    var temp = {
                        label: template.name,
                        value: template.id
                    }
                    resultMap.push(temp);
                }
                this.testTemplates = resultMap;
            }
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
        });
    }
    getProcedures() {
        //    userRoles
        this.testrequestservice.getProcedures().subscribe(response => {
            this.procedures = new Array();
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
                this.procedures = resultMap;
            }
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
        });
    }

    onTestRequestSubmit(formRef)
    {
        let formTestRequestData: any = {
      //   Id : ' ' ,
         TestNumber : this.number ,
         // TenantId: ' ',
         TestTemplateId: null,
         TestFacilityId: this.selectedTestFacilities,
         ProjectId: this.selectedProjectCodes,
         BuildLevelId: this.selectedBuildLevels,
         VerificationMethodId: '392E6125-5966-4812-9EC7-25BAFC3514B6',
        PlannedStartDate : this.plannedStartDate ,
        PlannedEndDate: this.plannedEndDate,
        TestStatusId: 'A7162D62-C568-43FF-AFB2-1E6343C9C4D1',
        DueDate: this.dueDate
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
        if (this.selectedProcedureId == null || this.selectedProcedureId == undefined) {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: 'Please select Procedure' });
            return null;
        }
        if (this.plannedStartDate == null || this.plannedStartDate == "") {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: 'Please select Planned Start Date', detail: '' });
            return null;
        }
        if (this.dueDate == null || this.dueDate == "") {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: 'Please select Due Date', detail: '' });
            return null;
        }
        if (this.plannedEndDate == null || this.plannedEndDate == "") {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: 'Please select Planned End Date', detail: '' });
            return null;
        }

        this.testrequestsensorserice.postTestRequestAdd(formTestRequestData).subscribe(res => {

            if (res.isSuccess && this.IsPartsList)
            {
                this.testRequestEntityId = res.result.id;
                let testtemplateprocedurebody= {
                    TestRequestId: this.testRequestEntityId,
                    TestTemplateIdList: this.selectedTestTemplates,
                    ProcedureId: this.selectedProcedureId,

                }
            

               
                let workrequestbody = {
                    Name: "Parts List -WR",
                    ProjectId: this.selectedProjectCodes,
                    EntityIdentifierId: '756BCBA4-6FA5-4BB6-88D9-C1773471C7A0',
                    EntityId: res.result.id

                };
                //1. save workrequest for testrequest(res.id) , testrequestentityidentifierId()
                this.testrequestsensorserice.postWorkRequestAdd(workrequestbody).subscribe(workresult => {

                    if (workresult.isSuccess) {
                        this.testrequestservice.postTestRequestTestTemplateInsert(testtemplateprocedurebody).subscribe(result => {
                            if (result.result.isSuccess)
                              {
                         //   this.selectedDepartment.forEach(dept => {
                          //      var primaryuserid = '3BDC1617-D620-65D0-26EF-000E1090A386';
                                let taskbody = {

                                    EntityIdentifierId: '756BCBA4-6FA5-4BB6-88D9-C1773471C7A0',
                                    EntityId: res.result.id,
                                  //  DepartmentId: dept,
                                   // UserId: "3BDC1617-D620-65D0-26EF-000E1090A386",
                                    Name: "Parts List Info",
                                    ShowModule: "PartsModule"
                                };

                                this.testrequestsensorserice.postTasksAdd(taskbody).subscribe(taskresult => {

                                    if (taskresult.isSuccess) {
                                        this.router.navigate(['testRequest/details/', this.testRequestEntityId]);

                                    }

                                });
                           // });
                        }
                        });
                    }
                });
            }
          //  this.TrackingList = res.$values;
            if (res.isSuccess && this.IsThermoCouple) {

                this.testRequestEntityId = res.result.id;
                let workrequestbody = {
                    Name: "Thermo Couple -WR",
                    ProjectId: this.selectedProjectCodes,
                    EntityIdentifierId: '756BCBA4-6FA5-4BB6-88D9-C1773471C7A0',
                    EntityId: res.result.id

                };
                //1. save workrequest for testrequest(res.id) , testrequestentityidentifierId()
                this.testrequestsensorserice.postWorkRequestAdd(workrequestbody).subscribe(workresult => {

                    this.selectedDepartment.forEach(dept => {
                        var primaryuserid = '3BDC1617-D620-65D0-26EF-000E1090A386';
                        let taskbody = {

                            EntityIdentifierId: '756BCBA4-6FA5-4BB6-88D9-C1773471C7A0',
                            EntityId: res.result.id,
                            DepartmentId: dept,
                            UserId: primaryuserid,
                            Name: "Thermo Couple Info",
                            ShowModule: "SensorModule"
                        };

                        this.testrequestsensorserice.postTasksAdd(taskbody).subscribe(taskresult => {

                            if (taskresult.isSuccess)
                            {
                                this.router.navigate(['testRequest/details/', this.testRequestEntityId]);

                            }

                        });
                    });
                });
            }
            if (res.isSuccess && !this.IsThermoCouple && !this.IsPartsList)
             this.router.navigate(['testRequest/details/', res.result.id]);

     });


    }

    navigateDetails(id: string) {
        this.router.navigate(['testRequest/sensor/details/', id]);
    }



}
