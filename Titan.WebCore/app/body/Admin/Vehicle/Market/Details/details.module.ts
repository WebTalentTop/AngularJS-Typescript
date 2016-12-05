import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';
import { DetailsComponent } from "./details.component";
import { ProjectStatusService} from '../../../../../shared/services/projectStatus.service';

import { DataTableModule, ButtonModule, InputTextareaModule,ToggleButtonModule, InputTextModule, PanelModule, DropdownModule, CalendarModule, MessagesModule, GrowlModule } from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import detailsRoutes from "./details.routes";

@NgModule({
    imports: [CommonModule, FormsModule, DataTableModule, InputTextareaModule,ToggleButtonModule,GrowlModule ,InputTextModule, PanelModule,
        ButtonModule, DropdownModule, CalendarModule, GrowlModule, MessagesModule, detailsRoutes],
    providers: [ProjectStatusService],
    declarations: [DetailsComponent],
    exports: [DetailsComponent]
})

export default class DetailsModule { }
