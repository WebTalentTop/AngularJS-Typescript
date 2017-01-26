import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { TestActivityService } from '../../../../../shared/services/testActivity.service'
import { DataTable, TabViewModule, LazyLoadEvent, ButtonModule, InputTextareaModule, MessagesModule, InputTextModule, PanelModule, FileUploadModule, Message, GrowlModule } from 'primeng/primeng';
import { SelectItem, ConfirmationService, MenuItem } from 'primeng/primeng';
import { Validators } from '@angular/forms';
import { BreadCrumbsService } from '../../../../../shared/services/breadCrumbs/breadCrumbs.service';

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

    breadcrumbs: MenuItem[];
    breadcrumbsHome: MenuItem;

    constructor(
        private breadCrumbsService: BreadCrumbsService,
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

            let breadC = this.breadCrumbsService.getBreadCrumbs();
            let testActivityDetailsBreadCrumb = breadC.filter(filter =>
                filter.pageName === 'TestActivityDetailsPage'
            )[0];

            console.log("BreadC -----", breadC);
            console.log("testActivityDetailsBreadCrumb ---------", testActivityDetailsBreadCrumb);
            this.breadcrumbs = [];
            this.breadcrumbs = testActivityDetailsBreadCrumb.items;

            console.log("breadcurmbs ------", this.breadcrumbs);

            this.breadcrumbsHome = { routerLink: ['/'] };
        });

        this.service.getById(this.TestActivityId).subscribe(TestActivityDetails => {
            this.TestActivityDetails = TestActivityDetails.result;

            console.log(this.TestActivityDetails);
        });
    }


    onSubmit(formRef) {

        this.service.postUpdate(this.TestActivityDetails).subscribe(TestActivityDetails => {
        });
        this.msgs = [];
        this.msgs.push({ severity: 'success', summary: 'Saved', detail: '' });
    }
}