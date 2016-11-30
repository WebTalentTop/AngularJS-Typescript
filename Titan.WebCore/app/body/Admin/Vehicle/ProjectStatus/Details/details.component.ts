import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProjectStatusService } from '../../../../../shared/services/projectStatus.service'
import { DataTable, TabViewModule, LazyLoadEvent, ButtonModule, InputTextareaModule, MessagesModule, InputTextModule, PanelModule, FileUploadModule, Message, GrowlModule } from 'primeng/primeng';
import { SelectItem, ConfirmationService } from 'primeng/primeng';
import { Validators } from '@angular/forms';

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
        private route: ActivatedRoute,
        private router: Router,
        private service: ProjectStatusService,
    )
    { }


    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            this.route.params.subscribe(params => console.log(params['id']));

            this.ProjectStatusId = params['id']; // (+) converts string 'id' to a number
            //let locale = params['locale'];

            this.service.getById(this.ProjectStatusId).subscribe(ProjectStatusDetails => {
                this.ProjectStatusDetails = ProjectStatusDetails.result;
               // this.ProjectStatusDetails.id = this.ProjectStatusId;
                console.log(this.ProjectStatusDetails);
            });
        });
    }


    onSubmit(formRef) {

        this.service.postUpdate(this.ProjectStatusDetails).subscribe(ProjectStatusDetails => {
           // console.log(ProjectStatusDetails);
        });
         this.msgs = [];
         this.msgs.push({ severity: 'info', summary: 'Saved', detail: '' });
    }
}