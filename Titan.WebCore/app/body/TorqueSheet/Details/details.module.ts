import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';
import { DetailsComponent } from "./details.component";
import { TorquesheetService } from '../../../shared/services/torquesheet.service';

import { ButtonModule, InputTextareaModule, InputTextModule, PanelModule, ConfirmDialogModule,ConfirmationService, DropdownModule } from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import addRoutes from "./details.routes";

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
        ConfirmDialogModule,
        //RadioButtonModule,
        //MultiSelectModule,
        addRoutes
        ],
    providers: [TorquesheetService, ConfirmationService],
    declarations: [DetailsComponent]
})

export default class DetailsModule { }