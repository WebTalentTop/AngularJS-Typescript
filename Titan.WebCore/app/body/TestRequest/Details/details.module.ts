import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DetailsComponent } from "./details.component";
import { FormsModule} from '@angular/forms';
import { TimeEntryService } from '../../../shared/services/timeEntry.service';
import { TestFacilityService } from '../../../shared/services/testfacility.service';
//import { EquipmentTypeService } from '../../../shared/services/equipmentType.service';
import { EquipmentTypeService } from '../../../shared/services/equipmentType.service';
import { TestTemplateService } from '../../../shared/services/testTemplate.service';
import { TestVerificationMethodService } from '../../../shared/services/testverificationMethod.service';
import { TestStatusService } from '../../../shared/services/teststatus.service';
import { TestRoleService } from '../../../shared/services/testRole.service';
import { ProjectService } from '../../../shared/services/project.service';
import { TestModeService } from '../../../shared/services/testMode.service';
import { TestTypeService } from '../../../shared/services/testType.service';
import { BuildLevelService } from '../../../shared/services/buildlevel.service';
import { TestRequestSensorService } from '../../../shared/services/testrequestsensor.service';
import { GridModule } from '../../../shared/UIComponents/GridComponent/grid.module';

import { DataTableModule, TabViewModule, ButtonModule, InputTextareaModule, InputTextModule, CalendarModule, DialogModule, ConfirmDialogModule, DropdownModule, PanelModule, MessagesModule, GrowlModule } from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import detailRoutes from "./details.routes";

@NgModule({
    imports: [CommonModule, RouterModule, FormsModule, DataTableModule, TabViewModule, ButtonModule, InputTextareaModule, DialogModule, ConfirmDialogModule, CalendarModule, GridModule, InputTextModule, PanelModule, DropdownModule, MessagesModule, GrowlModule, detailRoutes],

    providers: [TimeEntryService, EquipmentTypeService, TestRequestSensorService, TestVerificationMethodService, BuildLevelService, ProjectService, TestRoleService, TestStatusService, TestModeService,
        TestTypeService, TestFacilityService, TestTemplateService],
    declarations: [DetailsComponent]
})

export default class DetailsModule { }