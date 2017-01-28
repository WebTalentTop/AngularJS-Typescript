import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DetailsComponent } from "./details.component";
import { FormsModule } from '@angular/forms';
import { EquipmentService } from '../../../shared/services/Containers/EquipmentService/equipment.service';
import { TestFacilityService } from '../../../shared/services/Containers/TestFacilityService/testFacility.service';
import { BreadCrumbsService } from '../../../shared/services/breadCrumbs/breadCrumbs.service';
import {
    CheckboxModule,
    EditorModule,
    SharedModule,
    DataTableModule,
    TabViewModule,
    BreadcrumbModule,
    ButtonModule,
    InputTextareaModule,
    DialogModule,
    InputTextModule,
    CalendarModule,
    DropdownModule,
    PanelModule,
    MessagesModule,
    GrowlModule
} from 'primeng/primeng';


import { EntityIdentifierService } from '../../../shared/services/entityIdentifier.service';
import { FormSchemaCategoryService } from '../../../shared/services/formSchemaCategory.service';
import { FormInstanceService } from '../../../shared/services/formInstance.service';

import { FormPreviewModule } from '../../../shared/UIComponents/FormComponents/FormPreviewComponent/formPreview.module';
import { FormInstanceModule } from '../../../shared/UIComponents/FormComponents/FormInstanceComponent/formInstance.module';

import { RouterModule } from "@angular/router";
import detailsRoutes from "./details.routes";

@NgModule({

    imports: [
        FormPreviewModule,
        FormInstanceModule,
        CheckboxModule,
        EditorModule,
        SharedModule,
        CommonModule,
        RouterModule,
        BreadcrumbModule,
        FormsModule,
        DataTableModule,
        DialogModule,
        TabViewModule,
        ButtonModule,
        InputTextareaModule,
        CalendarModule,
        InputTextModule,
        PanelModule,
        DropdownModule,
        MessagesModule,
        GrowlModule,
        detailsRoutes
    ],

    providers: [
        EquipmentService,
        TestFacilityService,
        BreadCrumbsService,
        FormSchemaCategoryService,
        EntityIdentifierService,
        FormInstanceService
    ],
    declarations: [DetailsComponent]
})

export default class DetailsModule { }
