import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';
import { AddComponent } from "./add.component";
import { EquipmentService} from '../../../shared/services/equipment.service';
import { TestFacilityService } from '../../../shared/services/testfacility.service';
import { DataTableModule, TabViewModule, ButtonModule, InputTextareaModule, InputTextModule, CalendarModule, PanelModule, DropdownModule } from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import addRoutes from "./add.routes";

@NgModule({
    imports: [
        CommonModule,
        TabViewModule, 
        FormsModule, 
        DataTableModule, 
        InputTextareaModule, 
        InputTextModule, 
        PanelModule, 
        CalendarModule,
        ButtonModule,
        DropdownModule, 
        addRoutes
    ],
    providers: [EquipmentService, TestFacilityService],
    declarations: [AddComponent]
})

export default class AddModule{}