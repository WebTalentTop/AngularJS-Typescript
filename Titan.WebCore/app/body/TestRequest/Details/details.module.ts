import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DetailsComponent } from "./details.component";
import { FormsModule} from '@angular/forms';
import { TimeEntryService } from '../../../shared/services/timeEntry.service';

import { DataTableModule, TabViewModule, ButtonModule, InputTextareaModule, InputTextModule, CalendarModule, DropdownModule, PanelModule } from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import detailRoutes from "./details.routes";

@NgModule({
    imports: [CommonModule, RouterModule, FormsModule, DataTableModule, TabViewModule, ButtonModule, InputTextareaModule, CalendarModule, InputTextModule, PanelModule, DropdownModule, detailRoutes],
    providers: [TimeEntryService],
    declarations: [DetailsComponent]
})

export default class DetailsModule { }