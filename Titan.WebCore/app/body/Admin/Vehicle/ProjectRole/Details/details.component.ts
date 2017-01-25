import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProjectRoleService } from '../../../../../shared/services/projectRole.service'
import { DataTable, TabViewModule, LazyLoadEvent, ButtonModule, InputTextareaModule, MessagesModule, InputTextModule, PanelModule, FileUploadModule, Message, GrowlModule } from 'primeng/primeng';
import { SelectItem, ConfirmationService, MenuItem } from 'primeng/primeng';
import { Validators } from '@angular/forms';
import { BreadCrumbsService } from '../../../../../shared/services/breadCrumbs/breadCrumbs.service';

@Component({
    selector: 'projectRole-detail',
    templateUrl: 'app/body/Admin/Vehicle/ProjectRole/Details/details.component.html'
})
export class DetailsComponent {
    username: string;
    details: string;

    id: string;
    entityType: string = "projectRole";
    entityId: string = this.id;
    filepath: string = "projectRole";
    projectRole = { name: '' };
    formConfiguration: any;
    formObject: any;

    public ProjectRoleDetails: any = {
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


    //public ProjectRoleDetails: any;
    public ProjectRoleId: string;

    constructor(
        private breadCrumbsService: BreadCrumbsService,
        private route: ActivatedRoute,
        private router: Router,
        private service: ProjectRoleService)
    { }

    breadcrumbs: MenuItem[];
    breadcrumbsHome: MenuItem;

    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            this.route.params.subscribe(params => console.log(params['id']));

            this.ProjectRoleId = params['id']; // (+) converts string 'id' to a number
            //let locale = params['locale'];

            let breadC = this.breadCrumbsService.getBreadCrumbs();
            let projectRoleDetailsBreadCrumb = breadC.filter(filter =>
                filter.pageName === 'ProjectRoleDetailsPage'
            )[0];

            console.log("BreadC -----", breadC);
            console.log("projectRoleDetailsBreadCrumb ---------", projectRoleDetailsBreadCrumb);
            this.breadcrumbs = [];
            this.breadcrumbs = projectRoleDetailsBreadCrumb.items;

            console.log("breadcurmbs ------", this.breadcrumbs);

            this.breadcrumbsHome = { routerLink: ['/'] };
        });

        this.service.getById(this.ProjectRoleId).subscribe(ProjectRoleDetails => {
            this.ProjectRoleDetails = ProjectRoleDetails.result;
            this.ProjectRoleDetails.id = this.ProjectRoleId;
            console.log(this.ProjectRoleDetails);
        });
    }


    onSubmit(formRef) {

        this.service.postUpdate(this.ProjectRoleDetails).subscribe(ProjectRoleDetails => {
        });
        this.msgs = [];
        this.msgs.push({ severity: 'success', summary: 'Saved', detail: '' });
    }
}