import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { PlatformService } from '../../../../../shared/services/platform.service'
import { DataTable, TabViewModule, LazyLoadEvent, ButtonModule, InputTextareaModule, MessagesModule, InputTextModule, PanelModule, FileUploadModule, Message, GrowlModule } from 'primeng/primeng';
import { SelectItem, ConfirmationService, MenuItem } from 'primeng/primeng';
import { Validators } from '@angular/forms';
import { BreadCrumbsService } from '../../../../../shared/services/breadCrumbs/breadCrumbs.service';
@Component({
    selector: 'platform-detail',
    templateUrl: 'app/body/Admin/Vehicle/Platform/Details/details.component.html'
})
export class DetailsComponent {
    username: string;
    details: string;

    id: string;
    entityType: string = "Platform";
    entityId: string = this.id;
    filepath: string = "Platform";
    platform = { name: '' };   
    formConfiguration: any;
    formObject: any;

    PlatformDetails: any = {
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


    public PlatformId: string;

    constructor(
        private breadCrumbsService: BreadCrumbsService,
        private route: ActivatedRoute,
        private router: Router,
        private service: PlatformService
    )
    { }
        breadcrumbs: MenuItem[];
        breadcrumbsHome: MenuItem;
    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            this.route.params.subscribe(params => console.log(params['id']));

            this.PlatformId = params['id']; // (+) converts string 'id' to a number
            //let locale = params['locale'];
            
            let breadC = this.breadCrumbsService.getBreadCrumbs();
            let platformDetailsBreadCrumb = breadC.filter(filter =>
                filter.pageName === 'PlatformDetailsPage'
            )[0];

            console.log("BreadC -----", breadC);
            console.log("platformDetailsBreadCrumb ---------", platformDetailsBreadCrumb);
            this.breadcrumbs = [];
            this.breadcrumbs = platformDetailsBreadCrumb.items;

            console.log("breadcurmbs ------", this.breadcrumbs);

            this.breadcrumbsHome = { routerLink: ['/'] };
            });

            this.service.getById(this.PlatformId).subscribe(PlatformDetails => {
                this.PlatformDetails = PlatformDetails.result;
                console.log(this.PlatformDetails);
        });
    }


    onSubmit(formRef) {

        this.service.postUpdate(this.PlatformDetails).subscribe(PlatformDetails => {
        });
         this.msgs = [];
         this.msgs.push({ severity: 'success', summary: 'Saved', detail: '' });
    }
}