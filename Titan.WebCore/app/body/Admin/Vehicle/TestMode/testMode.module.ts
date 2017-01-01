import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TestModeComponent } from "./testMode.component";
import { DataTableModule, MessagesModule, GrowlModule,BreadcrumbModule } from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import { GridModule} from '../../../../shared/UIComponents/GridComponent/grid.module';
import { BreadCrumbsService } from '../../../../shared/services/breadCrumbs/breadCrumbs.service';
import { TestModeService } from '../../../../shared/services/testMode.service';

import testModeRoutes from "./testMode.routes";

@NgModule({
    imports: [CommonModule, DataTableModule, GridModule, testModeRoutes,BreadcrumbModule, MessagesModule, GrowlModule],
    providers: [TestModeService,BreadCrumbsService],
    declarations: [TestModeComponent]
})

export default class TestModeModule{}