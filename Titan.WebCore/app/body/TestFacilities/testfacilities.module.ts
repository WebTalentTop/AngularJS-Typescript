import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TestFacilitiesComponent } from "./testfacilities.component";

import { DataTableModule } from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import testFacilitiesRoutes from "./testfacilities.routes";

@NgModule({
    imports: [CommonModule, DataTableModule, testFacilitiesRoutes],
    declarations: [TestFacilitiesComponent]
})

export default class TestFacilitiesModule{}