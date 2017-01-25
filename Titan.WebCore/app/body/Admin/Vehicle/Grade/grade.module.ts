import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { GradeComponent } from "./grade.component";
import { ButtonModule, DataTableModule, MessagesModule, GrowlModule,BreadcrumbModule } from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import { GridModule} from '../../../../shared/UIComponents/GridComponent/grid.module';
import { BreadCrumbsService } from '../../../../shared/services/breadCrumbs/breadCrumbs.service';
import { GradeService } from '../../../../shared/services/grade.service';

import gradeRoutes from "./grade.routes";

@NgModule({
    imports: [ButtonModule, CommonModule, DataTableModule, GridModule, gradeRoutes, MessagesModule, GrowlModule,BreadcrumbModule],
    providers: [GradeService,BreadCrumbsService],
    declarations: [GradeComponent]
})

export default class GradeModule{}