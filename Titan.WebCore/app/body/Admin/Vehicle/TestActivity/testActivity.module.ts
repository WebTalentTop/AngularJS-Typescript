import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TestActivityComponent } from "./testActivity.component";
import { DataTableModule, MessagesModule, GrowlModule,BreadcrumbModule } from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import { GridModule} from '../../../../shared/UIComponents/GridComponent/grid.module';
import { BreadCrumbsService } from '../../../../shared/services/breadCrumbs/breadCrumbs.service';
import { TestActivityService } from '../../../../shared/services/testActivity.service';

import testActivityRoutes from "./testActivity.routes";

@NgModule({
    imports: [CommonModule, DataTableModule, GridModule, testActivityRoutes, BreadcrumbModule,MessagesModule, GrowlModule],
    providers: [TestActivityService,BreadCrumbsService],
    declarations: [TestActivityComponent]
})

export default class TestActivityModule{}