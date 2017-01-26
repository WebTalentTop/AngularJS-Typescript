import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { MilestoneStatusService } from '../../../../../shared/services/milestoneStatus.service';
import { DataTable, TabViewModule, LazyLoadEvent, ButtonModule, InputTextareaModule, MessagesModule, InputTextModule, PanelModule, FileUploadModule, Message, GrowlModule } from 'primeng/primeng';
import { SelectItem, ConfirmationService, MenuItem } from 'primeng/primeng';
import { Validators } from '@angular/forms';
import { BreadCrumbsService } from '../../../../../shared/services/breadCrumbs/breadCrumbs.service';

@Component({
    selector: 'milestoneStatus-detail',
    templateUrl: 'app/body/Admin/Vehicle/MilestoneStatus/Details/details.component.html'
})
export class DetailsComponent {
    username: string;
    details: string;

    id: string;
    entityType: string = "MilestoneStatus";
    entityId: string = this.id;
    filepath: string = "MilestoneStatus";
    milestoneStatus = { name: '' };   
    formConfiguration: any;
    formObject: any;

    public MilestoneStatusDetails: any = {
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

    public MilestoneStatusId: string;
    
        breadcrumbs: MenuItem[];
        breadcrumbsHome: MenuItem;

    constructor(
        private breadCrumbsService: BreadCrumbsService,
        private route: ActivatedRoute,
        private router: Router,
        private service: MilestoneStatusService
    )
    { }
    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            this.route.params.subscribe(params => console.log(params['id']));

            this.MilestoneStatusId = params['id']; // (+) converts string 'id' to a number
            //let locale = params['locale'];

           let breadC = this.breadCrumbsService.getBreadCrumbs();
            let milestoneStatusDetailsBreadCrumb = breadC.filter(filter =>
                filter.pageName === 'MilestoneStatusDetailsPage'
            )[0];

            console.log("BreadC -----", breadC);
            console.log("milestoneStatusDetailsBreadCrumb ---------", milestoneStatusDetailsBreadCrumb);
            this.breadcrumbs = [];
            this.breadcrumbs = milestoneStatusDetailsBreadCrumb.items;

            console.log("breadcurmbs ------", this.breadcrumbs);

            this.breadcrumbsHome = { routerLink: ['/'] };
            });

            this.service.getById(this.MilestoneStatusId).subscribe(MilestoneStatusDetails => {
                this.MilestoneStatusDetails = MilestoneStatusDetails;
                this.MilestoneStatusDetails.id = this.MilestoneStatusId;
                console.log(this.MilestoneStatusDetails);
        });
    }


   onSubmit(formRef) {

        this.service.postUpdate(this.MilestoneStatusDetails).subscribe(MilestoneStatusDetails => {
        });
         this.msgs = [];
         this.msgs.push({ severity: 'success', summary: 'Saved', detail: '' });
    }
}