import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { PriorityService } from '../../../../../shared/services/priority.service'
import { DataTable, TabViewModule, LazyLoadEvent, ButtonModule, InputTextareaModule, MessagesModule, InputTextModule, PanelModule, FileUploadModule, Message, GrowlModule } from 'primeng/primeng';
import { SelectItem, ConfirmationService, MenuItem } from 'primeng/primeng';
import { Validators } from '@angular/forms';
import { BreadCrumbsService } from '../../../../../shared/services/breadCrumbs/breadCrumbs.service';

@Component({
    selector: 'priority-detail',
    templateUrl: 'app/body/Admin/Vehicle/Priority/Details/details.component.html'
})
export class DetailsComponent {
    username: string;
    details: string;

    id: string;
    entityType: string = "Priority";
    entityId: string = this.id;
    filepath: string = "Priority";
    priority = { name: '' };
    formConfiguration: any;
    formObject: any;

    PriorityDetails: any = {
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

    public PriorityId: string;
    breadcrumbs: MenuItem[];
    breadcrumbsHome: MenuItem;

    constructor(
        private breadCrumbsService: BreadCrumbsService,
        private route: ActivatedRoute,
        private router: Router,
        private service: PriorityService
    )
    { }


    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            this.route.params.subscribe(params => console.log(params['id']));

            this.PriorityId = params['id']; // (+) converts string 'id' to a number
            //let locale = params['locale'];

            let breadC = this.breadCrumbsService.getBreadCrumbs();
            let priorityDetailsBreadCrumb = breadC.filter(filter =>
                filter.pageName === 'PriorityDetailsPage'
            )[0];

            console.log("BreadC -----", breadC);
            console.log("priorityDetailsBreadCrumb ---------", priorityDetailsBreadCrumb);
            this.breadcrumbs = [];
            this.breadcrumbs = priorityDetailsBreadCrumb.items;

            console.log("breadcurmbs ------", this.breadcrumbs);

            this.breadcrumbsHome = { routerLink: ['/'] };
        });

        this.service.getById(this.PriorityId).subscribe(PriorityDetails => {
            this.PriorityDetails = PriorityDetails.result;

            console.log(this.PriorityDetails);
        });
    }


    onSubmit(formRef) {

        this.service.postUpdate(this.PriorityDetails).subscribe(PriorityDetails => {
        });
        this.msgs = [];
        this.msgs.push({ severity: 'success', summary: 'Saved', detail: '' });
    }
}