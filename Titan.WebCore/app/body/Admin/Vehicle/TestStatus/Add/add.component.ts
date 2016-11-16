import { Component} from '@angular/core';
import { TestStatusService } from '../../../../../shared/services/testStatus.service';
import { Validators } from '@angular/forms';
import { SelectItem } from 'primeng/primeng';
//import { DataTable,PanelMenuModule, PanelModule ,InputTextModule,InputTextareaModule, ButtonModule } from 'primeng/primeng';

@Component({
    selector: 'add-testStatus',
    styleUrls: ['app/body/Admin/Vehicle/TestStatus/Add/add.component.css'], 
    templateUrl: 'app/body/Admin/Vehicle/TestStatus/Add/add.component.html'
})

export class AddComponent {
    username: string;
    description:string;
    //constructor(private dataService: TestStatusService) {
    //        }

    constructor(private service: TestStatusService) {

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
        formData.name = formRef.username;
        formData.description = formRef.description;
        formData.locale = "en-us";

        console.log(formData);
        this.service.postAdd(formData).subscribe(res => console.log(res));
    }
}
