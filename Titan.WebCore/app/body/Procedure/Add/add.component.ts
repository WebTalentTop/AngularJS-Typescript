import { Component} from '@angular/core';
import { ProcedureService } from '../../../shared/services/procedure.service'
import { TestTypeService } from '../../../shared/services/testtype.service'
import { TestModeService } from '../../../shared/services/testmode.service'
import { Validators } from '@angular/forms';
import {Router} from '@angular/router'
import { SelectItem } from 'primeng/primeng';

@Component({
    selector: 'add-procedure',
    styleUrls: ['app/body/Procedure/Add/add.component.css'], 
    templateUrl: 'app/body/Procedure/Add/add.component.html'
})

export class AddComponent {
    public procedure:any;
    public testTypes: any;
    public testModes: Array<any> = new Array();
    constructor(private procedureService: ProcedureService, private testTypeService: TestTypeService,
        private testModeService: TestModeService, private router: Router) {

    }

    ngOnInit() {
        this.procedure = new Object();
        this.getTestType();
        var testMode = {
            label: "Select Test Type to Populate",
            value: null
        };
        this.testModes.push(testMode);
    }

    getTestType(){
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
        this.testModeService.getAllByTestTypeId(this.procedure.testTypeId).subscribe(response => {
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
        this.procedureService.postAdd(this.procedure).subscribe(res => {
            if (res.isSuccess){
                this.router.navigate(['procedure/details', res.result]);
            }
        });
    }
}
                                                                          