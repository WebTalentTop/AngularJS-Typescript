import { RequirementItemTypeComponent } from './requirementItemType.component';
import { RouterModule } from "@angular/router";
import {AuthGuard} from "../../../../shared/services/auth/authGuard";

const routes = [
    { path: '/:page', component: RequirementItemTypeComponent },
    { path: '', component: RequirementItemTypeComponent },
    { path: 'add', canActivate: [AuthGuard], loadChildren: 'app/body/Admin/Vehicle/RequirementItemType/Add/add.module' },
    { path: 'details/:id', canActivate: [AuthGuard], loadChildren: 'app/body/Admin/Vehicle/RequirementItemType/Details/details.module'}
];

export default RouterModule.forChild(routes);