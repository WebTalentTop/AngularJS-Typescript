import { TorqueSheetComponent } from "./torque-sheet.component";
import { RouterModule } from "@angular/router";
import {AuthGuard} from "../../shared/services/auth/authGuard";

const routes = [
    { path: '', component: TorqueSheetComponent },
    { path: 'add/:torqueBookId/:landingFrom/:identifierId', canActivate: [AuthGuard], loadChildren: 'app/body/TorqueSheet/Add/add.module' },
    { path: 'details/:id/:torqueBookId/:landingFrom/:identifierId/:getCurrentVersionOrLatestVersion', canActivate: [AuthGuard], loadChildren: 'app/body/TorqueSheet/Details/details.module'}
];

export default RouterModule.forChild(routes);