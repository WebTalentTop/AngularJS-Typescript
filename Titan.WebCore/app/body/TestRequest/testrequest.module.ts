import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TestRequestComponent } from "./testrequest.component";

import { EditorModule, SharedModule, DataTableModule, TabViewModule, InputTextModule, InputTextareaModule,MessagesModule,ButtonModule, DropdownModule } from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import { TestFacilityService } from '../../shared/services/Containers/TestFacilityService/testfacility.service';
import { TestRequestService } from '../../shared/services/Containers/TestRequestService/testRequest.service';
import { GridModule } from '../../shared/UIComponents/GridComponent/grid.module';
import testRequestRoutes from "./testrequest.routes";

@NgModule({
    imports: [EditorModule, SharedModule, CommonModule, RouterModule, DataTableModule, InputTextModule, DropdownModule,MessagesModule,ButtonModule, InputTextareaModule, TabViewModule, GridModule, testRequestRoutes],
    providers: [TestFacilityService],
    declarations: [TestRequestComponent]
})

export default class TestRequestModule { }
