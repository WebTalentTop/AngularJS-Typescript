import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';
import { AddComponent } from "./add.component";
import { ProjectStatusService} from '../../../../../shared/services/projectStatus.service';
import { BreadCrumbsService } from '../../../../../shared/services/breadCrumbs/breadCrumbs.service';
import { GrowlModule,EditorModule, SharedModule, BreadcrumbModule, DataTableModule, ButtonModule, InputTextareaModule,InputTextModule, PanelModule, DropdownModule } from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import addRoutes from "./add.routes";

@NgModule({
    imports: [GrowlModule,EditorModule, SharedModule, BreadcrumbModule, CommonModule, FormsModule, DataTableModule, InputTextareaModule, InputTextModule, PanelModule, ButtonModule,DropdownModule, addRoutes],
    providers: [ProjectStatusService, BreadCrumbsService],
    declarations: [AddComponent]
})

export default class AddModule{}