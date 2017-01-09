import { EngineCodeComponent } from './engineCode.component';
import { RouterModule } from "@angular/router";
import {AuthGuard} from "../../../../shared/services/auth/authGuard";

const routes = [
    { path: '/:page', component: EngineCodeComponent },
    { path: '', component: EngineCodeComponent },
    { path: 'add', canActivate: [AuthGuard], loadChildren: 'app/body/Admin/Vehicle/EngineCode/Add/add.module' },
    { path: 'details/:id', canActivate: [AuthGuard], loadChildren: 'app/body/Admin/Vehicle/EngineCode/Details/details.module'}
];

export default RouterModule.forChild(routes);