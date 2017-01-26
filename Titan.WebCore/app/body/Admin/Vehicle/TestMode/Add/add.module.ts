import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';
import { AddComponent } from "./add.component";
import { TestModeService} from '../../../../../shared/services/testMode.service';
import { BreadCrumbsService } from '../../../../../shared/services/breadCrumbs/breadCrumbs.service';
import { BreadcrumbModule, DataTableModule, ButtonModule, InputTextareaModule, InputTextModule, MultiSelectModule, PickListModule, EditorModule, SharedModule, PanelModule, GrowlModule, DropdownModule } from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import addRoutes from "./add.routes";

@NgModule({
    imports: [
        EditorModule,
        SharedModule,
        BreadcrumbModule,
        CommonModule,
        FormsModule,
        DataTableModule,
        InputTextareaModule,
        InputTextModule,
        PanelModule,
        MultiSelectModule,
        PickListModule,
        EditorModule,
        SharedModule,
        GrowlModule,
        ButtonModule,
        DropdownModule,
        addRoutes
    ],
    providers: [TestModeService, BreadCrumbsService],
    declarations: [AddComponent]
})

export default class AddModule{}