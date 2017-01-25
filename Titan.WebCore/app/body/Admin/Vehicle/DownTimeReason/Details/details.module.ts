import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';
import { DetailsComponent } from "./details.component";
import { DownTimeReasonService} from '../../../../../shared/services/downTimeReason.service';

import { EditorModule, SharedModule, BreadcrumbModule, DataTableModule, ButtonModule, InputTextareaModule, ToggleButtonModule,InputTextModule,GrowlModule, PanelModule, DropdownModule, CalendarModule } from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import detailsRoutes from "./details.routes";

@NgModule({
    imports: [EditorModule, SharedModule, BreadcrumbModule, CommonModule, FormsModule, DataTableModule,ToggleButtonModule, InputTextareaModule,GrowlModule, InputTextModule, PanelModule, 
        ButtonModule, DropdownModule, CalendarModule, detailsRoutes],
    providers: [DownTimeReasonService],
    declarations: [DetailsComponent],
    exports: [DetailsComponent]
})

export default class DetailsModule { }
