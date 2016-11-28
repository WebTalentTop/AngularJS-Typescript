import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProjectRoleService } from '../../../../../shared/services/projectRole.service'
import { DataTable, TabViewModule, LazyLoadEvent, ButtonModule, InputTextareaModule, MessagesModule, InputTextModule, PanelModule, FileUploadModule, Message, GrowlModule } from 'primeng/primeng';
import { SelectItem, ConfirmationService } from 'primeng/primeng';
import { Validators } from '@angular/forms';

@Component({
    selector: 'projectRole-detail',
    templateUrl: 'app/body/Admin/Vehicle/ProjectRole/Details/details.component.html'
})
export class DetailsComponent {
    username: string;
    details: string;

    id: string;
    entityType: string = "ProjectRole";
    entityId: string = this.id;
    filepath: string = "ProjectRole";
    projectRole = { name: '' };
    selectedUserNames: Array<any> = new Array();
    filteredUserNames: Array<any> = new Array();
    filteredSelectedUserNames: Array<any> = new Array();
    formConfiguration: any;
    formObject: any;

    model: any = {
        id: '',
        isDeleted: false,
        name: '',
        createdOn: '',
        modifiedOn: '',
        deletedOn: '',
        userCreatedById: '',
        userDeletedById: '',
        userModifiedById: '',
        userDeletedOn: ''
    };


    msgs: Message[];
    uploadedFiles: any[] = [];


    public ProjectRoleDetails: any;
    public ProjectRoleId: string;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: ProjectRoleService,
    )
    { }


    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            this.route.params.subscribe(params => console.log(params['id']));

            this.ProjectRoleId = params['id']; // (+) converts string 'id' to a number
            //let locale = params['locale'];

            this.service.getById(this.ProjectRoleId).subscribe(ProjectRoleDetails => {
                this.ProjectRoleDetails = ProjectRoleDetails;
                this.ProjectRoleDetails.id = this.ProjectRoleId;
                console.log(this.ProjectRoleDetails);
            });
        });
    }


    onSubmit(formRef) {
        console.log("inside");
        console.log(this.projectRole.name);
        formRef.isDeleted = false;
        let formData: any = {
            id: this.id,
            name: '',
        };
        
        formData.id = this.id;
        formData.name = formRef.name;
        
        this.service.postUpdate(this.ProjectRoleDetails).subscribe(ProjectRoleDetails => {
            console.log(ProjectRoleDetails);
        });
    }
}