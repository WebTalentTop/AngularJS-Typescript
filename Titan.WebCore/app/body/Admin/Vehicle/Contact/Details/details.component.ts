import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ContactService } from '../../../../../shared/services/contact.service'
import { DataTable, TabViewModule, LazyLoadEvent, ButtonModule, InputTextareaModule, MessagesModule, InputTextModule, PanelModule, FileUploadModule, Message, GrowlModule } from 'primeng/primeng';
import { SelectItem, ConfirmationService } from 'primeng/primeng';
import { Validators } from '@angular/forms';

@Component({
    selector: 'contact-detail',
    templateUrl: 'app/body/Admin/Vehicle/Contact/Details/details.component.html'
})
export class DetailsComponent {
    username: string;
    details: string;

    id: string;
    entityType: string = "Contact";
    entityId: string = this.id;
    filepath: string = "Contact";
    contact = { name: '' };   
    formConfiguration: any;
    formObject: any;

    ContactDetails: any = {
        id: '',
        isDeleted: false,
        name: '',
        description: '',
        emailAddress:'',
        phoneNumber:'',
        userCreatedById: '',
        userModifiedById: '',
        createdOn: '',
        modifiedOn: ''

    };


    msgs: Message[];
    uploadedFiles: any[] = [];

    public ContactId: string;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: ContactService
    )
    { }

    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            this.route.params.subscribe(params => console.log(params['id']));

            this.ContactId = params['id']; // (+) converts string 'id' to a number
            //let locale = params['locale'];

            this.service.getById(this.ContactId).subscribe(ContactDetails => {
                this.ContactDetails = ContactDetails.result;
              
                console.log(this.ContactDetails);
            });
        });
    }


    onSubmit(formRef) {

        this.service.postUpdate(this.ContactDetails).subscribe(ContactDetails => {
        });
         this.msgs = [];
         this.msgs.push({ severity: 'success', summary: 'Saved', detail: '' });
    }
}