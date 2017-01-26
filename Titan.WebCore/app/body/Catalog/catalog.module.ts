import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CatalogComponent } from "./catalog.component";
import { LookupService } from '../../shared/services/lookup.service';
import { DataTableModule, BreadcrumbModule, AccordionModule, ButtonModule } from 'primeng/primeng';
import { BreadCrumbsService } from "../../shared/services/breadCrumbs/breadCrumbs.service";
import { RouterModule } from "@angular/router";
import catalogRoutes from "./catalog.routes";

@NgModule({
    imports: [CommonModule, DataTableModule, BreadcrumbModule, AccordionModule, catalogRoutes, ButtonModule],
    providers: [LookupService,BreadCrumbsService],
    declarations: [CatalogComponent]
})

export default class CatalogModule{}