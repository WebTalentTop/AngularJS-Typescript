import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { OperatingHoursService } from '../../../../../shared/services/operatingHours.service'
import { DataTable, TabViewModule, LazyLoadEvent, ButtonModule, InputTextareaModule, MessagesModule, InputTextModule, PanelModule, FileUploadModule, Message, GrowlModule } from 'primeng/primeng';
import { SelectItem, ConfirmationService } from 'primeng/primeng';
import { Validators } from '@angular/forms';

@Component({
    selector: 'operatingHours-detail',
    templateUrl: 'app/body/Admin/Vehicle/OperatingHours/Details/details.component.html'
})
export class DetailsComponent {
    username: string;
    details: string;

    id: string;
    entityType: string = "OperatingHours";
    entityId: string = this.id;
    filepath: string = "OperatingHours";
    operatingHours = { name: '' };   
    formConfiguration: any;
    formObject: any;

    OperatingHoursDetails: any = {
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


    //public ProjectStatusDetails: any;
    public OperatingHoursId: string;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: OperatingHoursService
    )
    { }


    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            this.route.params.subscribe(params => console.log(params['id']));

            this.OperatingHoursId = params['id']; // (+) converts string 'id' to a number
            //let locale = params['locale'];

            this.service.getById(this.OperatingHoursId).subscribe(OperatingHoursDetails => {
                this.OperatingHoursDetails = OperatingHoursDetails.result;
              
                console.log(this.OperatingHoursDetails);
            });
        });
    }


    onSubmit(formRef) {

        this.service.postUpdate(this.OperatingHoursDetails).subscribe(OperatingHoursDetails => {
        });
         this.msgs = [];
         this.msgs.push({ severity: 'success', summary: 'Saved', detail: '' });
    }
}