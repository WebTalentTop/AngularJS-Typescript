import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';
import { SelectItem, Message, ConfirmationService } from 'primeng/primeng';
import { TeamInformationComponent } from './teaminformation.component';
import { ProjectRoleService } from '../../../shared/services/projectRole.service'
import { UserService } from '../../../shared/services/user.service'
import { TorquesheetService } from './../../../shared/services/torquesheet.service';
import { TestFacilityService } from '../../../shared/services/Containers/TestFacilityService/testFacility.service';
import { AutoCompleteModule, CheckboxModule, DataTableModule, ButtonModule, InputTextareaModule, InputTextModule, PanelModule, DropdownModule,
    TreeTableModule,TreeNode,SharedModule, DialogModule } from 'primeng/primeng';
import { RouterModule } from "@angular/router";


@NgModule({
    imports: [AutoCompleteModule, CheckboxModule, CommonModule, FormsModule, DataTableModule, InputTextareaModule, InputTextModule, PanelModule,
        ButtonModule, DropdownModule, TreeTableModule, SharedModule, DialogModule],
    providers: [TorquesheetService, ProjectRoleService, UserService, TestFacilityService],
    declarations: [TeamInformationComponent],
    exports:[TeamInformationComponent, CommonModule]
})

export class TeamInformationModule { }
