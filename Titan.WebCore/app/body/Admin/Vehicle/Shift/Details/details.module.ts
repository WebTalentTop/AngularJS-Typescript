﻿import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';
import { DetailsComponent } from "./details.component";
import { ShiftService} from '../../../../../shared/services/shift.service';
import { BreadCrumbsService } from '../../../../../shared/services/breadCrumbs/breadCrumbs.service';
import { EditorModule, SharedModule, BreadcrumbModule, DataTableModule, ButtonModule, InputTextareaModule,ToggleButtonModule, InputTextModule,GrowlModule, PanelModule, DropdownModule, CalendarModule } from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import detailsRoutes from "./details.routes";

@NgModule({
    imports: [EditorModule, SharedModule, BreadcrumbModule, CommonModule, FormsModule, DataTableModule, ToggleButtonModule,InputTextareaModule,GrowlModule, InputTextModule, PanelModule, 
            ButtonModule, DropdownModule, CalendarModule, detailsRoutes],
    providers: [ShiftService, BreadCrumbsService],
    declarations: [DetailsComponent],
    exports: [DetailsComponent]
})

export default class DetailsModule { }
