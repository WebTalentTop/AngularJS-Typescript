import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';
import { AddComponent } from "./add.component";
import { MilestoneCategoryService} from '../../../../../shared/services/milestoneCategory.service';
import { BreadCrumbsService } from '../../../../../shared/services/breadCrumbs/breadCrumbs.service';
import { DataTableModule, ButtonModule, InputTextareaModule,InputTextModule, PanelModule, DropdownModule , BreadcrumbModule} from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import addRoutes from "./add.routes";

@NgModule({
    imports: [BreadcrumbModule, CommonModule, FormsModule, DataTableModule, InputTextareaModule, InputTextModule, PanelModule, ButtonModule,DropdownModule, addRoutes],
    providers: [MilestoneCategoryService, BreadCrumbsService],
    declarations: [AddComponent]
})


export default class AddModule{}