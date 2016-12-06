import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TestTypeComponent } from "./testType.component";
import { DataTableModule, MessagesModule, GrowlModule } from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import { GridModule} from '../../../../shared/UIComponents/GridComponent/grid.module';

import { TestTypeService } from '../../../../shared/services/testType.service';

import testTypeRoutes from "./testType.routes";

@NgModule({
    imports: [CommonModule, DataTableModule, GridModule, testTypeRoutes, MessagesModule, GrowlModule],
    providers: [TestTypeService],
    declarations: [TestTypeComponent]
})

export default class TestTypeModule{}