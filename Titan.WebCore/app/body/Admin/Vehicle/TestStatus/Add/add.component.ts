import { Component} from '@angular/core';
import { TestStatusService } from '../../../../../shared/services/Containers/TestStatusService/testStatus.service';
import { Validators } from '@angular/forms';
import { SelectItem, Message, MenuItem } from 'primeng/primeng';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { BreadCrumbsService } from '../../../../../shared/services/breadCrumbs/breadCrumbs.service';
//import { DataTable,PanelMenuModule, PanelModule ,InputTextModule,InputTextareaModule, ButtonModule } from 'primeng/primeng';

@Component({
    selector: 'add-testStatus',
    templateUrl: 'app/body/Admin/Vehicle/TestStatus/Add/add.component.html'
})

export class AddComponent {
    username: string;
    description:string;
    added: any;

    breadcrumbs: MenuItem[];
    breadcrumbsHome: MenuItem;

    constructor(
        private breadCrumbsService: BreadCrumbsService,
        private service: TestStatusService, 
        private router: Router, 
        private route: ActivatedRoute) {

    }

    ngOnInit() {
        this.route.queryParams.subscribe(params => {

            this.added = params['page'];
            let breadC = this.breadCrumbsService.getBreadCrumbs();
            let testStatusAddBreadCrumb = breadC.filter(filter =>
                filter.pageName === 'TestStatusAddPage'
            )[0];

            console.log("BreadC -----", breadC);
            console.log("testStatusAddBreadCrumb ---------", testStatusAddBreadCrumb);
            this.breadcrumbs = [];
            this.breadcrumbs = testStatusAddBreadCrumb.items;

            console.log("breadcurmbs ------", this.breadcrumbs);

            this.breadcrumbsHome = { routerLink: ['/'] };
     }); 
    }
    onSubmit(formRef) {
        formRef.locale = "en-us";
        formRef.isDeleted = false;
        let formData: any = {name: '', description: '', calendarDisplayColor:'', locale:'', isDeleted: false};
        formData.name = formRef.name;
        formData.description = formRef.description;
        formData.calendarDisplayColor = formRef.calendarDisplayColor;
        formData.locale = "en-us";
        let added: any="true";
        console.log(formData);
        this.service.postAdd(formData).subscribe(res => {
            console.log('--------------res result------------', +res)

            // this.router.navigate(["/vehicle/projectStatus/", res]);
            if (res.isSuccess) {
                //this.router.navigate([], {q})
                this.router.navigate(["/admin/vehicle/testStatus"], { queryParams: { page: 1 } });
               
            }
           
        }
            );
     
                  // );
       
    }
}
