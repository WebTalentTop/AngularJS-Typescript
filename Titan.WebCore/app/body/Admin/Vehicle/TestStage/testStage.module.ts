import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TestStageComponent } from "./testStage.component";
import { DataTableModule, MessagesModule, GrowlModule } from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import { GridModule} from '../../../../shared/UIComponents/GridComponent/grid.module';

import { TestStageService } from '../../../../shared/services/testStage.service';

import testStageRoutes from "./testStage.routes";

@NgModule({
    imports: [CommonModule, DataTableModule, GridModule, testStageRoutes, MessagesModule, GrowlModule],
    providers: [TestStageService],
    declarations: [TestStageComponent]
})

export default class TestStageModule{}