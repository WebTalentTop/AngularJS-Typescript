import { TestRequirementComponent } from './testRequirement.component';
import { RouterModule } from "@angular/router";
import {AuthGuard} from "../../../../shared/services/auth/authGuard";

const routes = [
    { path: '/:page', component: TestRequirementComponent },
    { path: '', component: TestRequirementComponent },
    { path: 'add', canActivate: [AuthGuard], loadChildren: 'app/body/Admin/Vehicle/TestRequirement/Add/add.module' },
    { path: 'details/:id', canActivate: [AuthGuard], loadChildren: 'app/body/Admin/Vehicle/TestRequirement/Details/details.module'}
];

export default RouterModule.forChild(routes);