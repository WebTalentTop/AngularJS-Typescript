import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';
import { DetailsComponent } from "./details.component";
import { PlatformService} from '../../../../../shared/services/platform.service';

import { DataTableModule, ButtonModule, InputTextareaModule, InputTextModule, PanelModule, DropdownModule, CalendarModule, GrowlModule } from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import detailsRoutes from "./details.routes";

@NgModule({
    imports: [CommonModule, FormsModule, DataTableModule, InputTextareaModule, InputTextModule, PanelModule,
        ButtonModule, DropdownModule, CalendarModule, GrowlModule, detailsRoutes],
    providers: [PlatformService],
    declarations: [DetailsComponent],
    exports: [DetailsComponent]
})

export default class DetailsModule { }
