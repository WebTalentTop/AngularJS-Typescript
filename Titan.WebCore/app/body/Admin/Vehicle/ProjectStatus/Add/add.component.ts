import { Component} from '@angular/core';
import { ProjectStatusService } from '../../../../../shared/services/projectStatus.service';
import { Validators } from '@angular/forms';
import { SelectItem } from 'primeng/primeng';
import { Router } from '@angular/router';
//import { DataTable,PanelMenuModule, PanelModule ,InputTextModule,InputTextareaModule, ButtonModule } from 'primeng/primeng';

@Component({
    selector: 'add-projectStatus',
    templateUrl: 'app/body/Admin/Vehicle/ProjectStatus/Add/add.component.html'
})

export class AddComponent {
    username: string;
    description:string;

    constructor(private service: ProjectStatusService, private router: Router) {

    }

    ngOnInit() {

    }
    onSubmit(formRef) {
        console.log(formRef);
        console.log(this.username);
        console.log(this.description);
        formRef.locale = "en-us";
        formRef.isDeleted = false;
        let formData: any = {name: '', description: '', locale:'', isDeleted: false};
        formData.name = formRef.name;
        formData.description = formRef.description;
        formData.locale = "en-us";

        console.log(formData);
        this.service.postAdd(formData).subscribe(res => 
          console.log(res)
           // this.router.navigate(["/vehicle/projectStatus/", res]);
        

            );
        this.router.navigate(["/vehicle/projectStatus"]);
                  // );
       
    }
}
