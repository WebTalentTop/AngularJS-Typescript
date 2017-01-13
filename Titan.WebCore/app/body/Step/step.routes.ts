import { StepComponent } from "./step.component";
import { RouterModule } from "@angular/router";
import {AuthGuard} from "../../shared/services/auth/authGuard";

const routes = [
    { path: '', component: StepComponent },
    { path: 'add', canActivate: [AuthGuard], loadChildren: 'app/body/Step/Add/add.module' },
    { path: 'details/:id', canActivate: [AuthGuard], loadChildren: 'app/body/Step/Details/details.module'}
];

export default RouterModule.forChild(routes);