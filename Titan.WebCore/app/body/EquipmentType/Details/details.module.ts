import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DetailsComponent } from "./details.component";
import { FormsModule} from '@angular/forms';

import { EquipmentTypeService } from '../../../shared/services/equipmentType.service';
import { DataTableModule, TabViewModule,  ButtonModule,DialogModule, InputTextareaModule, InputTextModule, PanelModule, FileUploadModule, GrowlModule  } from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import detailsRoutes from "./details.routes";

@NgModule({
    imports: [CommonModule, RouterModule, FormsModule,DialogModule, DataTableModule, TabViewModule, ButtonModule, InputTextareaModule, InputTextModule, PanelModule, FileUploadModule, GrowlModule, detailsRoutes],
    providers: [EquipmentTypeService],
    declarations: [DetailsComponent]
})

export default class DetailsModule { }