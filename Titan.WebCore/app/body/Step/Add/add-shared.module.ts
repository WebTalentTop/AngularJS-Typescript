import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';
import { AddComponent } from "./add.component";
import { StepService} from '../../../shared/services/step.service';

import { DataTableModule,TabViewModule, ButtonModule, InputTextareaModule,InputTextModule, PanelModule, DropdownModule, 
    RadioButtonModule, MultiSelectModule } from 'primeng/primeng';
import { RouterModule } from "@angular/router";
//import addRoutes from "./add.routes";

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
    declarations: [AddComponent],
    exports:[AddComponent]
})

export default class AddSharedModule{}