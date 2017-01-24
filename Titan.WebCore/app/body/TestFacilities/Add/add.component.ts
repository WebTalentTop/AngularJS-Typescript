import { Component } from '@angular/core';
import { DataTableModule, TabViewModule, ButtonModule, InputTextareaModule, InputTextModule, PanelModule, 
        Message, GrowlModule, MessagesModule, DropdownModule, MenuItem } from 'primeng/primeng';
import { SelectItem } from 'primeng/primeng';
import { Router, ActivatedRoute } from '@angular/router';
import { BreadCrumbsService } from '../../../shared/services/breadCrumbs/breadCrumbs.service';
import { TestFacilityService } from '../../../shared/services/Containers/TestFacilityService/testFacility.service';

@Component({
    selector: 'add-test-Facilities',
    styleUrls: ['app/body/TestFacilities/Add/add.component.css'], 
    templateUrl: 'app/body/TestFacilities/Add/add.component.html'
})

export class AddComponent {
    name:string;
    id: string;
    entityId: string = this.id;
    addressLine1:string;
    addressLine2:string;
    city:string;
    state:string;
    postalCode: string;
    added: any;
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

    constructor(
        private breadCrumbsService: BreadCrumbsService,
        private service: TestFacilityService,
        private route: ActivatedRoute, 
                private router: Router) {

        this.route.queryParams.subscribe(params => this.id = params['id']);{
        this.entityId = this.id;

        let breadC = this.breadCrumbsService.getBreadCrumbs();
        let testFacilitiesAddBreadCrumb = breadC.filter(filter =>
            filter.pageName === 'TestFacilitiesAddPage'
        )[0];
        this.breadcrumbs = [];
        this.breadcrumbs = testFacilitiesAddBreadCrumb.items;


        this.breadcrumbsHome = { routerLink: ['/'] };
    }
                }

        breadcrumbs: MenuItem[];
        breadcrumbsHome: MenuItem;
    ngOnInit() {
       
    }
    onSubmit(formRef) {
        formRef.isDeleted = false;
        let formData: any = {name: '', lastMaintenanceDate: '', description: '',
                    address:{
                        addressLine1:'',
                        addressLine2:'',
                        city:'',
                        state:'',
                        postalCode:'',
                    }};
        formData.name = formRef.name;
        formData.description = formRef.description,
        formData.lastMaintenanceDate = formRef.lastMaintenanceDate;
        formData.address.addressLine1 = formRef.addressLine1;
        formData.address.addressLine2 = formRef.addressLine2;
        formData.address.city = formRef.city;
        formData.address.state = formRef.state;
        formData.address.postalCode = formRef.postalCode;
        formData.locale = "en-us";

        this.service.postAdd(formData).subscribe(res => { 
            
            if (res.isSuccess) {

                this.router.navigate(['testFacilities/details/', res.result.id]);
               // this.router.navigate(["./testFacilities"], { queryParams: { page: 1 } });
            }
            else
            {
                this.notificationMsgs.push({ severity: 'warn', summary: res.message, detail: 'test Facility name exists.' });
               

            }
        });
    }
   

}
