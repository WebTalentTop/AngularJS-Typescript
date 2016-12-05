import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { MilestoneTypeService } from '../../../../../shared/services/milestoneType.service'
import { DataTable, TabViewModule, LazyLoadEvent, ButtonModule, InputTextareaModule, MessagesModule, InputTextModule, PanelModule, FileUploadModule, Message, GrowlModule } from 'primeng/primeng';
import { SelectItem, ConfirmationService } from 'primeng/primeng';
import { Validators } from '@angular/forms';

@Component({
    selector: 'milestoneType-detail',
    templateUrl: 'app/body/Admin/Vehicle/MilestoneType/Details/details.component.html'
})
export class DetailsComponent {
    username: string;
    details: string;

    id: string;
    entityType: string = "MilestoneType";
    entityId: string = this.id;
    filepath: string = "MilestoneType";
    MilestoneType = { name: '' };   
    formConfiguration: any;
    formObject: any;

    MilestoneTypeDetails: any = {
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


    public MilestoneTypeId: string;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: MilestoneTypeService
    )
    { }


    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            this.route.params.subscribe(params => console.log(params['id']));

            this.MilestoneTypeId = params['id']; // (+) converts string 'id' to a number
            //let locale = params['locale'];

            this.service.getById(this.MilestoneTypeId).subscribe(MilestoneTypeDetails => {
                this.MilestoneTypeDetails = MilestoneTypeDetails.result;
              
                console.log(this.MilestoneTypeDetails);
            });
        });
    }


    onSubmit(formRef) {

        this.service.postUpdate(this.MilestoneTypeDetails).subscribe(MilestoneTypeDetails => {
        });
         this.msgs = [];
         this.msgs.push({ severity: 'success', summary: 'Saved', detail: '' });
    }
}