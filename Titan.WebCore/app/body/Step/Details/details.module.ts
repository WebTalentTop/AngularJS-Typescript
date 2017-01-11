import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';
import { DetailsComponent } from "./details.component";
import { StepService} from '../../../shared/services/step.service';
import { AttachmentModule } from '../../../shared/UIComponents/AttachmentComponent/attachment.module';
import { ModuleModule } from '../../../shared/UIComponents/ModuleComponent/module.module';

import {
    DataTableModule, TabViewModule, ButtonModule, InputTextareaModule, InputTextModule, PanelModule, DropdownModule,
    RadioButtonModule, MultiSelectModule, DialogModule
} from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import addRoutes from "./details.routes";
import { TimeEntryService } from '../../../shared/services/timeEntry.service';

@NgModule({
    imports: [
        CommonModule,
        TabViewModule, 
        FormsModule, 
        DataTableModule, 
        InputTextareaModule, 
        InputTextModule, 
        PanelModule, 
        ButtonModule,
        DropdownModule, 
        RadioButtonModule,
        MultiSelectModule,
        AttachmentModule,
        ModuleModule,
        DialogModule,
        addRoutes
        ],
    providers: [StepService, TimeEntryService],
    declarations: [DetailsComponent]
})

export default class DetailsModule { }