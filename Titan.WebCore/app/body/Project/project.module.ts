import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProjectComponent } from "./project.component";
import { RouterModule } from "@angular/router";
import { DataTableModule } from 'primeng/primeng';

import { ProjectService } from '../../shared/services/project.services';
import { GridModule} from '../../shared/UIComponents/GridComponent/grid.module';
import projectRoutes from './project.routes';
//import ProjectDetailsMainModule from './DetailsMain/project-details-main.module'

@NgModule({
    imports: [CommonModule, DataTableModule, GridModule,//ProjectDetailsMainModule, 
        projectRoutes],
        providers:[ProjectService],
    declarations: [ProjectComponent]
})

export default class ProjectModule { }

