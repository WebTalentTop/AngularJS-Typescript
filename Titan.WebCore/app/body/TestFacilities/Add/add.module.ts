import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';
import { AddComponent } from "./add.component";
import { TestFacilityService} from '../../../shared/services/Containers/TestFacilityService/testFacility.service';

import {
    CheckboxModule, DataTableModule, TabViewModule, ButtonModule, InputTextareaModule, InputTextModule, EditorModule, SharedModule, MessagesModule, CalendarModule,
    GrowlModule, PanelModule, DropdownModule, BreadcrumbModule
} from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import addRoutes from "./add.routes";
import { BreadCrumbsService } from '../../../shared/services/breadCrumbs/breadCrumbs.service';

@NgModule({
    imports: [
        CommonModule,
        TabViewModule,
        FormsModule,
        DataTableModule,
        InputTextareaModule,
        InputTextModule,
        PanelModule,
        EditorModule,
        SharedModule,
        ButtonModule,
        DropdownModule, CalendarModule,
        MessagesModule, GrowlModule,
        addRoutes,CheckboxModule, 
        BreadcrumbModule],
    providers: [TestFacilityService,BreadCrumbsService],
    declarations: [AddComponent]
})

export default class AddModule{}
