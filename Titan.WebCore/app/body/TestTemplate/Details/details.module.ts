import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DetailsComponent } from "./details.component";
import { FormsModule} from '@angular/forms';
import { TestTypeService} from './../../../shared/services/testtype.service';
import { TestModeService } from './../../../shared/services/testmode.service';
import { TestTemplateService} from './../../../shared/services/testtemplate.service';
import { TestRequirementService} from './../../../shared/services/testrequirement.service';

import { DataTableModule, TabViewModule, ButtonModule, InputTextareaModule, InputTextModule, PanelModule, DropdownModule, AutoCompleteModule  } from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import detailsRoutes from "./details.routes";

@NgModule({
    imports: [CommonModule, RouterModule, FormsModule, DataTableModule, TabViewModule, ButtonModule, DropdownModule, InputTextareaModule,
        InputTextModule, PanelModule, detailsRoutes, AutoCompleteModule],
    providers: [TestTemplateService, TestTypeService, TestModeService, TestRequirementService],
    declarations: [DetailsComponent]
})

export default class DetailsModule { }