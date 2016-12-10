import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';
import { AddComponent } from "./add.component";
import { TestModeService} from '../../../../../shared/services/testMode.service';

import { DataTableModule, ButtonModule, InputTextareaModule, InputTextModule, MultiSelectModule, PickListModule, PanelModule, GrowlModule, DropdownModule } from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import addRoutes from "./add.routes";

@NgModule({
    imports: [CommonModule, FormsModule, DataTableModule, InputTextareaModule, InputTextModule, PanelModule, MultiSelectModule,PickListModule,GrowlModule,ButtonModule,DropdownModule, addRoutes],
    providers: [TestModeService],
    declarations: [AddComponent]
})

export default class AddModule{}