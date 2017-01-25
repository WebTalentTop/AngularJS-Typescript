import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';
import { DetailsComponent } from "./details.component";
import { ProjectRoleService} from '../../../../../shared/services/projectRole.service';
import { BreadCrumbsService } from '../../../../../shared/services/breadCrumbs/breadCrumbs.service';
import { BreadcrumbModule, EditorModule, SharedModule,DataTableModule, ButtonModule, InputTextareaModule, ToggleButtonModule, InputTextModule, GrowlModule, PanelModule, DropdownModule, CalendarModule } from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import detailsRoutes from "./details.routes";

@NgModule({
    imports: [BreadcrumbModule, EditorModule, SharedModule, CommonModule, FormsModule, DataTableModule, InputTextareaModule,ToggleButtonModule,GrowlModule, InputTextModule, PanelModule, 
        ButtonModule, DropdownModule, CalendarModule, detailsRoutes],
    providers: [ProjectRoleService, BreadCrumbsService],
    declarations: [DetailsComponent],
    exports: [DetailsComponent]
})

export default class DetailsModule { }
