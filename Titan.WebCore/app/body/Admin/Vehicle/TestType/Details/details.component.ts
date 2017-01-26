import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { TestTypeService } from '../../../../../shared/services/testType.service'
import { DataTable, TabViewModule, LazyLoadEvent, ButtonModule, InputTextareaModule, MessagesModule, InputTextModule, PanelModule, FileUploadModule, Message, GrowlModule } from 'primeng/primeng';
import { SelectItem, ConfirmationService, MenuItem } from 'primeng/primeng';
import { Validators } from '@angular/forms';
import { BreadCrumbsService } from '../../../../../shared/services/breadCrumbs/breadCrumbs.service';

@Component({
    selector: 'testType-detail',
    templateUrl: 'app/body/Admin/Vehicle/TestType/Details/details.component.html'
})
export class DetailsComponent {
    username: string;
    details: string;

    id: string;
    entityType: string = "TestType";
    entityId: string = this.id;
    filepath: string = "TestType";
    testType = { name: '' };   
    formConfiguration: any;
    formObject: any;

    TestTypeDetails: any = {
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

    public TestTypeId: string;

    breadcrumbs: MenuItem[];
    breadcrumbsHome: MenuItem;

    constructor(
        private breadCrumbsService: BreadCrumbsService,
        private route: ActivatedRoute,
        private router: Router,
        private service: TestTypeService
    )
    { }
    
    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            this.route.params.subscribe(params => console.log(params['id']));

            this.TestTypeId = params['id']; // (+) converts string 'id' to a number
            //let locale = params['locale'];

            let breadC = this.breadCrumbsService.getBreadCrumbs();
            let testTypeDetailsBreadCrumb = breadC.filter(filter =>
                filter.pageName === 'TestTypeDetailsPage'
            )[0];

            console.log("BreadC -----", breadC);
            console.log("testTypeDetailsBreadCrumb ---------", testTypeDetailsBreadCrumb);
            this.breadcrumbs = [];
            this.breadcrumbs = testTypeDetailsBreadCrumb.items;

            console.log("breadcurmbs ------", this.breadcrumbs);

            this.breadcrumbsHome = { routerLink: ['/'] };
        });

            this.service.getById(this.TestTypeId).subscribe(TestTypeDetails => {
                this.TestTypeDetails = TestTypeDetails.result;
              
                console.log(this.TestTypeDetails);
        });
    }


    onSubmit(formRef) {

        this.service.postUpdate(this.TestTypeDetails).subscribe(TestTypeDetails => {
        });
         this.msgs = [];
         this.msgs.push({ severity: 'success', summary: 'Saved', detail: '' });
    }
}