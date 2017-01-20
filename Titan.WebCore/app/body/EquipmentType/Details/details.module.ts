import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DetailsComponent } from "./details.component";
import { FormsModule } from '@angular/forms';
import { BuildLevelService } from '../../../shared/services/Containers/BuildLevelService/buildLevel.service';
import { ProjectService } from '../../../shared/services/Containers/ProjectService/project.service';
import { TestModeService } from '../../../shared/services/testMode.service';
import { TestTypeService } from '../../../shared/services/testType.service';
import { EquipmentTypeService } from '../../../shared/services/Containers/EquipmentTypeService/equipmentType.service';
import { CheckboxModule, DropdownModule, EditorModule, SharedModule, DataTableModule, TabViewModule,  ButtonModule,DialogModule, InputTextareaModule, InputTextModule, PanelModule, FileUploadModule, GrowlModule  } from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import detailsRoutes from "./details.routes";
import {EntityIdentifierService} from "../../../shared/services/entityIdentifier.service";

@NgModule({
    imports: [CheckboxModule, DropdownModule, EditorModule, SharedModule, CommonModule, RouterModule, FormsModule,DialogModule, DataTableModule, TabViewModule, ButtonModule, InputTextareaModule, InputTextModule, PanelModule, FileUploadModule, GrowlModule, detailsRoutes],
    providers: [EquipmentTypeService,EntityIdentifierService , BuildLevelService, ProjectService, TestModeService,
        TestTypeService],
    declarations: [DetailsComponent]
})

export default class DetailsModule { }
