import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TestTemplateComponent } from "./testtemplate.component";

import { DataTableModule, TabViewModule, InputTextModule, InputTextareaModule, DropdownModule } from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import { GridModule } from '../../shared/UIComponents/GridComponent/grid.module';
import testTemplateRoutes from "./testtemplate.routes";

@NgModule({
    imports: [CommonModule, RouterModule, DataTableModule, InputTextModule, DropdownModule, InputTextareaModule, TabViewModule, GridModule, testTemplateRoutes],
    declarations: [TestTemplateComponent]
})

export default class TestTemplateModule{}