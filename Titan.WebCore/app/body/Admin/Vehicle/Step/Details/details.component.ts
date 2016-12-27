import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { StepService } from '../../../../../shared/services/step.service'
import { DataTable, TabViewModule, LazyLoadEvent, ButtonModule, InputTextareaModule, MessagesModule, InputTextModule, PanelModule, FileUploadModule, Message, GrowlModule } from 'primeng/primeng';
import { SelectItem, ConfirmationService } from 'primeng/primeng';
import { Validators } from '@angular/forms';

@Component({
    selector: 'step-detail',
    templateUrl: 'app/body/Admin/Vehicle/Step/Details/details.component.html'
})
export class DetailsComponent {
    username: string;
    details: string;

    id: string;
    entityType: string = "Step";
    entityId: string = this.id;
    filepath: string = "Step";
    step = { name: '' };   
    formConfiguration: any;
    formObject: any;

    StepDetails: any = {
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


    //public StepDetails: any;
    public StepId: string;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: StepService
    )
    { }


    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            this.route.params.subscribe(params => console.log(params['id']));

            this.StepId = params['id']; // (+) converts string 'id' to a number
            //let locale = params['locale'];

            this.service.getById(this.StepId).subscribe(StepDetails => {
                this.StepDetails = StepDetails.result;
              
                console.log(this.StepDetails);
            });
        });
    }


    onSubmit(formRef) {

        this.service.postUpdate(this.StepDetails).subscribe(StepDetails => {
           // console.log(StepDetails);
        });
         this.msgs = [];
         this.msgs.push({ severity: 'success', summary: 'Saved', detail: '' });
    }
}