import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';
import { DetailsComponent } from "./details.component";
import { ProjectService} from './../../../shared/services/Containers/ProjectService/project.service';
import { MarketService } from '../../../shared/services/market.service'
import { ModelYearService } from '../../../shared/services/modelYear.service'
import { ModelNameService } from '../../../shared/services/modelName.service'
import { GradeService } from '../../../shared/services/grade.service'
import { ProjectRoleService } from '../../../shared/services/projectRole.service'
import { UserService } from '../../../shared/services/user.service'
import { PlatformService } from '../../../shared/services/platform.service'
import { EditorModule, SharedModule, DataTableModule, ButtonModule, InputTextareaModule, MultiSelectModule, MessagesModule, InputTextModule, PanelModule, DropdownModule, GrowlModule, CalendarModule } from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import detailsRoutes from "./details.routes";

@NgModule({
    imports: [EditorModule, SharedModule, CommonModule, FormsModule, DataTableModule, MultiSelectModule, InputTextareaModule, MessagesModule, InputTextModule, PanelModule,
        ButtonModule, DropdownModule, CalendarModule, detailsRoutes],
    providers: [ProjectService, MarketService, ModelYearService, PlatformService, ModelNameService, GradeService, ProjectRoleService, UserService],
    declarations: [DetailsComponent],
    exports: [DetailsComponent]
})

export class DetailsModule { }
