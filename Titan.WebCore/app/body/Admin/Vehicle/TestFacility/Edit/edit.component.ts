import { PlatformService} from '../../../../../shared/services/platform.services';
import { ActivatedRoute} from '@angular/router';
import { InputTextModule, PanelModule } from 'primeng/primeng';
import { Component } from '@angular/core';
import "rxjs/add/operator/map";

@Component({
    selector: 'edit',
    templateUrl: 'app/body/Admin/Vehicle/TestFacility/Edit/edit.component.html'
})
export class EditComponent {
    title = "TestFacility Edit";

    id;
    username: string;
    description: string;
    model:any;

    constructor(private route:ActivatedRoute, private platformService: PlatformService) {
        route.params.subscribe(params => this.id = params['id']);
        console.log(this.id);
        platformService.getPlatformById(this.id).subscribe(res => this.model = res);
    }

    ngOnInit() {
    }

    onSubmit(formRef) {
        console.log(formRef);
        let platformData: any = { id: this.id, name: '', description: '', locale: ''};
        platformData.name = formRef.username;
        platformData.description = formRef.description;
        platformData.locale = "en-us";

        console.log(platformData);
        //this.platformService.postUpdatePlatform(platformData).subscribe(res => console.log(res));
    }
}