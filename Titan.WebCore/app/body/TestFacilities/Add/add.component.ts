import { Component } from '@angular/core';
import { DataTableModule, TabViewModule, ButtonModule, InputTextareaModule, InputTextModule, PanelModule, 
        Message, GrowlModule, MessagesModule, DropdownModule, MenuItem } from 'primeng/primeng';
import { SelectItem } from 'primeng/primeng';
import { Router } from '@angular/router';
import { BreadCrumbsService } from '../../../shared/services/breadCrumbs/breadCrumbs.service';
import { TestFacilityService } from '../../../shared/services/testFacility.service';

@Component({
    selector: 'add-test-Facilities',
    styleUrls: ['app/body/TestFacilities/Add/add.component.css'], 
    templateUrl: 'app/body/TestFacilities/Add/add.component.html'
})

export class AddComponent {
    name:string;
    addressLine1:string;
    addressLine2:string;
    city:string;
    state:string;
    postalCode:string;
    notificationMsgs: Message[] = [];
    testFacility = {
                        name:'', 
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
                private service: TestFacilityService, 
                private router: Router) {

    }
        breadcrumbs: MenuItem[];
        breadcrumbsHome: MenuItem;

    ngOnInit() {
        let breadC = this.breadCrumbsService.getBreadCrumbs();
        let testFacilitiesAddBreadCrumb = breadC.filter(filter =>
            filter.pageName === 'TestFacilitiesAddPage'
        )[0];

        console.log("BreadC -----", breadC);
        console.log("testFacilitiesAddBreadCrumb ---------", testFacilitiesAddBreadCrumb);
        this.breadcrumbs = [];
        this.breadcrumbs = testFacilitiesAddBreadCrumb.items;

        console.log("breadcrumbs ------", this.breadcrumbs);

        this.breadcrumbsHome = { routerLink: ['/'] };
    }
    onSubmit(formRef) {
        console.log(formRef);
        console.log(this.testFacility.name);
        formRef.isDeleted = false;
        let formData: any = {name: '', 
                    address:{
                        addressLine1:'',
                        addressLine2:'',
                        city:'',
                        state:'',
                        postalCode:'',
                    }};
        formData.name = formRef.name;
        formData.address.addressLine1 = formRef.addressLine1;
        formData.address.addressLine2 = formRef.addressLine2;
        formData.address.city = formRef.city;
        formData.address.state = formRef.state;
        formData.address.postalCode = formRef.postalCode;
        formData.locale = "en-us";
        console.log(formData);
        this.service.postAdd(formData).subscribe(res => { 
            console.log("-------- Test Facility Adding new result ----- ", res); 
            
            if (res.isSuccess) {

                this.router.navigate(["./testFacilities"], { queryParams: { page: 1 } });
            }
            else
            {
                this.notificationMsgs.push({ severity: 'warn', summary: res.message, detail: 'test Facility name exists.' });
               

            }
        });
    }
   

}
