import { ModelNameComponent } from './modelName.component';
import { RouterModule } from "@angular/router";
import {AuthGuard} from "../../../../shared/services/auth/authGuard";

const routes = [
    { path: '/:page', component: ModelNameComponent },
    { path: '', component: ModelNameComponent },
    { path: 'add', canActivate: [AuthGuard], loadChildren: 'app/body/Admin/Vehicle/ModelName/Add/add.module' },
    { path: 'details/:id', canActivate: [AuthGuard], loadChildren: 'app/body/Admin/Vehicle/ModelName/Details/details.module'}
];

export default RouterModule.forChild(routes);