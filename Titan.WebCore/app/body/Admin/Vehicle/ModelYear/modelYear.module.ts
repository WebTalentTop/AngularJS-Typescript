import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ModelYearComponent } from "./modelYear.component";
import { ButtonModule, DataTableModule, MessagesModule, GrowlModule, BreadcrumbModule} from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import { GridModule} from '../../../../shared/UIComponents/GridComponent/grid.module';
import { BreadCrumbsService } from '../../../../shared/services/breadCrumbs/breadCrumbs.service';
import { ModelYearService } from '../../../../shared/services/modelYear.service';

import modelYearRoutes from "./modelYear.routes";

@NgModule({
    imports: [ButtonModule, CommonModule, DataTableModule, GridModule, modelYearRoutes, MessagesModule, GrowlModule,BreadcrumbModule],
    providers: [ModelYearService,BreadCrumbsService],
    declarations: [ModelYearComponent]
})

export default class ModelYearModule{}