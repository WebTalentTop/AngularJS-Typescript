import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DetailsComponent } from "./details.component";
import { FormsModule} from '@angular/forms';
import { TestTypeService} from './../../../shared/services/testType.service';
import { TestModeService } from './../../../shared/services/testMode.service';
import { TestTemplateService} from './../../../shared/services/Containers/TestTemplateService/testTemplate.service';
import { TestRequirementService} from './../../../shared/services/testrequirement.service';
import { ProcedureService } from './../../../shared/services/Containers/ProcedureService/procedure.service';

import { EditorModule, SharedModule,  DataTableModule, TabViewModule, ButtonModule, InputTextareaModule, InputTextModule, PanelModule, DropdownModule,
    AutoCompleteModule, ConfirmDialogModule,ConfirmationService  } from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import detailsRoutes from "./details.routes";

@NgModule({
    imports: [EditorModule, SharedModule,  CommonModule, RouterModule, FormsModule, DataTableModule, TabViewModule, ButtonModule, DropdownModule, InputTextareaModule,
        InputTextModule, PanelModule, detailsRoutes, AutoCompleteModule, ConfirmDialogModule],
    providers: [TestTemplateService, TestTypeService, TestModeService, TestRequirementService, ConfirmationService, ProcedureService],
    declarations: [DetailsComponent]
})

export default class DetailsModule { }
