import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { StepFrequencyService } from '../../../../../shared/services/stepFrequency.service'
import { DataTable, TabViewModule, LazyLoadEvent, ButtonModule, InputTextareaModule, MessagesModule, InputTextModule, PanelModule, FileUploadModule, Message, GrowlModule } from 'primeng/primeng';
import { SelectItem, ConfirmationService } from 'primeng/primeng';
import { Validators } from '@angular/forms';

@Component({
    selector: 'stepFrequency-detail',
    templateUrl: 'app/body/Admin/Vehicle/StepFrequency/Details/details.component.html'
})
export class DetailsComponent {
    username: string;
    details: string;

    id: string;
    entityType: string = "StepFrequency";
    entityId: string = this.id;
    filepath: string = "StepFrequency";
    stepFrequency = { name: '' };   
    formConfiguration: any;
    formObject: any;

    StepFrequencyDetails: any = {
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


    public StepFrequencyId: string;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: StepFrequencyService
    )
    { }


    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            this.route.params.subscribe(params => console.log(params['id']));

            this.StepFrequencyId = params['id']; // (+) converts string 'id' to a number
            //let locale = params['locale'];

            this.service.getById(this.StepFrequencyId).subscribe(StepFrequencyDetails => {
                this.StepFrequencyDetails = StepFrequencyDetails.result;
              
                console.log(this.StepFrequencyDetails);
            });
        });
    }


    onSubmit(formRef) {

        this.service.postUpdate(this.StepFrequencyDetails).subscribe(StepFrequencyDetails => {
           // console.log(ProjectStatusDetails);
        });
         this.msgs = [];
         this.msgs.push({ severity: 'success', summary: 'Saved', detail: '' });
    }
}