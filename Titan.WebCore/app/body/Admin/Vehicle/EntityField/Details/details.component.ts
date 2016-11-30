import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { EntityFieldService } from '../../../../../shared/services/entityField.service'
import { DataTable, TabViewModule, LazyLoadEvent, ButtonModule, InputTextareaModule, MessagesModule, InputTextModule, PanelModule, FileUploadModule, Message, GrowlModule } from 'primeng/primeng';
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
        private service: EntityFieldService,
    )
    { }


    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            this.route.params.subscribe(params => console.log(params['id']));

            this.EntityFieldId = params['id']; // (+) converts string 'id' to a number
            //let locale = params['locale'];

            this.service.getById(this.EntityFieldId).subscribe(EntityFieldDetails => {
                this.EntityFieldDetails = EntityFieldDetails;
                this.EntityFieldDetails.id = this.EntityFieldId;
                console.log(this.EntityFieldDetails);
            });
        });
    }


    onSubmit(formRef) {
        console.log("inside");
        console.log(this.entityField.name);
        formRef.isDeleted = false;
        let formData: any = {
            id: this.id,
            name: '',
        };
        
        formData.id = this.id;
        formData.name = formRef.name;
        
        this.service.postUpdate(this.EntityFieldDetails).subscribe(EntityFieldDetails => {
            console.log(EntityFieldDetails);
        });
    }
}