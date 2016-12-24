import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TestTemplateService } from '../../../shared/services/testtemplate.service'
import { TestTypeService } from '../../../shared/services/testtype.service'
import { TestModeService } from '../../../shared/services/testmode.service'
import { ProcedureService } from '../../../shared/services/procedure.service'
import { Validators } from '@angular/forms';
import { DataTable, TabViewModule, LazyLoadEvent, ButtonModule, InputTextareaModule, InputTextModule, PanelModule, FileUploadModule, Message, GrowlModule } from 'primeng/primeng';
import { Router } from '@angular/router'
import { SelectItem, ConfirmationService } from 'primeng/primeng';

@Component({
    selector: 'details-testtemplate',
    templateUrl: 'app/body/TestTemplate/Details/details.component.html'
})
export class DetailsComponent {
    public testTemplate: any;
    public testTypes: any;
    public testModes: Array<any> = new Array();
    public selectedProcedures: Array<any> = new Array();
    public filteredProcedures: Array<any> = new Array();
    public filteredSelectedProcedures: Array<any> = new Array();
    constructor(
        private testTemplateService: TestTemplateService,
        private testtypeService: TestTypeService,
        private testmodeService: TestModeService,
        private router: Router,
        private route: ActivatedRoute,
        private procedureService: ProcedureService,
        private confirmationService: ConfirmationService
    ) {

    }

    ngOnInit() {
        //this.getTestType();
        //var testMode = {
        //    label: "Select Test Type to Populate",
        //    value: null
        //};
        //this.testModes.push(testMode);
        this.route.params.subscribe(params => {
            console.log(params);
            this.testTemplateService.getById(params['id']).subscribe(res => {
                this.testTemplate = res.result;
                //if (this.testTemplate.testTypeId != null) {
                //    this.onTestTypeChange();
                //}
            });
            this.testTemplateService.getTestTemplateProcedures(params['id']).subscribe(res => {
                this.selectedProcedures = res.$values;
            });

        });
    }

    onDelete(procedure) {
        this.confirmationService.confirm({
            message: 'Do you want to delete this record?',
            header: 'Delete Confirmation',
            icon: 'fa fa-trash',
            accept: () => {
                this.testTemplateService.postDeleteTestTemplateProcedure(
                    this.testTemplate.id,
                    procedure.id
                ).subscribe(res => {
                    this.selectedProcedures = res.result;
                });
            }
        });


    }

     onAddProcedure() {
       var selectedProcedureIds = new Array();
        for (var sel of this.filteredSelectedProcedures) {
            selectedProcedureIds.push(sel.id);
        }
        var inputDto = {
            procedureList: selectedProcedureIds
        }
        this.testTemplateService.postAddProcedures(selectedProcedureIds, this.testTemplate.id).subscribe(filteredList => {
            this.selectedProcedures = filteredList.result;
            this.filteredSelectedProcedures = null;
        });
    }

    filterProcedures(event) {
        this.procedureService.filterByTestTemplateId(this.testTemplate.id, event.query).subscribe(filteredList => {
            this.filteredProcedures = filteredList.result;
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
            //this.router.navigate(['testtemplate/details', res.$values.id]);
        });
    }
}