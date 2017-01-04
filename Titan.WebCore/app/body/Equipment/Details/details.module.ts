import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DetailsComponent } from "./details.component";
import { FormsModule} from '@angular/forms';
import { EquipmentService } from '../../../shared/services/equipment.service';
import { TestFacilityService } from '../../../shared/services/testfacility.service';
import { CheckboxModule,EditorModule, SharedModule,DataTableModule, TabViewModule, ButtonModule, InputTextareaModule, InputTextModule, CalendarModule, DropdownModule, PanelModule, MessagesModule, GrowlModule } from 'primeng/primeng';

import { RouterModule } from "@angular/router";
import detailsRoutes from "./details.routes";

@NgModule({
    imports: [CheckboxModule,EditorModule, SharedModule,CommonModule, RouterModule, FormsModule, DataTableModule, TabViewModule, ButtonModule, InputTextareaModule, CalendarModule,  InputTextModule, PanelModule, DropdownModule, MessagesModule, GrowlModule, detailsRoutes],

    providers: [EquipmentService, TestFacilityService],
    declarations: [DetailsComponent]
})

export default class DetailsModule { }
