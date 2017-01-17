import { TestRequestSensorService } from '../../../shared/services/testrequestsensor.service';
import { titanApiUrl } from '../../../shared/services/apiurlconst/titanapiurl';
import { EquipmentTypeService } from '../../../shared/services/Containers/EquipmentTypeService/equipmentType.service';
import { IUserProfile } from '../../../shared/services/definitions/IUserProfile';
import { DataTable, Header, Footer, TabViewModule, LazyLoadEvent, ButtonModule, InputTextareaModule, InputTextModule, PanelModule, FileUploadModule, MessagesModule, Message, DropdownModule, GrowlModule, MenuItem } from 'primeng/primeng';
import { Component, AfterViewInit, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { UserService } from '../../../shared/services/user.service';

import { SelectItem, ConfirmationService } from 'primeng/primeng';
//import { UUID } from 'angular2-uuid'
declare var $: JQueryStatic;

@Component({
    selector: 'user-details',
    templateUrl: 'app/body/User/Details/details.component.html'
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
    selectedTimeZoneId: any;
    selectedTitanRoleId: any;
    selectedDepartmentId: any;
    departments: any;
    timeZones: any;
    titanRoles: any;
    selectedTenantId: any;
    tenants: any;
   // selectedDownTimeReasonId: any;
   // projectId: any;
   // selectedHourEntry: any ;
   id: any;
   entityType: any = "9F8D13F5-F0E8-452E-8D81-631FCD7A1C9A";
   entityId: any;
   formData: any;
   taskId: any;
   userId: any;
   tenantId: any;
   userFunctionGroups: any;
   functionGroupsPerUserList: any;
   userProfile: any = {
      
       firstName: ' ',
       lastName: ' ',
     
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

    constructor(
        private route:ActivatedRoute,
        private dataService: TestRequestSensorService,
        private equipmenttypeservice: EquipmentTypeService,
        private userservice: UserService,
        private router: Router
        
    ){
        this.route.params.subscribe(params => {
         //   this.id = params['id'];
            this.userId = params['id'];
        });
         // this.entityId = this.id;
          console.log("---- TF Details ID Param -----", this.id);
         // this.fileData= this.fileInfo[];
    }
   handleChange(event)
   {

       console.log('tes---',event);
       console.log('-------targetid-------',event.originalEvent.target.innerText);
   }
   ngOnInit() {
       this.getFunctionGroups();
       this.getDepartments();
       this.getTimeZones();
       this.getTitanRoles();
       this.getTenants();
       //get the departmentId through taskId
       //get sensors by department and entityId
       this.userservice.getUserDetailsById(this.userId)
           .subscribe(userresult => {
               this.userProfile = userresult.result;             
            
               this.userservice.GetUserFunctionGroupsByUser(this.userId).subscribe(res => {
                   if (res.isSuccess) {
                       this.userFunctionGroups = res.result;
                   }

                 //  let filterfuntiongroups = res.result.filter(user => user.id == this.userId);
                //   console.log('--------filtered-------', filterfuntiongroups);
               //    this.userFunctionGroups = res.result.filter(user => user.id == this.userId)[0].functionGroupMapping.$values;
                  // this.functionGroupsPerUserList = res.result.filter(user => user.id == this.userId).functionGroupMapping;
               });
              
               
           });

       this.userservice.GetTenantMembershipsByUser(this.userId).subscribe(usertenants => {
           if (usertenants.isSuccess) {
               this.userTenants = usertenants.result.tenantMemberships.$values;
           }
       });
 

   }
  
  

   onSensorChange(event) {
       console.log('------event------------', event)
       this.selectedSensorTypeId = (event.value);
       //   this.EquipmentSubType.calibrationform = (event);

   }
   onFunctionGroupChange(event)
   {
       this.selectedFunctionGroupId = event.value;
   }
   onTenantChange(event) {
       this.selectedTenantId = event.value;
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
   onAddFunctionGroup()
   {
       let tenantId = "FDC1A91F-75F4-4B2F-BA8A-9C2D731EBE4D";
       this.displayFunctionGroupDialog = false;
       let functionGroupName = this.functionGroups.filter(funcGroup => { funcGroup.id == this.selectedFunctionGroupId }).functionGroupName;
       let userFunctionGroupModel = {

           userId: this.userId,
           functionGroupId: this.selectedFunctionGroupId,
           functionGroupName: functionGroupName,
           tenantId: tenantId
       };
       this.userservice.postAddFunctionGroupToUser(userFunctionGroupModel).subscribe(res => {
           if (res.isSuccess) {
              // this.selectedFunctionGroupId = null;
             
               this.userservice.GetUserFunctionGroupsByUser(this.userId).subscribe(res => {
                   if (res.isSuccess) {
                       this.userFunctionGroups = res.result;
                   }

                   //  let filterfuntiongroups = res.result.filter(user => user.id == this.userId);
                   //   console.log('--------filtered-------', filterfuntiongroups);
                   //    this.userFunctionGroups = res.result.filter(user => user.id == this.userId)[0].functionGroupMapping.$values;
                   // this.functionGroupsPerUserList = res.result.filter(user => user.id == this.userId).functionGroupMapping;
               });

           }
       });

   }
   onAddTenant()
   {
       //let tenantId = "FDC1A91F-75F4-4B2F-BA8A-9C2D731EBE4D";
       //this.displayFunctionGroupDialog = false;
       //let functionGroupName = this.functionGroups.filter(funcGroup => { funcGroup.id == this.selectedFunctionGroupId }).functionGroupName;
       let userTenantModel = {

           userId: this.userId,          
           tenantId: this.selectedTenantId
       };
       this.userservice.CreateUserTenantAccess(userTenantModel).subscribe(res => {
           if (res.isSuccess) {
               // this.selectedFunctionGroupId = null;

               this.userservice.GetTenantMembershipsByUser(this.userId).subscribe(usertenants => {

                   this.userTenants = usertenants.tenantMemberships.$values;
               });

           }
       });

   }
   onRemoveFunctionGroupMap(functionGroup)
   {
       this.userservice.RemoveFunctionGroupUserMap(functionGroup).subscribe(res => {

           this.userservice.GetUserFunctionGroupsByUser(this.userId).subscribe(res => {
               if (res.isSuccess) {
                   this.userFunctionGroups = res.result;
               }             
           });
       });

   }
   onRemoveUserTenantMap(userTenant) {
       let userTenantModel = {

           userId: this.userId,
           tenantId: userTenant.tenantId
       };
       this.userservice.RemoveTenantMapping(userTenantModel).subscribe(res => {

           this.userservice.GetTenantMembershipsByUser(this.userId).subscribe(usertenants => {

               this.userTenants = usertenants.result.tenantMemberships.$values;
           });
       });

   }
   //onDownTimeReasonChange(event) {
   //    console.log('------event------------', event)
   //    this.selectedDownTimeReasonId = (event.value);
   //    //   this.EquipmentSubType.calibrationform = (event);

   //}

   //onHourEntryChange(event) {
   //    console.log('------event------------', event)
   //    this.selectedTimeEntryTypeId = (event.value);
   //    //   this.EquipmentSubType.calibrationform = (event);

   //}
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
           if (res.isSuccess)
           {

           }
       });
      
   }

   

}