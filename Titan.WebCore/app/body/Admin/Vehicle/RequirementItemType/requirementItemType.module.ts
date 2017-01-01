import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RequirementItemTypeComponent } from "./requirementItemType.component";
import { DataTableModule, MessagesModule, GrowlModule,BreadcrumbModule } from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import { GridModule} from '../../../../shared/UIComponents/GridComponent/grid.module';
import { BreadCrumbsService } from '../../../../shared/services/breadCrumbs/breadCrumbs.service';
import { RequirementItemTypeService } from '../../../../shared/services/requirementItemType.service';

import requirementItemTypeRoutes from "./requirementItemType.routes";

@NgModule({
    imports: [CommonModule, DataTableModule, GridModule, requirementItemTypeRoutes, BreadcrumbModule,MessagesModule, GrowlModule],
    providers: [RequirementItemTypeService,BreadCrumbsService],
    declarations: [RequirementItemTypeComponent]
})

export default class RequirementItemTypeModule{}