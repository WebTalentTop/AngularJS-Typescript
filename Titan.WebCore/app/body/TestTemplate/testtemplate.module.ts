import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TestTemplateComponent } from "./testtemplate.component";
import { TestTemplateService } from '../../shared/services/Containers/TestTemplateService/testTemplate.service';
import { ButtonModule, DataTableModule, TabViewModule, AutoCompleteModule, InputTextModule, InputTextareaModule, DropdownModule } from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import { GridModule } from '../../shared/UIComponents/GridComponent/grid.module';
import testTemplateRoutes from "./testtemplate.routes";

@NgModule({
    imports: [ButtonModule, CommonModule, RouterModule, DataTableModule, InputTextModule, DropdownModule,
        InputTextareaModule, TabViewModule, GridModule, testTemplateRoutes, AutoCompleteModule],
    providers: [TestTemplateService],
    declarations: [TestTemplateComponent]
})

export default class TestTemplateModule{}
