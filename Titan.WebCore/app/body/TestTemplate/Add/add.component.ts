import { Component} from '@angular/core';
import { TestTemplateService } from './../../../shared/services/testtemplate.services';
import { TestTypeService } from './../../../shared/services/testtype.services';
import { TestModeService } from './../../../shared/services/testmode.services';
import { Validators } from '@angular/forms';
import {Router} from '@angular/router'
import { SelectItem } from 'primeng/primeng';

@Component({
    selector: 'add-testtemplate',
    styleUrls: ['app/body/TestTemplate/Add/add.component.css'], 
    templateUrl: 'app/body/TestTemplate/Add/add.component.html'
})

export class AddComponent {
    public testTemplate:any;
    public testTypes: any;
    public testModes: Array<any> = new Array();
    constructor(private testTemplateService: TestTemplateService, private testTypeService: TestTypeService,
        private testModeService: TestModeService, private router: Router) {

    }

    ngOnInit() {
        this.testTemplate = new Object();
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
        // console.log(formRef);
        // console.log(this.username);
        // console.log(this.description);
        // formRef.locale = "en-us";
        // formRef.isDeleted = false;
        // let platformData: any = {name: '', description: '', locale:'', isDeleted: false};
        // platformData.name = formRef.username;
        // platformData.description = formRef.description;
        // platformData.locale = "en-us";

        // console.log(platformData);
        this.testTemplateService.postAdd(this.testTemplate).subscribe(res => {
            console.log('fjdalhfkj ' + res)
            this.router.navigate(['testtemplate/details', res]);
        });
    }
}
                                                                          