import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DetailsComponent } from "./details.component";
import { FormsModule} from '@angular/forms';
import { EquipmentService } from '../../../shared/services/equipment.service';
import { TestFacilityService } from '../../../shared/services/testfacility.service';
import { DataTableModule, TabViewModule, ButtonModule, InputTextareaModule, InputTextModule, CalendarModule, CheckboxModule, DropdownModule, PanelModule, MessagesModule, GrowlModule } from 'primeng/primeng';

import { RouterModule } from "@angular/router";
import detailsRoutes from "./details.routes";

@NgModule({
    imports: [CommonModule, RouterModule, FormsModule, DataTableModule, TabViewModule, ButtonModule, InputTextareaModule, CheckboxModule, CalendarModule, InputTextModule, PanelModule, DropdownModule, MessagesModule, GrowlModule, detailsRoutes],

    providers: [EquipmentService, TestFacilityService],
    declarations: [DetailsComponent]
})

export default class DetailsModule { }