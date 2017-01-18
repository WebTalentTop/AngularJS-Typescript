import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';
import { AddComponent } from "./add.component";
import { TestTypeService} from './../../../shared/services/testtype.service';
import { TestModeService } from './../../../shared/services/testmode.service';
import { ProcedureService} from './../../../shared/services/procedure.service';

import { EditorModule, DataTableModule, ButtonModule, InputTextareaModule,InputTextModule, PanelModule, DropdownModule } from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import addRoutes from "./add.routes";

@NgModule({
    imports: [EditorModule, CommonModule, FormsModule, DataTableModule, InputTextareaModule, InputTextModule, PanelModule, ButtonModule,DropdownModule, addRoutes],
    providers: [ProcedureService, TestTypeService, TestModeService ],
    declarations: [AddComponent]
})

export default class AddModule{}
