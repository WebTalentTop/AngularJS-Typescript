import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';
import { AddComponent } from "./add.component";
import { TorquesheetService } from '../../../shared/services/torquesheet.service';

import {
    ButtonModule, InputTextareaModule, InputTextModule, PanelModule, DropdownModule
} from 'primeng/primeng';
import { RouterModule } from "@angular/router";

@NgModule({
    imports: [
        CommonModule,
        //TabViewModule, 
        FormsModule,
        //DataTableModule, 
        InputTextareaModule,
        InputTextModule,
        PanelModule,
        ButtonModule,
        DropdownModule,
        //RadioButtonModule,
        //MultiSelectModule,
        //addRoutes
    ],
    providers: [TorquesheetService],
    declarations: [AddComponent],
    exports: [AddComponent]
})

export default class AddModule { }