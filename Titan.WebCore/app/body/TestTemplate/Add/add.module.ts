import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';
import { AddComponent } from "./add.component";
import { TestTypeService} from './../../../shared/services/testtype.service';
import { TestModeService } from './../../../shared/services/testmode.service';
import { TestTemplateService} from './../../../shared/services/testtemplate.service';

import { PanelModule, DataTableModule, ButtonModule, InputTextareaModule,InputTextModule, PanelModule, DropdownModule } from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import addRoutes from "./add.routes";

@NgModule({
    imports: [PanelModule, CommonModule, FormsModule, DataTableModule, InputTextareaModule, InputTextModule, PanelModule, ButtonModule,DropdownModule, addRoutes],
    providers: [TestTemplateService, TestTypeService, TestModeService ],
    declarations: [AddComponent]
})

export default class AddModule{}
