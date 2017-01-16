import { StepService } from '../../../shared/services/step.service';
import { DataTableModule,TabViewModule, ButtonModule, InputTextareaModule,InputTextModule, PanelModule, 
    DropdownModule, SelectItem, ConfirmationService } from 'primeng/primeng';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { TimeEntryService } from '../../../shared/services/timeEntry.service';
import { IModule } from '../../../shared/services/definitions/IModule';

enum StepTypeEnum
{
    Checklist = <any>'BC202C07-6275-4D9B-826D-1BE0171CEA8F',
    TorqueSheet =<any>'E5023192-2AA8-4EBB-A141-5F477BC31716',
    InstallationSheet =<any>'6F828638-D15C-473F-AFB4-49940C09FA49',
    LogSheet =<any>'BB9F4BF6-4F28-4591-A60F-A2E1A5E64480',
    InspectionSheet =<any>'1AF2D2E3-0517-4092-B9D5-C71CA0EF1854',
    RemovalSheet =<any>'58DD1E1D-2A9F-42C0-B387-4E14349D6DCE',
    LoadSheet =<any>'7813C24A-450F-4026-B38F-E8F584CEA51C',
    PictureSheet = <any>'8D875260-0811-4AEE-A5DD-7DCA6CFCFEB3',
    Instructions = <any>'E1CC6B89-E04F-4D42-9BB6-55B3FCF358EE',

}

enum StepFrequencyEnum 
{
    Weekly	= <any>'C5023192-2AA8-4EBB-A141-5F477BC31716',
    Test	= <any>'CF828638-D15C-473F-AFB4-49940C09FA49',
    Monthly	= <any>'CB9F4BF6-4F28-4591-A60F-A2E1A5E64480',
    Daily	= <any>'C8DD1E1D-2A9F-42C0-B387-4E14349D6DCE',
    BiMonthly	= <any>'CD875260-0811-4AEE-A5DD-7DCA6CFCFEB3',
    Cycles	= <any>'CC202C07-6275-4D9B-826D-1BE0171CEA8F'
}

@Component({
    selector: 'details-step',
    templateUrl: 'app/body/Step/Details/details.component.html'
})
export class DetailsComponent {
    public stepDetails: any;
    public stepTypes: any;
    public stepFrequencies:any;
    public stepTypeDetailList:any;
    public stepTypeDetailLabelText: string = "";
    public showRepeatDetails:boolean;
    public showTestOrCycle:boolean;
    public id:any;
    public stepTypesLoaded:boolean;
    public stepFrequenciesLoaded:boolean;
    public testStages: any;
    public displayModulePopUp: boolean;
    public addStepTypeDetailLabelText: string;
    public isAddModuleVisible: boolean = false;
    public isTorqueSheetNameVisible: boolean = false;
    public isModuleDivVisible: boolean = false;
    public stepModules: IModule[];
    @Input() isDisplayComponentInPopUp: boolean;
    @Input() private set stepId(id: string) {
        this.id = id;
        if (this.stepTypesLoaded && this.stepFrequenciesLoaded)
            this.getDetails(this.id);
    }
    @Output() onEditComplete: EventEmitter<any> = new EventEmitter<any>();
    @Output() onCancelComplete: EventEmitter<any> = new EventEmitter<any>();
    constructor(
        private service: StepService,
        private route: ActivatedRoute,
        private router: Router,
        private dataService: StepService,
        private dataTimeService: TimeEntryService
    ) {
        this.route.params.subscribe(params => 
        {
            this.id = params['id'];
            if(this.stepTypesLoaded && this.stepFrequenciesLoaded)
                this.getDetails(this.id);
        });
    }
    
    ngOnInit() {
        this.stepModules = new Array();
        this.getStepTypes();
        this.getStepFrequencies();
        this.getTestStages();
    }

    getDetails(id) {
        if (id != undefined) {
            this.service.getById(id).subscribe(response => {
                if (response != null && response.isSuccess) {
                    this.stepDetails = response.result;
                    for (var stpType of this.stepTypes) {
                        if (stpType.value != null && stpType.value.id == this.stepDetails.stepTypeId)
                            this.stepDetails.stepType = stpType.value;
                    }
                    if (this.stepDetails.stepType != null && this.stepDetails.stepType.moduleTypeId != null) {
                        this.getStepModules();
                    }
                    //this.stepDetails.stepType = { id: this.stepDetails.stepTypeId };
                    this.stepDetails.stepTypeDetailIds = this.stepDetails.stepTypeDetailIds.$values;
                    this.onRepeatChange(this.stepDetails.repeatStep);
                    this.stepDetails.repeatStep = this.stepDetails.repeatStep.toString();
                    this.onStepFrequencyChange();
                    this.onStepTypeChange();
                }
            });
        }
    }

    getStepModules() {
        this.service.getStepModules(this.stepDetails.id).subscribe(response => {
            if (response.isSuccess) {
                this.stepModules = response.result;
            }
        });
    }

    getTestStages() {
        //    userRoles
        this.dataTimeService.getTestStages().subscribe(response => {
            this.testStages = new Array();
            if (response != null) {
                var resultMap = new Array();
                resultMap.push({
                    label: "Select Test Stage",
                    value: null
                });
                for (let template of response) {
                    var temp = {
                        label: template.name,
                        value: template.id
                    }
                    resultMap.push(temp);
                }
                this.testStages = resultMap;
            }
        });
    }

    onStepTypeChange() {
        this.stepDetails.stepTypeId = this.stepDetails.stepType != null ? this.stepDetails.stepType.id : null;
        if (this.stepDetails.stepType != null) {
            if (this.stepDetails.stepType.moduleTypeId == null) {
                this.isTorqueSheetNameVisible = true;
                this.isModuleDivVisible = false;
                this.stepTypeDetailLabelText = this.stepDetails.stepType.name;
            } else {
                this.isModuleDivVisible = true;
                this.isTorqueSheetNameVisible = false;
                this.addStepTypeDetailLabelText = "Add " + this.stepDetails.stepType.name;
            }
        }
    
        this.service.getStepTypeDetails(this.stepDetails.stepTypeId).subscribe(response => {
            this.stepTypeDetailList = new Array();
            if (response != null && response.isSuccess) {
                this.stepTypeDetailList = this.convertToArray(response.result.data, "");
                this.stepTypeDetailLabelText = response.result.labelText;
            } else {
                this.stepTypeDetailLabelText = "";
                this.stepTypeDetailList = null;
            }
        });

    }

    onCancelModuleComplete(event) {
        this.isAddModuleVisible = false;
        //this.displayModulePopUp = false;
    }

    onAddModule() {
        this.isAddModuleVisible = true;
    }

    onAddModuleComplete(module:IModule) {
        this.isAddModuleVisible = false;

        var modules = new Array();
        modules.push(module.id);
        this.service.postUpdate(this.stepDetails).subscribe(res => {
            if (res.isSuccess) {
                
            }
        });
        this.service.postAddStepModule(modules, this.stepDetails.id).subscribe(res => {
            if (res.isSuccess) {
                this.isAddModuleVisible = false;
                this.stepModules = res.result;
            }
        });
        //this.displayModulePopUp = false;
    }

    onRepeatChange(isRepeat){
        if(isRepeat == true){
            this.showRepeatDetails = true;
        }else{
            this.showRepeatDetails = false;
        }
    }

    onStepFrequencyChange(){
        if(this.stepDetails.stepFrequencyId.toUpperCase() == StepFrequencyEnum.Cycles || this.stepDetails.stepFrequencyId.toUpperCase() == StepFrequencyEnum.Test){
            this.showTestOrCycle = true;
        }
        else{
            this.showTestOrCycle = false;
            this.stepDetails.CycleOrTestPercentages = null; 
        }
    }

    getStepTypes(){
//    testTypes
        this.service.getStepTypes().subscribe(response => {
            this.stepTypes = new Array();
            if (response != null) {
                //this.stepTypes = this.convertToArray(response.result, );
                var resultMap = new Array();
                resultMap.push({
                    label: "Select Step Type",
                    value: null
                });
                for (let template of response.result) {
                    var temp = {
                        label: template.name,
                        value: template
                    }
                    resultMap.push(temp);
                }
                this.stepTypes = resultMap;
                this.stepTypesLoaded = true;
                if(this.stepTypesLoaded && this.stepFrequenciesLoaded)
                    this.getDetails(this.id);
            }
        });
    }

    getStepFrequencies(){
        this.service.getStepFrequencies().subscribe(response => {
            this.stepFrequencies = new Array();
            if (response != null) {
                this.stepFrequencies = this.convertToArray(response.result, "Select Step Frequency");
                this.stepFrequenciesLoaded = true;
                if(this.stepTypesLoaded && this.stepFrequenciesLoaded)
                    this.getDetails(this.id);
            }
        });
    }

    convertToArray(data, initialLabel){
        var resultMap = new Array();
        if(initialLabel != ""){
            resultMap.push({
                label: initialLabel,
                value: null
            });
        }
        for (let template of data) {
            var temp = {
                label: template.name,
                value: template.id
            }
            resultMap.push(temp);
        }
        return resultMap;
    }

    onSubmit(formRef) {
        
        this.service.postUpdate(this.stepDetails).subscribe(res => { 
            if (res.isSuccess){
                if (!this.isDisplayComponentInPopUp) {
                    this.router.navigate(["/step/"]);
                } else {
                    this.onEditComplete.emit(res.result);
                }
            }
        });
    }

    onCancel() {
        if (!this.isDisplayComponentInPopUp) {
            this.router.navigate(["/step/"]);
        } else {
            this.onCancelComplete.emit(true);
        }
    }
}