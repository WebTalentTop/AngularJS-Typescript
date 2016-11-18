import { Component } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { TestTemplateService } from '../../../shared/services/testtemplate.service'
import { TestTypeService } from '../../../shared/services/testtype.service'
import { TestModeService } from '../../../shared/services/testmode.service'
import { TestRequirementService } from '../../../shared/services/testrequirement.service'
import { Validators } from '@angular/forms';
import { DataTable, TabViewModule, LazyLoadEvent, ButtonModule, InputTextareaModule, InputTextModule, PanelModule, FileUploadModule, Message, GrowlModule } from 'primeng/primeng';
import {Router} from '@angular/router'
import { SelectItem } from 'primeng/primeng';

@Component({
    selector: 'details-testtemplate',
    templateUrl: 'app/body/TestTemplate/Details/details.component.html'
})
export class DetailsComponent {
    public testTemplate: any;
    public testTypes: any;
    public testModes: Array<any> = new Array();
    public selectedTestRequirements: Array<any> = new Array();
    public filteredTestRequirements: Array<any> = new Array();
    public filteredSelectedTestRequirements: Array<any> = new Array();
    
    constructor(
        private testTemplateService: TestTemplateService, 
        private testtypeService: TestTypeService,
        private testmodeService: TestModeService, 
        private router: Router,
        private route:ActivatedRoute, 
        private testrequirementService: TestRequirementService
    ){
        
    }

    ngOnInit() {
        this.getTestType();
        var testMode = {
            label: "Select Test Type to Populate",
            value: null
        };
        this.testModes.push(testMode);
        this.route.params.subscribe(params => {
        console.log(params);
            console.log("---- TF Details ID Param -----", params['id']);
            this.testTemplateService.getById(params['id']).subscribe(res => {
                this.testTemplate = res;
                if (this.testTemplate.testTypeId != null) {
                    this.onTestTypeChange();
                }
            });
        });

    }

    filterTestRequirements(event) {
        this.testRequirementService.filterByTestTemplateId(this.testTemplate.id, event.query).subscribe(filteredList => {
            this.filteredTestRequirements = filteredList;
        });
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
            console.log(response);
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
            console.log(response);
        });
    }

    onSubmit() {
        
        this.testTemplateService.postUpdate(this.testTemplate).subscribe(res => {
            console.log(res)
            //this.router.navigate(['testemplate/details', res.$values.id]);
        });
    }
}