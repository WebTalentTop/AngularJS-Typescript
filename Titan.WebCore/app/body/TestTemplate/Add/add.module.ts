import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';
import { AddComponent } from "./add.component";
import { TestTypeService} from '../../../shared/services/testType.service';
import { TestModeService } from '../../../shared/services/testMode.service';
import { TestTemplateService} from '../../../shared/services/Containers/TestTemplateService/testTemplate.service';
import { BreadCrumbsService } from '../../../shared/services/breadCrumbs/breadCrumbs.service';
import { EditorModule, SharedModule, PanelModule, DataTableModule, BreadcrumbModule,ButtonModule, InputTextareaModule,InputTextModule, DropdownModule } from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import addRoutes from "./add.routes";

@NgModule({
    imports: [EditorModule, SharedModule, PanelModule, CommonModule, FormsModule, BreadcrumbModule,DataTableModule, InputTextareaModule, InputTextModule, ButtonModule,DropdownModule, addRoutes],
    providers: [TestTemplateService, TestTypeService, TestModeService, BreadCrumbsService ],
    declarations: [AddComponent]
})

export default class AddModule{}
