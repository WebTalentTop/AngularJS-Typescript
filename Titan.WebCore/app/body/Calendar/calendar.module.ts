import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CalendarComponent } from "./calendar.component";
import { RouterModule } from "@angular/router";
import calendarRoutes from "./calendar.routes";
import { MultiSelectModule } from 'primeng/primeng';
import { FormsModule } from '@angular/forms';
import {
    DataTableModule, AutoCompleteModule, TabViewModule, ButtonModule,
    InputTextareaModule, InputTextModule, PanelModule, DropdownModule, FileUploadModule, GrowlModule
} from 'primeng/primeng';

@NgModule({
    imports: [CommonModule, calendarRoutes, RouterModule, AutoCompleteModule,
        MultiSelectModule, FormsModule, DataTableModule, TabViewModule, ButtonModule,
        InputTextareaModule, DropdownModule, InputTextModule, PanelModule, FileUploadModule, GrowlModule],

    declarations: [CalendarComponent]
})

export default class CalendarModule { }