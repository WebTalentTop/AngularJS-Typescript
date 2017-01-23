import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';
import { DetailsComponent } from "./details.component";
import { PlatformService} from '../../../../../shared/services/platform.service';
import { BreadCrumbsService } from '../../../../../shared/services/breadCrumbs/breadCrumbs.service';
import { EditorModule, SharedModule, DataTableModule, ButtonModule, InputTextareaModule, InputTextModule,ToggleButtonModule, BreadcrumbModule,PanelModule, DropdownModule, CalendarModule, GrowlModule } from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import detailsRoutes from "./details.routes";

@NgModule({
    imports: [EditorModule, SharedModule, CommonModule, FormsModule, DataTableModule, InputTextareaModule,ToggleButtonModule,BreadcrumbModule ,InputTextModule, PanelModule,
        ButtonModule, DropdownModule, CalendarModule, GrowlModule, detailsRoutes],
    providers: [PlatformService,BreadCrumbsService],
    declarations: [DetailsComponent],
    exports: [DetailsComponent]
})

export default class DetailsModule { }
