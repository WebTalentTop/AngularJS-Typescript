import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { TitanRoleService } from '../../../../../shared/services/titanRole.service';
import { DataTable, TabViewModule, LazyLoadEvent, ButtonModule, InputTextareaModule, MessagesModule, InputTextModule, PanelModule, FileUploadModule, Message } from 'primeng/primeng';
import { SelectItem, ConfirmationService, MenuItem } from 'primeng/primeng';
import { Validators } from '@angular/forms';
import { BreadCrumbsService } from '../../../../../shared/services/breadCrumbs/breadCrumbs.service';
@Component({
    selector: 'titanRole-detail',
    templateUrl: 'app/body/Admin/Vehicle/TitanRole/Details/details.component.html'
})
export class DetailsComponent {
    username: string;
    details: string;

    id: string;
    entityType: string = "TitanRole";
    entityId: string = this.id;
    filepath: string = "TitanRole";
    titanRole = { name: '' };   
    formConfiguration: any;
    formObject: any;

    TitanRoleDetails: any = {
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

    public TitanRoleId: string;

    constructor(
        private breadCrumbsService: BreadCrumbsService,
        private route: ActivatedRoute,
        private router: Router,
        private service: TitanRoleService
    )
    { }
    breadcrumbs: MenuItem[];
    breadcrumbsHome: MenuItem;

    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            this.route.params.subscribe(params => console.log(params['id']));

            this.TitanRoleId = params['id']; // (+) converts string 'id' to a number
            //let locale = params['locale'];

            let breadC = this.breadCrumbsService.getBreadCrumbs();
            let titanRoleDetailsBreadCrumb = breadC.filter(filter =>
                filter.pageName === 'TitanRoleDetailsPage'
            )[0];

            console.log("BreadC -----", breadC);
            console.log("titanRoleDetailsBreadCrumb ---------", titanRoleDetailsBreadCrumb);
            this.breadcrumbs = [];
            this.breadcrumbs = titanRoleDetailsBreadCrumb.items;

            console.log("breadcurmbs ------", this.breadcrumbs);

            this.breadcrumbsHome = { routerLink: ['/'] };
            });

            this.service.getById(this.TitanRoleId).subscribe(TitanRoleDetails => {
                this.TitanRoleDetails = TitanRoleDetails.result;
                console.log(this.TitanRoleDetails);
        });
    }


    onSubmit(formRef) {

        this.service.postUpdate(this.TitanRoleDetails).subscribe(TitanRoleDetails => {
        });
         this.msgs = [];
         this.msgs.push({ severity: 'success', summary: 'Saved', detail: '' });
    }
}