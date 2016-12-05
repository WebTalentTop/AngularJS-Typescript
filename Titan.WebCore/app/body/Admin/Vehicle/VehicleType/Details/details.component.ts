import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { VehicleTypeService } from '../../../../../shared/services/vehicleType.service'
import { DataTable, TabViewModule, LazyLoadEvent, ButtonModule, InputTextareaModule, MessagesModule, InputTextModule, PanelModule, FileUploadModule, Message, GrowlModule } from 'primeng/primeng';
import { SelectItem, ConfirmationService } from 'primeng/primeng';
import { Validators } from '@angular/forms';

@Component({
    selector: 'vehicleType-detail',
    templateUrl: 'app/body/Admin/Vehicle/VehicleType/Details/details.component.html'
})
export class DetailsComponent {
    username: string;
    details: string;

    id: string;
    entityType: string = "VehicleType";
    entityId: string = this.id;
    filepath: string = "VehicleType";
    vehicleType = { name: '' };   
    formConfiguration: any;
    formObject: any;

    VehicleTypeDetails: any = {
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


    public VehicleTypeId: string;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: VehicleTypeService
    )
    { }


    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            this.route.params.subscribe(params => console.log(params['id']));

            this.VehicleTypeId = params['id']; // (+) converts string 'id' to a number
            //let locale = params['locale'];

            this.service.getById(this.VehicleTypeId).subscribe(VehicleTypeDetails => {
                this.VehicleTypeDetails = VehicleTypeDetails.result;
              
                console.log(this.VehicleTypeDetails);
            });
        });
    }


    onSubmit(formRef) {

        this.service.postUpdate(this.VehicleTypeDetails).subscribe(VehicleTypeDetails => {
           // console.log(ProjectStatusDetails);
        });
         this.msgs = [];
         this.msgs.push({ severity: 'success', summary: 'Saved', detail: '' });
    }
}