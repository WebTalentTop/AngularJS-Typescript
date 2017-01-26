import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { TestVerificationMethodService } from '../../../../../shared/services/testVerificationMethod.service'
import { DataTable, TabViewModule, LazyLoadEvent, ButtonModule, InputTextareaModule, MessagesModule, InputTextModule, PanelModule, FileUploadModule, Message, GrowlModule } from 'primeng/primeng';
import { SelectItem, ConfirmationService, MenuItem } from 'primeng/primeng';
import { Validators } from '@angular/forms';
import { BreadCrumbsService } from '../../../../../shared/services/breadCrumbs/breadCrumbs.service';

@Component({
    selector: 'testVerificationMethod-detail',
    templateUrl: 'app/body/Admin/Vehicle/TestVerificationMethod/Details/details.component.html'
})
export class DetailsComponent {
    username: string;
    details: string;

    id: string;
    entityType: string = "TestVerificationMethod";
    entityId: string = this.id;
    filepath: string = "TestVerificationMethod";
    testVerificationMethod = { name: '' };   
    formConfiguration: any;
    formObject: any;

    TestVerificationMethodDetails: any = {
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

    public TestVerificationMethodId: string;

    breadcrumbs: MenuItem[];
    breadcrumbsHome: MenuItem;
    constructor(
        private breadCrumbsService: BreadCrumbsService,
        private route: ActivatedRoute,
        private router: Router,
        private service: TestVerificationMethodService
    )
    { }
    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            this.route.params.subscribe(params => console.log(params['id']));

            this.TestVerificationMethodId = params['id']; // (+) converts string 'id' to a number
            //let locale = params['locale'];

            let breadC = this.breadCrumbsService.getBreadCrumbs();
            let testVerificationMethodDetailsBreadCrumb = breadC.filter(filter =>
                filter.pageName === 'TestVerificationMethodDetailsPage'
            )[0];

            console.log("BreadC -----", breadC);
            console.log("testVerificationMethodDetailsBreadCrumb ---------", testVerificationMethodDetailsBreadCrumb);
            this.breadcrumbs = [];
            this.breadcrumbs = testVerificationMethodDetailsBreadCrumb.items;

            console.log("breadcurmbs ------", this.breadcrumbs);

            this.breadcrumbsHome = { routerLink: ['/'] };
        });

            this.service.getById(this.TestVerificationMethodId).subscribe(TestVerificationMethodDetails => {
                this.TestVerificationMethodDetails = TestVerificationMethodDetails.result;
              
                console.log(this.TestVerificationMethodDetails);
            });
    }


    onSubmit(formRef) {

        this.service.postUpdate(this.TestVerificationMethodDetails).subscribe(TestVerificationMethodDetails => {
        });
         this.msgs = [];
         this.msgs.push({ severity: 'success', summary: 'Saved', detail: '' });
    }
}