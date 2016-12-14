import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CalendarComponent } from "./calendar.component";
import { FormsModule } from '@angular/forms';
import { TestFacilityService } from '../../shared/services/testFacility.service';

import { BuildLevelService } from '../../shared/services/buildlevel.service';
import { TestStatusService } from '../../shared/services/teststatus.service';
import { TestRoleService } from '../../shared/services/testRole.service';
import { ProjectService } from '../../shared/services/project.service';
import { TestModeService } from '../../shared/services/testMode.service';
import { TestTypeService } from '../../shared/services/testType.service';
import { DataTableModule, AutoCompleteModule, TabViewModule, ButtonModule,  InputTextareaModule, InputTextModule, PanelModule, DropdownModule, FileUploadModule, GrowlModule } from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import { MultiSelectModule } from 'primeng/primeng';
import calendarRoutes from "./calendar.routes";


@NgModule({
    imports: [CommonModule, calendarRoutes, RouterModule, AutoCompleteModule,
        MultiSelectModule, FormsModule, DataTableModule, TabViewModule, ButtonModule,
        InputTextareaModule, DropdownModule, InputTextModule, PanelModule, FileUploadModule, GrowlModule],
    providers: [TestFacilityService, BuildLevelService, ProjectService, TestRoleService, TestStatusService, TestModeService,
        TestTypeService
    ],
    declarations: [CalendarComponent]
})

export default class CalendarModule { }