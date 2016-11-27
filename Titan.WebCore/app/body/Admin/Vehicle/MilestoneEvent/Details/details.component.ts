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
        userModifiedById: ''
    };


    msgs: Message[];
    uploadedFiles: any[] = [];


    public MilestoneEventDetails: any;
    public MilestoneEventId: string;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: MilestoneEventService,
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
        console.log("inside");
        console.log(this.milestoneEvent.name);
        formRef.isDeleted = false;
        let formData: any = {
            id: this.id,
            name: '',
        };
        
        formData.id = this.id;
        formData.name = formRef.name;
        
        this.service.postUpdate(this.MilestoneEventDetails).subscribe(MilestoneEventDetails => {
            console.log(MilestoneEventDetails);
        });
    }
}