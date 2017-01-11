import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';
import { DetailsComponent } from "./details.component";
import { StepService} from '../../../shared/services/step.service';
import { AttachmentModule } from '../../../shared/UIComponents/AttachmentComponent/attachment.module';
import { TimeEntryService } from '../../../shared/services/timeEntry.service';
import { ModuleModule } from '../../../shared/UIComponents/ModuleComponent/module.module';

import { DataTableModule,TabViewModule, ButtonModule, InputTextareaModule,InputTextModule, PanelModule, DropdownModule, 
    RadioButtonModule, MultiSelectModule, DialogModule } from 'primeng/primeng';
import { RouterModule } from "@angular/router";
//import addRoutes from "./details.routes";

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
        AttachmentModule,
        ModuleModule,
        MultiSelectModule,
        DialogModule
        ],
    providers: [StepService, TimeEntryService],
    exports:[DetailsComponent],
    declarations: [DetailsComponent]
})

export default class DetailsSharedModule { }