import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { MaintenanceFrequencyService } from '../../../../../shared/services/maintenanceFrequency.service'
import { DataTable, TabViewModule, LazyLoadEvent, ButtonModule, InputTextareaModule, MessagesModule, InputTextModule, PanelModule, FileUploadModule, Message, GrowlModule } from 'primeng/primeng';
import { SelectItem, ConfirmationService } from 'primeng/primeng';
import { Validators } from '@angular/forms';

@Component({
    selector: 'maintenanceFrequency-detail',
    templateUrl: 'app/body/Admin/Vehicle/MaintenanceFrequency/Details/details.component.html'
})
export class DetailsComponent {
    username: string;
    details: string;

    id: string;
    entityType: string = "MaintenanceFrequency";
    entityId: string = this.id;
    filepath: string = "MaintenanceFrequency";
    maintenanceFrequency = { name: '' };   
    formConfiguration: any;
    formObject: any;

    MaintenanceFrequencyDetails: any = {
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


    public MaintenanceFrequencyId: string;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: MaintenanceFrequencyService
    )
    { }


    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            this.route.params.subscribe(params => console.log(params['id']));

            this.MaintenanceFrequencyId = params['id']; // (+) converts string 'id' to a number
            //let locale = params['locale'];

            this.service.getById(this.MaintenanceFrequencyId).subscribe(MaintenanceFrequencyDetails => {
                this.MaintenanceFrequencyDetails = MaintenanceFrequencyDetails.result;
              
                console.log(this.MaintenanceFrequencyDetails);
            });
        });
    }


    onSubmit(formRef) {

        this.service.postUpdate(this.MaintenanceFrequencyDetails).subscribe(MaintenanceFrequencyDetails => {
        });
         this.msgs = [];
         this.msgs.push({ severity: 'success', summary: 'Saved', detail: '' });
    }
}