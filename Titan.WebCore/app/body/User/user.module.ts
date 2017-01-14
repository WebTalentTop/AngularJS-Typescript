import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UserComponent } from "./user.component";

import { GridModule } from '../../shared/UIComponents/GridComponent/grid.module';
import { DataTableModule, TabViewModule, InputTextModule, InputTextareaModule, PanelModule, MessagesModule, ButtonModule, DropdownModule } from 'primeng/primeng';

import {EditorModule,SharedModule} from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import { TestFacilityService } from '../../shared/services/Containers/TestFacilityService/testFacility.service';
import { UserService } from '../../shared/services/user.service';
import userRoutes from "./user.routes";

@NgModule({


    imports: [EditorModule, SharedModule, CommonModule, RouterModule, DataTableModule, PanelModule, ButtonModule,  InputTextModule, DropdownModule, MessagesModule, InputTextareaModule, TabViewModule, userRoutes],
    providers:[ TestFacilityService,UserService],

    declarations: [UserComponent]
})

export default class UserModule{}