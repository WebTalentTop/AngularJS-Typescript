import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DetailsComponent } from "./details.component";
import { FormsModule} from '@angular/forms';
import { TestFacilityService } from '../../../shared/services/testFacility.service';

import { EntityIdentifierService } from '../../../shared/services/entityIdentifier.service';
import { FormSchemaCategoryService } from '../../../shared/services/formSchemaCategory.service';
import { TestTemplateService } from '../../../shared/services/testTemplate.service';
import { TestFacilityRoleService } from '../../../shared/services/testFacilityRole.service';
import { BuildLevelService } from '../../../shared/services/buildlevel.service';
import { TestStatusService } from '../../../shared/services/teststatus.service';
import { TestRoleService } from '../../../shared/services/testRole.service';
import { ProjectService } from '../../../shared/services/project.service';
import { TestModeService } from '../../../shared/services/testMode.service';
import { TestTypeService } from '../../../shared/services/testType.service';
import { TestFacilityAttachmentService } from '../../../shared/services/testFacilityAttachment.service';
import { FormPreviewModule } from '../../../shared/UIComponents/FormComponents/FormPreviewComponent/formPreview.module';
import { FormInstanceModule } from '../../../shared/UIComponents/FormComponents/FormInstanceComponent/formInstance.module';

import { BreadCrumbsService } from '../../../shared/services/breadCrumbs/breadCrumbs.service';
import { DataTableModule, AutoCompleteModule, DataGridModule, TabViewModule, ButtonModule, CalendarModule, 
    CheckboxModule, InputTextareaModule, InputTextModule, PanelModule, DropdownModule, EditorModule, 
    FileUploadModule, GrowlModule, DialogModule, PaginatorModule, SpinnerModule, BreadcrumbModule } from 'primeng/primeng';




import { RouterModule } from "@angular/router";
import {MultiSelectModule} from 'primeng/primeng';
import detailsRoutes from "./details.routes";

@NgModule({


    imports: [CommonModule, FormPreviewModule, DataGridModule, FormInstanceModule, RouterModule, AutoCompleteModule, 
    CheckboxModule, MultiSelectModule, FormsModule, SpinnerModule, PaginatorModule, EditorModule, DataTableModule, 
    TabViewModule, CalendarModule, ButtonModule, InputTextareaModule, DropdownModule, InputTextModule, PanelModule, 
    FileUploadModule, GrowlModule, DialogModule, BreadcrumbModule, detailsRoutes],

    providers: [EntityIdentifierService,TestFacilityService,FormSchemaCategoryService, TestFacilityRoleService, 
    TestFacilityAttachmentService, BuildLevelService, ProjectService, TestRoleService, TestStatusService, 
    TestModeService, BreadCrumbsService, TestTypeService, TestTemplateService],



    declarations: [DetailsComponent]
})

export default class DetailsModule { }