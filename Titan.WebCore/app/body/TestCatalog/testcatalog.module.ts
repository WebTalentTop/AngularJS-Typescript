import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TestCatalogComponent } from "./testcatalog.component";

import { DataTableModule } from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import testCatalogRoutes from "./testcatalog.routes";

@NgModule({
    imports: [CommonModule, DataTableModule, testCatalogRoutes],
    declarations: [TestCatalogComponent]
})

export default class TestCatalogModule{}