import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { GradeComponent } from "./grade.component";
import { DataTableModule, MessagesModule, GrowlModule } from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import { GridModule} from '../../../../shared/UIComponents/GridComponent/grid.module';

import { GradeService } from '../../../../shared/services/grade.service';

import gradeRoutes from "./grade.routes";

@NgModule({
    imports: [CommonModule, DataTableModule, GridModule, gradeRoutes, MessagesModule, GrowlModule],
    providers: [GradeService],
    declarations: [GradeComponent]
})

export default class GradeModule{}