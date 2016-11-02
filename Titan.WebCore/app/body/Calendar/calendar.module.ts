import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CalendarComponent } from "./calendar.component";

import { DataTableModule } from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import calendarRoutes from "./calendar.routes";

@NgModule({
    imports: [CommonModule, DataTableModule, calendarRoutes],
    declarations: [CalendarComponent]
})

export default class CalendarModule{}