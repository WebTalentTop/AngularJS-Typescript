import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProjectComponent } from "./project.component";
import { RouterModule } from "@angular/router";
import { DataTableModule } from 'primeng/primeng';
import { GridModule} from '../../shared/UIComponents/GridComponent/grid.module';
import projectRoutes from './project.routes';

@NgModule({
    imports: [CommonModule, DataTableModule, GridModule, projectRoutes],
    declarations: [ProjectComponent]
})

export default class ProjectModule { }

