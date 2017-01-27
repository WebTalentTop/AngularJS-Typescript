import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AccessGroupService } from '../../../../../shared/services/accessGroup.service'
import { DataTable, TabViewModule, LazyLoadEvent, ButtonModule, InputTextareaModule, MessagesModule, InputTextModule, PanelModule, FileUploadModule, Message, GrowlModule } from 'primeng/primeng';
import { SelectItem, ConfirmationService, MenuItem } from 'primeng/primeng';
import { Validators } from '@angular/forms';
import { BreadCrumbsService } from '../../../../../shared/services/breadCrumbs/breadCrumbs.service';

@Component({
    selector: 'accessGroup-detail',
    templateUrl: 'app/body/Admin/Vehicle/AccessGroup/Details/details.component.html'
})
export class DetailsComponent {
    username: string;
    details: string;

    id: string;
    entityType: string = "AccessGroup";
    entityId: string = this.id;
    filepath: string = "AccessGroup";
    accessGroup = { name: '' };   
    formConfiguration: any;
    formObject: any;

    AccessGroupDetails: any = {
        id: '',
        isDeleted: false,
        name: '',
        description: '',
        userCreatedById: '',
        userModifiedById: '',
        createdOn: '',
        modifiedOn: ''

    };

    msgs: Message[];
    uploadedFiles: any[] = [];

    public AccessGroupId: string;

     breadcrumbs: MenuItem[];
    breadcrumbsHome: MenuItem;

    constructor(
        private breadCrumbsService: BreadCrumbsService,
        private route: ActivatedRoute,
        private router: Router,
        private service: AccessGroupService
    )
    { }
    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            this.route.params.subscribe(params => console.log(params['id']));

            this.AccessGroupId = params['id']; // (+) converts string 'id' to a number
            //let locale = params['locale'];

            let breadC = this.breadCrumbsService.getBreadCrumbs();
            let accessGroupDetailsBreadCrumb = breadC.filter(filter =>
                filter.pageName === 'AccessGroupDetailsPage'
            )[0];

            console.log("BreadC -----", breadC);
            console.log("accessGroupDetailsBreadCrumb ---------", accessGroupDetailsBreadCrumb);
            this.breadcrumbs = [];
            this.breadcrumbs = accessGroupDetailsBreadCrumb.items;

            console.log("breadcurmbs ------", this.breadcrumbs);

            this.breadcrumbsHome = { routerLink: ['/'] };
            });

            this.service.getById(this.AccessGroupId).subscribe(AccessGroupDetails => {
                this.AccessGroupDetails = AccessGroupDetails.result;
              
                console.log(this.AccessGroupDetails);
            });
    }


    onSubmit(formRef) {

        this.service.postUpdate(this.AccessGroupDetails).subscribe(AccessGroupDetails => {
        });
         this.msgs = [];
         this.msgs.push({ severity: 'success', summary: 'Saved', detail: '' });
    }
}