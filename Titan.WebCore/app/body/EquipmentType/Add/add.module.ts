import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AddComponent } from "./add.component";
import { FormsModule } from '@angular/forms';
import { BuildLevelService } from '../../../shared/services/Containers/BuildLevelService/buildLevel.service';
import { ProjectService } from '../../../shared/services/Containers/ProjectService/project.service';
import { TestModeService } from '../../../shared/services/testMode.service';
import { TestTypeService } from '../../../shared/services/testType.service';
import { EquipmentTypeService } from '../../../shared/services/Containers/EquipmentTypeService/equipmentType.service';
import { EditorModule, SharedModule, DataTableModule, TabViewModule, BreadcrumbModule, ButtonModule, DialogModule, InputTextareaModule, InputTextModule, PanelModule, FileUploadModule, MessagesModule, GrowlModule  } from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import AddRoutes from "./add.routes";
import { BreadCrumbsService } from '../../../shared/services/breadCrumbs/breadCrumbs.service';

@NgModule({
    imports: [EditorModule, SharedModule, CommonModule, RouterModule, BreadcrumbModule, FormsModule, DialogModule, DataTableModule, TabViewModule, ButtonModule, InputTextareaModule, InputTextModule, PanelModule, MessagesModule, FileUploadModule, GrowlModule, AddRoutes],
    providers: [EquipmentTypeService, BuildLevelService, ProjectService, TestModeService,
        TestTypeService, BreadCrumbsService],
    declarations: [AddComponent]
})

export default class AddModule { }
