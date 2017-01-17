import { Component} from '@angular/core';
import { EquipmentService } from '../../../../../shared/services/Containers/EquipmentService/equipment.service';
import { Validators } from '@angular/forms';
import { SelectItem } from 'primeng/primeng';
//import { DataTable,PanelMenuModule, PanelModule ,InputTextModule,InputTextareaModule, ButtonModule } from 'primeng/primeng';

@Component({
    selector: 'add-equipment',
    styleUrls: ['app/body/Admin/Vehicle/Equipment/Add/add.component.css'], 
    templateUrl: 'app/body/Admin/Vehicle/Equipment/Add/add.component.html'
})

export class AddComponent {
    username: string;
    description:string;
    //constructor(private dataService: PlatformService) {
    //        }

    constructor(private service: EquipmentService) {

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
