import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { WorkRequestComponent } from "./workrequest.component";
import { FormsModule } from '@angular/forms';
import { TimeEntryService } from '../../shared/services/timeEntry.service';
import { TestFacilityService } from '../../shared/services/TestFacilityService/testfacility.service';
//import { EquipmentTypeService } from '../../../shared/services/equipmentType.service';
import { EquipmentTypeService } from '../../shared/services/equipmentType.service';
import { TestTemplateService } from '../../shared/services/testTemplate.service';
import { TestVerificationMethodService } from '../../shared/services/testverificationMethod.service';
import { TestStatusService } from '../../shared/services/teststatus.service';
import { TestRoleService } from '../../shared/services/testRole.service';
import { ProjectService } from '../../shared/services/project.service';
import { TestModeService } from '../../shared/services/testMode.service';
import { TestTypeService } from '../../shared/services/testType.service';
import { BuildLevelService } from '../../shared/services/buildlevel.service';
import { WorkRequestService } from '../../shared/services/workrequest.service';
import { DepartmentService } from '../../shared/services/department.service';
import { TestRequestSensorService } from '../../shared/services/testrequestsensor.service';
import { GridModule } from '../../shared/UIComponents/GridComponent/grid.module';
import { ConfirmationService } from 'primeng/primeng';
import { DataTableModule, TabViewModule, ButtonModule, InputTextareaModule, InputTextModule, CalendarModule, CheckboxModule, DialogModule, MultiSelectModule, ConfirmDialogModule, DropdownModule, FileUploadModule, PanelModule, MessagesModule, GrowlModule } from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import workRequestRoutes from "./workrequest.routes";

@NgModule({
    imports: [CommonModule, RouterModule, FormsModule, DataTableModule, TabViewModule, ButtonModule, InputTextareaModule, CheckboxModule, DialogModule, MultiSelectModule, ConfirmDialogModule, CalendarModule, GridModule, InputTextModule, PanelModule, FileUploadModule, DropdownModule, MessagesModule, GrowlModule, workRequestRoutes],

    providers: [TimeEntryService, EquipmentTypeService, ConfirmationService, TestRequestSensorService, TestVerificationMethodService, BuildLevelService, ProjectService, TestRoleService, TestStatusService, TestModeService,
        TestTypeService, TestFacilityService, TestTemplateService, DepartmentService, WorkRequestService],
    declarations: [WorkRequestComponent]
})

export default class WorkRequestModule { }