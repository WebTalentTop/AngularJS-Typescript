import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProjectComponent } from "./project.component";
import { DataTableModule } from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import { GridModule} from '../../../../shared/UIComponents/GridComponent/grid.module';
import projectRoutes from "./project.routes";
import { ProjectService } from '../../../../shared/services/project.service';

@NgModule({
    imports: [CommonModule, DataTableModule, GridModule, projectRoutes],
    providers: [ProjectService],
    declarations: [ProjectComponent]
})

export default class ProjectModule{}