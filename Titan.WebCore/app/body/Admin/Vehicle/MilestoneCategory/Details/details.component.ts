import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { MilestoneCategoryService } from '../../../../../shared/services/milestoneCategory.service'
import { DataTable, TabViewModule, LazyLoadEvent, ButtonModule, InputTextareaModule, MessagesModule, InputTextModule, PanelModule, FileUploadModule, Message, GrowlModule } from 'primeng/primeng';
import { SelectItem, ConfirmationService, MenuItem } from 'primeng/primeng';
import { Validators } from '@angular/forms';
import { BreadCrumbsService } from '../../../../../shared/services/breadCrumbs/breadCrumbs.service';
@Component({
    selector: 'milestoneCategory-detail',
    templateUrl: 'app/body/Admin/Vehicle/MilestoneCategory/Details/details.component.html'
})
export class DetailsComponent {
    username: string;
    details: string;

    id: string;
    entityType: string = "MilestoneCategory";
    entityId: string = this.id;
    filepath: string = "MilestoneCategory";
    milestoneCategory = { name: '' };
    formConfiguration: any;
    formObject: any;

    MilestoneCategoryDetails: any = {
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

    public MilestoneCategoryId: string;
    
    breadcrumbs: MenuItem[];
    breadcrumbsHome: MenuItem;

    constructor(
        private breadCrumbsService: BreadCrumbsService,
        private route: ActivatedRoute,
        private router: Router,
        private service: MilestoneCategoryService
    )
    { }

    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            this.route.params.subscribe(params => console.log(params['id']));

            this.MilestoneCategoryId = params['id']; // (+) converts string 'id' to a number
            //let locale = params['locale'];

            let breadC = this.breadCrumbsService.getBreadCrumbs();
            let milestoneCategoryDetailsBreadCrumb = breadC.filter(filter =>
                filter.pageName === 'MilestoneCategoryDetailsPage'
            )[0];

            console.log("BreadC -----", breadC);
            console.log("milestoneCategoryDetailsBreadCrumb ---------", milestoneCategoryDetailsBreadCrumb);
            this.breadcrumbs = [];
            this.breadcrumbs = milestoneCategoryDetailsBreadCrumb.items;

            console.log("breadcurmbs ------", this.breadcrumbs);

            this.breadcrumbsHome = { routerLink: ['/'] };

        });

        this.service.getById(this.MilestoneCategoryId).subscribe(MilestoneCategoryDetails => {
            this.MilestoneCategoryDetails = MilestoneCategoryDetails.result;

            console.log(this.MilestoneCategoryDetails);
        });
    }


    onSubmit(formRef) {

        this.service.postUpdate(this.MilestoneCategoryDetails).subscribe(MilestoneCategoryDetails => {
        });
        this.msgs = [];
        this.msgs.push({ severity: 'success', summary: 'Saved', detail: '' });
    }
}