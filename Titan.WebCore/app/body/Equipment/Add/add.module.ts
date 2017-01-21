import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';
import { AddComponent } from "./add.component";
import { EquipmentService } from '../../../shared/services/Containers/EquipmentService/equipment.service';
import { TestFacilityService } from '../../../shared/services/Containers/TestFacilityService/testFacility.service';

import { DataTableModule, TabViewModule, ButtonModule, InputTextareaModule, InputTextModule, BreadcrumbModule, CalendarModule, DropdownModule, CheckboxModule, PanelModule, MessagesModule, GrowlModule } from 'primeng/primeng';
import { EditorModule, SharedModule } from 'primeng/primeng';
import { BreadCrumbsService } from '../../../shared/services/breadCrumbs/breadCrumbs.service';
import { RouterModule } from "@angular/router";
import addRoutes from "./add.routes";


@NgModule({

    imports: [CheckboxModule, EditorModule, SharedModule, CommonModule, RouterModule, BreadcrumbModule, FormsModule, DataTableModule, TabViewModule, ButtonModule, InputTextareaModule, CalendarModule, InputTextModule, PanelModule, DropdownModule, MessagesModule, GrowlModule, addRoutes],


    providers: [EquipmentService, TestFacilityService, BreadCrumbsService],
    declarations: [AddComponent]
})

export default class AddModule { }
