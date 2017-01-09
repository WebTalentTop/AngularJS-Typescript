import { ModelYearComponent } from './modelYear.component';
import { RouterModule } from "@angular/router";
import {AuthGuard} from "../../../../shared/services/auth/authGuard";

const routes = [
    { path: '/:page', component: ModelYearComponent },
    { path: '', component: ModelYearComponent },
    { path: 'add', canActivate: [AuthGuard], loadChildren: 'app/body/Admin/Vehicle/ModelYear/Add/add.module' },
    { path: 'details/:id', canActivate: [AuthGuard], loadChildren: 'app/body/Admin/Vehicle/ModelYear/Details/details.module'}
];

export default RouterModule.forChild(routes);