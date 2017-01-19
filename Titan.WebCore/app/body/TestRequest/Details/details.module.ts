import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DetailsComponent } from "./details.component";
import { FormsModule} from '@angular/forms';
import { TimeEntryService } from '../../../shared/services/timeEntry.service';
import { TestFacilityService } from '../../../shared/services/Containers/TestFacilityService/testfacility.service';
import { ProcedureService } from '../../../shared/services/Containers/ProcedureService/procedure.service'
//import { EquipmentTypeService } from '../../../shared/services/equipmentType.service';
import { EquipmentTypeService } from '../../../shared/services/Containers/EquipmentTypeService/equipmentType.service';
import { TestTemplateService } from '../../../shared/services/Containers/TestTemplateService/testTemplate.service';
import { TestVerificationMethodService } from '../../../shared/services/testverificationMethod.service';
import { TestStatusService } from '../../../shared/services/Containers/TestStatusService/testStatus.service';
import { TestRoleService } from '../../../shared/services/testRole.service';

import { ProjectService } from '../../../shared/services/Containers/ProjectService/project.service';


import { TestRequestService } from '../../../shared/services/Containers/TestRequestService/testRequest.service';


import { TestModeService } from '../../../shared/services/testMode.service';
import { TestTypeService } from '../../../shared/services/testType.service';
import { BuildLevelService } from '../../../shared/services/Containers/BuildLevelService/buildLevel.service';
import { DepartmentService } from '../../../shared/services/department.service';
import { TestRequestSensorService } from '../../../shared/services/testrequestsensor.service';
import { GridModule } from '../../../shared/UIComponents/GridComponent/grid.module';
import { ConfirmationService } from 'primeng/primeng';
import { DataTableModule, TabViewModule, ButtonModule, InputTextareaModule, InputTextModule, CalendarModule, CheckboxModule, EditorModule, DialogModule, MultiSelectModule, ConfirmDialogModule, DropdownModule, PanelModule, MessagesModule, GrowlModule } from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import detailRoutes from "./details.routes";

@NgModule({
    imports: [CommonModule, RouterModule, FormsModule, DataTableModule, TabViewModule, ButtonModule, InputTextareaModule, CheckboxModule, EditorModule, DialogModule, MultiSelectModule, ConfirmDialogModule, CalendarModule, GridModule, InputTextModule, PanelModule, DropdownModule, MessagesModule, GrowlModule, detailRoutes],

    providers: [TimeEntryService, EquipmentTypeService, ConfirmationService, ProcedureService, TestRequestSensorService, TestVerificationMethodService, BuildLevelService, ProjectService, TestRoleService, TestStatusService, TestModeService,
        TestTypeService, TestFacilityService, TestRequestService, TestTemplateService, DepartmentService],
    declarations: [DetailsComponent]
})

export default class DetailsModule { }