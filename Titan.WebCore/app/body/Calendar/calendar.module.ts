import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CalendarComponent } from "./calendar.component";
import { CalendarService } from '../../shared/services/calendar.service';
import { DataTableModule } from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import calendarRoutes from "./calendar.routes";

@NgModule({
    imports: [CommonModule, DataTableModule, calendarRoutes],
    providers: [CalendarService],
    declarations: [CalendarComponent]
})

export default class CalendarModule{}