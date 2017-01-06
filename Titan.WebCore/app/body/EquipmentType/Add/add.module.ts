import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AddComponent } from "./add.component";
import { FormsModule } from '@angular/forms';
import { BuildLevelService } from '../../../shared/services/buildlevel.service';
import { ProjectService } from '../../../shared/services/project.service';
import { TestModeService } from '../../../shared/services/testMode.service';
import { TestTypeService } from '../../../shared/services/testType.service';
import { EquipmentTypeService } from '../../../shared/services/equipmentType.service';
import { EditorModule, SharedModule, DataTableModule, TabViewModule,  ButtonModule,DialogModule, InputTextareaModule, InputTextModule, PanelModule, FileUploadModule, GrowlModule  } from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import AddRoutes from "./add.routes";

@NgModule({
    imports: [EditorModule, SharedModule, CommonModule, RouterModule, FormsModule,DialogModule, DataTableModule, TabViewModule, ButtonModule, InputTextareaModule, InputTextModule, PanelModule, FileUploadModule, GrowlModule, AddRoutes],
    providers: [EquipmentTypeService, BuildLevelService, ProjectService, TestModeService,
        TestTypeService],
    declarations: [AddComponent]
})

export default class AddModule { }
