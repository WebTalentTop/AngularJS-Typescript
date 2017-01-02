import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';
import { AddComponent } from "./add.component";
import { TestFacilityService} from '../../../shared/services/testFacility.service';

import { DataTableModule, TabViewModule, ButtonModule, InputTextareaModule, InputTextModule, MessagesModule, GrowlModule, PanelModule, DropdownModule } from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import addRoutes from "./add.routes";

@NgModule({
    imports: [
        CommonModule,
        TabViewModule, 
        FormsModule, 
        DataTableModule, 
        InputTextareaModule, 
        InputTextModule, 
        PanelModule, 
        ButtonModule,
        DropdownModule, 
        MessagesModule, GrowlModule,
        addRoutes
        ],
    providers: [TestFacilityService],
    declarations: [AddComponent]
})

export default class AddModule{}