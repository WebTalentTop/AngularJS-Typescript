import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProjectStatusService } from '../../../../../shared/services/projectStatus.service'
import { DataTable, TabViewModule, LazyLoadEvent, ButtonModule, InputTextareaModule, MessagesModule, InputTextModule, PanelModule, FileUploadModule, Message, GrowlModule } from 'primeng/primeng';
import { SelectItem, ConfirmationService, MenuItem } from 'primeng/primeng';
import { Validators } from '@angular/forms';
import { BreadCrumbsService } from '../../../../../shared/services/breadCrumbs/breadCrumbs.service';

@Component({
    selector: 'projectStatus-detail',
    templateUrl: 'app/body/Admin/Vehicle/ProjectStatus/Details/details.component.html'
})
export class DetailsComponent {
    username: string;
    details: string;

    id: string;
    entityType: string = "ProjectStatus";
    entityId: string = this.id;
    filepath: string = "ProjectStatus";
    projectStatus = { name: '' };
    formConfiguration: any;
    formObject: any;

    ProjectStatusDetails: any = {
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


    //public ProjectStatusDetails: any;
    public ProjectStatusId: string;

    constructor(
        private breadCrumbsService: BreadCrumbsService,
        private route: ActivatedRoute,
        private router: Router,
        private service: ProjectStatusService
    )
    { }

    breadcrumbs: MenuItem[];
    breadcrumbsHome: MenuItem;
    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            this.route.params.subscribe(params => console.log(params['id']));

            this.ProjectStatusId = params['id']; // (+) converts string 'id' to a number
            //let locale = params['locale'];

            let breadC = this.breadCrumbsService.getBreadCrumbs();
            let projectStatusDetailsBreadCrumb = breadC.filter(filter =>
                filter.pageName === 'ProjectStatusDetailsPage'
            )[0];

            console.log("BreadC -----", breadC);
            console.log("projectStatusDetailsBreadCrumb ---------", projectStatusDetailsBreadCrumb);
            this.breadcrumbs = [];
            this.breadcrumbs = projectStatusDetailsBreadCrumb.items;

            console.log("breadcurmbs ------", this.breadcrumbs);

            this.breadcrumbsHome = { routerLink: ['/'] };
        });

        this.service.getById(this.ProjectStatusId).subscribe(ProjectStatusDetails => {
            this.ProjectStatusDetails = ProjectStatusDetails.result;

            console.log(this.ProjectStatusDetails);
        });
    }


    onSubmit(formRef) {

        this.service.postUpdate(this.ProjectStatusDetails).subscribe(ProjectStatusDetails => {
            // console.log(ProjectStatusDetails);
        });
        this.msgs = [];
        this.msgs.push({ severity: 'success', summary: 'Saved', detail: '' });
    }
}