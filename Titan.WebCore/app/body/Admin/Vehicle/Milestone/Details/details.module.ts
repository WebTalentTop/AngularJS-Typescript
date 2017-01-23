import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';
import { DetailsComponent } from "./details.component";
import { MilestoneService} from '../../../../../shared/services/Containers/MileStoneService/mileStone.service';

import { BreadcrumbModule, DataTableModule, ButtonModule, InputTextareaModule, ToggleButtonModule, InputTextModule, PanelModule, DropdownModule, CalendarModule, GrowlModule } from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import detailsRoutes from "./details.routes";

@NgModule({
    imports: [BreadcrumbModule, CommonModule, FormsModule, DataTableModule, InputTextareaModule, ToggleButtonModule, InputTextModule, PanelModule,
        ButtonModule, DropdownModule, CalendarModule, GrowlModule, detailsRoutes],
    providers: [MilestoneService],
    declarations: [DetailsComponent],
    exports: [DetailsComponent]
})

export default class DetailsModule { }
