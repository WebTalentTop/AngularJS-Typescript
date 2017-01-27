import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AccessService } from '../../../../../shared/services/access.service'
import { DataTable, TabViewModule, LazyLoadEvent, ButtonModule, InputTextareaModule, MessagesModule, InputTextModule, PanelModule, FileUploadModule, Message, GrowlModule } from 'primeng/primeng';
import { SelectItem, ConfirmationService, MenuItem } from 'primeng/primeng';
import { Validators } from '@angular/forms';
import { BreadCrumbsService } from '../../../../../shared/services/breadCrumbs/breadCrumbs.service';

@Component({
    selector: 'access-detail',
    templateUrl: 'app/body/Admin/Vehicle/Access/Details/details.component.html'
})
export class DetailsComponent {
    username: string;
    details: string;

    id: string;
    entityType: string = "Access";
    entityId: string = this.id;
    filepath: string = "Access";
    Access = { name: '' };   
    formConfiguration: any;
    formObject: any;

    AccessDetails: any = {
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

    public AccessId: string;

        breadcrumbs: MenuItem[];
        breadcrumbsHome: MenuItem;

    constructor(
        private breadCrumbsService: BreadCrumbsService,
        private route: ActivatedRoute,
        private router: Router,
        private service: AccessService
    )
    { }

    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            this.route.params.subscribe(params => console.log(params['id']));

            this.AccessId = params['id']; // (+) converts string 'id' to a number
            //let locale = params['locale'];

            let breadC = this.breadCrumbsService.getBreadCrumbs();
            let accessDetailsBreadCrumb = breadC.filter(filter =>
                filter.pageName === 'AccessDetailsPage'
            )[0];

            console.log("BreadC -----", breadC);
            console.log("accessDetailsBreadCrumb ---------", accessDetailsBreadCrumb);
            this.breadcrumbs = [];
            this.breadcrumbs = accessDetailsBreadCrumb.items;

            console.log("breadcurmbs ------", this.breadcrumbs);

            this.breadcrumbsHome = { routerLink: ['/'] };
            });
            this.service.getById(this.AccessId).subscribe(AccessDetails => {
                this.AccessDetails = AccessDetails.result;
              
                console.log(this.AccessDetails);
            });
    }


    onSubmit(formRef) {

        this.service.postUpdate(this.AccessDetails).subscribe(AccessDetails => {
        });
         this.msgs = [];
         this.msgs.push({ severity: 'success', summary: 'Saved', detail: '' });
    }
}