/**
 * Created by ZeroInfinity on 1/11/2017.
 */
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CheckboxModule, ToggleButtonModule, CalendarModule, ButtonModule, DialogModule, DataTableModule, SharedModule} from 'primeng/primeng';
import { ProjectService } from "../../../shared/services/Containers/ProjectService/project.service";
import { ProjectScheduleComponent } from "./projectSchedule.component";
import { BuildLevelService } from "../../../shared/services/Containers/BuildLevelService/buildLevel.service";
import { MilestoneService } from "../../../shared/services/Containers/MileStoneService/mileStone.service";
import { ProjectBuildLevelMileStoneMapService } from "../../../shared/services/Containers/ProjectService/projectBuildLevelMileStoneMap.service";
import { ProjectBuildLevelMapService } from "../../../shared/services/Containers/ProjectService/projectBuildLevelMap.service";
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [ProjectScheduleComponent],
    imports: [
        CommonModule,
        ToggleButtonModule,
        CalendarModule,
        ButtonModule,
        CheckboxModule,
        FormsModule, DialogModule, DataTableModule, SharedModule
    ],
    providers: [
        ProjectService,
        BuildLevelService,
        MilestoneService,
        ProjectBuildLevelMapService,
        ProjectBuildLevelMileStoneMapService],
    exports:[ProjectScheduleComponent, CommonModule]
})

export class ProjectScheduleModule {}
