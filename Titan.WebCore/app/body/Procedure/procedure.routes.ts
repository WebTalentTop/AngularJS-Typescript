import { ProcedureComponent } from "./procedure.component";
import { RouterModule } from "@angular/router";
import {AuthGuard} from "../../shared/services/auth/authGuard";

const routes = [
    { path: '', component: ProcedureComponent },
    { path: 'details/:id', canActivate: [AuthGuard], loadChildren: 'app/body/Procedure/Details/details.module'},
    { path: 'add', canActivate: [AuthGuard], loadChildren: 'app/body/Procedure/Add/add.module'}
];

export default RouterModule.forChild(routes);
