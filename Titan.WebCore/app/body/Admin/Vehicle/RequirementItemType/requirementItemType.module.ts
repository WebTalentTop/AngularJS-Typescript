import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RequirementItemTypeComponent } from "./requirementItemType.component";
import { DataTableModule, MessagesModule, GrowlModule } from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import { GridModule} from '../../../../shared/UIComponents/GridComponent/grid.module';

import { RequirementItemTypeService } from '../../../../shared/services/requirementItemType.service';

import requirementItemTypeRoutes from "./requirementItemType.routes";

@NgModule({
    imports: [CommonModule, DataTableModule, GridModule, requirementItemTypeRoutes, MessagesModule, GrowlModule],
    providers: [RequirementItemTypeService],
    declarations: [RequirementItemTypeComponent]
})

export default class RequirementItemTypeModule{}