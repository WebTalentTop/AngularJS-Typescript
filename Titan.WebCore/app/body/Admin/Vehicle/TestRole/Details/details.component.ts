import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { TestRoleService } from '../../../../../shared/services/testRole.service'
import { DataTable, TabViewModule, LazyLoadEvent, ButtonModule, InputTextareaModule, MessagesModule, InputTextModule, PanelModule, FileUploadModule, Message, GrowlModule } from 'primeng/primeng';
import { SelectItem, ConfirmationService } from 'primeng/primeng';
import { Validators } from '@angular/forms';

@Component({
    selector: 'testRole-detail',
    templateUrl: 'app/body/Admin/Vehicle/TestRole/Details/details.component.html'
})
export class DetailsComponent {
    username: string;
    details: string;

    id: string;
    entityType: string = "TestRole";
    entityId: string = this.id;
    filepath: string = "TestRole";
    testRole = { name: '' };   
    formConfiguration: any;
    formObject: any;

    TestRoleDetails: any = {
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


    public TestRoleId: string;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: TestRoleService
    )
    { }


    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            this.route.params.subscribe(params => console.log(params['id']));

            this.TestRoleId = params['id']; // (+) converts string 'id' to a number
            //let locale = params['locale'];

            this.service.getById(this.TestRoleId).subscribe(TestRoleDetails => {
                this.TestRoleDetails = TestRoleDetails.result;
              
                console.log(this.TestRoleDetails);
            });
        });
    }


    onSubmit(formRef) {

        this.service.postUpdate(this.TestRoleDetails).subscribe(TestRoleDetails => {
        });
         this.msgs = [];
         this.msgs.push({ severity: 'success', summary: 'Saved', detail: '' });
    }
}