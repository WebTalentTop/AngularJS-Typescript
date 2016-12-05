import { Component } from '@angular/core';
import { DataTableModule,TabViewModule, ButtonModule, InputTextareaModule,InputTextModule, PanelModule, 
    DropdownModule, SelectItem } from 'primeng/primeng';
import { Router } from '@angular/router';

import { StepService } from '../../../shared/services/step.service';

enum StepTypeEnum
{
    Checklist = <any>'BC202C07-6275-4D9B-826D-1BE0171CEA8F',
    TorqueSheet =<any>'E5023192-2AA8-4EBB-A141-5F477BC31716',
    InstallationSheet =<any>'6F828638-D15C-473F-AFB4-49940C09FA49',
    LogSheet =<any>'BB9F4BF6-4F28-4591-A60F-A2E1A5E64480',
    InspectionSheet =<any>'1AF2D2E3-0517-4092-B9D5-C71CA0EF1854',
    RemovalSheet =<any>'58DD1E1D-2A9F-42C0-B387-4E14349D6DCE',
    LoadSheet =<any>'7813C24A-450F-4026-B38F-E8F584CEA51C',
    PictureSheet =<any>'8D875260-0811-4AEE-A5DD-7DCA6CFCFEB3'
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
    selector: 'add-step',
    styleUrls: ['app/body/Step/Add/add.component.css'], 
    templateUrl: 'app/body/Step/Add/add.component.html'
})
export class AddComponent {
    
    public stepDetails: any;
    public stepTypes: any;
    public stepFrequencies:any;
    public stepTypeDetailList:any;
    public stepTypeDetailLabelText: string = "";
    public showRepeatDetails:boolean;
    public showTestOrCycle:boolean;
    constructor(private service: StepService, private router: Router) {

    }

    ngOnInit() {
        this.stepDetails = new Object();
        this.getStepTypes();
        this.getStepFrequencies();
    }

    onStepTypeChange(){
        this.service.getStepTypeDetails(this.stepDetails.stepTypeId).subscribe(response => {
            this.stepTypeDetailList = new Array();
            if (response != null && response.isSuccess) {
                this.stepTypeDetailList = this.convertToArray(response.result.data, "");
                this.stepTypeDetailLabelText = response.result.labelText;
            }else{
                this.stepTypeDetailLabelText = "";
                this.stepTypeDetailList = null;
            }
        });
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
                this.stepTypes = this.convertToArray(response.result, "Select Step Type");
            }
        });
    }

    getStepFrequencies(){
        this.service.getStepFrequencies().subscribe(response => {
            this.stepFrequencies = new Array();
            if (response != null) {
                this.stepFrequencies = this.convertToArray(response.result, "Select Step Frequency");
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
        
        this.service.postAdd(this.stepDetails).subscribe(res => { 
            console.log(res);
            if (res.isSuccess){
                this.router.navigate(["/step/details/", res.result]);
            }
        });
    }
}
