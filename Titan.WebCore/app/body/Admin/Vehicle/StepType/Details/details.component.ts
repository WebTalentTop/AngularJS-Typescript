import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { StepTypeService } from '../../../../../shared/services/stepType.service'
import { DataTable, TabViewModule, LazyLoadEvent, ButtonModule, InputTextareaModule, MessagesModule, InputTextModule, PanelModule, FileUploadModule, Message, GrowlModule } from 'primeng/primeng';
import { SelectItem, ConfirmationService, MenuItem } from 'primeng/primeng';
import { Validators } from '@angular/forms';
import { BreadCrumbsService } from '../../../../../shared/services/breadCrumbs/breadCrumbs.service';

@Component({
    selector: 'stepType-detail',
    templateUrl: 'app/body/Admin/Vehicle/StepType/Details/details.component.html'
})
export class DetailsComponent {
    username: string;
    details: string;

    id: string;
    entityType: string = "StepType";
    entityId: string = this.id;
    filepath: string = "StepType";
    stepType = { name: '' };
    formConfiguration: any;
    formObject: any;

    StepTypeDetails: any = {
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

    public StepTypeId: string;

    constructor(
        private breadCrumbsService: BreadCrumbsService,
        private route: ActivatedRoute,
        private router: Router,
        private service: StepTypeService
    )
    { }
    breadcrumbs: MenuItem[];
    breadcrumbsHome: MenuItem;
    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            this.route.params.subscribe(params => console.log(params['id']));

            this.StepTypeId = params['id']; // (+) converts string 'id' to a number
            //let locale = params['locale'];

            let breadC = this.breadCrumbsService.getBreadCrumbs();
            let stepTypeDetailsBreadCrumb = breadC.filter(filter =>
                filter.pageName === 'StepTypeDetailsPage'
            )[0];

            console.log("BreadC -----", breadC);
            console.log("stepTypeDetailsBreadCrumb ---------", stepTypeDetailsBreadCrumb);
            this.breadcrumbs = [];
            this.breadcrumbs = stepTypeDetailsBreadCrumb.items;

            console.log("breadcurmbs ------", this.breadcrumbs);

            this.breadcrumbsHome = { routerLink: ['/'] };
        });

        this.service.getById(this.StepTypeId).subscribe(StepTypeDetails => {
            this.StepTypeDetails = StepTypeDetails.result;

            console.log(this.StepTypeDetails);
        });
    }


    onSubmit(formRef) {

        this.service.postUpdate(this.StepTypeDetails).subscribe(StepTypeDetails => {
        });
        this.msgs = [];
        this.msgs.push({ severity: 'success', summary: 'Saved', detail: '' });
    }
}