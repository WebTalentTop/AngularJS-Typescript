import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { PermissionService } from '../../../../../shared/services/permission.service'
import { DataTable, TabViewModule, LazyLoadEvent, ButtonModule, InputTextareaModule,  InputTextModule, PanelModule, FileUploadModule, Message } from 'primeng/primeng';
import { SelectItem, ConfirmationService, MenuItem } from 'primeng/primeng';
import { Validators } from '@angular/forms';
import { BreadCrumbsService } from '../../../../../shared/services/breadCrumbs/breadCrumbs.service';

@Component({
    selector: 'permission-detail',
    templateUrl: 'app/body/Admin/Vehicle/Permission/Details/details.component.html'
})
export class DetailsComponent {
    username: string;
    details: string;

id: string;
    entityType: string = "Permission";
    entityId: string = this.id;
    filepath: string = "Permission";
    permission = { name: '' };   
    formConfiguration: any;
    formObject: any;

    public PermissionDetails: any = {
        id: '',
        isDeleted: false,
        name: '',
        description: ''
       // defaultLocale: ''
     //   userCreatedById: '',
      //  userModifiedById: '',
      //  createdOn: '',
      //  modifiedOn: ''
    };

    msgs: Message[];
    uploadedFiles: any[] = [];

    public PermissionId: string;

    breadcrumbs: MenuItem[];
    breadcrumbsHome: MenuItem;

    constructor(
         private breadCrumbsService: BreadCrumbsService,
        private route: ActivatedRoute,
        private router: Router,
        private service: PermissionService    )
    { }


    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            this.route.params.subscribe(params => console.log(params['id']));

            this.PermissionId = params['id']; // (+) converts string 'id' to a number
            //let locale = params['locale'];

            let breadC = this.breadCrumbsService.getBreadCrumbs();
            let permissionDetailsBreadCrumb = breadC.filter(filter =>
                filter.pageName === 'PermissionDetailsPage'
            )[0];

            console.log("BreadC -----", breadC);
            console.log("permissionDetailsBreadCrumb ---------", permissionDetailsBreadCrumb);
            this.breadcrumbs = [];
            this.breadcrumbs = permissionDetailsBreadCrumb.items;

            console.log("breadcurmbs ------", this.breadcrumbs);

            this.breadcrumbsHome = { routerLink: ['/'] };
            });

            this.service.getById(this.PermissionId).subscribe(PermissionDetails => {
                this.PermissionDetails = PermissionDetails.result;
                this.PermissionDetails.id = this.PermissionId;
                console.log(this.PermissionDetails);
        });
    }


   onSubmit(formRef) {

        this.service.postUpdate(this.PermissionDetails).subscribe(PermissionDetails => {
        });
         this.msgs = [];
         this.msgs.push({ severity: 'success', summary: 'Saved', detail: '' });
    }
}