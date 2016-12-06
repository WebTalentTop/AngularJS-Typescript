import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { JudgementComponent } from "./judgement.component";
import { DataTableModule, MessagesModule, GrowlModule } from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import { GridModule} from '../../../../shared/UIComponents/GridComponent/grid.module';

import { JudgementService } from '../../../../shared/services/judgement.service';

import judgementRoutes from "./judgement.routes";

@NgModule({
    imports: [CommonModule, DataTableModule, GridModule, judgementRoutes, MessagesModule, GrowlModule],
    providers: [JudgementService],
    declarations: [JudgementComponent]
})

export default class JudgementModule{}