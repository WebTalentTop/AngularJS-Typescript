import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';
import { AddComponent } from "./add.component";
import { UnitsService} from '../../../../../shared/services/units.service';
import { BreadCrumbsService } from '../../../../../shared/services/breadCrumbs/breadCrumbs.service';
import { DataTableModule, ButtonModule, InputTextareaModule,InputTextModule, PanelModule, DropdownModule, BreadcrumbModule } from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import addRoutes from "./add.routes";

@NgModule({
    imports: [CommonModule, FormsModule, DataTableModule, InputTextareaModule, InputTextModule, PanelModule,BreadcrumbModule, ButtonModule,DropdownModule, addRoutes],
    providers: [UnitsService,BreadCrumbsService],
    declarations: [AddComponent]
})

export default class AddModule{}