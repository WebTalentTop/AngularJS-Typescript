import { NgModule }      from '@angular/core';
import { HttpModule} from '@angular/http';
import { CommonModule } from '@angular/common';
import { BodyComponent }   from './body.component';
//import ProjectModule from './Project/project.module';
//import EquipmentModule from './Equipment/equipment.module';
//import DepartmentModule from './Department/department.module';
//import AdminModule from './Admin/admin.module';
//import CalendarModule from './Calendar/titancalendar.module';
//import LookupModule from './Lookup/lookup.module';
import { FormsModule} from '@angular/forms';
import { AuthService } from '../shared/services/auth/auth.service';

import { DropdownModule } from 'primeng/primeng';
//Services
import { TitanUserProfileService } from '../shared/services/titanUserProfile.service';
import { LoggerService } from '../shared/services/logger/logger.service';

//import {EquipmentComponent} from './Equipment/equipment.component';
//import {ProjectComponent} from './Project/project.component';
//import { enableProdMode} from '@angular/core';
//enableProdMode();
import appRoutes from './body.routes';
import {Route} from "@angular/router";
import {AuthGuard} from "../shared/services/auth/authGuard";
import {LoginComponent} from "./Auth/login.component";
import {TitanUserService} from "../shared/services/titanuser.service";

@NgModule({
    imports: [CommonModule, HttpModule, FormsModule, DropdownModule, appRoutes],//ProjectModule,DepartmentModule,AdminModule,CalendarModule,LookupModule, EquipmentModule, appRoutes],
    declarations: [BodyComponent, LoginComponent],
    providers: [AuthGuard, TitanUserService ,LoggerService],
    exports: [BodyComponent]//,
    //bootstrap: [AppComponent]
})
export default class BodyModule { }
