import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AccessService } from '../../../../../shared/services/access.service'
import { DataTable, TabViewModule, LazyLoadEvent, ButtonModule, InputTextareaModule, MessagesModule, InputTextModule, PanelModule, FileUploadModule, Message, GrowlModule } from 'primeng/primeng';
import { SelectItem, ConfirmationService } from 'primeng/primeng';
import { Validators } from '@angular/forms';

@Component({
    selector: 'access-detail',
    templateUrl: 'app/body/Admin/Vehicle/Access/Details/details.component.html'
})
export class DetailsComponent {
    username: string;
    details: string;

    id: string;
    entityType: string = "Access";
    entityId: string = this.id;
    filepath: string = "Access";
    Access = { name: '' };   
    formConfiguration: any;
    formObject: any;

    AccessDetails: any = {
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

    public AccessId: string;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: AccessService
    )
    { }


    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            this.route.params.subscribe(params => console.log(params['id']));

            this.AccessId = params['id']; // (+) converts string 'id' to a number
            //let locale = params['locale'];

            this.service.getById(this.AccessId).subscribe(AccessDetails => {
                this.AccessDetails = AccessDetails.result;
              
                console.log(this.AccessDetails);
            });
        });
    }


    onSubmit(formRef) {

        this.service.postUpdate(this.AccessDetails).subscribe(AccessDetails => {
        });
         this.msgs = [];
         this.msgs.push({ severity: 'success', summary: 'Saved', detail: '' });
    }
}