import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';
import { AddComponent } from "./add.component";
import { EngineCodeService} from '../../../../../shared/services/engineCode.service';

import { EditorModule, SharedModule, BreadcrumbModule, DataTableModule, ButtonModule, InputTextareaModule,InputTextModule, PanelModule, DropdownModule } from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import addRoutes from "./add.routes";

@NgModule({
    imports: [EditorModule, SharedModule, BreadcrumbModule, CommonModule, FormsModule, DataTableModule, InputTextareaModule, InputTextModule, PanelModule, ButtonModule,DropdownModule, addRoutes],
    providers: [EngineCodeService],
    declarations: [AddComponent]
})

export default class AddModule{}