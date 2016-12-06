import { Component} from '@angular/core';
import { TestRoleService } from '../../../../../shared/services/testRole.service';
import { Validators } from '@angular/forms';
import { SelectItem } from 'primeng/primeng';
import { Router, Params, ActivatedRoute } from '@angular/router';
//import { DataTable,PanelMenuModule, PanelModule ,InputTextModule,InputTextareaModule, ButtonModule } from 'primeng/primeng';

@Component({
    selector: 'add-testRole',
    templateUrl: 'app/body/Admin/Vehicle/TestRole/Add/add.component.html'
})

export class AddComponent {
    username: string;
    description:string;

    constructor(private service: TestRoleService, private router: Router, private route: ActivatedRoute) {

    }

    ngOnInit() {

    }
    onSubmit(formRef) {
        //console.log(formRef);
        //console.log(this.username);
        //console.log(this.description);
        //formRef.locale = "en-us";
        //formRef.isDeleted = false;
        let formData: any = {name: '', description: '', locale:'', isDeleted: false};
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
                this.router.navigate(["/vehicle/testRole"], { queryParams: { page: 1 } });
               
            }
           
        }
            );
     
                  // );
       
    }
}
