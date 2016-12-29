import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AdminComponent } from "./admin.component";
import { RouterModule } from "@angular/router";
import { BreadcrumbModule } from 'primeng/primeng';
import { BreadCrumbsService } from "../../shared/services/breadCrumbs/breadCrumbs.service";
import adminRoutes from "./admin.routes";

@NgModule({
    imports: [CommonModule, BreadcrumbModule, adminRoutes],
    providers: [BreadCrumbsService],
    declarations: [AdminComponent]
})

export default class AdminModule { }