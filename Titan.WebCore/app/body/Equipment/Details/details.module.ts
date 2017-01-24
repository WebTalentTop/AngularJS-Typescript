import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DetailsComponent } from "./details.component";
import { FormsModule } from '@angular/forms';
import { EquipmentService } from '../../../shared/services/Containers/EquipmentService/equipment.service';
import { TestFacilityService } from '../../../shared/services/Containers/TestFacilityService/testFacility.service';
import { BreadCrumbsService } from '../../../shared/services/breadCrumbs/breadCrumbs.service';
import { CheckboxModule, EditorModule, SharedModule, DataTableModule, TabViewModule, BreadcrumbModule, ButtonModule, InputTextareaModule, DialogModule, InputTextModule, CalendarModule, DropdownModule, PanelModule, MessagesModule, GrowlModule } from 'primeng/primeng';


import { RouterModule } from "@angular/router";
import detailsRoutes from "./details.routes";

@NgModule({

    imports: [CheckboxModule, EditorModule, SharedModule, CommonModule, RouterModule, BreadcrumbModule, FormsModule, DataTableModule, DialogModule, TabViewModule, ButtonModule, InputTextareaModule, CalendarModule, InputTextModule, PanelModule, DropdownModule, MessagesModule, GrowlModule, detailsRoutes],

    providers: [EquipmentService, TestFacilityService, BreadCrumbsService],
    declarations: [DetailsComponent]
})

export default class DetailsModule { }
