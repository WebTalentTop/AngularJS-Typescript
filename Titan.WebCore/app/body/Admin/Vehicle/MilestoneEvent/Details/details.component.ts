import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { MilestoneEventService } from '../../../../../shared/services/milestoneEvent.service'
import { DataTable, TabViewModule, LazyLoadEvent, ButtonModule, InputTextareaModule, MessagesModule, InputTextModule, PanelModule, FileUploadModule, Message, GrowlModule } from 'primeng/primeng';
import { SelectItem, ConfirmationService } from 'primeng/primeng';
import { Validators } from '@angular/forms';

@Component({
    selector: 'milestoneEvent-detail',
    templateUrl: 'app/body/Admin/Vehicle/MilestoneEvent/Details/details.component.html'
})
export class DetailsComponent {
    username: string;
    details: string;

    id: string;
    entityType: string = "MilestoneEvent";
    entityId: string = this.id;
    filepath: string = "MilestoneEvent";
    milestoneEvent = { name: '' };   
    formConfiguration: any;
    formObject: any;

    public MilestoneEventDetails: any = {
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


    //public MilestoneEventDetails: any;
    public MilestoneEventId: string;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: MilestoneEventService
    )
    { }


    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            this.route.params.subscribe(params => console.log(params['id']));

            this.MilestoneEventId = params['id']; // (+) converts string 'id' to a number
            //let locale = params['locale'];

            this.service.getById(this.MilestoneEventId).subscribe(MilestoneEventDetails => {
                this.MilestoneEventDetails = MilestoneEventDetails;
                this.MilestoneEventDetails.id = this.MilestoneEventId;
                console.log(this.MilestoneEventDetails);
            });
        });
    }


   onSubmit(formRef) {

        this.service.postUpdate(this.MilestoneEventDetails).subscribe(MilestoneEventDetails => {
        });
         this.msgs = [];
         this.msgs.push({ severity: 'info', summary: 'Saved', detail: '' });
    }
}