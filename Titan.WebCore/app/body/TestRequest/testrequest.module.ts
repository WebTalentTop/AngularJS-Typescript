import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TestRequestComponent } from "./testrequest.component";

import { DataTableModule, TabViewModule, InputTextModule, InputTextareaModule, DropdownModule } from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import { TestFacilityService } from '../../shared/services/testfacility.service';
import { GridModule } from '../../shared/UIComponents/GridComponent/grid.module';
import testRequestRoutes from "./testrequest.routes";

@NgModule({
    imports: [CommonModule, RouterModule, DataTableModule, InputTextModule, DropdownModule, InputTextareaModule, TabViewModule, GridModule, testRequestRoutes],
    providers: [TestFacilityService],
    declarations: [TestRequestComponent]
})

export default class TestRequestModule { }