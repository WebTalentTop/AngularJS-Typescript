import { MilestoneCategoryComponent } from './milestoneCategory.component';
import { RouterModule } from "@angular/router";
import {AuthGuard} from "../../../../shared/services/auth/authGuard";

const routes = [
    { path: '/:page', component: MilestoneCategoryComponent },
    { path: '', component: MilestoneCategoryComponent },
    { path: 'add', canActivate: [AuthGuard], loadChildren: 'app/body/Admin/Vehicle/MilestoneCategory/Add/add.module' },
    { path: 'details/:id', canActivate: [AuthGuard], loadChildren: 'app/body/Admin/Vehicle/MilestoneCategory/Details/details.module'}
];

export default RouterModule.forChild(routes);