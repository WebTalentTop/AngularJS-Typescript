import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MilestoneCategoryComponent } from "./milestoneCategory.component";
import { DataTableModule, MessagesModule, GrowlModule } from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import { GridModule} from '../../../../shared/UIComponents/GridComponent/grid.module';

import { MilestoneCategoryService } from '../../../../shared/services/milestoneCategory.service';

import milestoneCategoryRoutes from "./milestoneCategory.routes";

@NgModule({
    imports: [CommonModule, DataTableModule, GridModule, milestoneCategoryRoutes, MessagesModule, GrowlModule],
    providers: [MilestoneCategoryService],
    declarations: [MilestoneCategoryComponent]
})

export default class MilestoneCategoryModule{}