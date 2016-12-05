import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ModelYearService } from '../../../../../shared/services/modelYear.service'
import { DataTable, TabViewModule, LazyLoadEvent, ButtonModule, InputTextareaModule, MessagesModule, InputTextModule, PanelModule, FileUploadModule, Message, GrowlModule } from 'primeng/primeng';
import { SelectItem, ConfirmationService } from 'primeng/primeng';
import { Validators } from '@angular/forms';

@Component({
    selector: 'modelYear-detail',
    templateUrl: 'app/body/Admin/Vehicle/ModelYear/Details/details.component.html'
})
export class DetailsComponent {
    username: string;
    details: string;

    id: string;
    entityType: string = "ModelYear";
    entityId: string = this.id;
    filepath: string = "ModelYear";
    modelYear = { name: '' };   
    formConfiguration: any;
    formObject: any;

    ModelYearDetails: any = {
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


    public ModelYearId: string;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: ModelYearService
    )
    { }


    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            this.route.params.subscribe(params => console.log(params['id']));

            this.ModelYearId = params['id']; // (+) converts string 'id' to a number
            //let locale = params['locale'];

            this.service.getById(this.ModelYearId).subscribe(ModelYearDetails => {
                this.ModelYearDetails = ModelYearDetails.result;
              
                console.log(this.ModelYearDetails);
            });
        });
    }


    onSubmit(formRef) {

        this.service.postUpdate(this.ModelYearDetails).subscribe(ModelYearDetails => {
           // console.log(ProjectStatusDetails);
        });
         this.msgs = [];
         this.msgs.push({ severity: 'success', summary: 'Saved', detail: '' });
    }
}