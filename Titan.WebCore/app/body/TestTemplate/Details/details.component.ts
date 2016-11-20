import { Component } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { TestTemplateService } from '../../../shared/services/testtemplate.service'
import { TestTypeService } from '../../../shared/services/testtype.service'
import { TestModeService } from '../../../shared/services/testmode.service'
import { TestRequirementService } from '../../../shared/services/testrequirement.service'
import { Validators } from '@angular/forms';
import { DataTable, TabViewModule, LazyLoadEvent, ButtonModule, InputTextareaModule, InputTextModule, PanelModule, FileUploadModule, Message, GrowlModule } from 'primeng/primeng';
import {Router} from '@angular/router'
import { SelectItem, ConfirmationService } from 'primeng/primeng';

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
        private testrequirementService: TestRequirementService,
		private confirmationService: ConfirmationService
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
            this.testTemplateService.getById(params['id']).subscribe(res => {
                this.testTemplate = res;
                if (this.testTemplate.testTypeId != null) {
                    this.onTestTypeChange();
                }
            });
             this.testTemplateService.getTestTemplateRequirements(params['id']).subscribe(res => {
                this.selectedTestRequirements = res.$values;
            });

        });
    }

    onDelete(testRequirement){
        this.confirmationService.confirm({
            message: 'Do you want to delete this record?',
            header: 'Delete Confirmation',
            icon: 'fa fa-trash',
            accept: () => {
                this.testTemplateService.postDeleteTestTemplateRequirement(
                    this.testTemplate.id,
                        testRequirement.id
                ).subscribe(res => {
                    this.selectedTestRequirements = res.$values;
                });
            }
        });

        
    }

    onAddTestRequirement(){
        var selectedTestRequirementIds = new Array();
        for(var sel of this.filteredSelectedTestRequirements){
            selectedTestRequirementIds.push(sel.id);
        }
        var inputDto = {
            testRequirementList: selectedTestRequirementIds
        }
        this.testTemplateService.postAddTestRequirements(selectedTestRequirementIds, this.testTemplate.id).subscribe(filteredList => {
            this.selectedTestRequirements = filteredList.$values;
            this.filteredSelectedTestRequirements = null;
        });
    }

    filterTestRequirements(event) {
        this.testrequirementService.filterByTestTemplateId(this.testTemplate.id, event.query).subscribe(filteredList => {
            this.filteredTestRequirements = filteredList;
        });
    }

    getTestType() {
        //    testTypes
        this.testtypeService.getAll().subscribe(response => {
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
        this.testmodeService.getAllByTestTypeId(this.testTemplate.testTypeId).subscribe(response => {
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