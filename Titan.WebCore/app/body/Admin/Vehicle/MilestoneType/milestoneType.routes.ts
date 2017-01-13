import { MilestoneTypeComponent } from './milestoneType.component';
import { RouterModule } from "@angular/router";
import {AuthGuard} from "../../../../shared/services/auth/authGuard";

const routes = [
    { path: '/:page', component: MilestoneTypeComponent },
    { path: '', component: MilestoneTypeComponent },
    { path: 'add', canActivate: [AuthGuard], loadChildren: 'app/body/Admin/Vehicle/MilestoneType/Add/add.module' },
    { path: 'details/:id', canActivate: [AuthGuard], loadChildren: 'app/body/Admin/Vehicle/MilestoneType/Details/details.module'}
];

export default RouterModule.forChild(routes);