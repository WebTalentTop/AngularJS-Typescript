import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProjectComponent } from "./project.component";
import { DataTableModule } from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import { GridModule} from '../../../../shared/UIComponents/GridComponent/grid.module';
import projectRoutes from "./project.routes";

@NgModule({
    imports: [CommonModule, DataTableModule, GridModule, projectRoutes],
    declarations: [ProjectComponent]
})

export default class ProjectModule{}