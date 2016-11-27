import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProjectStatusComponent } from "./projectStatus.component";
import { DataTableModule } from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import { GridModule} from '../../../../shared/UIComponents/GridComponent/grid.module';

import { ProjectStatusService } from '../../../../shared/services/projectStatus.service';

import projectStatusRoutes from "./projectStatus.routes";

@NgModule({
    imports: [CommonModule, DataTableModule, GridModule, projectStatusRoutes],
    providers: [ProjectStatusService],
    declarations: [ProjectStatusComponent]
})

export default class ProjectStatusModule{}