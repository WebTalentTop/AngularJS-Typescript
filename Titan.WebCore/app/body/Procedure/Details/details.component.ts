import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProcedureService } from '../../../shared/services/Containers/ProcedureService/procedure.service'
import { TestTypeService } from '../../../shared/services/testtype.service'
import { TestModeService } from '../../../shared/services/testmode.service'
import { TestRequirementService } from '../../../shared/services/testrequirement.service'
import { StepService } from '../../../shared/services/step.service'
import { AddComponent } from './../../Step/Add/add.component';
import { Validators } from '@angular/forms';
import { DataTable, TabViewModule, LazyLoadEvent, ButtonModule, InputTextareaModule, InputTextModule, PanelModule, 
    FileUploadModule, Message, GrowlModule } from 'primeng/primeng';
import { Router } from '@angular/router'
import { SelectItem, ConfirmationService } from 'primeng/primeng';

enum procedureDependentItemType {
    TestRequirement = 1,
    Step = 2
}

@Component({
    selector: 'details-procedure',
    templateUrl: 'app/body/Procedure/Details/details.component.html'
})
export class DetailsComponent {
    public procedure: any;
    public testTypes: any;
    public testAllModes: Array<any> = new Array();
    public selectedTestRequirements: Array<any> = new Array();
    public filteredTestRequirements: Array<any> = new Array();
    public filteredSelectedTestRequirements: Array<any> = new Array();
    public filteredSelectedSteps: Array<any> = new Array();
    public selectedSteps: Array<any> = new Array();
    public filteredSteps: Array<any> = new Array();
    public displayAddStep:boolean;
    public displayEditStep: boolean;
    public id: string;
    public editStepId: string;
    constructor(
        private procedureService: ProcedureService,
        private testtypeService: TestTypeService,
        private testmodeService: TestModeService,
        private testmodeservice: TestModeService,
        private router: Router,
        private route: ActivatedRoute,
        private testrequirementService: TestRequirementService,
        private stepService: StepService,
        private confirmationService: ConfirmationService
    ) {

    }
    onAddNewStep(){
        this.displayAddStep = true;
    }

    ngOnInit() {
        this.getTestType();
        this.getTestModes();
        this.route.params.subscribe(params => {
            this.id = params['id'];
            this.procedureService.getById(params['id']).subscribe(res => {
                this.procedure = res.result;
                if (this.procedure.testTypeId != null) {
                    this.onTestTypeChange();
                }
            });
            this.procedureService.getProcedureRequirements(params['id']).subscribe(res => {
                this.selectedTestRequirements = res.$values;
            });
            this.procedureService.getProcedureSteps(params['id']).subscribe(res => {
                this.selectedSteps = res.$values;
            });

        });
    }

    onAddStepComplete(newStepId) {
        var selectedStepIds = new Array();
        selectedStepIds.push(newStepId);
        this.procedureService.postAddSteps(selectedStepIds, this.procedure.id).subscribe(filteredList => {
            this.selectedSteps = filteredList.$values;
            this.displayAddStep = false;
            this.filteredSelectedSteps = null;
        });
    }

    onCancelStepComplete(event) {
        this.displayAddStep = false;
    }

    onEditStepComplete(event) {
        this.procedureService.getProcedureSteps(this.id).subscribe(res => {
            this.selectedSteps = res.$values;
            this.displayEditStep = false;
        });
    }

    onEditCancelStepComplete(event) {
        this.displayEditStep = false;
    }

    onEditStep(step) {
        this.editStepId = step.id;
        this.displayEditStep = true;
    }

    onMoveStepUp(step) {
        var oldIndex = this.selectedSteps.indexOf(step);
        this.selectedSteps.splice(oldIndex - 1, 0, this.selectedSteps.splice(oldIndex, 1)[0]);
        this.updateProcedureStepDisplayOrder();
    }

    onMoveStepDown(step) {
        var oldIndex = this.selectedSteps.indexOf(step);
        this.selectedSteps.splice(oldIndex + 1, 0, this.selectedSteps.splice(oldIndex, 1)[0])
        this.updateProcedureStepDisplayOrder();
    }

    updateProcedureStepDisplayOrder() {
        this.procedureService.putProcedureStepDisplayOrder(this.selectedSteps, this.procedure.id).subscribe(filteredList => {
            this.selectedSteps = filteredList.$values;
        });
    }

    onDelete(obj, type) {
        this.confirmationService.confirm({
            message: 'Do you want to delete this record?',
            header: 'Delete Confirmation',
            icon: 'fa fa-trash',
            accept: () => {
                if (type == procedureDependentItemType.TestRequirement) {
                    this.procedureService.postDeleteProcedureRequirement(
                        this.procedure.id,
                        obj.id
                    ).subscribe(res => {
                        this.selectedTestRequirements = res.$values;
                    });
                } else if (type == procedureDependentItemType.Step) {
                    this.procedureService.postDeleteProcedureStep(
                        this.procedure.id,
                        obj.id
                    ).subscribe(res => {
                        this.selectedSteps = res.$values;
                    });
                }
            }
        });

        var overlays = $("div.ui-widget-overlay.ui-dialog-mask:visible");
        if (overlays.length > 1) {
            var maxZIndex = 0;
            overlays.each(function () {
                var index_current = parseInt($(this).css("z-index"), 10);
                if (index_current > maxZIndex) {
                    maxZIndex = index_current;
                }
            });
            overlays.each(function () {
                var index_current = parseInt($(this).css("z-index"), 10);
                if (index_current == maxZIndex) {
                    $(this).hide();
                }
            });
        }
    }

     onAddTestRequirement() {
       var selectedTestRequirementIds = new Array();
        for (var sel of this.filteredSelectedTestRequirements) {
            selectedTestRequirementIds.push(sel.id);
        }
        var inputDto = {
            testRequirementList: selectedTestRequirementIds
        }
        this.procedureService.postAddTestRequirements(selectedTestRequirementIds, this.procedure.id).subscribe(filteredList => {
            this.selectedTestRequirements = filteredList.$values;
            this.filteredSelectedTestRequirements = null;

        });
    }

     onAddStep() {
         var selectedStepIds = new Array();
         for (var sel of this.filteredSelectedSteps) {
             selectedStepIds.push(sel.id);
         }
         var inputDto = {
             stepList: selectedStepIds
         }
         this.procedureService.postAddSteps(selectedStepIds, this.procedure.id).subscribe(filteredList => {
             this.selectedSteps = filteredList.$values;
             this.filteredSelectedSteps = null;
         });
     }

    filterTestRequirements(event) {
        this.testrequirementService.filterByProcedureId(this.procedure.id, event.query).subscribe(filteredList => {
            this.filteredTestRequirements = filteredList.$values;
        });
    }

    filterSteps(event) {
        this.stepService.filterByProcedureId(this.procedure.id, event.query).subscribe(response => {
            if (response.isSuccess)
                this.filteredSteps = response.result;
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
                //resultMap.concat(response.result);
                for (let template of response.result) {
                    var temp = {
                        label: template.label,
                        value: template.value
                    }
                    resultMap.push(temp);
                }
                this.testTypes = resultMap;
            }
        });
    }
     getTestModes() {
        //    userRoles
        this.testmodeservice.getAllTestModes().subscribe(response => {
            this.testAllModes = new Array();
            if (response != null) {
                var resultMap = new Array();
                resultMap.push({
                    label: "Select Test Mode",
                    value: null
                });
                for (let template of response.result) {
                    var temp = {
                        label: template.name,
                        value: template.id
                    }
                    resultMap.push(temp);
                }
                this.testAllModes = resultMap;
            }
        });
    }
    isUpButtonVisible(step)
    {
        if (this.selectedSteps != undefined && this.selectedSteps.length > 1 && step.id != this.selectedSteps[0].id)
            return true;
        return false;
    }

    isDownButtonVisible(step) {
        if (this.selectedSteps != undefined && this.selectedSteps.length > 1 && step.id != this.selectedSteps[this.selectedSteps.length - 1].id)
            return true;
        return false;
    }

    onTestTypeChange() {
        this.testAllModes = new Array();
        //this.testModes
        this.testtypeService.getById(this.procedure.testTypeId).subscribe(response => {
            if (response != null) {
                if (response != null && response.result.selectedTestModesList != null && response.result.selectedTestModesList.length > 0) {
                    var resultMap = new Array();
                    resultMap.push({
                        label: "Select Test Mode",
                        value: null
                    });
                    for (let template of response.result.selectedTestModesList) {
                        var temp = {
                            label: template.label,
                            value: template.value
                        }
                        resultMap.push(temp);
                    }
                    //resultMap.concat(response.result.selectedTestModesList);
                    this.testAllModes = resultMap;
                }
                else {
                    var testAllModes = [{
                        label: "No Modes available",
                        value: null
                    }];
                    this.testAllModes = testAllModes;
                }
            }
        });
    }

    onSubmit() {

        this.procedureService.postUpdate(this.procedure).subscribe(res => {
            //this.router.navigate(['procedure/details', res.$values.id]);
        });
    }
}