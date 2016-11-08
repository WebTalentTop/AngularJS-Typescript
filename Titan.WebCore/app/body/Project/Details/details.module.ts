import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';
import { DetailsComponent } from "./details.component";
import { ProjectService} from '../project.service';

import { DataTableModule, ButtonModule, InputTextareaModule, InputTextModule, PanelModule, DropdownModule, CalendarModule } from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import detailsRoutes from "./details.routes";

@NgModule({
    imports: [CommonModule, FormsModule, DataTableModule, InputTextareaModule, InputTextModule, PanelModule, 
        ButtonModule, DropdownModule, CalendarModule, detailsRoutes],
    providers: [ProjectService],
    declarations: [DetailsComponent],
    exports:[DetailsComponent, CommonModule]
})

export default class DetailsModule { }
