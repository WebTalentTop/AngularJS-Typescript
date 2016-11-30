import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { PermissionService } from '../../../../../shared/services/permission.service'
import { DataTable, TabViewModule, LazyLoadEvent, ButtonModule, InputTextareaModule, MessagesModule, InputTextModule, PanelModule, FileUploadModule, Message, GrowlModule } from 'primeng/primeng';
import { SelectItem, ConfirmationService } from 'primeng/primeng';
import { Validators } from '@angular/forms';

@Component({
    selector: 'permission-detail',
    templateUrl: 'app/body/Admin/Vehicle/Permission/Details/details.component.html'
})
export class DetailsComponent {
    username: string;
    details: string;

id: string;
    entityType: string = "Permission";
    entityId: string = this.id;
    filepath: string = "Permission";
    permission = { name: '' };   
    formConfiguration: any;
    formObject: any;

    PermissionDetails: any = {
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


    public PermissionDetails: any;
    public PermissionId: string;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: PermissionService,
    )
    { }


    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            this.route.params.subscribe(params => console.log(params['id']));

            this.PermissionId = params['id']; // (+) converts string 'id' to a number
            //let locale = params['locale'];

            this.service.getById(this.PermissionId).subscribe(PermissionDetails => {
                this.PermissionDetails = PermissionDetails;
                this.PermissionDetails.id = this.PermissionId;
                console.log(this.PermissionDetails);
            });
        });
    }


    onSubmit(formRef) {
        console.log("inside");
        console.log(this.permission.name);
        formRef.isDeleted = false;
        let formData: any = {
            id: this.id,
            name: '',
        };
        
        formData.id = this.id;
        formData.name = formRef.name;
        
        this.service.postUpdate(this.PermissionDetails).subscribe(PermissionDetails => {
            console.log(PermissionDetails);
        });
        this.msgs = [];
         this.msgs.push({ severity: 'info', summary: 'Saved', detail: '' });
    }
}