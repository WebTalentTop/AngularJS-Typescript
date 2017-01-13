import { StepFrequencyComponent } from './stepFrequency.component';
import { RouterModule } from "@angular/router";
import {AuthGuard} from "../../../../shared/services/auth/authGuard";

const routes = [
    { path: '/:page', component: StepFrequencyComponent },
    { path: '', component: StepFrequencyComponent },
    { path: 'add', canActivate: [AuthGuard], loadChildren: 'app/body/Admin/Vehicle/StepFrequency/Add/add.module' },
    { path: 'details/:id', canActivate: [AuthGuard], loadChildren: 'app/body/Admin/Vehicle/StepFrequency/Details/details.module'}
];

export default RouterModule.forChild(routes);