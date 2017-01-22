import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';
import { DetailsComponent } from "./details.component";
import { ProjectStatusService} from '../../../../../shared/services/projectStatus.service';
import { BreadCrumbsService } from '../../../../../shared/services/breadCrumbs/breadCrumbs.service';
import { EditorModule, SharedModule ,DataTableModule, ButtonModule, InputTextareaModule,ToggleButtonModule, InputTextModule, PanelModule,BreadcrumbModule, DropdownModule, CalendarModule, MessagesModule, GrowlModule } from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import detailsRoutes from "./details.routes";

@NgModule({
    imports: [EditorModule, SharedModule ,CommonModule, FormsModule, DataTableModule, InputTextareaModule,ToggleButtonModule,GrowlModule,BreadcrumbModule ,InputTextModule, PanelModule,
        ButtonModule, DropdownModule, CalendarModule, GrowlModule, MessagesModule, detailsRoutes],
    providers: [ProjectStatusService,BreadCrumbsService],
    declarations: [DetailsComponent],
    exports: [DetailsComponent]
})

export default class DetailsModule { }
