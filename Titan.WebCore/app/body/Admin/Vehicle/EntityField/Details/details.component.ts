import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { EntityFieldService } from '../../../../../shared/services/entityField.service'
import { DataTable, TabViewModule, LazyLoadEvent, ButtonModule, InputTextareaModule, MessagesModule, InputTextModule, PanelModule, FileUploadModule, Message } from 'primeng/primeng';
import { SelectItem, ConfirmationService } from 'primeng/primeng';
import { Validators } from '@angular/forms';

@Component({
    selector: 'entityField-detail',
    templateUrl: 'app/body/Admin/Vehicle/EntityField/Details/details.component.html'
})
export class DetailsComponent {
    username: string;
    details: string;

    id: string;
    entityType: string = "EntityField";
    entityId: string = this.id;
    filepath: string = "EntityField";
    entityField = { name: '' };   
    formConfiguration: any;
    formObject: any;

    EntityFieldDetails: any = {
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


    //public EntityFieldDetails: any;
    public EntityFieldId: string;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: EntityFieldService
    )
    { }


    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            this.route.params.subscribe(params => console.log(params['id']));

            this.EntityFieldId = params['id']; // (+) converts string 'id' to a number
            //let locale = params['locale'];

            this.service.getById(this.EntityFieldId).subscribe(EntityFieldDetails => {
                this.EntityFieldDetails = EntityFieldDetails.result;
                this.EntityFieldDetails.id = this.EntityFieldId;
                console.log(this.EntityFieldDetails);
            });
        });
    }

    onSubmit(formRef) {

        this.service.postUpdate(this.EntityFieldDetails).subscribe(EntityFieldDetails => {
        });
         this.msgs = [];
         this.msgs.push({ severity: 'success', summary: 'Saved', detail: '' });
    }
}