import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MilestoneCategoryComponent } from "./milestoneCategory.component";
import { ButtonModule, DataTableModule, MessagesModule, GrowlModule,BreadcrumbModule } from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import { GridModule} from '../../../../shared/UIComponents/GridComponent/grid.module';
import { BreadCrumbsService } from '../../../../shared/services/breadCrumbs/breadCrumbs.service';
import { MilestoneCategoryService } from '../../../../shared/services/milestoneCategory.service';

import milestoneCategoryRoutes from "./milestoneCategory.routes";

@NgModule({
    imports: [ButtonModule, CommonModule, DataTableModule, GridModule, milestoneCategoryRoutes, MessagesModule, GrowlModule,BreadcrumbModule],
    providers: [MilestoneCategoryService,BreadCrumbsService],
    declarations: [MilestoneCategoryComponent]
})

export default class MilestoneCategoryModule{}