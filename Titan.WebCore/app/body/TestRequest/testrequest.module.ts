import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TestRequestComponent } from "./testrequest.component";
import { FormsModule} from '@angular/forms';
import { TestFacilityService } from '../../shared/services/testfacility.service';

import { DataTableModule, TabViewModule, ButtonModule, InputTextareaModule, InputTextModule, PanelModule, FileUploadModule, GrowlModule  } from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import testrequestRoutes from "./testrequest.routes";

@NgModule({
    imports: [CommonModule, RouterModule, FormsModule, DataTableModule, TabViewModule, ButtonModule, InputTextareaModule, InputTextModule, PanelModule, FileUploadModule, GrowlModule, testrequestRoutes],
    providers: [TestFacilityService],
    declarations: [TestRequestComponent]
})

export default class DetailsModule { }