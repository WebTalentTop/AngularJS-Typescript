import { Component} from '@angular/core';
import { PermissionService } from '../../../../../shared/services/permission.service';
import { Validators } from '@angular/forms';
import { SelectItem, MenuItem} from 'primeng/primeng';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { BreadCrumbsService } from '../../../../../shared/services/breadCrumbs/breadCrumbs.service';
//import { DataTable,PanelMenuModule, PanelModule ,InputTextModule,InputTextareaModule, ButtonModule } from 'primeng/primeng';

@Component({
    selector: 'add-permission',
    templateUrl: 'app/body/Admin/Vehicle/Permission/Add/add.component.html'
})

export class AddComponent {
    username: string;
    description:string;
    added: any;
    
        breadcrumbs: MenuItem[];
        breadcrumbsHome: MenuItem;

    constructor(
        private breadCrumbsService: BreadCrumbsService,
        private service: PermissionService, 
        private router: Router, 
        private route: ActivatedRoute) {

    }

    ngOnInit() {
        this.route.queryParams.subscribe(params => {

            this.added = params['page'];
            let breadC = this.breadCrumbsService.getBreadCrumbs();
            let permissionAddBreadCrumb = breadC.filter(filter =>
                filter.pageName === 'PermissionAddPage'
            )[0];

            console.log("BreadC -----", breadC);
            console.log("permissionAddBreadCrumb ---------", permissionAddBreadCrumb);
            this.breadcrumbs = [];
            this.breadcrumbs = permissionAddBreadCrumb.items;

            console.log("breadcurmbs ------", this.breadcrumbs);

            this.breadcrumbsHome = { routerLink: ['/'] };
     }); 
    }
    onSubmit(formRef) {
        console.log(formRef);
        //console.log(this.username);
        //console.log(this.description);
        //formRef.locale = "en-us";
        //formRef.isDeleted = false;
        let formData: any = {id:'', name: '', description: '', isDeleted: false};
        formData.name = formRef.name;
        formData.description = formRef.description;
       //formData.defaultLocale = "en-us";
        formData.isDeleted = "false";
      
        console.log(formData);
        this.service.postAdd(formData).subscribe(res => {
            console.log('--------------res result------------', +res)

            // this.router.navigate(["/vehicle/Permission/", res]);
            if (res.isSuccess) {
                //this.router.navigate([], {q})
                this.router.navigate(["/admin/vehicle/permission"], { queryParams: { page: 1 } });
               
            }
           
        }
            );
     
                  // );
       
    }
}
