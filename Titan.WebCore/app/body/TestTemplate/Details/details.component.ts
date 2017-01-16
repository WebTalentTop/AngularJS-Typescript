import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TestTemplateService } from '../../../shared/services/Containers/TestTemplateService/testTemplate.service'
import { TestTypeService } from '../../../shared/services/testType.service'
import { TestModeService } from '../../../shared/services/testMode.service'
import { ProcedureService } from '../../../shared/services/procedure.service'
import { TestRequirementService } from '../../../shared/services/testrequirement.service'
import { Validators } from '@angular/forms';
import { DataTable, TabViewModule, LazyLoadEvent, ButtonModule, InputTextareaModule, InputTextModule, PanelModule, FileUploadModule, Message, GrowlModule } from 'primeng/primeng';
import { Router } from '@angular/router'
import { SelectItem, ConfirmationService } from 'primeng/primeng';

@Component({
    selector: 'details-testTemplate',
    templateUrl: 'app/body/TestTemplate/Details/details.component.html'
})
export class DetailsComponent {
    public testTemplate: any;
    public testTypes: any;
    public testModes: Array<any> = new Array();
    public selectedProcedures: Array<any> = new Array();
    public filteredProcedures: Array<any> = new Array();
    public filteredSelectedProcedures: Array<any> = new Array();
    public selectedTestRequirements: Array<any> = new Array();
    public filteredTestRequirements: Array<any> = new Array();
    public filteredSelectedTestRequirements: Array<any> = new Array();
    constructor(
        private testTemplateService: TestTemplateService,
        private testtypeService: TestTypeService,
        private testmodeService: TestModeService,
        private router: Router,
        private route: ActivatedRoute,
        private procedureService: ProcedureService,
        private testRequirementService: TestRequirementService,
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
            this.testTemplateService.getById(params['id']).subscribe(res => {
                this.testTemplate = res.result;
                //if (this.testTemplate.testTypeId != null) {
                //    this.onTestTypeChange();
                //}
            });
            this.testTemplateService.getTestTemplateProcedures(params['id']).subscribe(res => {
                this.selectedProcedures = res.result;
            });
            this.testTemplateService.getTestTemplateRequirements(params['id']).subscribe(res => {
                this.selectedTestRequirements = res.result;
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
        });
    }

    onDeleteTestRequirement(testRequirement) {
        this.confirmationService.confirm({
            message: 'Do you want to delete this record?',
            header: 'Delete Confirmation',
            icon: 'fa fa-trash',
            accept: () => {
                this.testTemplateService.postDeleteTestTemplateRequirement(
                    this.testTemplate.id,
                    testRequirement.id
                ).subscribe(res => {
                    this.selectedTestRequirements = res.result;
                });
            }
        });


    }

    onAddTestRequirement() {
        var selectedTestRequirementIds = new Array();
        for (var sel of this.filteredSelectedTestRequirements) {
            selectedTestRequirementIds.push(sel.id);
        }
        var inputDto = {
            testRequirementList: selectedTestRequirementIds
        }
        this.testTemplateService.postAddTestRequirements(selectedTestRequirementIds, this.testTemplate.id).subscribe(filteredList => {
            this.selectedTestRequirements = filteredList.result;
            this.filteredSelectedTestRequirements = null;
        });
    }

    filterTestRequirements(event) {
        this.testRequirementService.filterByTestTemplateId(this.testTemplate.id, event.query).subscribe(filteredList => {
            this.filteredTestRequirements = filteredList.$values;
        });
    }

    onMoveProcedureUp(procedure) {
        var oldIndex = this.selectedProcedures.indexOf(procedure);
        this.selectedProcedures.splice(oldIndex - 1, 0, this.selectedProcedures.splice(oldIndex, 1)[0]);
        this.updateProcedureProcedureDisplayOrder();
    }

    onMoveProcedureDown(procedure) {
        var oldIndex = this.selectedProcedures.indexOf(procedure);
        this.selectedProcedures.splice(oldIndex + 1, 0, this.selectedProcedures.splice(oldIndex, 1)[0])
        this.updateProcedureProcedureDisplayOrder();
    }

    updateProcedureProcedureDisplayOrder() {
        this.testTemplateService.putTestTemplateProcedureDisplayOrder(this.selectedProcedures, this.testTemplate.id).subscribe(filteredList => {
            this.selectedProcedures = filteredList.result;
        });
    }

    onLoadProcedureSteps(event) {
        console.log(event);
        if (event.data != undefined) {
            this.procedureService.getProcedureSteps(event.data.id).subscribe(res => {
                event.data.steps = res.$values;
            });
        } else {
            this.procedureService.getProcedureSteps(event.id).subscribe(res => {
                event.steps = res.$values;
            });
        }
    }

    isUpButtonVisible(procedure) {
        if (this.selectedProcedures != undefined && this.selectedProcedures.length > 1 && procedure.id != this.selectedProcedures[0].id)
            return true;
        return false;
    }

    isDownButtonVisible(procedure) {
        if (this.selectedProcedures != undefined && this.selectedProcedures.length > 1 && procedure.id != this.selectedProcedures[this.selectedProcedures.length - 1].id)
            return true;
        return false;
    }

    onSubmit() {

        this.testTemplateService.postUpdate(this.testTemplate).subscribe(res => {
            //this.router.navigate(['testtemplate/details', res.$values.id]);
        });
    }
}
