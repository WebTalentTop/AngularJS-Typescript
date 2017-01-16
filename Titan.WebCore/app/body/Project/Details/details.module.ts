import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';
import { DetailsComponent } from "./details.component";
import { ProjectService} from './../../../shared/services/Containers/ProjectService/project.service';

import { EditorModule, SharedModule, DataTableModule, ButtonModule, InputTextareaModule, InputTextModule, PanelModule, DropdownModule, CalendarModule } from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import detailsRoutes from "./details.routes";

@NgModule({
    imports: [EditorModule, SharedModule, CommonModule, FormsModule, DataTableModule, InputTextareaModule, InputTextModule, PanelModule,
        ButtonModule, DropdownModule, CalendarModule, detailsRoutes],
    providers: [ProjectService],
    declarations: [DetailsComponent],
    exports: [DetailsComponent]
})

export class DetailsModule { }
