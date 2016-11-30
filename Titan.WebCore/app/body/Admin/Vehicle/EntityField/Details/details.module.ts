import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';
import { DetailsComponent } from "./details.component";
import { EntityFieldService} from '../../../../../shared/services/entityField.service';

import { DataTableModule, ButtonModule, InputTextareaModule,GrowlModule, InputTextModule, PanelModule, GrowlModule, DropdownModule, CalendarModule } from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import detailsRoutes from "./details.routes";

@NgModule({
<<<<<<< b0d3f37a7c375a06f98f5d2c218c9ba63ea2e094
    imports: [CommonModule, FormsModule, DataTableModule,GrowlModule ,InputTextareaModule, InputTextModule, PanelModule, 
        ButtonModule, DropdownModule, GrowlModule CalendarModule, detailsRoutes],
=======
    imports: [CommonModule, FormsModule, DataTableModule, InputTextareaModule, InputTextModule, PanelModule, 
        ButtonModule, DropdownModule, GrowlModule, CalendarModule, detailsRoutes],
>>>>>>> 264e62ea6df64c2b397d7e76dd58c7e510045f54
    providers: [EntityFieldService],
    declarations: [DetailsComponent],
    exports: [DetailsComponent]
})

export default class DetailsModule { }
