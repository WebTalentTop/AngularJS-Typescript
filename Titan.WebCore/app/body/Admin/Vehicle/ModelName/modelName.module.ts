import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ModelNameComponent } from "./modelName.component";
import { DataTableModule, MessagesModule, GrowlModule } from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import { GridModule} from '../../../../shared/UIComponents/GridComponent/grid.module';

import { ModelNameService } from '../../../../shared/services/modelName.service';

import modelNameRoutes from "./modelName.routes";

@NgModule({
    imports: [CommonModule, DataTableModule, GridModule, modelNameRoutes, MessagesModule, GrowlModule],
    providers: [ModelNameService],
    declarations: [ModelNameComponent]
})

export default class ModelNameModule{}