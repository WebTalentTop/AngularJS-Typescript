import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TestModeComponent } from "./testMode.component";
import { DataTableModule, MessagesModule, GrowlModule } from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import { GridModule} from '../../../../shared/UIComponents/GridComponent/grid.module';

import { TestModeService } from '../../../../shared/services/testMode.service';

import testModeRoutes from "./testMode.routes";

@NgModule({
    imports: [CommonModule, DataTableModule, GridModule, testModeRoutes, MessagesModule, GrowlModule],
    providers: [TestModeService],
    declarations: [TestModeComponent]
})

export default class TestModeModule{}