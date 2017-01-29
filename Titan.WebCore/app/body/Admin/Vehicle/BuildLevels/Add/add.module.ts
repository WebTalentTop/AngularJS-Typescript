import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';
import { AddComponent } from "./add.component";
import { BuildLevelService} from '../../../../../shared/services/Containers/BuildLevelService/buildLevel.service';
import { BreadCrumbsService } from '../../../../../shared/services/breadCrumbs/breadCrumbs.service';
import { GrowlModule, EditorModule, SharedModule, DataTableModule, ButtonModule, InputTextareaModule,InputTextModule, PanelModule, DropdownModule,BreadcrumbModule } from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import addRoutes from "./add.routes";

@NgModule({
    imports: [GrowlModule, EditorModule, SharedModule, CommonModule, FormsModule, DataTableModule, InputTextareaModule, InputTextModule, PanelModule,BreadcrumbModule, ButtonModule,DropdownModule, addRoutes],
    providers: [BuildLevelService,BreadCrumbsService],
    declarations: [AddComponent]
})

export default class AddModule{}