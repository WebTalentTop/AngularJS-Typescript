import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DetailsComponent } from "./details.component";
import { FormsModule} from '@angular/forms';
import { TestTypeService} from './../../../shared/services/testtype.service';
import { TestModeService } from './../../../shared/services/testmode.service';
import { ProcedureService} from './../../../shared/services/procedure.service';
import { StepService} from './../../../shared/services/step.service';
import { TestRequirementService} from './../../../shared/services/testrequirement.service';
import AddSharedModule from './../../Step/Add/add-shared.module';
import DetailsSharedModule from './../../Step/Details/details-shared.module';

import { EditorModule, DataTableModule, TabViewModule, ButtonModule, InputTextareaModule, InputTextModule, PanelModule, DropdownModule, 
    AutoCompleteModule, ConfirmDialogModule,ConfirmationService, DataListModule, DialogModule  } from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import detailsRoutes from "./details.routes";

@NgModule({
    imports: [ EditorModule, CommonModule, RouterModule, FormsModule, DataTableModule, TabViewModule, ButtonModule, DropdownModule, InputTextareaModule,
        InputTextModule, PanelModule, detailsRoutes, AutoCompleteModule, ConfirmDialogModule, DataListModule, DialogModule
        , AddSharedModule, DetailsSharedModule],
    providers: [ProcedureService, TestTypeService, TestModeService, TestRequirementService, ConfirmationService, StepService],
    declarations: [DetailsComponent]
})

export default class DetailsModule { }