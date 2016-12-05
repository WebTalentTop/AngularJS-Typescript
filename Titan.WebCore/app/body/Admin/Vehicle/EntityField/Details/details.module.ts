import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';
import { DetailsComponent } from "./details.component";
import { EntityFieldService} from '../../../../../shared/services/entityField.service';

import { DataTableModule, ButtonModule, InputTextareaModule, InputTextModule,ToggleButtonModule, PanelModule, GrowlModule, DropdownModule, CalendarModule } from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import detailsRoutes from "./details.routes";

@NgModule({
    imports: [CommonModule, FormsModule, DataTableModule, InputTextareaModule,ToggleButtonModule, InputTextModule, PanelModule, 
        ButtonModule, DropdownModule, GrowlModule, CalendarModule, detailsRoutes],
    providers: [EntityFieldService],
    declarations: [DetailsComponent],
    exports: [DetailsComponent]
})

export default class DetailsModule { }
