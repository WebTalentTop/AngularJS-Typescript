import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { MilestoneService } from '../../../../../shared/services/Containers/MileStoneService/mileStone.service'
import { DataTable, TabViewModule, LazyLoadEvent, ButtonModule, InputTextareaModule, MessagesModule, InputTextModule, PanelModule, FileUploadModule, Message, GrowlModule } from 'primeng/primeng';
import { SelectItem, ConfirmationService, MenuItem } from 'primeng/primeng';
import { Validators } from '@angular/forms';
import { BreadCrumbsService } from '../../../../../shared/services/breadCrumbs/breadCrumbs.service';

@Component({
    selector: 'milestone-detail',
    templateUrl: 'app/body/Admin/Vehicle/Milestone/Details/details.component.html'
})
export class DetailsComponent {
    username: string;
    details: string;

    id: string;
    entityType: string = "Milestone";
    entityId: string = this.id;
    filepath: string = "Milestone";
    Milestone = { name: '' };   
    formConfiguration: any;
    formObject: any;

    MilestoneDetails: any = {
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


    public MilestoneId: string;

    constructor(
        private breadCrumbsService: BreadCrumbsService,
        private route: ActivatedRoute,
        private router: Router,
        private service: MilestoneService
    )
    { }

        breadcrumbs: MenuItem[];
        breadcrumbsHome: MenuItem;
    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            this.route.params.subscribe(params => console.log(params['id']));

            this.MilestoneId = params['id']; // (+) converts string 'id' to a number
            //let locale = params['locale'];

            let breadC = this.breadCrumbsService.getBreadCrumbs();
            let milestoneDetailsBreadCrumb = breadC.filter(filter =>
                filter.pageName === 'MilestoneDetailsPage'
            )[0];

            console.log("BreadC -----", breadC);
            console.log("milestoneDetailsBreadCrumb ---------", milestoneDetailsBreadCrumb);
            this.breadcrumbs = [];
            this.breadcrumbs = milestoneDetailsBreadCrumb.items;

            console.log("breadcurmbs ------", this.breadcrumbs);

            this.breadcrumbsHome = { routerLink: ['/'] };
            });

            this.service.getById(this.MilestoneId).subscribe(MilestoneDetails => {
                this.MilestoneDetails = MilestoneDetails.result;
              
                console.log(this.MilestoneDetails);
            });
    }


    onSubmit(formRef) {

        this.service.postUpdate(this.MilestoneDetails).subscribe(MilestoneDetails => {
        });
         this.msgs = [];
         this.msgs.push({ severity: 'success', summary: 'Saved', detail: '' });
    }
}