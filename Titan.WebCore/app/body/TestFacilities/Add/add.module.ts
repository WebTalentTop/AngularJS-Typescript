import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';
import { AddComponent } from "./add.component";
import { TestFacilityService} from '../../../shared/services/testFacility.service';
import { BreadCrumbsService } from '../../../shared/services/breadCrumbs/breadCrumbs.service';
import { DataTableModule,TabViewModule, ButtonModule, InputTextareaModule,InputTextModule, PanelModule, DropdownModule, BreadcrumbModule } from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import addRoutes from "./add.routes";

@NgModule({
    imports: [
        CommonModule,
        TabViewModule, 
        FormsModule, 
        DataTableModule, 
        InputTextareaModule, 
        InputTextModule, 
        PanelModule, 
        ButtonModule,
        DropdownModule, 
        addRoutes,
        BreadcrumbModule
        ],
    providers: [TestFacilityService, BreadCrumbsService],
    declarations: [AddComponent]
})

export default class AddModule{}