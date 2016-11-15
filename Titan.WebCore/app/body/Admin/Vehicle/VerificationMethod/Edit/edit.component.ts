import { VerificationMethodService} from '../../../../../shared/services/verificationmethod.service';
import { ActivatedRoute} from '@angular/router';
import { Component } from '@angular/core';
import { InputTextModule, PanelModule } from 'primeng/primeng';
import "rxjs/add/operator/map";

@Component({
    selector: 'edit',
    templateUrl: 'app/body/Admin/Vehicle/VerificationMethod/Edit/edit.component.html'
})
export class EditComponent {
    title = "VerificationMethod Edit";

    id;
    username: string;
    description: string;
    model: any;

    constructor(private route: ActivatedRoute, private service: VerificationMethodService) {
        route.params.subscribe(params => this.id = params['id']);
        console.log(this.id);
        service.getById(this.id).subscribe(res => {
            console.log("---- Inside Constructor PlatformById ----",
                res); this.username = res.Name;
            this.description = res.Description; this.model = res
        });
        console.log(this.model);
    }

    ngOnInit() {
    }

    onSubmit(formRef) {
        console.log(formRef);
        let platformData: any = { id: this.id, name: '', description: '', locale: '' };
        platformData.name = formRef.username;
        platformData.description = formRef.description;
        platformData.locale = "en-us";

        console.log(platformData);
        //this.platformService.postUpdatePlatform(platformData).subscribe(res => console.log(res));
    }
}