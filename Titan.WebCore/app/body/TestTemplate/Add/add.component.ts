import { Component } from '@angular/core';
import { TestTemplateService } from '../../../shared/services/Containers/TestTemplateService/testTemplate.service'
import { TestTypeService } from '../../../shared/services/testType.service'
import { TestModeService } from '../../../shared/services/testMode.service'
import { Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router'
import { SelectItem, MenuItem } from 'primeng/primeng';
import { BreadCrumbsService } from '../../../shared/services/breadCrumbs/breadCrumbs.service';

@Component({
    selector: 'add-testTemplate',
    styleUrls: ['app/body/TestTemplate/Add/add.component.css'],
    templateUrl: 'app/body/TestTemplate/Add/add.component.html'
})

export class AddComponent {
    id: string;
    entityId: string = this.id;
    public testTemplate: any;
    public testTypes: any;
    public testModes: Array<any> = new Array();
    constructor(
        private breadCrumbsService: BreadCrumbsService,
        private testTemplateService: TestTemplateService,
        private testTypeService: TestTypeService,
        private testModeService: TestModeService,
        private route: ActivatedRoute,
        private router: Router) {

        this.route.queryParams.subscribe(params => this.id = params['id']); {
            this.entityId = this.id;

            let breadC = this.breadCrumbsService.getBreadCrumbs();
            let testTemplateAddBreadCrumb = breadC.filter(filter =>
                filter.pageName === 'TestTemplateAddPage'
            )[0];
            this.breadcrumbs = [];
            this.breadcrumbs = testTemplateAddBreadCrumb.items;


            this.breadcrumbsHome = { routerLink: ['/'] };
        }
    }
    breadcrumbs: MenuItem[];
    breadcrumbsHome: MenuItem;
    ngOnInit() {
        this.testTemplate = new Object();
        //this.getTestType();
        //var testMode = {
        //    label: "Select Test Type to Populate",
        //    value: null
        //};
        //this.testModes.push(testMode);
    }

    getTestType() {
        //    testTypes
        this.testTypeService.getAll().subscribe(response => {
            this.testTypes = new Array();
            if (response != null) {
                var resultMap = new Array();
                resultMap.push({
                    label: "Select Test Type",
                    value: null
                });
                for (let template of response.$values) {
                    var temp = {
                        label: template.name,
                        value: template.id
                    }
                    resultMap.push(temp);
                }
                this.testTypes = resultMap;
            }
        });
    }

    onTestTypeChange() {
        this.testModes = new Array();
        //this.testModes
        this.testModeService.getAllByTestTypeId(this.testTemplate.testTypeId).subscribe(response => {
            if (response != null && response.$values.length > 0) {
                var resultMap = new Array();
                resultMap.push({
                    label: "Select Test Mode",
                    value: null
                });
                for (let template of response.$values) {
                    var temp = {
                        label: template.name,
                        value: template.id
                    }
                    resultMap.push(temp);
                }
                this.testModes = resultMap;
            }
            else {
                var testMode = [{
                    label: "No Modes available",
                    value: null
                }];
                this.testModes = testMode;
            }
        });
    }

    onSubmit() {
        this.testTemplateService.postAdd(this.testTemplate).subscribe(res => {
            this.router.navigate(['testTemplate/details', res.result]);
        });
    }
}
