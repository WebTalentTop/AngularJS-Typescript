import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';
import { AddComponent } from "./add.component";
import { TorquesheetService } from '../../../shared/services/torquesheet.service';
import { ProjectService } from './../../../shared/services/Containers/ProjectService/project.service'
import { ButtonModule, InputTextareaModule,InputTextModule, PanelModule, DropdownModule
     } from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import addRoutes from "./add.routes";
import { EmailModule } from '../../../shared/UIComponents/EmailComponent/email.module';

@NgModule({
    imports: [
        CommonModule,
        //TabViewModule, 
        FormsModule, 
        //DataTableModule, 
        InputTextareaModule, 
        InputTextModule, 
        PanelModule, 
        ButtonModule,
        DropdownModule, 
        EmailModule,
        //RadioButtonModule,
        //MultiSelectModule,
        addRoutes
        ],
    providers: [TorquesheetService, ProjectService],
    declarations: [AddComponent],
    exports:[AddComponent]
})

export default class AddModule{}