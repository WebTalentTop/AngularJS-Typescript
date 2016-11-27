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
    selectedUserNames: Array<any> = new Array();
    filteredUserNames: Array<any> = new Array();
    filteredSelectedUserNames: Array<any> = new Array();
    formConfiguration: any;
    formObject: any;

    model: any = {
        id: '',
        isDeleted: false,
        name: '',
        description: ''
    };


    msgs: Message[];
    uploadedFiles: any[] = [];


    public ProjectStatusDetails: any;
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
                this.ProjectStatusDetails = ProjectStatusDetails;
                this.ProjectStatusDetails.id = this.ProjectStatusId;
                console.log(this.ProjectStatusDetails);
            });
        });
    }


    onSubmit(formRef) {
        console.log("inside");
        console.log(this.projectStatus.name);
        formRef.isDeleted = false;
        let formData: any = {
            id: this.id,
            name: '',
        };
        
        formData.id = this.id;
        formData.name = formRef.name;
        
        this.service.postUpdate(this.ProjectStatusDetails).subscribe(ProjectStatusDetails => {
            console.log(ProjectStatusDetails);
        });
    }
}