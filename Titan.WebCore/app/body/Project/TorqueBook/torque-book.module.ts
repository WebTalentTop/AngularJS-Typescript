import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';
import { TorqueBookComponent } from "./torque-book.component";
import { ProjectService} from './../../../shared/services/project.service';

import { DataTableModule, ButtonModule, InputTextareaModule, InputTextModule, PanelModule, DropdownModule,
    TreeTableModule,TreeNode,SharedModule, DialogModule } from 'primeng/primeng';
import { RouterModule } from "@angular/router";

@NgModule({
    imports: [CommonModule, FormsModule, DataTableModule, InputTextareaModule, InputTextModule, PanelModule, 
        ButtonModule, DropdownModule,TreeTableModule,SharedModule,DialogModule],
    providers: [ProjectService],
    declarations: [TorqueBookComponent],
    exports:[TorqueBookComponent, CommonModule]
})

export class TorqueBookModule { }
