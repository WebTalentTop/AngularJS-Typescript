import { Component} from '@angular/core';
import { PlatformService } from '../../../../../shared/services/platform.services';
import { Validators } from '@angular/forms';
import { SelectItem } from 'primeng/primeng';
//import { DataTable,PanelMenuModule, PanelModule ,InputTextModule,InputTextareaModule, ButtonModule } from 'primeng/primeng';

@Component({
    selector: 'add-platform',
    styleUrls: ['app/body/Admin/Vehicle/Platform/Add/add.component.css'], 
    templateUrl: 'app/body/Admin/Vehicle/Platform/Add/add.component.html'
})

export class AddComponent {
    username: string;
    description:string;
    //constructor(private dataService: PlatformService) {
    //        }

    constructor(private platformService: PlatformService) {

    }

    ngOnInit() {

    }
    onSubmit(formRef) {
        console.log(formRef);
        console.log(this.username);
        console.log(this.description);
        formRef.locale = "en-us";
        formRef.isDeleted = false;
        let platformData: any = {name: '', description: '', locale:'', isDeleted: false};
        platformData.name = formRef.username;
        platformData.description = formRef.description;
        platformData.locale = "en-us";

        console.log(platformData);
        this.platformService.postAddPlatform(platformData).subscribe(res => console.log(res));
    }
}
