import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';
import { DetailsComponent } from "./details.component";
import { StepService} from '../../../shared/services/step.service';

import { DataTableModule,TabViewModule, ButtonModule, InputTextareaModule,InputTextModule, PanelModule, DropdownModule, 
    RadioButtonModule, MultiSelectModule } from 'primeng/primeng';
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
        MultiSelectModule
        ],
    providers: [StepService],
    exports:[DetailsComponent],
    declarations: [DetailsComponent]
})

export default class DetailsSharedModule { }