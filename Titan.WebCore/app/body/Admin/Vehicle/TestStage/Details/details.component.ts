import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { TestStageService } from '../../../../../shared/services/testStage.service'
import { DataTable, TabViewModule, LazyLoadEvent, ButtonModule, InputTextareaModule, MessagesModule, InputTextModule, PanelModule, FileUploadModule, Message, GrowlModule } from 'primeng/primeng';
import { SelectItem, ConfirmationService, MenuItem } from 'primeng/primeng';
import { Validators } from '@angular/forms';
import { BreadCrumbsService } from '../../../../../shared/services/breadCrumbs/breadCrumbs.service';

@Component({
    selector: 'testStage-detail',
    templateUrl: 'app/body/Admin/Vehicle/TestStage/Details/details.component.html'
})
export class DetailsComponent {
    username: string;
    details: string;

    id: string;
    entityType: string = "TestStage";
    entityId: string = this.id;
    filepath: string = "TestStage";
    testStage = { name: '' };   
    formConfiguration: any;
    formObject: any;

    TestStageDetails: any = {
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

    public TestStageId: string;
    breadcrumbs: MenuItem[];
    breadcrumbsHome: MenuItem;

    constructor(
        private breadCrumbsService: BreadCrumbsService,
        private route: ActivatedRoute,
        private router: Router,
        private service: TestStageService
    )
    { }

    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            this.route.params.subscribe(params => console.log(params['id']));

            this.TestStageId = params['id']; // (+) converts string 'id' to a number
            //let locale = params['locale'];

            let breadC = this.breadCrumbsService.getBreadCrumbs();
            let testStageDetailsBreadCrumb = breadC.filter(filter =>
                filter.pageName === 'TestStageDetailsPage'
            )[0];

            console.log("BreadC -----", breadC);
            console.log("testStageDetailsBreadCrumb ---------", testStageDetailsBreadCrumb);
            this.breadcrumbs = [];
            this.breadcrumbs = testStageDetailsBreadCrumb.items;

            console.log("breadcurmbs ------", this.breadcrumbs);

            this.breadcrumbsHome = { routerLink: ['/'] };
        });

            this.service.getById(this.TestStageId).subscribe(TestStageDetails => {
                this.TestStageDetails = TestStageDetails.result;
              
                console.log(this.TestStageDetails);
            });
    }


    onSubmit(formRef) {

        this.service.postUpdate(this.TestStageDetails).subscribe(TestStageDetails => {
        });
         this.msgs = [];
         this.msgs.push({ severity: 'success', summary: 'Saved', detail: '' });
    }
}