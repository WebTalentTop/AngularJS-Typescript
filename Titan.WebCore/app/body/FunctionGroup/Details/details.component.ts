import { TestRequestSensorService } from '../../../shared/services/testrequestsensor.service';
import { FunctionGroupService } from '../../../shared/services/functionGroup.service';
import { TenantService } from '../../../shared/services/tenant.service';
import { titanApiUrl } from '../../../shared/services/apiurlconst/titanapiurl';
import { EquipmentTypeService } from '../../../shared/services/Containers/EquipmentTypeService/equipmentType.service';
import { IUserProfile } from '../../../shared/services/definitions/IUserProfile';
import {
    DataTable, Header, Footer, TabViewModule, LazyLoadEvent, ButtonModule, InputTextareaModule,
    InputTextModule, PanelModule, FileUploadModule, MessagesModule, Message, DropdownModule, GrowlModule,
    MenuItem
} from 'primeng/primeng';
import { Component, AfterViewInit, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { UserService } from '../../../shared/services/user.service';
import { BreadCrumbsService } from '../../../shared/services/breadCrumbs/breadCrumbs.service';

import { SelectItem, ConfirmationService } from 'primeng/primeng';
//import { UUID } from 'angular2-uuid'
declare var $: JQueryStatic;

@Component({
    selector: 'functionGroup-details',
    templateUrl: 'app/body/FunctionGroup/Details/details.component.html'
})
export class DetailsComponent {
    // ngAfterViewInit() {
    //   //  var editor = new Quill('#editor');
    //     var quill = new Quill('#editor-container', {
    //         modules: {
    //             toolbar: [
    //                 [{ header: [1, 2, true] }],
    //                 ['bold', 'italic', 'underline'],
    //                 ['image', 'code-block']
    //             ]
    //         },
    //         placeholder: 'Compose an epic...',
    //         theme: 'snow'  // or 'bubble'
    //     });
    //    // quill.g
    // }
    //// qui
    // username: string;
    // details:string;
    Sensors: any;
    fileData: any[] = [];
    userTenants: any;
    displayTenantDialog: boolean = false;
    uploadedFiles: any[] = [];
    // TestFacilityAttachments: ITestFacilityAttachment[];
    // hourEntries: any;
    // downTimeReasons: any;
    // estimateDuration: any;
    // formConfiguration:any;
    // formObject:any;
    // formEquipmentObject: any;
    // TimeEntryTypeId: any;
    selectedSensorTypeId: any;
    comment: any;
    sensorRequests: any;
    selectedFunctionGroupId: any;
    functionGroups: any;
    displayFunctionGroupDialog: boolean = false;
    displayAddUserDialog: boolean = false;
    selectedTimeZoneId: any;
    selectedTitanRoleId: any;
    selectedDepartmentId: any;
    departments: any;
    timeZones: any;
    selectedUserId: any;
    functionGroupId: any;
    users: any;
    titanRoles: any;
    tenantProfile: any = { name: '', hostAddress: '' };
    tenantUsers: any;
    // selectedDownTimeReasonId: any;
    // projectId: any;
    // selectedHourEntry: any ;
    id: any;
    entityType: any = "9F8D13F5-F0E8-452E-8D81-631FCD7A1C9A";
    entityId: any;
    formData: any;
    taskId: any;
    userId: any;
    allUsers: any;
    tenantId: any;
    functionGroupUsers: any;
    functionGroupTenants: any;
    selectedTenantId: any;
    tenants: any;
    msgs: Message[] = [];
    functionGroupsPerUserList: any;
    functionGroup: any = {

        name: ''
    };
    departmentId: any;

    // filepath: string = "TestFacility";
    // TrackingList: any;
    // startTime: any;
    // endTime: Date;
    fileInfo: any = {
        //             id:'',
        //             isDeleted:false,
        name: ''
        //             createdOn:'',
        //             modifiedOn:'',
        //             userCreatedById:'',
        //             userInChargedId:'',
        //             userModifiedById:''
    };

    // msgs:Message[];
    // uploadedFiles: any[] = [];
    breadcrumbs: MenuItem[];
    breadcrumbsHome: MenuItem;

    constructor(
        private breadCrumbsService: BreadCrumbsService,
        private route: ActivatedRoute,
        private dataService: TestRequestSensorService,
        private equipmenttypeservice: EquipmentTypeService,
        private userservice: UserService,
        private tenantservice: TenantService,
        private functionGroupservice: FunctionGroupService,
        private router: Router

    ) {
        this.route.params.subscribe(params => {
            //   this.id = params['id'];
            this.functionGroupId = params['id'];
        });
        // this.entityId = this.id;
        console.log("---- TF Details ID Param -----", this.id);
        // this.fileData= this.fileInfo[];
        let breadC = this.breadCrumbsService.getBreadCrumbs();
        let functionGroupDetailsBreadCrumb = breadC.filter(filter =>
            filter.pageName === 'FunctionGroupDetailsPage'
        )[0];

        this.breadcrumbs = [];
        this.breadcrumbs = functionGroupDetailsBreadCrumb.items;

        this.breadcrumbsHome = { routerLink: ['/'] };
    }
    handleChange(event) {

        console.log('tes---', event);
        console.log('-------targetid-------', event.originalEvent.target.innerText);
    }
    ngOnInit() {
        //this.userprofileservice.getById().subscribe(tenresult => {
        //    this.tenantId = tenresult.result;
        //});
        //  this.getFunctionGroups();
        this.getUsers();
        this.getTenants();
        //this.getDepartments();
        //this.getTimeZones();
        //this.getTitanRoles()
        //get the departmentId through taskId
        //get sensors by department and entityId
        this.functionGroupservice.getFunctionGroupDetailsById(this.functionGroupId)
            .subscribe(functionGroupres => {
                this.functionGroup = functionGroupres.result;
                this.functionGroupservice.getTenantUserFunctionGroupsById(this.functionGroupId).subscribe(res => {
                    this.functionGroupTenants = res.result.functionGroupTenants.$values;
                    this.functionGroupUsers = res.result.functionGroupUsers.$values;
                });

            });
    }

    onUserChange(event) {
        this.selectedUserId = event.value;
    }
    onTenantChange(event) {
        this.selectedTenantId = event.value;
    }
    getTenants() {
        //    userRoles
        this.userservice.getTenants().subscribe(response => {
            this.tenants = new Array();
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
                this.tenants = resultMap;
            }
            console.log(response);
        });
    }
    getUsers() {
        //    userRoles
        this.userservice.getUsers().subscribe(response => {
            this.users = new Array();
            if (response != null) {
                var resultMap = new Array();
                resultMap.push({
                    label: "--Select--",
                    value: null
                });
                for (let template of response.$values) {
                    var temp = {
                        label: template.firstName,
                        value: template.id
                    }
                    resultMap.push(temp);
                }
                this.users = resultMap;
            }
            console.log(response);
        });
    }

    onSensorChange(event) {
        console.log('------event------------', event)
        this.selectedSensorTypeId = (event.value);
        //   this.EquipmentSubType.calibrationform = (event);

    }
    onFunctionGroupChange(event) {
        this.selectedFunctionGroupId = event.value;
    }
    onTimeZoneChange(event) {
        this.selectedTimeZoneId = event.value;
    }
    onTitanRoleChange(event) {
        this.selectedTitanRoleId = event.value;
    }
    onDepartmentChange(event) {
        this.selectedDepartmentId = event.value;
    }
    onAddTenant() {
        this.displayTenantDialog = false;
        // let tenantFunctionGroupModel = {

        let Tenant = { Id: this.selectedTenantId };
        //  };
        this.tenantservice.postAddFunctionGroupToTenant(Tenant, this.functionGroupId).subscribe(res => {
            if (res.isSuccess) {
                // this.selectedFunctionGroupId = null;

                this.functionGroupservice.getTenantUserFunctionGroupsById(this.functionGroupId).subscribe(res => {
                    this.functionGroupTenants = res.result.functionGroupTenants.$values;
                    // this.functionGroupUsers = res.result.functionGroupUsers.$values;
                });

            }
        });

    }
    onRemoveUserTenantMap(tenant) {
        let Tenant = { Id: tenant.id };
        this.tenantservice.RemoveFunctionGroupTenantMap(Tenant, this.functionGroupId).subscribe(res => {

            if (res.isSuccess) {
                // this.selectedFunctionGroupId = null;

                this.functionGroupservice.getTenantUserFunctionGroupsById(this.functionGroupId).subscribe(res => {
                    this.functionGroupTenants = res.result.functionGroupTenants.$values;
                    // this.functionGroupUsers = res.result.functionGroupUsers.$values;
                });

            }
        });

    }

    onAddUser() {
        this.displayAddUserDialog = false;
        let userFunctionGroupModel = {
            userId: this.selectedUserId,
            functionGroupId: this.functionGroupId
        };
        this.functionGroupservice.postAssignUserFunctionGroup(userFunctionGroupModel).subscribe(res => {
            if (res.isSuccess) {
                // this.selectedFunctionGroupId = null;
                this.functionGroupservice.getTenantUserFunctionGroupsById(this.functionGroupId).subscribe(res => {
                    // this.functionGroupTenants = res.result.functionGroupTenants.$values;
                    this.functionGroupUsers = res.result.functionGroupUsers.$values;
                });


            }
        });
    }
    onDeleteUserTenantMap(UserInfo) {

        let userFunctionGroupModel = {
            userId: UserInfo.userId,
            functionGroupId: this.functionGroupId
        };
        this.functionGroupservice.removeUserFunctionGroup(userFunctionGroupModel).subscribe(res => {

            this.functionGroupservice.getTenantUserFunctionGroupsById(this.functionGroupId).subscribe(res => {
                // this.functionGroupTenants = res.result.functionGroupTenants.$values;
                this.functionGroupUsers = res.result.functionGroupUsers.$values;
            });

        });
    }
    getFunctionGroups() {
        //    userRoles
        this.userservice.getAllFunctionGroups().subscribe(response => {
            this.functionGroups = new Array();
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
                this.functionGroups = resultMap;
            }
            console.log(response);
        });
    }
    getTimeZones() {
        //    userRoles
        this.userservice.getTimeZones().subscribe(response => {
            this.timeZones = new Array();
            if (response != null) {
                var resultMap = new Array();
                resultMap.push({
                    label: "--Select--",
                    value: null
                });
                for (let template of response.$values) {
                    var temp = {
                        label: template.name,
                        value: template.name
                    }
                    resultMap.push(temp);
                }
                this.timeZones = resultMap;
            }
            console.log(response);
        });
    }
    getDepartments() {
        //    userRoles
        this.userservice.getDepartments().subscribe(response => {
            this.departments = new Array();
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
                this.departments = resultMap;
            }
            console.log(response);
        });
    }
    getTitanRoles() {
        //    userRoles
        this.userservice.getTitanRoles().subscribe(response => {
            this.titanRoles = new Array();
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
                this.titanRoles = resultMap;
            }
            console.log(response);
        });
    }
    //getDownTimeReasons() {
    //    //    userRoles
    //    this.dataService.GetAllDownTimeReasons().subscribe(response => {
    //        this.downTimeReasons = new Array();
    //        if (response != null) {
    //            var resultMap = new Array();
    //            resultMap.push({
    //                label: "--Select--",
    //                value: null
    //            });
    //            for (let template of response.$values) {
    //                var temp = {
    //                    label: template.name,
    //                    value: template.id
    //                }
    //                resultMap.push(temp);
    //            }
    //            this.downTimeReasons = resultMap;
    //        }
    //        console.log(response);
    //    });
    //}
    //getHourEntryByEntityIdentifierId() {
    //    //    userRoles
    //    this.dataService.getHourEntryByEntityIdentifierId(this.id).subscribe(response => {
    //        this.hourEntries = new Array();
    //        if (response != null) {
    //            var resultMap = new Array();
    //            resultMap.push({
    //                label: "--Select--",
    //                value: null
    //            });
    //            for (let template of response) {
    //                var temp = {
    //                    label: template.name,
    //                    value: template.id
    //                }
    //                resultMap.push(temp);
    //            }
    //            this.hourEntries = resultMap;
    //        }

    //        console.log(response);
    //    });
    //}
    //selectFile($event): void {
    //    var inputValue = $event.target;
    //    this.file = inputValue.files[0];
    //    console.debug("Input File name: " + this.file.name + " type:" + this.file.size + " size:" + this.file.size);
    //}

    onSubmit(formRef) {
        //formRef.isDeleted = false;
        let userFormData: any = {

            Id: this.userId,
            firstName: formRef.firstName,
            lastName: formRef.lastName,
            emailAddress: formRef.emailAddress,
            defaultTimeZoneId: this.selectedTimeZoneId,
            departmentId: this.selectedDepartmentId
        };
        this.userservice.postUpdate(userFormData).subscribe(res => {
            if (res.isSuccess) {
                this.msgs = [];
                this.msgs.push({ severity: 'success', summary: 'Saved', detail: '' });
            }
            else {
                this.msgs = [];
                this.msgs.push({ severity: 'warn', summary: res.message, detail: 'Some thing went wrong.' });
            }
        });

    }



}
