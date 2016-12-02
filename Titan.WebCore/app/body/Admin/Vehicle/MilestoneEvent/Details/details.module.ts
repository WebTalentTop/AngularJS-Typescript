import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';
import { DetailsComponent } from "./details.component";
import { MilestoneEventService} from '../../../../../shared/services/milestoneEvent.service';

import { DataTableModule, ButtonModule, InputTextareaModule, ToggleButtonModule,InputTextModule, GrowlModule, PanelModule, DropdownModule, CalendarModule } from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import detailsRoutes from "./details.routes";

@NgModule({
    imports: [CommonModule, FormsModule, DataTableModule, ToggleButtonModule,InputTextareaModule,GrowlModule, InputTextModule, PanelModule, 
        ButtonModule, DropdownModule, CalendarModule,GrowlModule, detailsRoutes],
    providers: [MilestoneEventService],
    declarations: [DetailsComponent],
    exports: [DetailsComponent]
})

export default class DetailsModule { }
