import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AddComponent } from "./add.component";
import { FormsModule} from '@angular/forms';
import { TestRequestSensorService } from '../../../shared/services/testrequestsensor.service';
import { EquipmentTypeService } from '../../../shared/services/equipmentType.service';
import { DataTableModule, TabViewModule, ButtonModule, InputTextareaModule, InputTextModule, CalendarModule, DropdownModule, FileUploadModule, PanelModule } from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import addRoutes from "./add.routes";

@NgModule({
    imports: [CommonModule, RouterModule, FormsModule, DataTableModule, TabViewModule, ButtonModule, InputTextareaModule, CalendarModule, InputTextModule, FileUploadModule, PanelModule, DropdownModule, addRoutes],
    providers: [EquipmentTypeService, TestRequestSensorService],
    declarations: [AddComponent]
})

export default class AddModule { }