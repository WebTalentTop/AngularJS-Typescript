import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DetailsComponent } from "./details.component";
import { FormsModule} from '@angular/forms';
import { TestRequestSensorService } from '../../../shared/services/testrequestsensor.service';
import { EquipmentTypeService } from '../../../shared/services/equipmentType.service';

import { DataTableModule, TabViewModule, ButtonModule, InputTextareaModule, InputTextModule, CalendarModule, DropdownModule, FileUploadModule, PanelModule } from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import detailsRoutes from "./details.routes";

@NgModule({
    imports: [CommonModule, RouterModule, FormsModule, DataTableModule, TabViewModule, ButtonModule, InputTextareaModule, CalendarModule, InputTextModule, FileUploadModule, PanelModule, DropdownModule, detailsRoutes],
    providers: [EquipmentTypeService, TestRequestSensorService],
    declarations: [DetailsComponent]
})

export default class DetailsModule { }