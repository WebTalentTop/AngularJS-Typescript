import { WorkRequestComponent } from "./workrequest.component";
import { RouterModule } from "@angular/router";
import {AuthGuard} from "../../shared/services/auth/authGuard";

const routes = [
    { path: '', component: WorkRequestComponent },
    { path: 'add', canActivate: [AuthGuard], loadChildren: 'app/body/WorkRequest/Add/add.module' },
    { path: 'details/:id/:entityId', canActivate: [AuthGuard], loadChildren: 'app/body/WorkRequest/Details/details.module' }
];

export default RouterModule.forChild(routes);