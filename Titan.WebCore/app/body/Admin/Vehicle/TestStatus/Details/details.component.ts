import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { TestStatusService } from '../../../../../shared/services/testStatus.service'
import { DataTable, TabViewModule, LazyLoadEvent, ButtonModule, InputTextareaModule,  InputTextModule, PanelModule, FileUploadModule, Message } from 'primeng/primeng';
import { SelectItem, ConfirmationService } from 'primeng/primeng';
import { Validators } from '@angular/forms';

@Component({
    selector: 'testStatus-detail',
    templateUrl: 'app/body/Admin/Vehicle/TestStatus/Details/details.component.html'
})
export class DetailsComponent {
    username: string;
    details: string;

    id: string;
    entityType: string = "TestStatus";
    entityId: string = this.id;
    filepath: string = "TestStatus";
    testStatus = { name: '' };   
    formConfiguration: any;
    formObject: any;

    TestStatusDetails: any = {
        id: '',
        isDeleted: false,
        name: '',
        description: '',
        userCreatedById: '',
        userModifiedById: '',
        createdOn: '',
        modifiedOn: '',
        calendarDisplayColor: ''

    };


    msgs: Message[];
    uploadedFiles: any[] = [];


    public TestStatusId: string;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: TestStatusService
    )
    { }
    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            this.route.params.subscribe(params => console.log(params['id']));

            this.TestStatusId = params['id']; // (+) converts string 'id' to a number
            //let locale = params['locale'];

            this.service.getById(this.TestStatusId).subscribe(TestStatusDetails => {
                this.TestStatusDetails = TestStatusDetails.result;
              
                console.log(this.TestStatusDetails);
            });
        });
    }


    onSubmit(formRef) {

        this.service.postUpdate(this.TestStatusDetails).subscribe(TestStatusDetails => {
        });
         this.msgs = [];
         this.msgs.push({ severity: 'success', summary: 'Saved', detail: '' });
    }
}