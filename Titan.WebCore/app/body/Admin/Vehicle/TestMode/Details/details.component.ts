import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { TestModeService } from '../../../../../shared/services/testMode.service'
import { DataTable, TabViewModule, LazyLoadEvent, ButtonModule, InputTextareaModule, MessagesModule, InputTextModule, PanelModule, FileUploadModule, Message, GrowlModule } from 'primeng/primeng';
import { SelectItem, ConfirmationService } from 'primeng/primeng';
import { Validators } from '@angular/forms';

@Component({
    selector: 'testMode-detail',
    templateUrl: 'app/body/Admin/Vehicle/TestMode/Details/details.component.html'
})
export class DetailsComponent {
    username: string;
    details: string;

    id: string;
    entityType: string = "TestMode";
    entityId: string = this.id;
    filepath: string = "TestMode";
    testMode = { name: '' };   
    formConfiguration: any;
    formObject: any;
    testTypeDetails: any;
    selectedTestTypes: any;
    testModeDetails: any = {
        id: '',
        isDeleted: false,
        name: '',
        description: '',
        userCreatedById: '',
        userModifiedById: '',
        createdOn: '',
        modifiedOn: '',
        TestTypeIdList: this.selectedTestTypes

    };


    msgs: Message[];
    uploadedFiles: any[] = [];

    public TestModeId: string;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: TestModeService
    )
    { }


    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            this.route.params.subscribe(params => console.log(params['id']));

            this.TestModeId = params['id']; // (+) converts string 'id' to a number
            //let locale = params['locale'];

            this.service.getAllTestTypes().subscribe(TestTypesList => {
               this.testTypeDetails = TestTypesList.$values;

               

            });
            this.service.getById(this.TestModeId).subscribe(TestModeDetails => {
                this.testModeDetails = TestModeDetails;
                this.selectedTestTypes = TestModeDetails.testTypeIdList.$values;
                //console.log(this.TestModeDetails);
            });
        });
    }


    onSubmit(formRef) {

        this.service.postUpdate(this.testModeDetails).subscribe(TestModeDetails => {
        });
         this.msgs = [];
         this.msgs.push({ severity: 'success', summary: 'Saved', detail: '' });
    }
}