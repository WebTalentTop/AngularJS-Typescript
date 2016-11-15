import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BuildLevelsComponent } from "./buildlevels.component";
import { DataTableModule, TabViewModule, InputTextModule, InputTextareaModule, DropdownModule } from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import { BuildLevelService } from '../../../../shared/services/buildLevel.service';
import { GridModule} from '../../../../shared/UIComponents/GridComponent/grid.module';
import buildlevelsRoutes from "./buildlevels.routes";

@NgModule({
    imports: [CommonModule,RouterModule, DataTableModule, InputTextModule,DropdownModule, InputTextareaModule, TabViewModule,GridModule, buildlevelsRoutes],
    providers:[BuildLevelService],
    declarations: [BuildLevelsComponent]
})

export default class BuildLevelsModule{}