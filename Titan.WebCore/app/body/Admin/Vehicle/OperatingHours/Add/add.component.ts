import { Component} from '@angular/core';
import { OperatingHoursService } from '../../../../../shared/services/operatingHours.service';
import { Validators } from '@angular/forms';
import { SelectItem } from 'primeng/primeng';
import { Router, Params, ActivatedRoute } from '@angular/router';
//import { DataTable,PanelMenuModule, PanelModule ,InputTextModule,InputTextareaModule, ButtonModule } from 'primeng/primeng';

@Component({
    selector: 'add-operatingHours',
    templateUrl: 'app/body/Admin/Vehicle/OperatingHours/Add/add.component.html'
})

export class AddComponent {
    username: string;
    description:string;
    startTime: any;
    endTime: any;
    constructor(private service: OperatingHoursService, private router: Router, private route: ActivatedRoute) {

    }

    ngOnInit() {

    }
    onSubmit(formRef) {
        //console.log(formRef);
        //console.log(this.username);
        //console.log(this.description);
        //formRef.locale = "en-us";
        //formRef.isDeleted = false;
        let formData: any = {name: '', startTime: '', endTime:'', frequency: '' ,isDeleted: false};
        formData.name = formRef.name;
        formData.frequency = formRef.frequency;
        formData.startTime = formRef.startTime;
        formData.endTime = formRef.endTime;
        formData.locale = "en-us";
        let added: any="true";
        console.log(formData);
        this.service.postAdd(formData).subscribe(res => {
            console.log('--------------res result------------', +res)

            // this.router.navigate(["/vehicle/projectStatus/", res]);
            if (res.isSuccess) {
                //this.router.navigate([], {q})
                this.router.navigate(["/admin/vehicle/operatingHours"], { queryParams: { page: 1 } });
               
            }
           
        }
            );
     
                  // );
       
    }
}
