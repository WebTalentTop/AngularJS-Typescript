import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { JudgementComponent } from "./judgement.component";
import { ButtonModule, DataTableModule, MessagesModule, GrowlModule,BreadcrumbModule } from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import { GridModule} from '../../../../shared/UIComponents/GridComponent/grid.module';
import { BreadCrumbsService } from '../../../../shared/services/breadCrumbs/breadCrumbs.service';
import { JudgementService } from '../../../../shared/services/judgement.service';

import judgementRoutes from "./judgement.routes";

@NgModule({
    imports: [ButtonModule, CommonModule, DataTableModule, GridModule, judgementRoutes, MessagesModule,BreadcrumbModule, GrowlModule],
    providers: [JudgementService,BreadCrumbsService],
    declarations: [JudgementComponent]
})

export default class JudgementModule{}