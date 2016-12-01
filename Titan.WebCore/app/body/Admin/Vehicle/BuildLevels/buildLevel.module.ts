import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BuildLevelComponent } from "./buildLevel.component";
import { DataTableModule,  MessagesModule } from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import { GridModule} from '../../../../shared/UIComponents/GridComponent/grid.module';

import { BuildLevelService } from '../../../../shared/services/buildLevel.service';

import buildLevelRoutes from "./buildLevel.routes";

@NgModule({
    imports: [CommonModule, DataTableModule, GridModule, buildLevelRoutes,  MessagesModule],
    providers: [BuildLevelService],
    declarations: [BuildLevelComponent]
})

export default class BuildLevelModule{}