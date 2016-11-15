import { EquipmentTypeService } from '../../../../../shared/services/equipmentType.service';
import { ActivatedRoute} from '@angular/router';
import { Component } from '@angular/core';
import { InputTextModule, PanelModule } from 'primeng/primeng';
import "rxjs/add/operator/map";

@Component({
    selector: 'edit',
    templateUrl: 'app/body/Admin/Vehicle/EquipmentType/Edit/edit.component.html'
})
export class EditComponent {
    title = "Equipment Type Edit";

    id;
    username: string;
    description: string;
    model: any;

    constructor(private route: ActivatedRoute, private service: EquipmentTypeService) {
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
        let formData: any = { id: this.id, name: '', description: '', locale: '' };
        formData.name = formRef.username;
        formData.description = formRef.description;
        formData.locale = "en-us";

        console.log(formData);
        //this.service.postUpdate(formData).subscribe(res => console.log(res));
    }
}