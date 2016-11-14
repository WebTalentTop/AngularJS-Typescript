import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TestFacilitiesComponent } from "./testfacilities.component";

import { DataTableModule, TabViewModule, InputTextModule, InputTextareaModule, DropdownModule } from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import { TestFacilityService } from '../../shared/services';
import { GridModule } from '../../shared/UIComponents/GridComponent/grid.module';
import testFacilitiesRoutes from "./testfacilities.routes";

@NgModule({
    imports: [CommonModule,RouterModule, DataTableModule, InputTextModule,DropdownModule, InputTextareaModule, TabViewModule,GridModule, testFacilitiesRoutes],
    providers:[TestFacilityService],
    declarations: [TestFacilitiesComponent]
})

export default class TestFacilitiesModule{}