import { Component } from '@angular/core';
import { DataTableModule, TabViewModule, ButtonModule, InputTextareaModule, InputTextModule, PanelModule, 
        Message, GrowlModule, MessagesModule, DropdownModule, MenuItem } from 'primeng/primeng';
import { SelectItem } from 'primeng/primeng';
import { Router } from '@angular/router';
import { BreadCrumbsService } from '../../../shared/services/breadCrumbs/breadCrumbs.service';
import { TitanUserProfileService } from '../../../shared/services/titanUserProfile.service';
import { FunctionGroupService } from '../../../shared/services/functionGroup.service';
import { DepartmentService } from '../../../shared/services/department.service';
import { UserService } from '../../../shared/services/user.service';
@Component({
    selector: 'add-functiongroup',
   // styleUrls: ['app/body/User/Add/add.component.css'], 
    templateUrl: 'app/body/FunctionGroup/Add/add.component.html'
})

export class AddComponent {
    firstName:string;
    lastName:string;
    emailAddress:string;
    phoneNumber:string;
    userName: string;
    selectedDepartmentId: any;
    tenantId: any;
    departments: any;
    displayName:string;
    notificationMsgs: Message[] = [];
    testFacility = {
                        name:'', description: '', lastMaintenanceDate: '',
                        address:{
                        addressLine1:'',
                        addressLine2:'',
                        city:'',
                        state:'',
                        postalCode:'',
                    }};
    //constructor(private dataService: PlatformService) {
    //        }
    
    constructor(private breadCrumbsService: BreadCrumbsService,

        private userservice: UserService,
        private userprofileservice: TitanUserProfileService,
        private functiongroupservice: FunctionGroupService,
        private departmentservice: DepartmentService,
                private router: Router) {

    }
        breadcrumbs: MenuItem[];
        breadcrumbsHome: MenuItem;

        ngOnInit() {
            //this.userprofileservice.getCurrentUserProfile().subscribe(tenresult => {
            //    this.tenantId = tenresult.result;
            //});
            //this.userprofileservice.getById().subscribe(tenresult => {
            //    this.tenantId = tenresult.result;
            //});
            this.getDepartments();
        let breadC = this.breadCrumbsService.getBreadCrumbs();
        let testFacilitiesAddBreadCrumb = breadC.filter(filter =>
            filter.pageName === 'TestFacilitiesAddPage'
        )[0];
        this.breadcrumbs = [];
        this.breadcrumbs = testFacilitiesAddBreadCrumb.items;


        this.breadcrumbsHome = { routerLink: ['/'] };

        }
    onDepartmentChange(event) {
        this.selectedDepartmentId = event.value;
    }
    getDepartments() {
        //    userRoles
        this.departmentservice.getDepartments().subscribe(response => {
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
    onSubmit(formRef) {
       
      //  formData.defaultTimeZoneId = formRef.defaultTimeZoneId;
        let tenantId = "FDC1A91F-75F4-4B2F-BA8A-9C2D731EBE4D";
        let functionGroupModel = {

            Name: formRef.name,
            DepartmentId: this.selectedDepartmentId
        };
        this.functiongroupservice.postAddFunctionGroup(functionGroupModel).subscribe(res => {
            if (res.isSuccess) {

                this.router.navigate(['functionGroup/details/', res.result.id]);
            }
        });
        //this.userservice.postAdd(formData).subscribe(res => { 
            
        //    if (res.isSuccess) {

        //        this.router.navigate(['user/details/', res.result.id]);
        //       // this.router.navigate(["./testFacilities"], { queryParams: { page: 1 } });
        //    }
        //    else
        //    {
        //        this.notificationMsgs.push({ severity: 'warn', summary: res.message, detail: 'test Facility name exists.' });
               

        //    }
        //});
    }
   

}
