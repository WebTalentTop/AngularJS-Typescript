import { Component} from '@angular/core';
import { TitanUserService } from '../../../../../shared/services/titanUser.service';
import { Validators } from '@angular/forms';
import { SelectItem } from 'primeng/primeng';
import { Router, Params, ActivatedRoute } from '@angular/router';
//import { DataTable,PanelMenuModule, PanelModule ,InputTextModule,InputTextareaModule, ButtonModule } from 'primeng/primeng';

@Component({
    selector: 'add-titanUser',
    templateUrl: 'app/body/Admin/Vehicle/TitanUser/Add/add.component.html'
})

export class AddComponent {
    username: string;
    description:string;

    constructor(private service: TitanUserService, private router: Router, private route: ActivatedRoute) {

    }

    ngOnInit() {

    }
    onSubmit(formRef) {
        //console.log(formRef);
        //console.log(this.username);
        //console.log(this.description);
        //formRef.locale = "en-us";
        //formRef.isDeleted = false;
        let formData: any = {id:'',
            username: '', firstName: '', lastName: '', emailAddress: '', defaultLocale: '', isDeleted: 'false', departmentId: '1945203B-8261-7BAA-D1FA-9FD4B71D89EB',  userCreatedById: '',
            userModifiedById: '',
            createdOn: '',
            modifiedOn: ''};
        formData.username = formRef.username;
        formData.lastName = formRef.lastName;
        formData.firstName = formRef.firstName;
      //  formData.displayName = formRef.displayName;
        formData.emailAddress = formRef.emailAddress;
       
        let added: any="true";
        console.log(formData);
        this.service.postAdd(formData).subscribe(res => {
            console.log('--------------res result------------', +res)

            // this.router.navigate(["/vehicle/projectStatus/", res]);
            if (res.isSuccess) {
                //this.router.navigate([], {q})
                this.router.navigate(["/vehicle/titanUser"], { queryParams: { page: 1 } });
               
            }
           
        }
            );
     
                  // );
       
    }
}
