import { Component} from '@angular/core';
import { TestModeService } from '../../../../../shared/services/testMode.service';
import { Validators } from '@angular/forms';
import { SelectItem, Message, MenuItem, Message } from 'primeng/primeng';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { BreadCrumbsService } from '../../../../../shared/services/breadCrumbs/breadCrumbs.service';
//import { DataTable,PanelMenuModule, PanelModule ,InputTextModule,InputTextareaModule, ButtonModule } from 'primeng/primeng';

@Component({
    selector: 'add-testMode',
    templateUrl: 'app/body/Admin/Vehicle/TestMode/Add/add.component.html'
})

export class AddComponent {
    username: string;
    description:string;
    testTypeDetails: any;
    selectedTestTypeIdList: any[] = [];
    msgs: Message[];
    selectedTestTypeIds: any = { Id: '' };
    msgs: Message[] = [];
    selectedTestTypes: any[];
    allTestTypes: any[];
    added: any;

    breadcrumbs: MenuItem[];
    breadcrumbsHome: MenuItem;
    constructor(
        private breadCrumbsService: BreadCrumbsService,
        private service: TestModeService, 
        private router: Router, 
        private route: ActivatedRoute) {

    }

    ngOnInit() {
        this.selectedTestTypes = [];
        this.service.getAllTestTypes().subscribe(TestTypesList => {
            this.testTypeDetails = TestTypesList.result;
            this.allTestTypes = this.testTypeDetails;
          //  this.selectedTestTypes = this.testTypeDetails.selectedTestTypeIdList.$values;
            //if (TestTypesList != null) {
            //    var resultMap = new Array();
            //    this.testTypeDetails = TestTypesList.$values;
            //    for (let template of TestTypesList.$values) {
            //        var temp = {
            //            label: template.name,
            //            value: template.id
            //        }
            //        resultMap.push(temp);
            //    }
            //    this.testTypeDetails = resultMap;
            //}
            this.route.queryParams.subscribe(params => {

            this.added = params['page'];
            let breadC = this.breadCrumbsService.getBreadCrumbs();
            let testModeAddBreadCrumb = breadC.filter(filter =>
                filter.pageName === 'TestModeAddPage'
            )[0];

            console.log("BreadC -----", breadC);
            console.log("testModeAddBreadCrumb ---------", testModeAddBreadCrumb);
            this.breadcrumbs = [];
            this.breadcrumbs = testModeAddBreadCrumb.items;

            console.log("breadcurmbs ------", this.breadcrumbs);

            this.breadcrumbsHome = { routerLink: ['/'] };
     }); 

        });

    }
    onSubmit(formRef) {
        
            if (formRef.description == null) {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: 'Please enter description', detail: '' });


        }
        else if (this.selectedTestTypes.length == 0) {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: 'select atleast one TestType', detail: '' });


        }
        else
            {
        this.selectedTestTypes.forEach((testtype, index) => {
            this.selectedTestTypeIds.Id = testtype.value;
            this.selectedTestTypeIdList.push(testtype.value);

        });
        let formData: any = { name: '', description: '', locale: '', isDeleted: false, TestTypeIdList: this.selectedTestTypeIdList };
        formData.name = formRef.name;
        formData.description = formRef.description;
        formData.locale = "en-us";
        let added: any = "true";
        console.log(formData);
        this.service.postAdd(formData).subscribe(res => {
            console.log('--------------res result------------', +res)

            // this.router.navigate(["/vehicle/projectStatus/", res]);
            if (res.isSuccess) {
                //this.router.navigate([], {q})
                this.msgs = [];
                this.msgs.push({ severity: 'success', summary: 'Success', detail: '' });
                setTimeout(()=>this.router.navigate(["admin/vehicle/testMode"], { queryParams: { page: 1 } }),2000);
            }

        }
        );

        // );
    }
    }
}
