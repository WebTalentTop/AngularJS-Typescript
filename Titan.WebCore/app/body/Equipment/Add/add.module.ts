import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';
import { AddComponent } from "./add.component";
import { EquipmentService} from '../../../shared/services/equipment.service';
import { TestFacilityService } from '../../../shared/services/testfacility.service';

import { DataTableModule, TabViewModule, ButtonModule, InputTextareaModule, InputTextModule, CalendarModule,  DropdownModule, CheckboxModule, PanelModule, MessagesModule, GrowlModule } from 'primeng/primeng';
import { EditorModule, SharedModule } from 'primeng/primeng';

import { RouterModule } from "@angular/router";
import addRoutes from "./add.routes";


@NgModule({

    imports: [CheckboxModule,EditorModule, SharedModule, CommonModule, RouterModule, FormsModule, DataTableModule, TabViewModule, ButtonModule, InputTextareaModule, CalendarModule, InputTextModule, PanelModule, DropdownModule, MessagesModule, GrowlModule, addRoutes],


    providers: [EquipmentService, TestFacilityService],
    declarations: [AddComponent]
})

export default class AddModule{}
