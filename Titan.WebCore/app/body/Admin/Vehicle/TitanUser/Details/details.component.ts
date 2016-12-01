import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { TitanUserService } from '../../../../../shared/services/titanUser.service'
import { DataTable, TabViewModule, LazyLoadEvent, ButtonModule, InputTextareaModule, MessagesModule, InputTextModule, PanelModule, FileUploadModule, Message, GrowlModule } from 'primeng/primeng';
import { SelectItem, ConfirmationService } from 'primeng/primeng';
import { Validators } from '@angular/forms';

@Component({
    selector: 'titanUser-detail',
    templateUrl: 'app/body/Admin/Vehicle/TitanUser/Details/details.component.html'
})
export class DetailsComponent {
    username: string;
    details: string;

    id: string;
    entityType: string = "TitanUser";
    entityId: string = this.id;
    filepath: string = "TitanUser";
    TitanUser = { name: '' };   
    formConfiguration: any;
    formObject: any;

    TitanUserDetails: any = {
        id: '',
        isDeleted: false,
        name: '',
        userName:'',
        displayName:'',
        firstName:'',
        lastName:'',
        emailAddress:'',
        userCreatedById: '',
        userModifiedById: '',
        createdOn: '',
        modifiedOn: ''

    };


    msgs: Message[];
    uploadedFiles: any[] = [];


    public TitanUserId: string;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: TitanUserService
    )
    { }


    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            this.route.params.subscribe(params => console.log(params['id']));

            this.TitanUserId = params['id']; // (+) converts string 'id' to a number
            //let locale = params['locale'];

            this.service.getById(this.TitanUserId).subscribe(TitanUserDetails => {
                this.TitanUserDetails = TitanUserDetails.result;
               // this.ProjectStatusDetails.id = this.ProjectStatusId;
                console.log(this.TitanUserDetails);
            });
        });
    }


    onSubmit(formRef) {

        this.service.postUpdate(this.TitanUserDetails).subscribe(TitanUserDetails => {
        });
         this.msgs = [];
         this.msgs.push({ severity: 'info', summary: 'Saved', detail: '' });
    }
}