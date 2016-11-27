import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';
import { AddComponent } from "./add.component";
import { MilestoneStatusService} from '../../../../../shared/services/milestoneStatus.service';

import { DataTableModule, ButtonModule, InputTextareaModule,InputTextModule, PanelModule, DropdownModule } from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import addRoutes from "./add.routes";

@NgModule({
    imports: [CommonModule, FormsModule, DataTableModule, InputTextareaModule, InputTextModule, PanelModule, ButtonModule,DropdownModule, addRoutes],
    providers: [MilestoneStatusService],
    declarations: [AddComponent]
})

export default class AddModule{}