import { Component } from '@angular/core';
import { DataTableModule, TabViewModule, ButtonModule, InputTextareaModule, InputTextModule, PanelModule, 
        Message, GrowlModule, MessagesModule, DropdownModule, MenuItem } from 'primeng/primeng';
import { SelectItem } from 'primeng/primeng';
import { Router } from '@angular/router';
import { BreadCrumbsService } from '../../../shared/services/breadCrumbs/breadCrumbs.service';
import { UserProfileService } from '../../../shared/services/userProfile.service';
import { IUserProfile } from '../../../shared/services/definitions/IUserProfile';
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
    selectedUserId: any;
    tenantId: any;
    users: any;
    currentUser: IUserProfile;
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
        private userprofileservice: UserProfileService,

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
            this.getUsers();
        let breadC = this.breadCrumbsService.getBreadCrumbs();
        let testFacilitiesAddBreadCrumb = breadC.filter(filter =>
            filter.pageName === 'TestFacilitiesAddPage'
        )[0];
        this.breadcrumbs = [];
        this.breadcrumbs = testFacilitiesAddBreadCrumb.items;


        this.breadcrumbsHome = { routerLink: ['/'] };
        this.currentUser = this.userprofileservice.getCurrentUserProfile();

        }
    onUserChange(event) {
        this.selectedUserId = event.value;
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
    onSubmit(formRef) {
       
        //  formData.defaultTimeZoneId = formRef.defaultTimeZoneId;
        let tenantId = this.currentUser.defaultTenantId;
        let userTenantModel = {

            userId: this.selectedUserId,
            tenantId: tenantId 
        };
        this.userservice.CreateUserTenantAccess(userTenantModel).subscribe(res => {
            if (res.isSuccess) {

                this.router.navigate(['user/details/', this.selectedUserId]);
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
