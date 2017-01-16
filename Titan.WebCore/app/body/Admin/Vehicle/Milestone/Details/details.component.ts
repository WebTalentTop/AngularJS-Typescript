import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { MilestoneService } from '../../../../../shared/services/Containers/MileStoneService/mileStone.service'
import { DataTable, TabViewModule, LazyLoadEvent, ButtonModule, InputTextareaModule, MessagesModule, InputTextModule, PanelModule, FileUploadModule, Message, GrowlModule } from 'primeng/primeng';
import { SelectItem, ConfirmationService } from 'primeng/primeng';
import { Validators } from '@angular/forms';

@Component({
    selector: 'milestone-detail',
    templateUrl: 'app/body/Admin/Vehicle/Milestone/Details/details.component.html'
})
export class DetailsComponent {
    username: string;
    details: string;

    id: string;
    entityType: string = "Milestone";
    entityId: string = this.id;
    filepath: string = "Milestone";
    Milestone = { name: '' };   
    formConfiguration: any;
    formObject: any;

    MilestoneDetails: any = {
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


    public MilestoneId: string;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: MilestoneService
    )
    { }


    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            this.route.params.subscribe(params => console.log(params['id']));

            this.MilestoneId = params['id']; // (+) converts string 'id' to a number
            //let locale = params['locale'];

            this.service.getById(this.MilestoneId).subscribe(MilestoneDetails => {
                this.MilestoneDetails = MilestoneDetails.result;
              
                console.log(this.MilestoneDetails);
            });
        });
    }


    onSubmit(formRef) {

        this.service.postUpdate(this.MilestoneDetails).subscribe(MilestoneDetails => {
        });
         this.msgs = [];
         this.msgs.push({ severity: 'success', summary: 'Saved', detail: '' });
    }
}