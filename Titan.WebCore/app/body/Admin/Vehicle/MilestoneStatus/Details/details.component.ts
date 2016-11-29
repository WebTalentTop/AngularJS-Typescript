import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { MilestoneStatusService } from '../../../../../shared/services/milestoneStatus.service'
import { DataTable, TabViewModule, LazyLoadEvent, ButtonModule, InputTextareaModule, MessagesModule, InputTextModule, PanelModule, FileUploadModule, Message, GrowlModule } from 'primeng/primeng';
import { SelectItem, ConfirmationService } from 'primeng/primeng';
import { Validators } from '@angular/forms';

@Component({
    selector: 'milestoneStatus-detail',
    templateUrl: 'app/body/Admin/Vehicle/MilestoneStatus/Details/details.component.html'
})
export class DetailsComponent {
    username: string;
    details: string;

    id: string;
    entityType: string = "MilestoneStatus";
    entityId: string = this.id;
    filepath: string = "MilestoneStatus";
    milestoneStatus = { name: '' };   
    formConfiguration: any;
    formObject: any;

    MilestoneStatusDetails: any = {
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


    public MilestoneStatusDetails: any;
    public MilestoneStatusId: string;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: MilestoneStatusService
    )
    { }


    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            this.route.params.subscribe(params => console.log(params['id']));

            this.MilestoneStatusId = params['id']; // (+) converts string 'id' to a number
            //let locale = params['locale'];

            this.service.getById(this.MilestoneStatusId).subscribe(MilestoneStatusDetails => {
                this.MilestoneStatusDetails = MilestoneStatusDetails;
                this.MilestoneStatusDetails.id = this.MilestoneStatusId;
                console.log(this.MilestoneStatusDetails);
            });
        });
    }


    onSubmit(formRef) {
        console.log("inside");
        console.log(this.milestoneStatus.name);
        formRef.isDeleted = false;
        let formData: any = {
            id: this.id,
            name: '',
        };
        
        formData.id = this.id;
        formData.name = formRef.name;
        
        this.service.postUpdate(this.MilestoneStatusDetails).subscribe(MilestoneStatusDetails => {
            console.log(MilestoneStatusDetails);
        });
    }
}