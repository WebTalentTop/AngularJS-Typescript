import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LookupComponent } from "./lookup.component";
import { LookupService } from '../../shared/services/lookup.service';
import { DataTableModule, BreadcrumbModule, AccordionModule, ButtonModule } from 'primeng/primeng';
import { BreadCrumbsService } from "../../shared/services/breadCrumbs/breadCrumbs.service";
import { RouterModule } from "@angular/router";
import lookupRoutes from "./lookup.routes";

@NgModule({
    imports: [CommonModule, DataTableModule,BreadcrumbModule, AccordionModule, lookupRoutes, ButtonModule],
    providers: [LookupService,BreadCrumbsService],
    declarations: [LookupComponent]
})

export default class LookupModule{}