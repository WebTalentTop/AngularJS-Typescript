import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { TestActivityService } from '../../../../../shared/services/testActivity.service'
import { DataTable, TabViewModule, LazyLoadEvent, ButtonModule, InputTextareaModule, MessagesModule, InputTextModule, PanelModule, FileUploadModule, Message, GrowlModule } from 'primeng/primeng';
import { SelectItem, ConfirmationService } from 'primeng/primeng';
import { Validators } from '@angular/forms';

@Component({
    selector: 'testActivity-detail',
    templateUrl: 'app/body/Admin/Vehicle/TestActivity/Details/details.component.html'
})
export class DetailsComponent {
    username: string;
    details: string;

    id: string;
    entityType: string = "TestActivity";
    entityId: string = this.id;
    filepath: string = "TestActivity";
    testActivity = { name: '' };   
    formConfiguration: any;
    formObject: any;

    TestActivityDetails: any = {
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


    public TestActivityId: string;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: TestActivityService
    )
    { }


    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            this.route.params.subscribe(params => console.log(params['id']));

            this.TestActivityId = params['id']; // (+) converts string 'id' to a number
            //let locale = params['locale'];

            this.service.getById(this.TestActivityId).subscribe(TestActivityDetails => {
                this.TestActivityDetails = TestActivityDetails.result;
              
                console.log(this.TestActivityDetails);
            });
        });
    }


    onSubmit(formRef) {

        this.service.postUpdate(this.TestActivityDetails).subscribe(TestActivityDetails => {
        });
         this.msgs = [];
         this.msgs.push({ severity: 'success', summary: 'Saved', detail: '' });
    }
}