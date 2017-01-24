import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';
import { AddComponent } from "./add.component";
import { OperatingHoursService} from '../../../../../shared/services/operatingHours.service';

import { DataTableModule, ButtonModule, InputTextareaModule, InputTextModule, CalendarModule, PanelModule, DropdownModule } from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import addRoutes from "./add.routes";

@NgModule({
    imports: [CommonModule, FormsModule, DataTableModule, InputTextareaModule, CalendarModule, InputTextModule, PanelModule, ButtonModule, DropdownModule, addRoutes],
    providers: [OperatingHoursService],
    declarations: [AddComponent]
})

export default class AddModule{}