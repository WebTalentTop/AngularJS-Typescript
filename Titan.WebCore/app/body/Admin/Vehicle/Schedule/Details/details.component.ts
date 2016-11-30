import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ScheduleService } from '../../../../../shared/services/schedule.service'
import { DataTable, TabViewModule, LazyLoadEvent, ButtonModule, InputTextareaModule, MessagesModule, InputTextModule, PanelModule, FileUploadModule, Message, GrowlModule } from 'primeng/primeng';
import { SelectItem, ConfirmationService } from 'primeng/primeng';
import { Validators } from '@angular/forms';

@Component({
    selector: 'schedule-detail',
    templateUrl: 'app/body/Admin/Vehicle/Schedule/Details/details.component.html'
})
export class DetailsComponent {
    username: string;
    details: string;

    id: string;
    entityType: string = "Schedule";
    entityId: string = this.id;
    filepath: string = "Schedule";
    schedule = { name: '' };   
    formConfiguration: any;
    formObject: any;

    public ScheduleDetails: any = {
        id: '',
        isDeleted: false,
        name: '',
        recurranceCronExpression:'',
        userCreatedById: '',
        userModifiedById: '',
        createdOn: '',
        modifiedOn: ''
    };


    msgs: Message[];
    uploadedFiles: any[] = [];


    //public ScheduleDetails: any;
    public ScheduleId: string;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: ScheduleService,
    )
    { }


    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            this.route.params.subscribe(params => console.log(params['id']));

            this.ScheduleId = params['id']; // (+) converts string 'id' to a number
            //let locale = params['locale'];

            this.service.getById(this.ScheduleId).subscribe(ScheduleDetails => {
                this.ScheduleDetails = ScheduleDetails;
                this.ScheduleDetails.id = this.ScheduleId;
                console.log(this.ScheduleDetails);
            });
        });
    }


    onSubmit(formRef) {
        console.log("inside");
        console.log(this.schedule.name);
        formRef.isDeleted = false;
        let formData: any = {
            id: this.id,
            name: '',
        };
        
        formData.id = this.id;
        formData.name = formRef.name;
        
        this.service.postUpdate(this.ScheduleDetails).subscribe(ScheduleDetails => {
            console.log(ScheduleDetails);
        });
    }
}