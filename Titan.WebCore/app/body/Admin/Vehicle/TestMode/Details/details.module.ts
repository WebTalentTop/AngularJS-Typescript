import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';
import { DetailsComponent } from "./details.component";
import { TestModeService} from '../../../../../shared/services/testMode.service';
import { BreadCrumbsService } from '../../../../../shared/services/breadCrumbs/breadCrumbs.service';
import { BreadcrumbModule, DataTableModule, ButtonModule, InputTextareaModule, ToggleButtonModule, InputTextModule, MultiSelectModule, EditorModule, SharedModule, PickListModule, PanelModule, DropdownModule, CalendarModule, GrowlModule } from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import detailsRoutes from "./details.routes";

@NgModule({
    imports: [
        EditorModule,
        SharedModule,
        BreadcrumbModule,
        CommonModule,
        FormsModule,
        DataTableModule,
        InputTextareaModule,
        ToggleButtonModule,
        MultiSelectModule,
        PickListModule,
        EditorModule,
        SharedModule,
        InputTextModule,
        PanelModule,
        ButtonModule,
        DropdownModule,
        CalendarModule,
        GrowlModule,
        detailsRoutes
    ],
    providers: [TestModeService, BreadCrumbsService],
    declarations: [DetailsComponent],
    exports: [DetailsComponent]
})

export default class DetailsModule { }
