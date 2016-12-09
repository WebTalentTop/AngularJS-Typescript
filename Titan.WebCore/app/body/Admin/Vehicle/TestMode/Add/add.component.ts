import { Component} from '@angular/core';
import { TestModeService } from '../../../../../shared/services/testMode.service';
import { Validators } from '@angular/forms';
import { SelectItem } from 'primeng/primeng';
import { Router, Params, ActivatedRoute } from '@angular/router';
//import { DataTable,PanelMenuModule, PanelModule ,InputTextModule,InputTextareaModule, ButtonModule } from 'primeng/primeng';

@Component({
    selector: 'add-testMode',
    templateUrl: 'app/body/Admin/Vehicle/TestMode/Add/add.component.html'
})

export class AddComponent {
    username: string;
    description:string;
    testTypeDetails: any;
    selectedTestTypes: any;
    constructor(private service: TestModeService, private router: Router, private route: ActivatedRoute) {

    }

    ngOnInit() {

        this.service.getAllTestTypes().subscribe(TestTypesList => {
            this.testTypeDetails = TestTypesList.$values;
            //if (TestTypesList != null) {
            //    var resultMap = new Array();
            //    this.testTypeDetails = TestTypesList.$values;
            //    for (let template of TestTypesList.$values) {
            //        var temp = {
            //            label: template.name,
            //            value: template.id
            //        }
            //        resultMap.push(temp);
            //    }
            //    this.testTypeDetails = resultMap;
            //}

        });

    }
    onSubmit(formRef) {
        //console.log(formRef);
        //console.log(this.username);
        //console.log(this.description);
        //formRef.locale = "en-us";
        //formRef.isDeleted = false;
        let formData: any = { name: '', description: '', locale: '', isDeleted: false, TestTypeIdList: this.selectedTestTypes };
        formData.name = formRef.name;
        formData.description = formRef.description;
        formData.locale = "en-us";
        let added: any="true";
        console.log(formData);
        this.service.postAdd(formData).subscribe(res => {
            console.log('--------------res result------------', +res)

            // this.router.navigate(["/vehicle/projectStatus/", res]);
            if (res.isSuccess) {
                //this.router.navigate([], {q})
                this.router.navigate(["/vehicle/testMode"], { queryParams: { page: 1 } });
               
            }
           
        }
            );
     
                  // );
       
    }
}
