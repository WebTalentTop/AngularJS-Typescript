import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TestRequestComponent } from "./testrequest.component";

import { DataTableModule } from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import testRequestRoutes from "./testrequest.routes";

@NgModule({
    imports: [CommonModule, DataTableModule, testRequestRoutes],
    declarations: [TestRequestComponent]
})

export default class TestRequestModule{}