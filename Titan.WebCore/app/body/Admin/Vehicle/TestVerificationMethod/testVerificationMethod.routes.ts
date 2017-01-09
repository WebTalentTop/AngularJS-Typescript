import { TestVerificationMethodComponent } from './testVerificationMethod.component';
import { RouterModule } from "@angular/router";
import {AuthGuard} from "../../../../shared/services/auth/authGuard";

const routes = [
    { path: '/:page', component: TestVerificationMethodComponent },
    { path: '', component: TestVerificationMethodComponent },
    { path: 'add', canActivate: [AuthGuard], loadChildren: 'app/body/Admin/Vehicle/TestVerificationMethod/Add/add.module' },
    { path: 'details/:id', canActivate: [AuthGuard], loadChildren: 'app/body/Admin/Vehicle/TestVerificationMethod/Details/details.module'}
];

export default RouterModule.forChild(routes);