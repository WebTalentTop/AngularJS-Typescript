import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { TestStatusService } from '../../../../../shared/services/Containers/TestStatusService/testStatus.service'
import { DataTable, TabViewModule, LazyLoadEvent, ButtonModule, InputTextareaModule,  InputTextModule, PanelModule, FileUploadModule, Message } from 'primeng/primeng';
import { SelectItem, ConfirmationService, MenuItem } from 'primeng/primeng';
import { Validators } from '@angular/forms';
import { BreadCrumbsService } from '../../../../../shared/services/breadCrumbs/breadCrumbs.service';

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

    breadcrumbs: MenuItem[];
    breadcrumbsHome: MenuItem;
    constructor(
        private breadCrumbsService: BreadCrumbsService,
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

            let breadC = this.breadCrumbsService.getBreadCrumbs();
            let testStatusDetailsBreadCrumb = breadC.filter(filter =>
                filter.pageName === 'TestStatusDetailsPage'
            )[0];

            console.log("BreadC -----", breadC);
            console.log("testStatusDetailsBreadCrumb ---------", testStatusDetailsBreadCrumb);
            this.breadcrumbs = [];
            this.breadcrumbs = testStatusDetailsBreadCrumb.items;

            console.log("breadcurmbs ------", this.breadcrumbs);

            this.breadcrumbsHome = { routerLink: ['/'] };
        });

            this.service.getById(this.TestStatusId).subscribe(TestStatusDetails => {
                this.TestStatusDetails = TestStatusDetails.result;
              
                console.log(this.TestStatusDetails);
        });
    }


    onSubmit(formRef) {

        this.service.postUpdate(this.TestStatusDetails).subscribe(TestStatusDetails => {
        });
         this.msgs = [];
         this.msgs.push({ severity: 'success', summary: 'Saved', detail: '' });
    }
}