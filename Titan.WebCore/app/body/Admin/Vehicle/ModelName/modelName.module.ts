import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ModelNameComponent } from "./modelName.component";
import { DataTableModule, MessagesModule, GrowlModule,BreadcrumbModule } from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import { GridModule} from '../../../../shared/UIComponents/GridComponent/grid.module';
import { BreadCrumbsService } from '../../../../shared/services/breadCrumbs/breadCrumbs.service';
import { ModelNameService } from '../../../../shared/services/modelName.service';

import modelNameRoutes from "./modelName.routes";

@NgModule({
    imports: [CommonModule, DataTableModule, GridModule, modelNameRoutes, MessagesModule, GrowlModule,BreadcrumbModule],
    providers: [ModelNameService,BreadCrumbsService],
    declarations: [ModelNameComponent]
})

export default class ModelNameModule{}