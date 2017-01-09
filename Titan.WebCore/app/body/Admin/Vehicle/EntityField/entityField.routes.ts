import { EntityFieldComponent } from './entityField.component';
import { RouterModule } from "@angular/router";
import {AuthGuard} from "../../../../shared/services/auth/authGuard";

const routes = [
    { path: '/:page', component: EntityFieldComponent },
    { path: '', component: EntityFieldComponent },
    { path: 'add', canActivate: [AuthGuard], loadChildren: 'app/body/Admin/Vehicle/EntityField/Add/add.module' },
    { path: 'details/:id', canActivate: [AuthGuard], loadChildren: 'app/body/Admin/Vehicle/EntityField/Details/details.module'}
];

export default RouterModule.forChild(routes);