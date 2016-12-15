import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { EngineCodeComponent } from "./engineCode.component";
import { DataTableModule, MessagesModule, GrowlModule } from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import { GridModule} from '../../../../shared/UIComponents/GridComponent/grid.module';

import { EngineCodeService } from '../../../../shared/services/engineCode.service';

import engineCodeRoutes from "./engineCode.routes";

@NgModule({
    imports: [CommonModule, DataTableModule, GridModule, engineCodeRoutes, MessagesModule, GrowlModule],
    providers: [EngineCodeService],
    declarations: [EngineCodeComponent]
})

export default class EngineCodeModule{}