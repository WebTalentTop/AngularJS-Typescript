import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';
import { DetailsComponent } from "./details.component";
import { UnitsService} from '../../../../../shared/services/units.service';
import { BreadCrumbsService } from '../../../../../shared/services/breadCrumbs/breadCrumbs.service';
import { DataTableModule, ButtonModule, InputTextareaModule, ToggleButtonModule, InputTextModule, BreadcrumbModule,PanelModule, DropdownModule, CalendarModule, GrowlModule } from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import detailsRoutes from "./details.routes";

@NgModule({
    imports: [CommonModule, FormsModule, DataTableModule, InputTextareaModule, ToggleButtonModule,BreadcrumbModule, InputTextModule, PanelModule,
        ButtonModule, DropdownModule, CalendarModule, GrowlModule, detailsRoutes],
    providers: [UnitsService, BreadCrumbsService],
    declarations: [DetailsComponent],
    exports: [DetailsComponent]
})

export default class DetailsModule { }
