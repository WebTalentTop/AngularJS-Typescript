import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TenantComponent } from "./tenant.component";

import { GridModule } from '../../shared/UIComponents/GridComponent/grid.module';
import { DataTableModule, TabViewModule, InputTextModule, InputTextareaModule, PanelModule, MessagesModule, ButtonModule, DropdownModule } from 'primeng/primeng';

import {DialogModule, EditorModule,SharedModule} from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import { TestFacilityService } from '../../shared/services/Containers/TestFacilityService/testFacility.service';
import { UserService } from '../../shared/services/user.service';
import tenantRoutes from "./tenant.routes";

@NgModule({


    imports: [DialogModule, EditorModule, SharedModule, CommonModule, RouterModule, DataTableModule, PanelModule, ButtonModule,  InputTextModule, DropdownModule, MessagesModule, InputTextareaModule, TabViewModule, tenantRoutes],
    providers:[ TestFacilityService,UserService],

    declarations: [TenantComponent]
})

export default class TenantModule{}
