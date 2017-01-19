import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';
import { DetailsComponent } from "./details.component";
import { TorquesheetService } from '../../../shared/services/torquesheet.service';
import { UserService } from '../../../shared/services/user.service';

import {
    ButtonModule, InputTextareaModule, InputTextModule, PanelModule, ConfirmDialogModule, ConfirmationService, DropdownModule, DialogModule,
    EditorModule, AutoCompleteModule, SharedModule
} from 'primeng/primeng';
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
        addRoutes, DialogModule, EditorModule, AutoCompleteModule, SharedModule
        ],
    providers: [TorquesheetService, ConfirmationService, UserService],
    declarations: [DetailsComponent]
})

export default class DetailsModule { }