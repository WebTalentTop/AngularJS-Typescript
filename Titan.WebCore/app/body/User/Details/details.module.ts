import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DetailsComponent } from "./details.component";
import { FormsModule} from '@angular/forms';
import { TestRequestSensorService } from '../../../shared/services/testrequestsensor.service';
import { EquipmentTypeService } from '../../../shared/services/equipmentType.service';
import { UserService } from '../../../shared/services/user.service';

import {

    DataTableModule, AutoCompleteModule, DataGridModule, TabViewModule, ButtonModule, CalendarModule,
    CheckboxModule, InputTextareaModule, InputTextModule, PanelModule, DropdownModule, EditorModule, CheckboxModule,
    FileUploadModule, GrowlModule, DialogModule, PaginatorModule, SpinnerModule, BreadcrumbModule
} from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import detailsRoutes from "./details.routes";




@NgModule({
    imports: [CommonModule,  DataGridModule,  RouterModule, AutoCompleteModule,
        CheckboxModule,  FormsModule, SpinnerModule, PaginatorModule, EditorModule, DataTableModule,
        TabViewModule, CalendarModule, ButtonModule, InputTextareaModule, DropdownModule, InputTextModule, PanelModule, CheckboxModule,
        FileUploadModule, GrowlModule, DialogModule, BreadcrumbModule, detailsRoutes],
    providers: [EquipmentTypeService, UserService, TestRequestSensorService],
    declarations: [DetailsComponent]
})

export default class DetailsModule { }
