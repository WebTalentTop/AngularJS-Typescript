import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { HolidayService } from '../../../../../shared/services/holiday.service'
import { DataTable, TabViewModule, LazyLoadEvent, ButtonModule, InputTextareaModule, MessagesModule, InputTextModule, PanelModule, FileUploadModule, Message, GrowlModule } from 'primeng/primeng';
import { SelectItem, ConfirmationService } from 'primeng/primeng';
import { Validators } from '@angular/forms';

@Component({
    selector: 'holiday-detail',
    templateUrl: 'app/body/Admin/Vehicle/Holiday/Details/details.component.html'
})
export class DetailsComponent {
    username: string;
    details: string;

    id: string;
    entityType: string = "Holiday";
    entityId: string = this.id;
    filepath: string = "Holiday";
    holiday = { name: '' };   
    formConfiguration: any;
    formObject: any;

    HolidayDetails: any = {
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


    public HolidayId: string;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: HolidayService
    )
    { }


    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            this.route.params.subscribe(params => console.log(params['id']));

            this.HolidayId = params['id']; // (+) converts string 'id' to a number
            //let locale = params['locale'];

            this.service.getById(this.HolidayId).subscribe(HolidayDetails => {
                this.HolidayDetails = HolidayDetails.result;
              
                console.log(this.HolidayDetails);
            });
        });
    }


    onSubmit(formRef) {

        this.service.postUpdate(this.HolidayDetails).subscribe(HolidayDetails => {
        });
         this.msgs = [];
         this.msgs.push({ severity: 'success', summary: 'Saved', detail: '' });
    }
}