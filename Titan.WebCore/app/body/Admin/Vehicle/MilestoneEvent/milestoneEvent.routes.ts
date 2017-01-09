import { MilestoneEventComponent } from './milestoneEvent.component';
import { RouterModule } from "@angular/router";
import {AuthGuard} from "../../../../shared/services/auth/authGuard";

const routes = [
    { path: '/:page', component: MilestoneEventComponent },
    { path: '', component: MilestoneEventComponent },
    { path: 'add', canActivate: [AuthGuard], loadChildren: 'app/body/Admin/Vehicle/MilestoneEvent/Add/add.module' },
    { path: 'details/:id', canActivate: [AuthGuard], loadChildren: 'app/body/Admin/Vehicle/MilestoneEvent/Details/details.module'}
];

export default RouterModule.forChild(routes);