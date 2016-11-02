import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';
import { ProjectDetailMainComponent } from "./project-detail-main.component";
import { ProjectService} from '../project.service';

import { DataTableModule, ButtonModule, InputTextareaModule, InputTextModule, PanelModule, DropdownModule } from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import detailsRoutes from "./project-details-main.routes";

@NgModule({
    imports: [CommonModule, FormsModule, DataTableModule, InputTextareaModule, InputTextModule, PanelModule, ButtonModule, DropdownModule, detailsRoutes],
    providers: [ProjectService],
    declarations: [ProjectDetailMainComponent]
})

export default class ProjectDetailsMainModule { }
