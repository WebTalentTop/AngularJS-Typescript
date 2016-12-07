import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AddComponent } from "./add.component";
import { FormsModule} from '@angular/forms';
import { TimeEntryService } from '../../../shared/services/timeEntry.service';

import { DataTableModule, TabViewModule, ButtonModule, InputTextareaModule, InputTextModule, CalendarModule, DropdownModule, FileUploadModule, PanelModule } from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import addRoutes from "./add.routes";

@NgModule({
    imports: [CommonModule, RouterModule, FormsModule, DataTableModule, TabViewModule, ButtonModule, InputTextareaModule, CalendarModule, InputTextModule, FileUploadModule, PanelModule, DropdownModule, addRoutes],
    providers: [TimeEntryService],
    declarations: [AddComponent]
})

export default class AddModule { }