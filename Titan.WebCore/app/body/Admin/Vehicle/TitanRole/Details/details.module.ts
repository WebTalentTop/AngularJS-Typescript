import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';
import { DetailsComponent } from "./details.component";
import { TitanRoleService} from '../../../../../shared/services/titanRole.service';

import { DataTableModule, ButtonModule, InputTextareaModule,ToggleButtonModule ,InputTextModule, PanelModule, DropdownModule, CalendarModule, GrowlModule } from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import detailsRoutes from "./details.routes";

@NgModule({
    imports: [CommonModule, FormsModule, DataTableModule, InputTextareaModule, ToggleButtonModule,InputTextModule, PanelModule,
        ButtonModule, DropdownModule, CalendarModule, GrowlModule, detailsRoutes],
    providers: [TitanRoleService],
    declarations: [DetailsComponent],
    exports: [DetailsComponent]
})

export default class DetailsModule { }
