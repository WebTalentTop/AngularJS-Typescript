import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';
import { AddComponent } from "./add.component";
import { PlatformService} from '../../../../../shared/services/platform.service';
import { BreadCrumbsService } from '../../../../../shared/services/breadCrumbs/breadCrumbs.service';
import { EditorModule, SharedModule, BreadcrumbModule, DataTableModule, ButtonModule, InputTextareaModule,InputTextModule, PanelModule, BreadcrumbModule,DropdownModule } from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import addRoutes from "./add.routes";

@NgModule({
    imports: [ EditorModule, SharedModule, BreadcrumbModule, CommonModule, FormsModule, DataTableModule, InputTextareaModule, InputTextModule,BreadcrumbModule ,PanelModule, ButtonModule,DropdownModule, addRoutes],
    providers: [PlatformService,BreadCrumbsService],
    declarations: [AddComponent]
})

export default class AddModule{}