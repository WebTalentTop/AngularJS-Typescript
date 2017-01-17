import { TimeEntryService } from '../../../shared/services/timeEntry.service';
import { TestRequestSensorService } from '../../../shared/services/testrequestsensor.service';
import { TestVerificationMethodService } from '../../../shared/services/testverificationMethod.service';
import { TestFacilityService } from '../../../shared/services/Containers/TestFacilityService/testfacility.service';
//import { EquipmentTypeService } from '../../../shared/services/equipmentType.service';
import { EquipmentTypeService } from '../../../shared/services/Containers/EquipmentTypeService/equipmentType.service';
import { TestTemplateService } from '../../../shared/services/Containers/TestTemplateService/testTemplate.service';
import { TestStatusService } from '../../../shared/services/teststatus.service';
import { TestRequestService } from '../../../shared/services/Containers/TestRequestService/testRequest.service';
import { TestRoleService } from '../../../shared/services/testRole.service';
import { ProjectService } from '../../../shared/services/Containers/ProjectService/project.service';
import { TestModeService } from '../../../shared/services/testMode.service';
import { TestTypeService } from '../../../shared/services/testType.service';
import { BuildLevelService } from '../../../shared/services/Containers/BuildLevelService/buildLevel.service';
import { DepartmentService } from '../../../shared/services/department.service';

import { ProcedureService } from '../../../shared/services/procedure.service'
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
    public testTemplate: any;
    public testTypes: any;
    public testModes: Array<any> = new Array();
    public selectedProcedures: Array<any> = new Array();
    public filteredProcedures: Array<any> = new Array();
    public filteredSelectedProcedures: Array<any> = new Array();
    public selectedTestRequirements: Array<any> = new Array();
    public filteredTestRequirements: Array<any> = new Array();
    public filteredSelectedTestRequirements: Array<any> = new Array();
    // qui
    gridData = [];
    confInfo: any = {};
    cols = [];
    gridFilter = {};
    buildLevels: any;
    plannedStartDate: any;
    plannedEndDate: any;
    projectCodes: any;
   // testTypes: any;
    testTemplates: any;
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
    procedures: any;
    //testTemplates: any;
    selectedProcedureId: any;
    selectedTestTemplates: any;
    selectedBuildLevels: any;
    selectedTestVerificationMethods: any;
    selectedProjectCodes: any;
    selectedTestRoles: any;
    number: any;
    selectedTestFacilities: any;
    selectedTestStatuses: any;
  //  selectedTestTemplates: any;
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
    testRequestDetails: any = {
        testNumber: '',
        // TenantId: ' ',
        testTemplateId:'',
        testFacilityId: '',
        projectId: '',
        buildLevelId: '',
        verificationMethodId: '',
        plannedEndDate: '',
        plannedStartDate: '',
        testStatusId: '',
        dueDate: ''
    };
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
        private testrequestservice: TestRequestService,
        private procedureService: ProcedureService

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

    onMoveProcedureUp(procedure) {
        var oldIndex = this.selectedProcedures.indexOf(procedure);
        this.selectedProcedures.splice(oldIndex - 1, 0, this.selectedProcedures.splice(oldIndex, 1)[0]);
        this.updateProcedureProcedureDisplayOrder();
    }

    onMoveProcedureDown(procedure) {
        var oldIndex = this.selectedProcedures.indexOf(procedure);
        this.selectedProcedures.splice(oldIndex + 1, 0, this.selectedProcedures.splice(oldIndex, 1)[0])
        this.updateProcedureProcedureDisplayOrder();
    }

    updateProcedureProcedureDisplayOrder() {
        this.testtemplateservice.putTestTemplateProcedureDisplayOrder(this.selectedProcedures, this.testTemplate.id).subscribe(filteredList => {
            this.selectedProcedures = filteredList.result;
        });
    }

    onLoadProcedureSteps(event) {
        console.log(event);
        if (event.data != undefined) {
            this.procedureService.getProcedureSteps(event.data.id).subscribe(res => {
                event.data.steps = res.$values;
            });
        } else {
            this.procedureService.getProcedureSteps(event.id).subscribe(res => {
                event.steps = res.$values;
            });
        }
    }

    onAddProcedure() {
        let testtemplateprocedurebody = {
            TestRequestId: this.id,
            TestTemplateIdList: this.selectedTestTemplates,
            ProcedureId: this.selectedProcedureId,

        }
        this.testrequestservice.postTestRequestTestTemplateInsert(testtemplateprocedurebody).subscribe(procresult => {

            if (procresult.isSuccess) {
                this.testrequestservice.getTestTemplateProceduresByTestRequestId(this.id).subscribe(getprocresult => {
                    this.selectedProcedures = getprocresult.result;
                });
            }
        });
    }

    isUpButtonVisible(procedure) {
        if (this.selectedProcedures != undefined && this.selectedProcedures.length > 1 && procedure.id != this.selectedProcedures[0].id)
            return true;
        return false;
    }

    isDownButtonVisible(procedure) {
        if (this.selectedProcedures != undefined && this.selectedProcedures.length > 1 && procedure.id != this.selectedProcedures[this.selectedProcedures.length - 1].id)
            return true;
        return false;
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
        this.getHourEntryByEntityIdentifierId();
        this.getDownTimeReasons();
        this.getProcedures();
        this.getTestTemplates();
        let resData: any;
        //TODO: get testtemplateids for selected testrequest..... and get testtemplate,procedure-step details....
        //this.testtemplateservice.getById(params['id']).subscribe(res => {
        //    this.testTemplate = res.result;
        //    //if (this.testTemplate.testTypeId != null) {
        //    //    this.onTestTypeChange();
        //    //}
        //});
        //  let testTemplateId = "0a594b8c-3040-4056-9250-445073668be6";
        this.testrequestservice.getTestTemplateProceduresByTestRequestId(this.id).subscribe(res => {
            this.selectedProcedures = res.result;
        });
       
        // get test request details byid
        //this.testrequestsensorserice.getTestRequestById(this.id)
        //    .subscribe(res => {
        //        this.testRequestDetails = res.result;

        //        this.testRequestDetails.plannedStartDate = new Date(res.result.plannedStartDate);
        //        this.testRequestDetails.plannedEndDate = new Date(res.result.plannedEndDate);
        //        this.testRequestDetails.dueDate = new Date(res.result.dueDate);
               
        //    });
        let departmentId = '00000000-0000-0000-0000-000000000000';
        this.testrequestsensorserice.GetAllTestRequestSensors(this.entityId, departmentId)
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
    onProcedureChange(event) {
        this.selectedProcedureId = (event.value);
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
                resultMap.push({
                    label: "Select Department",
                    value: null
                });
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
         TestTemplateId: '2F59E940-50E9-403E-8075-F407AE285143',//this.selectedTestTemplates,
         TestFacilityId: this.selectedTestFacilities,
         ProjectId: this.selectedProjectCodes,
         BuildLevelId: this.selectedBuildLevels,
         VerificationMethodId: this.testRequestDetails.plannedStartDate,
         PlannedEndDate: this.testRequestDetails.plannedEndDate,
         TestStatusId: this.selectedTestStatuses,
        DueDate: this.testRequestDetails.dueDate
        // UserCreatedById : ' ' ,
        //Createdon : ' ' ,
        // UserModifiedById : ' ' ,
        //Modifiedon : ' ' ,

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

      this.testrequestsensorserice.postTestRequestAdd(formTestRequestData).subscribe(res => {
          //  this.TrackingList = res.$values;
            if (this.IsThermoCouple) {

                let workrequestbody = {

                    EntityIdentifierId: '756BCBA4-6FA5-4BB6-88D9-C1773471C7A0',
                    EntityId: res.id//'CF338C63-A9EC-4D7F-8F48-EA1F8353EC2A'//res.id  
                  
                };
                //1. save workrequest for testrequest(res.id) , testrequestentityidentifierId() 
                this.testrequestsensorserice.postWorkRequestAdd(workrequestbody).subscribe(workresult => {

                    this.selectedDepartment.forEach(dept => {
                        var primaryuserid = 'BE06471E-F53B-E013-642A-003087ABCAA3';
                        let taskbody = {

                            EntityIdentifierId: '756BCBA4-6FA5-4BB6-88D9-C1773471C7A0',
                            EntityId: res.id,//'CF338C63-A9EC-4D7F-8F48-EA1F8353EC2A',//res.id,
                            DepartmentId: dept,
                            UserId: primaryuserid

                        };

                        this.testrequestsensorserice.postTasksAdd(taskbody).subscribe(taskresult => {



                        });
                    });
                });

                //2. save to testrequestexternaldepartments--skip



                //3. save to tasks table for user,department,entityid,entityidentifier,showmodule....(userservice , get all primary incharge users for selected departments )
              //  this.selectedDepartment.forEach(dept => {

                    // make service call to get primaryUserId for each department-- TODO
                    //var primaryuserid ='BE06471E-F53B-E013-642A-003087ABCAA3' ;
                    //let taskbody = {

                    //    EntityIdentifierId: '756BCBA4-6FA5-4BB6-88D9-C1773471C7A0',
                    //    EntityId: 'E428D5D6-D91F-4DD9-8C4C-52AB264C4B78',//res.id,
                    //    DepartmentId: this.selectedDepartment,
                    //    UserId: primaryuserid

                    //};

                    //this.testrequestsensorserice.postTasksAdd(taskbody).subscribe(taskresult => {



                    //});

              //  });
               


                //4. email to all prime engineer of selected departments ,, (get all primary incharge users for selected departments)


               
            }


     });
       

    }
    onSubmit(formRef) {
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
        this.dataService.postAdd(formData).subscribe(res => {

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

    onProcedureUpdate() {

        this.testtemplateservice.postUpdate(this.testTemplate).subscribe(res => {
            //this.router.navigate(['testtemplate/details', res.$values.id]);
        });
    }

}