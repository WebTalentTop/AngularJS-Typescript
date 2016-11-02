import { NgModule }      from '@angular/core';
import { HttpModule} from '@angular/http';
import { CommonModule } from '@angular/common';
import { BodyComponent }   from './body.component';
import ProjectModule from './Project/project.module';
import EquipmentModule from './Equipment/equipment.module';
import DepartmentModule from './Department/department.module';
import AdminModule from './Admin/admin.module';
import CalendarModule from './Calendar/calendar.module';
import LookupModule from './Lookup/lookup.module';
import { FormsModule} from '@angular/forms';


//Services
import { LoggerService } from '../shared/services/logger.service';

import {EquipmentComponent} from './Equipment/equipment.component';
import {ProjectComponent} from './Project/project.component';
import { DataService } from '../shared/services/data.services';
import { PlatformService } from '../shared/services/platform.services';
//import { enableProdMode} from '@angular/core';
//enableProdMode();
import appRoutes from './body.routes';

@NgModule({
    imports: [CommonModule, HttpModule, FormsModule, ProjectModule,DepartmentModule,AdminModule,CalendarModule,LookupModule, EquipmentModule, appRoutes],
    declarations: [BodyComponent],
    providers: [DataService,LoggerService, PlatformService],
    exports: [BodyComponent]//,
    //bootstrap: [AppComponent]
})
export default class BodyModule { }
