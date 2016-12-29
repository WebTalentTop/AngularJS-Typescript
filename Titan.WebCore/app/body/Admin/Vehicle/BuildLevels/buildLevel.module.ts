import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BuildLevelComponent } from "./buildLevel.component";
import { DataTableModule,  MessagesModule,BreadcrumbModule } from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import { GridModule} from '../../../../shared/UIComponents/GridComponent/grid.module';
import { BreadCrumbsService } from '../../../../shared/services/breadCrumbs/breadCrumbs.service';

import { BuildLevelService } from '../../../../shared/services/buildLevel.service';

import buildLevelRoutes from "./buildLevel.routes";

@NgModule({
    imports: [CommonModule, DataTableModule, GridModule, buildLevelRoutes,BreadcrumbModule,  MessagesModule],
    providers: [BuildLevelService,BreadCrumbsService],
    declarations: [BuildLevelComponent]
})

export default class BuildLevelModule{}