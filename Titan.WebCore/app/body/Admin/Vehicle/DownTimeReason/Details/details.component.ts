import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { DownTimeReasonService } from '../../../../../shared/services/downTimeReason.service'
import { DataTable, TabViewModule, LazyLoadEvent, ButtonModule, InputTextareaModule, MessagesModule, InputTextModule, PanelModule, FileUploadModule, Message, GrowlModule } from 'primeng/primeng';
import { SelectItem, ConfirmationService } from 'primeng/primeng';
import { Validators } from '@angular/forms';

@Component({
    selector: 'downTimeReason-detail',
    templateUrl: 'app/body/Admin/Vehicle/DownTimeReason/Details/details.component.html'
})
export class DetailsComponent {
    username: string;
    details: string;


    id: string;
    entityType: string = "DownTimeReason";
    entityId: string = this.id;
    filepath: string = "DownTimeReason";
    DownTimeReason = { name: '' };   
    formConfiguration: any;
    formObject: any;

    DownTimeReasonDetails: any = {
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


    //public DownTimeReasonDetails: any;
    public DownTimeReasonId: string;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: DownTimeReasonService,
    )
    { }


    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            this.route.params.subscribe(params => console.log(params['id']));

            this.DownTimeReasonId = params['id']; // (+) converts string 'id' to a number
            //let locale = params['locale'];

            this.service.getById(this.DownTimeReasonId).subscribe(DownTimeReasonDetails => {
                this.DownTimeReasonDetails = DownTimeReasonDetails;
                this.DownTimeReasonDetails.id = this.DownTimeReasonId;
                console.log(this.DownTimeReasonDetails);
            });
        });
    }

   onSubmit(formRef) {

        this.service.postUpdate(this.DownTimeReasonDetails).subscribe(DownTimeReasonDetails => {
        });
         this.msgs = [];
         this.msgs.push({ severity: 'info', summary: 'Saved', detail: '' });
    }
}