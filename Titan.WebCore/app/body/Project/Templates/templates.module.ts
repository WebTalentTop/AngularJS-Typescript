import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';
import { TemplatesComponent } from './templates.component';

import { TorquesheetService } from './../../../shared/services/torquesheet.service'
import { DataTableModule, ButtonModule, InputTextareaModule, InputTextModule, PanelModule, DropdownModule,
    TreeTableModule,TreeNode,SharedModule, DialogModule } from 'primeng/primeng';
import { RouterModule } from "@angular/router";


@NgModule({
    imports: [CommonModule, FormsModule, DataTableModule, InputTextareaModule, InputTextModule, PanelModule, 
        ButtonModule, DropdownModule,TreeTableModule,SharedModule,DialogModule],
    providers: [TorquesheetService],
    declarations: [TemplatesComponent],
    exports:[TemplatesComponent, CommonModule]
})

export class TemplatesModule { }
