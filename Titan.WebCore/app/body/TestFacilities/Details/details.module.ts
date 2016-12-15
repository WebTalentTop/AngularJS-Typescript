import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DetailsComponent } from "./details.component";
import { FormsModule} from '@angular/forms';
import { TestFacilityService } from '../../../shared/services/testFacility.service';
import { TestTemplateService } from '../../../shared/services/testTemplate.service';
import { TestFacilityRoleService } from '../../../shared/services/testFacilityRole.service';
import { BuildLevelService } from '../../../shared/services/buildlevel.service';
import { TestStatusService } from '../../../shared/services/teststatus.service';
import { TestRoleService } from '../../../shared/services/testRole.service';
import { ProjectService } from '../../../shared/services/project.service';
import { TestModeService } from '../../../shared/services/testMode.service';
import { TestTypeService } from '../../../shared/services/testType.service';
import { TestFacilityAttachmentService } from '../../../shared/services/testFacilityAttachment.service';

import { DataTableModule, AutoCompleteModule, TabViewModule, ButtonModule, CalendarModule, InputTextareaModule, InputTextModule, PanelModule, DropdownModule, FileUploadModule, GrowlModule, DialogModule } from 'primeng/primeng';


import { RouterModule } from "@angular/router";
import {MultiSelectModule} from 'primeng/primeng';
import detailsRoutes from "./details.routes";

@NgModule({
    imports: [CommonModule, RouterModule, AutoCompleteModule, MultiSelectModule, FormsModule, DataTableModule, TabViewModule, CalendarModule, ButtonModule, InputTextareaModule, DropdownModule, InputTextModule, PanelModule, FileUploadModule, GrowlModule, DialogModule, detailsRoutes],
    providers: [TestFacilityService, TestFacilityRoleService, TestFacilityAttachmentService, BuildLevelService, ProjectService, TestRoleService, TestStatusService, TestModeService,
TestTypeService, TestTemplateService
],
    declarations: [DetailsComponent]
})

export default class DetailsModule { }