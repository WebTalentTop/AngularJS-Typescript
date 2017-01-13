import { Component } from '@angular/core';
import { DataTableModule, TabViewModule, ButtonModule, InputTextareaModule, InputTextModule, PanelModule, 
        Message, GrowlModule, MessagesModule, DropdownModule, MenuItem } from 'primeng/primeng';
import { SelectItem } from 'primeng/primeng';
import { Router } from '@angular/router';
import { BreadCrumbsService } from '../../../shared/services/breadCrumbs/breadCrumbs.service';
import { TestFacilityService } from '../../../shared/services/TestFacilityService/testFacility.service';
import { UserService } from '../../../shared/services/user.service';
@Component({
    selector: 'add-user',
   // styleUrls: ['app/body/User/Add/add.component.css'], 
    templateUrl: 'app/body/User/Add/add.component.html'
})

export class AddComponent {
    firstName:string;
    lastName:string;
    emailAddress:string;
    phoneNumber:string;
    userName: string;
    selectedDepartmentId: any;
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
                private service: TestFacilityService, private userservice: UserService,
                private router: Router) {

    }
        breadcrumbs: MenuItem[];
        breadcrumbsHome: MenuItem;

        ngOnInit() {
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
    onSubmit(formRef) {
        formRef.isDeleted = false;
        let formData: any = {
            firstName: '', lastName: '', departmentId: '', userName: '', displayName: '', defaultTimeZoneId: '', emailAddress:''
                    };
        formData.firstName = formRef.firstName;
        formData.lastName = formRef.lastName,
            formData.departmentId = this.selectedDepartmentId;
        formData.userName = formRef.userName;
        formData.displayName = formRef.displayName;
        formData.emailAddress = formRef.emailAddress;
      //  formData.defaultTimeZoneId = formRef.defaultTimeZoneId;
      

        this.userservice.postAdd(formData).subscribe(res => { 
            
            if (res.isSuccess) {

                this.router.navigate(['user/details/', res.result.id]);
               // this.router.navigate(["./testFacilities"], { queryParams: { page: 1 } });
            }
            else
            {
                this.notificationMsgs.push({ severity: 'warn', summary: res.message, detail: 'test Facility name exists.' });
               

            }
        });
    }
   

}
