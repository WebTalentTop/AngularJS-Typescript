import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TestStageComponent } from "./testStage.component";
import { DataTableModule, MessagesModule, GrowlModule ,BreadcrumbModule} from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import { GridModule} from '../../../../shared/UIComponents/GridComponent/grid.module';
import { BreadCrumbsService } from '../../../../shared/services/breadCrumbs/breadCrumbs.service';
import { TestStageService } from '../../../../shared/services/testStage.service';

import testStageRoutes from "./testStage.routes";

@NgModule({
    imports: [CommonModule, DataTableModule, GridModule, testStageRoutes, MessagesModule, BreadcrumbModule,GrowlModule],
    providers: [TestStageService,BreadCrumbsService],
    declarations: [TestStageComponent]
})

export default class TestStageModule{}