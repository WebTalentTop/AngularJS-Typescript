import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UserComponent } from "./user.component";

import { DataTableModule, TabViewModule, InputTextModule, InputTextareaModule, PanelModule, MessagesModule, DropdownModule } from 'primeng/primeng';
import {EditorModule,SharedModule} from 'primeng/primeng';
import { RouterModule } from "@angular/router";
//import { TestFacilityService } from '../../shared/services/testfacility.service';
import { UserService } from '../../shared/services/user.service';
import userRoutes from "./user.routes";

@NgModule({
    imports: [EditorModule, SharedModule, CommonModule, RouterModule, DataTableModule, PanelModule,  InputTextModule, DropdownModule, MessagesModule, InputTextareaModule, TabViewModule, userRoutes],
    providers:[ UserService],
    declarations: [UserComponent]
})

export default class UserModule{}
