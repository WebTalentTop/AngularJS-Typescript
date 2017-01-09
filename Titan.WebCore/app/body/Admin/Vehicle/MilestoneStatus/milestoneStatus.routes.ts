import { MilestoneStatusComponent } from './milestoneStatus.component';
import { RouterModule } from "@angular/router";
import {AuthGuard} from "../../../../shared/services/auth/authGuard";

const routes = [
    { path: '/:page', component: MilestoneStatusComponent },
    { path: '', component: MilestoneStatusComponent },
    { path: 'add', canActivate: [AuthGuard], loadChildren: 'app/body/Admin/Vehicle/MilestoneStatus/Add/add.module' },
    { path: 'details/:id', canActivate: [AuthGuard], loadChildren: 'app/body/Admin/Vehicle/MilestoneStatus/Details/details.module'}
];

export default RouterModule.forChild(routes);
