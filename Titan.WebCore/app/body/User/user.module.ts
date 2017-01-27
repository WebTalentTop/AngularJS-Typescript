import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UserComponent } from "./user.component";
import { UserProfileService } from '../../shared/services/userProfile.service';
import { GridModule } from '../../shared/UIComponents/GridComponent/grid.module';
import { BreadcrumbModule, DataTableModule, TabViewModule, InputTextModule, InputTextareaModule, PanelModule, MessagesModule, ButtonModule, DropdownModule } from 'primeng/primeng';
import { BreadCrumbsService } from '../../shared/services/breadCrumbs/breadCrumbs.service';
import {EditorModule,SharedModule} from 'primeng/primeng';
import { RouterModule } from "@angular/router";

import { TestFacilityService } from '../../shared/services/Containers/TestFacilityService/testFacility.service';
import { UserService } from '../../shared/services/user.service';
import userRoutes from "./user.routes";

@NgModule({


    imports: [BreadcrumbModule, EditorModule, SharedModule, CommonModule, RouterModule, DataTableModule, PanelModule, ButtonModule,  InputTextModule, DropdownModule, MessagesModule, InputTextareaModule, TabViewModule, userRoutes],
    providers:[ TestFacilityService,UserService,UserProfileService, BreadCrumbsService],
    declarations: [UserComponent]
})

export default class UserModule{}
