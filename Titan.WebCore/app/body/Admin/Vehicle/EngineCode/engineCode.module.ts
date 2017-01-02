import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { EngineCodeComponent } from "./engineCode.component";
import { DataTableModule, MessagesModule, GrowlModule,BreadcrumbModule } from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import { GridModule} from '../../../../shared/UIComponents/GridComponent/grid.module';
import { BreadCrumbsService } from '../../../../shared/services/breadCrumbs/breadCrumbs.service';
import { EngineCodeService } from '../../../../shared/services/engineCode.service';

import engineCodeRoutes from "./engineCode.routes";

@NgModule({
    imports: [CommonModule, DataTableModule, GridModule, engineCodeRoutes, MessagesModule, GrowlModule,BreadcrumbModule],
    providers: [EngineCodeService,BreadCrumbsService],
    declarations: [EngineCodeComponent]
})

export default class EngineCodeModule{}