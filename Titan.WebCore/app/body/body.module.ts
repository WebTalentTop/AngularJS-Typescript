import { NgModule }      from '@angular/core';
import { HttpModule} from '@angular/http';
import { CommonModule } from '@angular/common';
import { BodyComponent }   from './body.component';
import ProjectModule from './Project/project.module';
import EquipmentModule from './Equipment/equipment.module';
import DepartmentModule from './Department/department.module';
import AdminModule from './Admin/admin.module';
import CalendarModule from './Calendar/titancalendar.module';
import LookupModule from './Lookup/lookup.module';
import { FormsModule} from '@angular/forms';


//Services
import { LoggerService } from '../shared/services/logger.service';
import { TitanUserProfileService } from '../shared/services/titanUserProfile.service';

import {EquipmentComponent} from './Equipment/equipment.component';
import {ProjectComponent} from './Project/project.component';
//import { enableProdMode} from '@angular/core';
//enableProdMode();
import appRoutes from './body.routes';

@NgModule({
    imports: [CommonModule, HttpModule, FormsModule, ProjectModule,DepartmentModule,AdminModule,CalendarModule,LookupModule, EquipmentModule, appRoutes],
    declarations: [BodyComponent],
    providers: [TitanUserProfileService, LoggerService],
    exports: [BodyComponent]//,
    //bootstrap: [AppComponent]
})
export default class BodyModule { }
