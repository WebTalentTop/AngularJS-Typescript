import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DetailsComponent } from "./details.component";
import { FormsModule} from '@angular/forms';
import { PlatformService} from '../../../shared/services/platform.services';

import { DataTableModule, TabViewModule, ButtonModule, InputTextareaModule, InputTextModule, PanelModule  } from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import detailsRoutes from "./details.routes";

@NgModule({
    imports: [CommonModule, RouterModule, FormsModule, DataTableModule, TabViewModule, ButtonModule, InputTextareaModule, InputTextModule, PanelModule, detailsRoutes],
    providers:[PlatformService],
    declarations: [DetailsComponent]
})

export default class DetailsModule { }